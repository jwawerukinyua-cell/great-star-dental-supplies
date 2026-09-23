import { Category, Product } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'units',
    name: 'Dental Units & Chairs',
    tagline: 'Ergonomic operatories, LED surgical lights & whisper-quiet hydraulic systems',
    itemCount: 14,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    popularItems: ['Operatory Chairs', 'Pediatric Dental Units', 'Doctor & Assistant Stools']
  },
  {
    id: 'handpieces',
    name: 'Handpieces & Endodontics',
    tagline: 'High-speed fiber optic turbines, cordless endo motors & apex locators',
    itemCount: 28,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    popularItems: ['Optic Turbines', 'Reciprocating Motors', 'Apex Locators']
  },
  {
    id: 'orthodontics',
    name: 'Orthodontics',
    tagline: 'Self-ligating brackets, thermal NiTi archwires, buccal tubes & precision pliers',
    itemCount: 35,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    popularItems: ['Ceramic Brackets', 'NiTi Archwires', 'Tungsten Carbide Cutters']
  },
  {
    id: 'consumables',
    name: 'Consumables & Infection Control',
    tagline: 'Class B autoclaves, sterilization pouches, composite resins & clinical PPE',
    itemCount: 84,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    popularItems: ['Class-B Autoclaves', 'Universal Composites', 'Nitrile Gloves']
  },
  {
    id: 'imaging',
    name: 'Diagnostic & Imaging',
    tagline: 'High-resolution digital intraoral sensors, portable handheld X-ray units & HD cameras',
    itemCount: 19,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    popularItems: ['CMOS Digital Sensors', 'Portable X-Rays', 'Intraoral Cameras']
  },
  {
    id: 'surgical',
    name: 'Surgical & Periodontics',
    tagline: 'Surgical implant motors, piezosurgery units, bone curettes & titanium instruments',
    itemCount: 22,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    popularItems: ['Implant Motors', 'Piezo Scalers', 'Extraction Forceps Kit']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'gs-chair-9000',
    name: 'GreatStar GS-9000 Luxury Dental Operatory Unit',
    category: 'units',
    categoryLabel: 'Dental Units & Chairs',
    subCategory: 'Operatory Systems',
    brand: 'GreatStar Medical',
    sku: 'GS-UNT-9000',
    price: 650000,
    priceFormatted: 'KSh 650,000',
    isQuoteOnly: false,
    rating: 4.9,
    reviewsCount: 38,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'State-of-the-art operatory system with multi-sensor LED lamp, 9 memory presets, and ultra-quiet hydraulic lift.',
    fullDescription: 'The GreatStar GS-9000 is engineered for modern dental practices requiring uncompromising patient comfort, hygienic seamless Italian leather upholstery, and superior ergonomic reach. Equipped with an advanced delivery cart with 5 instrument holders, integrated warm water supply, and rotary ceramic spittoon.',
    features: [
      'Multi-axis shadowless LED dental surgical light with sensor toggle',
      'Ultra-silent 24V DC Taiwanese hydraulic motor system',
      '9 programmable clinician & patient positioning memories',
      'Integrated high & low vacuum suction with automatic canister flush',
      'Includes premium matching clinician stool with lumbar support'
    ],
    specs: {
      'Motor Type': 'Low-noise 24V DC synchronized',
      'Upholstery': 'Seamless medical-grade PU / optional Italian micro-leather',
      'Lighting Intensity': '8,000 - 32,000 Lux adjustable color temp (4,000K-5,000K)',
      'Water Supply': 'Dual pure water bottle system with automatic switchover',
      'Warranty': '3 Years Comprehensive Manufacturer Warranty'
    },
    inStock: true,
    badge: 'Best Seller',
    warranty: '3 Years Warranty & On-site Installation',
    leadTime: 'In Stock • Ready for Clinic Dispatch in Nairobi & Nationwide'
  },
  {
    id: 'gs-chair-compact',
    name: 'GreatStar GS-Compact Orthodontic & Clinic Unit',
    category: 'units',
    categoryLabel: 'Dental Units & Chairs',
    subCategory: 'Compact Operatory',
    brand: 'GreatStar Medical',
    sku: 'GS-UNT-5200',
    price: 480000,
    priceFormatted: 'KSh 480,000',
    isQuoteOnly: true,
    rating: 4.8,
    reviewsCount: 24,
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Space-efficient operatory unit designed for orthodontic clinics and compact multi-chair dental suites.',
    fullDescription: 'Specifically optimized for orthodontists and modern high-throughput hygiene operatories. Features an ultra-slim backrest allowing comfortable leg clearance, an intuitive touch control pad, and reinforced steel chassis.',
    features: [
      'Ultra-slim ergonomic cast-aluminum backrest for optimal legroom',
      'Assistant delivery console with 3-way syringe and strong suction',
      'Reinforced floor-mount base with anti-vibration damping',
      'Emergency anti-collision stop safety safety sensor'
    ],
    specs: {
      'Weight Capacity': '185 kg (408 lbs)',
      'Spittoon': '180° swiveling tempered frosted glass',
      'Tray Dimension': '420mm x 280mm instrument tray',
      'Certification': 'CE 0197, ISO 13485:2016'
    },
    inStock: true,
    badge: 'Clinic Favorite',
    warranty: '2 Years Manufacturer Warranty',
    leadTime: 'Dispatch in 24 Hours'
  },
  {
    id: 'gs-turbine-optic',
    name: 'OptiTorq Fiber-Optic LED High-Speed Turbine Handpiece',
    category: 'handpieces',
    categoryLabel: 'Handpieces & Endodontics',
    subCategory: 'High-Speed Turbines',
    brand: 'StarDent Precision',
    sku: 'HP-OPT-4H',
    price: 26500,
    priceFormatted: 'KSh 26,500',
    isQuoteOnly: false,
    rating: 5.0,
    reviewsCount: 72,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Micro-balanced titanium body high-speed turbine with 25,000 Lux fiber-optic LED and German ceramic ball bearings.',
    fullDescription: 'Engineered for smooth cutting efficiency and reduced hand fatigue during prolonged cavity preparations and crown adjustments. Features clean head zero-retraction technology preventing oral fluid suction back into clinic waterlines.',
    features: [
      'German ceramic ball bearings rated up to 400,000 RPM',
      'Quintuple (5-point) anti-clogging water spray for maximum bur cooling',
      'Standard 4-Hole Midwest connector with quick disconnect option',
      'Autoclavable at 135°C (275°F) for over 1,000 sterilization cycles'
    ],
    specs: {
      'Speed': '380,000 - 420,000 RPM',
      'Chucking Power': '32N push-button chuck',
      'Light Source': '25,000 Lux daylight fiber optic LED',
      'Air Pressure': '0.22 - 0.25 MPa'
    },
    inStock: true,
    badge: 'Best Seller',
    warranty: '1 Year Warranty on Cartridge & Body',
    leadTime: 'In Stock • Same-Day Dispatch'
  },
  {
    id: 'gs-endo-motor',
    name: 'EndoMaster Pro Cordless Endo Motor with Built-in Apex Locator',
    category: 'handpieces',
    categoryLabel: 'Handpieces & Endodontics',
    subCategory: 'Endodontic Motors',
    brand: 'StarDent Precision',
    sku: 'EM-CORD-800',
    price: 68000,
    priceFormatted: 'KSh 68,000',
    isQuoteOnly: false,
    rating: 4.9,
    reviewsCount: 45,
    image: 'https://images.unsplash.com/photo-1583912267670-6575ad472688?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Brushless cordless endodontic motor with real-time apical position display and 360° rotatable 6:1 contra-angle.',
    fullDescription: 'Combines the power of a micro-brushless precision motor with an integrated multi-frequency digital apex locator. Offers forward, reverse, continuous reciprocating, and adaptive auto-reverse modes to prevent file separation in curved root canals.',
    features: [
      'High-precision brushless motor with instant torque feedback',
      'Built-in apex locator with audible position alerts at the apical foramen',
      'Pre-programmed settings for leading file systems (WaveOne, ProTaper, etc.)',
      'Wireless inductive charging base with high-capacity 2000mAh battery'
    ],
    specs: {
      'Torque Range': '0.4 - 5.0 N.cm',
      'Speed Range': '100 - 1,200 RPM',
      'Angles': 'Adjustable forward and reverse reciprocating angles (20°-400°)',
      'Weight': 'Only 145g balanced ergonomic handpiece'
    },
    inStock: true,
    badge: 'New',
    warranty: '2 Years Manufacturer Warranty',
    leadTime: 'In Stock'
  },
  {
    id: 'gs-ortho-brackets',
    name: 'OrthoStar Self-Ligating Ceramic & Sapphire Bracket Kit',
    category: 'orthodontics',
    categoryLabel: 'Orthodontics',
    subCategory: 'Brackets & Systems',
    brand: 'OrthoElite Dental',
    sku: 'ORT-SL-22',
    price: 13500,
    priceFormatted: 'KSh 13,500 / Case',
    isQuoteOnly: false,
    rating: 4.9,
    reviewsCount: 56,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Ultra-aesthetic polycrystalline ceramic passive self-ligating brackets with rhodium-coated nickel-free clips.',
    fullDescription: 'Designed for orthodontic practices demanding superior aesthetics, low friction mechanics, and seamless door-opening mechanism. Specially treated mechanical lock base guarantees reliable adhesion and comfortable, clean debonding.',
    features: [
      'High-translucency monocrystalline ceramic resists coffee & wine staining',
      'Smooth rounded slot corners facilitate gentle tooth movement',
      'Easy-access opening slide for swift archwire exchanges',
      'Available in Roth & MBT prescriptions (0.022" and 0.018" slot sizes)'
    ],
    specs: {
      'Slot Size': '0.022" / 0.018" MBT & Roth',
      'Material': 'Medical Polycrystalline Ceramic + NiTi clip',
      'Base': 'Laser-etched anatomical 80-gauge mesh contoured base',
      'Packaging': '20 brackets per kit (Upper/Lower 5-5 with color ID)'
    },
    inStock: true,
    badge: 'Clinic Favorite',
    warranty: 'Quality Assured ISO 13485',
    leadTime: 'In Stock • Bulk Packs Available'
  },
  {
    id: 'gs-ortho-pliers',
    name: 'OrthoMaster German TC Distal End Cutter & Pliers Set',
    category: 'orthodontics',
    categoryLabel: 'Orthodontics',
    subCategory: 'Orthodontic Instruments',
    brand: 'OrthoElite Dental',
    sku: 'ORT-TC-PLR5',
    price: 22000,
    priceFormatted: 'KSh 22,000 / Set',
    isQuoteOnly: false,
    rating: 4.9,
    reviewsCount: 31,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Set of 5 essential orthodontic pliers with diamond-honed Tungsten Carbide inserts and safety wire hold.',
    fullDescription: 'Forged from premium German surgical stainless steel. The safety hold mechanism firmly secures cut distal wire ends to prevent patient mucosal trauma. Includes distal end cutter, Weingart utility plier, light wire bird beak, bracket remover, and band crimper.',
    features: [
      'Tungsten carbide inserts welded via high-vacuum furnace technology',
      'Safety hold spring holds severed archwires up to .021" x .025"',
      'Mirror satin finish eliminates operatory glare',
      'Autoclavable in dry heat and steam sterilization'
    ],
    specs: {
      'Material': 'German AISI 420 Stainless Steel + TC inserts',
      'Wire Capacity': 'Round .012"-.020", Rectangular up to .022" x .028"',
      'Hardness': 'HRC 60-64 at cutting edge',
      'Warranty': '5-Year Instrument Guarantee'
    },
    inStock: true,
    badge: 'ISO Certified',
    warranty: '5 Years Guarantee against breaking',
    leadTime: 'In Stock'
  },
  {
    id: 'gs-autoclave-23l',
    name: 'SteriClave Class-B 23L Medical Autoclave Sterilizer',
    category: 'consumables',
    categoryLabel: 'Consumables & Infection Control',
    subCategory: 'Sterilization Equipment',
    brand: 'MedSafe Dental',
    sku: 'MED-AUT-23B',
    price: 295000,
    priceFormatted: 'KSh 295,000',
    isQuoteOnly: true,
    rating: 5.0,
    reviewsCount: 42,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Fractionated 3-pulse vacuum Class B sterilizer with automated drying and USB cycle data logging.',
    fullDescription: 'The gold standard for clinic infection control. Fully conforms to EN13060 European Class B standards. Suitable for sterilizing hollow wrapped handpieces, porous dental textiles, surgical instruments, and implant kits with deep vacuum penetration.',
    features: [
      '3-time pulsating fractionated pre-vacuum removes air from complex handpieces',
      'Microprocessor controlled with precision temperature sensors (±0.1°C)',
      'Built-in internal thermal printer + USB data logging port for regulatory audit',
      'Dual water tank system separating distilled feed from wastewater'
    ],
    specs: {
      'Chamber Volume': '23 Liters (Solid 304 Stainless Steel)',
      'Chamber Dimensions': '245mm x 450mm',
      'Sterilization Temp': '121°C (250°F) & 134°C (273°F)',
      'Safety Systems': 'Double safety door lock, overpressure valve, auto shut-off'
    },
    inStock: true,
    badge: 'Best Seller',
    warranty: '2 Years Full Warranty + Replacement Spares',
    leadTime: 'Ready for Dispatch'
  },
  {
    id: 'gs-composite-kit',
    name: 'NanoStar Universal Nano-Hybrid Composite Master Kit',
    category: 'consumables',
    categoryLabel: 'Consumables & Infection Control',
    subCategory: 'Restorative Materials',
    brand: 'MedSafe Dental',
    sku: 'MED-CMP-MST',
    price: 15500,
    priceFormatted: 'KSh 15,500 / Kit',
    isQuoteOnly: false,
    rating: 4.8,
    reviewsCount: 68,
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    shortDescription: '8-shade nano-hybrid resin composite kit with primer, 7th gen adhesive, etching gel, and polishing wheels.',
    fullDescription: 'Provides chameleon optical properties that naturally blend with natural tooth structure. Non-sticky formula with exceptional handling properties, high flexural strength (160 MPa), and long-lasting surface polish.',
    features: [
      '8 Syringes (4g each): Shades A1, A2, A3, A3.5, B1, B2, OA2, Bleach White',
      'Includes 5ml 7th Gen Self-Etch Universal Bonding Resin',
      '3ml 37% Phosphoric Acid gel with pre-bent dispensing tips',
      'Exceptional wear resistance and radiopacity for reliable X-ray diagnosis'
    ],
    specs: {
      'Filler Content': '79% by weight (0.02 - 0.7 micron nano-particles)',
      'Flexural Strength': '160 MPa',
      'Curing Time': '10-20 seconds (LED light 1000mW/cm²)',
      'Shelf Life': '36 Months from manufacture date'
    },
    inStock: true,
    badge: 'Clinic Favorite',
    warranty: '100% Genuine Guaranteed',
    leadTime: 'In Stock • Fast Delivery'
  },
  {
    id: 'gs-xray-sensor',
    name: 'StarRay Pro Digital Intraoral CMOS X-Ray Sensor (Size 1 & 2)',
    category: 'imaging',
    categoryLabel: 'Diagnostic & Imaging',
    subCategory: 'Digital Radiography',
    brand: 'ApexVision Medical',
    sku: 'APX-SNS-02',
    price: 195000,
    priceFormatted: 'KSh 195,000',
    isQuoteOnly: false,
    rating: 4.9,
    reviewsCount: 29,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Direct USB plug-and-play CMOS dental sensor with 25 lp/mm theoretical resolution and IP68 waterproof housing.',
    fullDescription: 'Delivers diagnostic-quality intraoral radiographs instantly to your clinic software without chemical processing or phosphor plate delays. Rounded corners and ultra-slim 4.4mm profile provide patient comfort even for sensitive mandibular regions.',
    features: [
      'High-resolution CsI (Cesium Iodide) scintillator for low radiation dose',
      'Instant direct USB 2.0/3.0 connection with universal TWAIN driver',
      'Hermetically sealed IP68 waterproof body submersible in cold sterilization',
      'Reinforced Kevlar cable tested for over 100,000 extreme bends'
    ],
    specs: {
      'Sensor Technology': 'Advanced CMOS with Optical Fiber Plate',
      'Active Area': 'Size 1 (20x30mm) / Size 2 (26x36mm)',
      'Theoretical Resolution': '25 lp/mm (True resolution >16 lp/mm)',
      'Software Compatibility': 'Dentrix, Eaglesoft, Carestream, Dexis, MacPractice, etc.'
    },
    inStock: true,
    badge: 'Featured',
    warranty: '3 Years Full Replacement Warranty',
    leadTime: 'In Stock'
  },
  {
    id: 'gs-port-xray',
    name: 'PortaRay Smart Handheld Portable Dental X-Ray Unit',
    category: 'imaging',
    categoryLabel: 'Diagnostic & Imaging',
    subCategory: 'X-Ray Systems',
    brand: 'ApexVision Medical',
    sku: 'APX-XRY-PORT',
    price: 240000,
    priceFormatted: 'KSh 240,000',
    isQuoteOnly: true,
    rating: 4.9,
    reviewsCount: 19,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Ultra-lightweight 2.1kg cordless handheld X-ray with 0.4mm micro focal spot and internal lead radiation shield.',
    fullDescription: 'Allows dental practitioners to capture radiographs directly at the chairside without sending patients to a separate X-ray room. Double lead internal lining ensures zero operator radiation leakage.',
    features: [
      '0.4mm micro focal spot guarantees razor-sharp bone trabeculae clarity',
      'Pre-programmed anatomical adult & child tooth exposure tables',
      'High-frequency inverter (70kHz) minimizes soft skin radiation absorption',
      'Rechargeable Panasonic lithium-ion battery powers 350+ exposures per charge'
    ],
    specs: {
      'Tube Voltage / Current': '65kV / 2.6mA constant potential',
      'Focal Spot': '0.4mm (Toshiba/Canon Tube)',
      'Weight': '2.1 kg (4.6 lbs) ergonomic single-hand trigger',
      'Safety Compliance': 'FDA Listed, CE Certified, IEC 60601 compliant'
    },
    inStock: true,
    badge: 'ISO Certified',
    warranty: '2 Years Manufacturer Warranty',
    leadTime: 'Clinic Inspection Passed'
  },
  {
    id: 'gs-nitrile-gloves',
    name: 'GreatStar Clinical Medical Nitrile Gloves (Case of 10 Boxes)',
    category: 'consumables',
    categoryLabel: 'Consumables & Infection Control',
    subCategory: 'PPE & Infection Control',
    brand: 'MedSafe Dental',
    sku: 'MED-GLV-1000',
    price: 9500,
    priceFormatted: 'KSh 9,500 / Case',
    isQuoteOnly: false,
    rating: 5.0,
    reviewsCount: 94,
    image: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80',
    shortDescription: '1,000 powder-free textured fingertip examination gloves. Chemo-tested, latex-free, and tear resistant.',
    fullDescription: 'Hospital and dental clinic standard. Formulated for tactile sensitivity during delicate periodontal probing and root canal obturation while providing reliable barrier protection against biofluids and clinic disinfectants.',
    features: [
      '100% Medical-grade powder-free synthetic nitrile (zero latex allergens)',
      'Micro-textured fingertips for secure grip on wet dental instruments',
      'Beaded cuff ensures easy donning and resists tearing',
      'Available in XS, S, M, L sizes (Medical Blue / Crisp White / Lavender)'
    ],
    specs: {
      'Thickness': '3.5 mil palm / 4.2 mil fingertips',
      'AQL Level': 'AQL 1.5 Medical Grade',
      'Packaging': '100 gloves/box, 10 boxes/case (1,000 gloves total)',
      'Standards': 'ASTM D6319, EN 455 parts 1-4'
    },
    inStock: true,
    badge: 'Best Seller',
    warranty: 'Guaranteed Fresh Stock',
    leadTime: 'Immediate Dispatch'
  },
  {
    id: 'gs-implant-motor',
    name: 'SurgiMaster Pro Dental Implant Surgical Motor & 20:1 Handpiece',
    category: 'surgical',
    categoryLabel: 'Surgical & Periodontics',
    subCategory: 'Implantology Equipment',
    brand: 'StarDent Precision',
    sku: 'SRG-IMP-PRO',
    price: 340000,
    priceFormatted: 'KSh 340,000',
    isQuoteOnly: true,
    rating: 4.9,
    reviewsCount: 21,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'High-torque surgical motor system with 70 N.cm torque, peristaltic saline pump, and multi-functional foot pedal.',
    fullDescription: 'Designed for dental implant surgeons, maxillofacial specialists, and oral surgery clinics. Delivers precise speed and torque regulation from bone drilling to low-speed implant fixture insertion with automatic calibration.',
    features: [
      'Maximum 70 N.cm surgical torque with real-time torque graph monitoring',
      'High-performance Swiss brushless motor with fiber-optic illumination',
      'Includes LED 20:1 reduction surgical contra-angle handpiece',
      'Quiet peristaltic irrigation pump with 4 flow rate stages'
    ],
    specs: {
      'Torque Range': '5 - 70 N.cm (with 20:1 handpiece)',
      'Speed Range': '20 - 40,000 RPM (motor), 1 - 2,000 RPM (handpiece)',
      'Irrigation Flow': 'Up to 110 mL/min saline output',
      'Foot Control': 'Multifunctional IPX8 waterproof pedal'
    },
    inStock: true,
    badge: 'Featured',
    warranty: '2 Years Manufacturer Warranty',
    leadTime: 'Specialist Installation Available'
  }
];

export const TRUST_FACTORS = [
  {
    title: 'ISO 13485 & CE Certified',
    description: 'Every dental unit, turbine, and consumable meets rigorous global medical health regulations for clinic safety.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Nationwide Kenya Delivery',
    description: 'Same-day courier dispatch across Nairobi and fast parcel delivery to Mombasa, Kisumu, Nakuru, Eldoret & across Kenya.',
    icon: 'Truck'
  },
  {
    title: 'Biomedical Support & Warranty',
    description: 'Factory-trained technicians providing on-site chair installation, preventive maintenance, and authentic spare parts.',
    icon: 'Wrench'
  },
  {
    title: 'Wholesale Clinic Pricing (KSh)',
    description: 'Transparent Kenyan Shillings pricing with tiered volume discounts for private practices, hospitals, and teaching universities.',
    icon: 'BadgePercent'
  }
];

export const TESTIMONIALS = [
  {
    doctor: 'Dr. Michael Ochieng, BDS, MSc Ortho',
    clinic: 'Apex Smile Orthodontic Centre',
    location: 'Upper Hill, Nairobi',
    content: 'Great Star Dental Supply has been our primary supplier for ceramic brackets, NiTi archwires, and orthodontic pliers. Having their showroom right at Jengi House opposite Co-op Bank makes it effortless to pick up emergency supplies or consult on equipment.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80'
  },
  {
    doctor: 'Dr. Sarah Wanjiku, DDS',
    clinic: 'Grandview Specialist Dental Clinic',
    location: 'Westlands, Nairobi',
    content: 'We outfitted two operatory suites with the GS-9000 units. The patients love the soft leather comfort, and my team appreciates the quiet hydraulic performance. Great Star technicians did a flawless plumbing setup and electrical test.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1594824813591-628d0113f9f6?auto=format&fit=crop&w=200&q=80'
  },
  {
    doctor: 'Dr. Brian Kiprono, Periodontist & Implantologist',
    clinic: 'Rift Valley Dental & Implant Institute',
    location: 'Nakuru / Nairobi',
    content: 'The OptiTorq turbines and SteriClave 23L have run continuously without a hitch. Whenever we need consumables like bibs, composite kits or autoclaves, their WhatsApp desk (+254 723 059567) responds and dispatches in minutes.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&q=80'
  }
];

export const FAQ_LIST = [
  {
    q: 'How do I place a bulk order or request a formal clinic proforma quote in KSh?',
    a: 'You can add items directly to your Quote Request list on the website and submit the inquiry, or tap our floating WhatsApp button. Our sales team at Jengi House generates an itemized proforma invoice in Kenyan Shillings (KSh) with clinic discounts within 30 minutes.'
  },
  {
    q: 'Do you offer installation and biomedical maintenance for dental units in Kenya?',
    a: 'Yes! All GreatStar dental chairs include professional on-site installation, pipework alignment, and electrical commissioning by our certified biomedical dental technicians anywhere in Nairobi and across Kenya. We also provide warranty coverage and scheduled servicing.'
  },
  {
    q: 'Are your orthodontic brackets and dental instruments certified?',
    a: 'Absolutely. All our orthodontic systems, pliers, turbines, and autoclaves comply with ISO 13485 medical device quality standards and carry CE mark certification.'
  },
  {
    q: 'What are your delivery timelines across Nairobi and nationwide?',
    a: 'In-stock clinic consumables and handpieces ordered before 1:00 PM are dispatched same-day within Nairobi via rider/courier. Upcountry clinics (Mombasa, Kisumu, Eldoret, Nakuru, etc.) receive supplies within 24 hours.'
  },
  {
    q: 'Where is your physical showroom located for equipment inspection?',
    a: 'We are conveniently located at Jengi House, 5th Floor, Left Wing, directly opposite Co-operative Bank in Nairobi. Dentists and clinic procurement officers are always welcome to inspect dental chairs, test handpiece torque, and view our instruments firsthand.'
  }
];
