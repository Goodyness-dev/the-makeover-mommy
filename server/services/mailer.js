import { getSetting } from '../db.js';

/**
 * Generate high-converting, professional HTML email for customer quote
 */
const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function generateCustomerQuoteHtml(quote,details){
 const e=escapeHtml;
 return `<html><body style="margin:0;padding:32px;background:#f6f4f3;color:#342438;font:16px/1.6 Arial,sans-serif"><h1 style="font-weight:400">The Makeover Mommy</h1><p>Hello ${e(quote.name)},</p><p>Here are the details for your ${e(quote.detailedService||quote.serviceCategory)} consultation.</p><h2>Estimate: ${e(details.price||'To be discussed')}</h2><p>Duration: ${e(details.turnaround||'To be discussed')}</p><p>${e(details.warranty||'Aftercare will be discussed at your consultation.')}</p><p style="white-space:pre-wrap">${e(details.message)}</p><p>Please contact the studio to confirm your appointment.</p><p>${e(getSetting('shop_phone','(916) 542-8801'))}<br>${e(getSetting('shop_address','6693 Folsom-Auburn Road, Suite E, Folsom, CA 95630'))}</p></body></html>`;
}

export async function sendCustomerQuoteEmail(quote, quoteDetails) {
  const emailProvider = getSetting('email_provider', 'emailjs');
  const shopName = getSetting('shop_name', "The Makeover Mommy");
  const shopPhone = getSetting('shop_phone', "(916) 542-8801");
  const price = quoteDetails.price ? `$${quoteDetails.price.toString().replace(/^\$/, '')}` : 'Competitive pricing';

  // 1. If EmailJS is configured
  const emailJsServiceId = getSetting('emailjs_service_id', '');
  const emailJsTemplateId = getSetting('emailjs_template_id_quote', '');
  const emailJsPublicKey = getSetting('emailjs_public_key', '');

  if (emailJsServiceId && emailJsTemplateId && emailJsPublicKey) {
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: emailJsServiceId,
          template_id: emailJsTemplateId,
          user_id: emailJsPublicKey,
          template_params: {
            quote_id: quote.id,
            to_email: quote.email,
            customer_name: quote.name,
            vehicle_make: quote.make,
            vehicle_model: quote.modelAndYear,
            service_name: quote.detailedService || quote.serviceCategory,
            quote_price: price,
            turnaround_time: quoteDetails.turnaround || 'Discussed at consultation',
            warranty_text: quoteDetails.warranty || 'Aftercare discussed at consultation',
            mechanic_note: quoteDetails.message || '',
            shop_phone: shopPhone,
            shop_name: shopName,
            html_content: generateCustomerQuoteHtml(quote, quoteDetails)
          }
        })
      });

      if (response.ok) {
        return { success: true, method: 'emailjs', status: response.status };
      } else {
        const text = await response.text();
        console.warn('[Mailer] EmailJS returned error response:', text);
        return { success: false, method: 'emailjs', error: text };
      }
    } catch (err) {
      console.error('[Mailer] EmailJS dispatch error:', err);
      return { success: false, method: 'emailjs', error: err.message };
    }
  }

  return {success:false,skipped:true,error:'Email delivery is not configured.'};
}

/**
 * Dispatches alert email to Toby when new quote arrives
 */
export async function sendNewQuoteAdminNotification(quote) {
  const emailJsServiceId = getSetting('emailjs_service_id', '');
  const emailJsTemplateId = getSetting('emailjs_template_id_notify', '');
  const emailJsPublicKey = getSetting('emailjs_public_key', '');
  const adminEmail = getSetting('shop_email', 'themakeovermommyllc@gmail.com');

  if (emailJsServiceId && emailJsTemplateId && emailJsPublicKey) {
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: emailJsServiceId,
          template_id: emailJsTemplateId,
          user_id: emailJsPublicKey,
          template_params: {
            quote_id: quote.id,
            to_email: adminEmail,
            customer_name: quote.name,
            customer_email: quote.email,
            customer_phone: quote.phone,
            vehicle: `${quote.make} ${quote.modelAndYear}`,
            service: quote.detailedService || quote.serviceCategory,
            towing: quote.needsTowing ? 'Yes' : 'No',
            shuttle: quote.needsShuttle ? 'Yes' : 'No',
            details: quote.details || 'None provided',
            location: quote.location || 'Folsom'
          }
        })
      });
      return { success: response.ok };
    } catch (err) {
      console.error('[Mailer] Admin notification error:', err);
      return { success: false, error: err.message };
    }
  }

  return { skipped: true, reason: 'EmailJS admin template not configured' };
}

/**
 * Test email dispatch endpoint so Toby can verify his setup
 */
export async function testEmailConnection(toEmail, config = {}) {
  const serviceId = config.serviceId || getSetting('emailjs_service_id', '');
  const templateId = config.templateId || getSetting('emailjs_template_id_quote', '');
  const publicKey = config.publicKey || getSetting('emailjs_public_key', '');

  if (!serviceId || !templateId || !publicKey) {
    return {
      success: false,
      error: 'Please fill in your EmailJS Service ID, Template ID, and Public Key.'
    };
  }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          to_email: toEmail,
          customer_name: 'Test Customer (Verification)',
          quote_id: 'TEST-001',
          vehicle_make: 'Consultation',
          vehicle_model: '',
          service_name: 'Studio connection test',
          quote_price: '$250.00',
          turnaround_time: 'Same Day',
          mechanic_note: 'This is a test notification from your The Makeover Mommy admin settings panel to verify delivery.',
          shop_phone: '(916) 542-8801',
          shop_name: "The Makeover Mommy"
        }
      })
    });

    if (response.ok) {
      return { success: true, message: `Test quote email sent to ${toEmail}!` };
    } else {
      const err = await response.text();
      return { success: false, error: err };
    }
  } catch (err) {
    return { success: false, error: err.message };
  }
}

/**
 * Sends customer a direct message/reply sent from Toby's site inbox
 */
export async function sendCustomerInboxReplyEmail(quote, replyMessage, quotePrice = null) {
  const emailJsServiceId = getSetting('emailjs_service_id', '');
  const emailJsTemplateId = getSetting('emailjs_template_id_quote', '');
  const emailJsPublicKey = getSetting('emailjs_public_key', '');
  const shopPhone = getSetting('shop_phone', '(916) 542-8801');
  const shopName = getSetting('shop_name', "The Makeover Mommy");

  if (emailJsServiceId && emailJsTemplateId && emailJsPublicKey) {
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: emailJsServiceId,
          template_id: emailJsTemplateId,
          user_id: emailJsPublicKey,
          template_params: {
            quote_id: quote.id,
            to_email: quote.email,
            customer_name: quote.name,
            vehicle_make: quote.make,
            vehicle_model: quote.modelAndYear,
            service_name: quote.detailedService || quote.serviceCategory,
            quote_price: quotePrice ? `$${quotePrice}` : (quote.quotedPrice ? `$${quote.quotedPrice}` : 'Estimate in note'),
            turnaround_time: quote.estimatedTurnaround || 'Discussed at consultation',
            warranty_text: quote.warrantyNote || 'Aftercare discussed at consultation',
            mechanic_note: replyMessage,
            shop_phone: shopPhone,
            shop_name: shopName
          }
        })
      });
      return { success: response.ok, status: response.status };
    } catch (err) {
      console.error('[Mailer] Inbox reply dispatch error:', err);
      return { success: false, error: err.message };
    }
  }

  return {success:false,skipped:true,error:'Email delivery is not configured.'};
}
