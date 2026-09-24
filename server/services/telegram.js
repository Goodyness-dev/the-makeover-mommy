import { getSetting } from '../db.js';

/**
 * Send notification to Telegram bot/channel
 */
export async function sendTelegramAlert(quote) {
  const isEnabled = getSetting('telegram_enabled', false);
  const botToken = getSetting('telegram_bot_token', '');
  const chatId = getSetting('telegram_chat_id', '');

  if (!isEnabled || !botToken || !chatId) {
    return { skipped: true, reason: 'Telegram notifications not configured or disabled' };
  }

  const text = `NEW CONSULTATION — THE MAKEOVER MOMMY
Client: ${quote.name || quote.customer_name}
Phone: ${quote.phone || quote.customer_phone || 'Not provided'}
Email: ${quote.email || quote.customer_email}
Treatment: ${quote.detailedService || quote.detailed_service}
Preferred timing: ${quote.timeline || 'Flexible'}
Reference: ${quote.id}`;

  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'Markdown'
      })
    });

    const data = await response.json();
    return { success: data.ok, data };
  } catch (error) {
    console.error('[Telegram] Failed to send alert:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Test Telegram connection directly with custom token and chatId
 */
export async function testTelegramConnection(botToken, chatId) {
  if (!botToken || !chatId) {
    return { success: false, error: 'Bot token and Chat ID are both required.' };
  }

  const text = `
🛠 *THE MAKEOVER MOMMY — TEST ALERT*
━━━━━━━━━━━━━━━━━━━━
✅ Connection successful!
Your Telegram alert automation is configured and active.
You will receive instant alerts for every new quote request here.

Studio: 6693 Folsom-Auburn Road, Suite E, Folsom, CA
Phone: (520) 836-6921
━━━━━━━━━━━━━━━━━━━━
Sent at: ${new Date().toLocaleString()}
`.trim();

  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'Markdown'
      })
    });

    const data = await response.json();
    if (data.ok) {
      return { success: true, message: 'Test message delivered to Telegram successfully!' };
    } else {
      return { success: false, error: data.description || 'Telegram API returned an error' };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}
