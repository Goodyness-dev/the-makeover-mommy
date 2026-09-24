export const SERVICES = [
  // Eyebrows
  {
    id: 'hyper-realistic-microblading',
    title: 'Hyper-Realistic Microblading',
    category: 'Eyebrows',
    subType: 'Manual Hair-Strokes',
    duration: '2.5 Hours',
    retention: '12 – 24 Months',
    description: 'Crisp, feather-light manual strokes mimic your natural brow hairs to recreate density, arch definition, and youthful symmetry. Ideal for normal to dry skin types seeking effortless, undetectable enhancement.',
    recommendedFor: 'Normal to dry skin, sparse brows, asymmetry correction',
    icon: 'Feather',
    popular: true,
    image: '/images/microblading.jpg'
  },
  {
    id: 'ombre-powder-brows',
    title: 'Ombré Powder / Micro-Shading',
    category: 'Eyebrows',
    subType: 'Digital Rotary Shading',
    duration: '2.5 Hours',
    retention: '2 – 3 Years',
    description: 'A soft, pixelated gradient powder finish transitioning from translucent at the head of the brow to rich definition at the tail. Gentle on the skin, excellent retention, and the gold standard for combination or oily skin.',
    recommendedFor: 'All skin types, oily/combination skin, makeup-ready finish',
    icon: 'Sparkles',
    popular: true,
    image: '/images/powder-brows.jpg'
  },
  {
    id: 'blade-and-shade-combo',
    title: 'Blade & Shade Combo Brow',
    category: 'Eyebrows',
    subType: 'Hybrid Microblade + Shading',
    duration: '3.0 Hours',
    retention: '18 – 30 Months',
    description: 'The ultimate bespoke brow experience. Combines ultra-fine microbladed hair strokes in the front with soft digital powder shading through the arch and tail for multidimensional texture, fullness, and depth.',
    recommendedFor: 'Clients with sparse natural hair desiring both realism and body',
    icon: 'Layers',
    popular: true,
    image: '/images/microblading.jpg'
  },
  {
    id: 'man-brows',
    title: 'Man-Brows (Men\'s Hyper-Realism)',
    category: 'Eyebrows',
    subType: 'Masculine Hair Restoration',
    duration: '2.0 Hours',
    retention: '12 – 24 Months',
    description: 'Custom-calibrated masculine brow architecture. Intentionally preserves natural messy texture, realistic rogue hairs, and rugged density without sharp artificial cosmetic borders.',
    recommendedFor: 'Men seeking subtle brow densification and scar camouflage',
    icon: 'User',
    popular: false,
    image: '/images/natural-beauty.jpg'
  },

  // Lips
  {
    id: 'velvet-lip-blush',
    title: 'Velvet Lip Blushing',
    category: 'Lips',
    subType: 'Lip Contour & Tint',
    duration: '2.5 Hours',
    retention: '3 – 5 Years',
    description: 'Soft watercolor pigment wash restores youthful vermilion border definition, corrects asymmetry, and imparts an all-day flushed velvet tint. Custom blended to match your natural lip undertone.',
    recommendedFor: 'Pale lips, uneven borders, loss of lip fullness',
    icon: 'Heart',
    popular: true,
    image: '/images/lip-blush.jpg'
  },
  {
    id: 'full-lip-pigmentation',
    title: 'Full Lip Saturated Pigmentation',
    category: 'Lips',
    subType: 'Full Coverage Color',
    duration: '3.0 Hours',
    retention: '3 – 5 Years',
    description: 'Rich, high-density pigment infusion providing an elegant all-day lipstick effect with zero smudging, bleeding, or daily touch-ups. Wake up with perfectly contoured, vibrant lips every morning.',
    recommendedFor: 'Clients desiring bold lipstick permanence and complete coverage',
    icon: 'Palette',
    popular: false,
    image: '/images/lip-blush.jpg'
  },
  {
    id: 'subtle-lip-contour-liner',
    title: 'Subtle Lip Border Contour',
    category: 'Lips',
    subType: 'Border Definition',
    duration: '2.0 Hours',
    retention: '3 – 4 Years',
    description: 'Precision contouring that defines the natural lip perimeter, correcting pale or faded vermilion borders without an over-drawn artificial outline.',
    recommendedFor: 'Refining shape and preventing lipstick bleed',
    icon: 'PenTool',
    popular: false,
    image: '/images/lip-blush.jpg'
  },

  // Eyes
  {
    id: 'lash-line-enhancement',
    title: 'Lash Line Enhancement',
    category: 'Eyes',
    subType: 'Intra-Lash Pigmentation',
    duration: '2.0 Hours',
    retention: '3 – 5 Years',
    description: 'An undetectable micro-pigment ribbon dotted seamlessly between your natural eyelashes. Makes lashes appear instantly denser, thicker, and darker with wide-awake morning eyes.',
    recommendedFor: 'Anyone wanting darker lash bases without visible heavy liner',
    icon: 'Eye',
    popular: true,
    image: '/images/eyeliner.jpg'
  },
  {
    id: 'classic-winged-eyeliner',
    title: 'Classic & Winged Eyeliner',
    category: 'Eyes',
    subType: 'Top & Wing Definition',
    duration: '2.5 Hours',
    retention: '3 – 5 Years',
    description: 'Crisp, smudge-proof liquid eyeliner effect tailored to your unique eyelid shape. Choose from a classic top line or a sophisticated lifted wing that never fades during workouts, showers, or long days.',
    recommendedFor: 'Clients tired of daily eyeliner application and smudging',
    icon: 'Compass',
    popular: true,
    image: '/images/eyeliner.jpg'
  },

  // Paramedical Tattooing
  {
    id: '3d-areola-restoration',
    title: '3D Areola Restoration (FREE for Survivors)',
    category: 'Paramedical',
    subType: 'Post-Mastectomy Tattooing',
    duration: '2.5 Hours',
    retention: 'Long-term (Permanent)',
    description: 'Hyper-realistic 3D tattooing creating the photorealistic visual illusion of depth, texture, and natural Montgomery glands for breast cancer survivors post-mastectomy. Provided completely FREE of charge as our pledge to survivors.',
    recommendedFor: 'Breast cancer survivors healed 6+ months from reconstructive surgery',
    icon: 'Shield',
    popular: true,
    freeForSurvivors: true,
    image: '/images/paramedical-care.jpg'
  },
  {
    id: 'scar-and-stretchmark-camouflage',
    title: 'Medical Scar & Stretch Mark Camouflage',
    category: 'Paramedical',
    subType: 'Skin-Tone Pigment Matching',
    duration: '2.0 – 4.0 Hours',
    retention: '3 – 6 Years',
    description: 'Micro-pigment formulation precisely formulated to match your surrounding skin tones, softening surgical scars, breast augmentation incisions, C-section marks, and hypopigmented stretch marks.',
    recommendedFor: 'Surgical scars, tummy tuck scars, augmentation incisions',
    icon: 'Wand',
    popular: true,
    image: '/images/paramedical-care.jpg'
  },

  // Skin & Aesthetics
  {
    id: 'collagen-induction-microneedling',
    title: 'Collagen Induction Therapy (Microneedling)',
    category: 'Skin',
    subType: 'Skin Rejuvenation',
    duration: '1.5 Hours',
    retention: '3 – 6 Session Course',
    description: 'Medical-grade precision microneedling triggers cellular turnover, dramatically diminishing acne scars, hyperpigmentation, enlarged pores, and fine lines. Infused with sterile Hyaluronic Acid & Stem Cell serums.',
    recommendedFor: 'Textured skin, enlarged pores, acne scars, dull tone',
    icon: 'Activity',
    popular: true,
    image: '/images/microneedling.jpg'
  },
  {
    id: 'bridal-event-makeup',
    title: 'Bridal & Red-Carpet Event Makeup',
    category: 'Makeup',
    subType: 'Artistic Application',
    duration: '1.5 – 2.0 Hours',
    retention: 'Event Day',
    description: 'Luxury event beauty artistry including full trial session, bespoke complexion airbrush finish, and luxury false lashes. Flawless on 4K camera and luminous under all lighting.',
    recommendedFor: 'Weddings, photography sessions, gala events',
    icon: 'Camera',
    popular: false,
    image: '/images/consultation-room.jpg'
  }
];

export const SERVICE_CATEGORIES = [
  'All',
  'Eyebrows',
  'Lips',
  'Eyes',
  'Paramedical',
  'Skin',
  'Makeup'
];
