export const MOCK_CATEGORIES = [
  { id: 'all', name: 'All Categories' },
  { id: 'home', name: 'Home & Furniture' },
  { id: 'electronics', name: 'Electronics & Tech' },
  { id: 'tools', name: 'Tools, DIY & Garden' },
  { id: 'kids', name: 'Baby, Kids & Toys' },
  { id: 'appliances', name: 'Kitchen & Appliances' },
  { id: 'books', name: 'Books, Hobbies & Media' },
  { id: 'sports', name: 'Sports & Outdoors' }
];

export const INITIAL_MOCK_ITEMS = [
  // ==========================================
  // SECTION 1: HOME & FURNITURE (10 Items)
  // ==========================================
  {
    id: 101,
    title: 'Solid Wood Mid-Century Coffee Table',
    description: 'Sturdy oak coffee table with tapered legs. Minimal surface wear, freshly conditioned. Downsizing living room before moving.',
    category: 'home',
    listingType: 'SELL',
    price: 35.00,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Downtown Maplewood - Porch Pickup',
    images: [
      'https://images.unsplash.com/photo-1533090161767-e6ffed986b88?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 1, name: 'Elena Rostova', communityTag: 'Maplewood Neighborhood', rating: 4.9 },
    createdAt: '2026-10-27T10:00:00Z'
  },
  {
    id: 102,
    title: 'Scandinavian 3-Seater Fabric Sofa in Slate Grey',
    description: 'Extremely comfortable sofa with washable cushion covers. Clean, smoke-free and pet-free home. Free to someone with a truck who can pick up.',
    category: 'home',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'Highland Park - Ground Floor Garage',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 2, name: 'David & Maya', communityTag: 'Highland Park', rating: 5.0 },
    createdAt: '2026-10-28T08:15:00Z'
  },
  {
    id: 103,
    title: 'Set of 4 Solid Wooden Dining Chairs',
    description: 'Natural oak finish dining chairs with sturdy spindle backrests. Replaced with upholstered chairs. No wobbles.',
    category: 'home',
    listingType: 'SELL',
    price: 40.00,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'Oakridge Community Center',
    images: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 3, name: 'Claire Dupont', communityTag: 'Oakridge Suburb', rating: 4.8 },
    createdAt: '2026-10-26T16:20:00Z'
  },
  {
    id: 104,
    title: 'Minimalist Floating Wall Shelves (Set of 3)',
    description: 'Walnut wood finish floating shelves with hidden metal mounting brackets and hardware screws included. Never mounted.',
    category: 'home',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Greenwood Library Steps',
    images: [
      'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 4, name: 'Leo Martinez', communityTag: 'Greenwood Heights', rating: 4.7 },
    createdAt: '2026-10-27T19:00:00Z'
  },
  {
    id: 105,
    title: 'Floor Arc Standing Brass Reading Lamp',
    description: 'Weighted marble base, warm brass finish, adjustable linen shade. Comes with energy-saving warm LED bulb.',
    category: 'home',
    listingType: 'SELL',
    price: 25.00,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Westside Artisan Loft Lobby',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 5, name: 'Julian Vance', communityTag: 'Westside Artisan District', rating: 4.9 },
    createdAt: '2026-10-25T11:45:00Z'
  },
  {
    id: 106,
    title: 'Ceramic Planter Pots with Wooden Stands (3 Pots)',
    description: 'Matte white ceramic drainage pots with solid acacia wood stands. Sized 6", 8", and 10". Perfect for indoor houseplants.',
    category: 'home',
    listingType: 'SWAP',
    price: 0,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Sunnyvale Botanical Park',
    images: [
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 6, name: 'Sophia Taylor', communityTag: 'Sunnyvale Commons', rating: 5.0 },
    createdAt: '2026-10-28T09:30:00Z'
  },
  {
    id: 107,
    title: 'Solid Pine 2-Drawer Bedside Nightstand',
    description: 'Smooth sliding drawers with brushed nickel hardware. Solid pine wood, ready to use or restain to match your decor.',
    category: 'home',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'GOOD',
    status: 'RESERVED',
    pickupLocation: 'Bayside Apartments Lobby',
    images: [
      'https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 7, name: 'Rachel Adams', communityTag: 'Bayside District', rating: 4.8 },
    createdAt: '2026-10-26T14:10:00Z'
  },
  {
    id: 108,
    title: 'Geometric Woven Bohemian Area Rug (5x7 ft)',
    description: 'High-density low-pile woven rug. Cleaned and vacuumed. Great for bedroom or home study accent.',
    category: 'home',
    listingType: 'SELL',
    price: 20.00,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'South Harbor Town Square',
    images: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 8, name: 'Hannah Wright', communityTag: 'South Harbor', rating: 4.9 },
    createdAt: '2026-10-27T13:00:00Z'
  },
  {
    id: 109,
    title: 'Full-Length Beveled Wall & Floor Dressing Mirror',
    description: '64" x 21" mirror with brushed aluminum black frame. Can be leaned against wall or mounted. Pristine glass with zero flaws.',
    category: 'home',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Downtown Community Arts Center',
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 9, name: 'Tom Higgins', communityTag: 'City Center', rating: 4.6 },
    createdAt: '2026-10-28T12:00:00Z'
  },
  {
    id: 110,
    title: 'Foldable Bamboo Canvas Laundry Sorter Hamper',
    description: 'Eco-friendly bamboo frame with 2-section removable fabric canvas bags. Folds flat when not in use.',
    category: 'home',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'North Hall Community Porch',
    images: [
      'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 10, name: 'Lucas Scott', communityTag: 'Northside Meadows', rating: 5.0 },
    createdAt: '2026-10-28T14:30:00Z'
  },

  // ==========================================
  // SECTION 2: ELECTRONICS & TECH (10 Items)
  // ==========================================
  {
    id: 201,
    title: 'Dell 27" 4K IPS USB-C UltraSharp Monitor',
    description: 'Provides 65W power delivery over USB-C so you can charge your laptop with a single cable. Crisp 4K panel, adjustable height stand.',
    category: 'electronics',
    listingType: 'SELL',
    price: 85.00,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Greenwood Heights Tech Hub',
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 11, name: 'Sarah Chen', communityTag: 'Greenwood Heights', rating: 5.0 },
    createdAt: '2026-10-25T16:20:00Z'
  },
  {
    id: 202,
    title: 'Sony WH-1000XM4 Wireless Noise Cancelling Headphones',
    description: 'Industry-leading noise cancellation. 30-hour battery life. Includes original protective hard case and USB-C cable.',
    category: 'electronics',
    listingType: 'SELL',
    price: 75.00,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Downtown Coffee Bar Patio',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 12, name: 'Marcus Brody', communityTag: 'Downtown Core', rating: 4.9 },
    createdAt: '2026-10-27T11:00:00Z'
  },
  {
    id: 203,
    title: 'Keychron K2 Wireless Mechanical Keyboard (Gateron Brown)',
    description: '75% compact layout with Mac & Windows keycaps, Bluetooth 5.1 and Type-C cable. Tactile, quiet switches for typing.',
    category: 'electronics',
    listingType: 'SWAP',
    price: 0,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'University Science Quad Plaza',
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 13, name: 'Kevin Zhang', communityTag: 'University Heights', rating: 4.9 },
    createdAt: '2026-10-28T08:00:00Z'
  },
  {
    id: 204,
    title: 'Logitech MX Master 3S Ergonomic Wireless Mouse',
    description: 'Quiet clicks, 8K DPI sensor on glass, MagSpeed electromagnetic scroll wheel. Recharging via USB-C.',
    category: 'electronics',
    listingType: 'SELL',
    price: 30.00,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'West End Community Library',
    images: [
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 14, name: 'Priya Nair', communityTag: 'West End', rating: 5.0 },
    createdAt: '2026-10-26T09:30:00Z'
  },
  {
    id: 205,
    title: 'Blue Yeti USB Condenser Microphone for Podcasting/Calls',
    description: 'Four pickup patterns, zero-latency headphone monitoring. Includes desktop stand and braided USB cord. Free to an aspiring student creator.',
    category: 'electronics',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'Media Arts Center Front Desk',
    images: [
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 15, name: 'Jason Miller', communityTag: 'Arts District', rating: 4.8 },
    createdAt: '2026-10-27T15:20:00Z'
  },
  {
    id: 206,
    title: 'Anker 65W GaN Fast Charger & Braided USB-C Cable',
    description: 'Ultra-compact high-speed charger capable of charging MacBook Pro, iPad, and iPhone simultaneously. Mint condition.',
    category: 'electronics',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Main Street Cafe',
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 16, name: 'Tyler Ross', communityTag: 'Midtown Common', rating: 4.9 },
    createdAt: '2026-10-28T10:15:00Z'
  },
  {
    id: 207,
    title: '1080p Full HD Streaming Webcam with Privacy Shutter',
    description: 'Dual noise-reducing microphones, automatic light correction. Clips easily on top of any monitor or laptop.',
    category: 'electronics',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Tech Park Reception Lobby',
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 17, name: 'Amber Lewis', communityTag: 'Innovation District', rating: 4.7 },
    createdAt: '2026-10-27T18:40:00Z'
  },
  {
    id: 208,
    title: 'Apple iPad 9th Gen (64GB, Wi-Fi, Space Gray)',
    description: 'Retina display, battery health 94%. Comes with magnetic folio cover and stylus pen. Clean reset and ready for school or reading.',
    category: 'electronics',
    listingType: 'SELL',
    price: 110.00,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'City Hall Square Bench',
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 18, name: 'Daniel Cho', communityTag: 'Civic Center', rating: 5.0 },
    createdAt: '2026-10-26T12:00:00Z'
  },
  {
    id: 209,
    title: 'Bose SoundLink Flex Waterproof Bluetooth Speaker',
    description: 'Crisp outdoor sound, silicone exterior, floatable in water. Perfect for beach trips, bike rides, or backyard barbecue.',
    category: 'electronics',
    listingType: 'SELL',
    price: 45.00,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Riverwalk Marina Park',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 19, name: 'Samantha Reed', communityTag: 'Riverfront', rating: 4.9 },
    createdAt: '2026-10-28T13:10:00Z'
  },
  {
    id: 210,
    title: 'Aluminum Ergonomic Laptop Riser Stand',
    description: 'Solid sandblasted aluminum stand that raises screen to eye level. Heat dissipation hollow design. Fits 11" to 17" laptops.',
    category: 'electronics',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Public Library Front Courtyard',
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 20, name: 'Oscar Meyer', communityTag: 'East Valley', rating: 4.8 },
    createdAt: '2026-10-28T15:00:00Z'
  },

  // ==========================================
  // SECTION 3: TOOLS, DIY & GARDEN (10 Items)
  // ==========================================
  {
    id: 301,
    title: 'DeWalt 20V Max Cordless Drill & Impact Driver Kit',
    description: 'Includes 2 lithium-ion batteries, dual voltage charger, carrying contractor bag. Heavy-duty reliability for home projects.',
    category: 'tools',
    listingType: 'SWAP',
    price: 0,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'Westside Makers Workshop',
    images: [
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 21, name: 'Carlos Mendez', communityTag: 'Westside Artisan District', rating: 4.8 },
    createdAt: '2026-10-26T14:30:00Z'
  },
  {
    id: 302,
    title: 'Heavy Duty 168-Piece Household Tool Box & Socket Set',
    description: 'Complete with hammer, tape measure, pliers, ratchets, metric sockets, screwdrivers, and magnetic bit holder in a blow-molded case.',
    category: 'tools',
    listingType: 'SELL',
    price: 25.00,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Northside Community Garage',
    images: [
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 22, name: 'Greg Stevens', communityTag: 'Northside Meadows', rating: 5.0 },
    createdAt: '2026-10-27T08:00:00Z'
  },
  {
    id: 303,
    title: 'Aluminum Telescoping Extension Ladder (12.5 Feet)',
    description: 'One-button retraction mechanism, EN131 safety certified, rated for 330 lbs. Collapses to just 3 feet for easy car trunk storage.',
    category: 'tools',
    listingType: 'SELL',
    price: 45.00,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Suburban Builders Supply Parking',
    images: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 23, name: 'Robert Shaw', communityTag: 'Maplewood Suburb', rating: 4.9 },
    createdAt: '2026-10-25T17:15:00Z'
  },
  {
    id: 304,
    title: 'Fiskars Steel Bypass Pruning Shears & Trowel Set',
    description: 'Precision-ground steel blades for trimming bushes and garden beds. Sharp and smooth. Gifting away before our winter move.',
    category: 'tools',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'Community Allotment Garden Shed',
    images: [
      'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 24, name: 'Margaret Wood', communityTag: 'Old Town Green', rating: 5.0 },
    createdAt: '2026-10-28T07:45:00Z'
  },
  {
    id: 305,
    title: '50-Foot Expandable Garden Hose with 10-Pattern Brass Nozzle',
    description: 'Triple-layer latex core, kink-free polyester outer fabric. Expands up to 50ft when water pressure is on, drains automatically.',
    category: 'tools',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Parkside Porch Pickup',
    images: [
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 25, name: 'Victor Vance', communityTag: 'Parkside', rating: 4.7 },
    createdAt: '2026-10-26T19:20:00Z'
  },
  {
    id: 306,
    title: 'Bosch Laser Distance Measure (65 Ft Range)',
    description: 'Extreme precision laser measuring tool with backlit LCD screen. Great for measuring rooms, real estate, and furniture layout planning.',
    category: 'tools',
    listingType: 'SELL',
    price: 18.00,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Hardware Row Coffee Shop',
    images: [
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 26, name: 'Frank Castillo', communityTag: 'Midtown', rating: 4.8 },
    createdAt: '2026-10-27T14:10:00Z'
  },
  {
    id: 307,
    title: 'Keter Heavy Duty Portable Folding Work Table & Clamps',
    description: 'Sets up in 30 seconds. Aluminum legs support up to 1,000 lbs. Includes two 12-inch one-handed bar clamps that slide into tracks.',
    category: 'tools',
    listingType: 'SELL',
    price: 35.00,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'South Valley Workshop Bay 4',
    images: [
      'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 27, name: 'Nathan Drake', communityTag: 'South Valley', rating: 4.9 },
    createdAt: '2026-10-28T11:30:00Z'
  },
  {
    id: 308,
    title: 'Black+Decker 7-Amp Corded Electric Leaf Blower',
    description: 'Lightweight 180 MPH air speed blower with built-in cord retention. Clear driveways, decks, and sidewalks in minutes.',
    category: 'tools',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'Westside Community Yard',
    images: [
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 28, name: 'Bill Foster', communityTag: 'Westside Commons', rating: 4.6 },
    createdAt: '2026-10-27T16:00:00Z'
  },
  {
    id: 309,
    title: 'WEN 10-Inch Two-Direction Water Cooled Wet Sharpening Stone',
    description: 'Ideal for bringing back razor sharpness to kitchen knives, woodworking chisels, and axes without burning the temper.',
    category: 'tools',
    listingType: 'SWAP',
    price: 0,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'Downtown Makerspace Lobby',
    images: [
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 29, name: 'Aaron Paul', communityTag: 'Industrial District', rating: 5.0 },
    createdAt: '2026-10-25T14:00:00Z'
  },
  {
    id: 310,
    title: 'Stanley 6-Piece Precision Wood Chisel Set with Wooden Box',
    description: 'Tempered chrome-carbon steel blades. Sized 1/4" to 1-1/4". Honed and oiled. Passing down to a carpenter or wood enthusiast.',
    category: 'tools',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Oak Street Porch',
    images: [
      'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 30, name: 'Harold Finch', communityTag: 'Oak Street', rating: 4.9 },
    createdAt: '2026-10-28T16:15:00Z'
  },

  // ==========================================
  // SECTION 4: BABY, KIDS & TOYS (10 Items)
  // ==========================================
  {
    id: 401,
    title: 'Graco Lightweight Foldable Baby Stroller',
    description: 'Our toddler has outgrown this stroller. Freshly cleaned, stain-free fabric, smooth wheels, multi-position reclining seat. Free to any family!',
    category: 'kids',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'Oakridge Community Park Plaza',
    images: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 31, name: 'Marcus & Priya', communityTag: 'Oakridge Suburb', rating: 5.0 },
    createdAt: '2026-10-28T09:15:00Z'
  },
  {
    id: 402,
    title: 'Natural Birch Wood Convertible Baby Crib & Mattress',
    description: 'Converts from baby crib to toddler bed. Made with non-toxic finishes. Certified organic breathable mattress included.',
    category: 'kids',
    listingType: 'SELL',
    price: 50.00,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Greenwood Heights Family Center',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 32, name: 'Jessica Vance', communityTag: 'Greenwood Heights', rating: 4.9 },
    createdAt: '2026-10-26T11:20:00Z'
  },
  {
    id: 403,
    title: 'Classic 1,000-Piece LEGO Creative Brick Box',
    description: 'Huge assortment of building bricks, windows, wheels, and baseplates. Sanitized in mesh bags. Hours of creative fun for kids.',
    category: 'kids',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'Elementary School Playground Gate',
    images: [
      'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 33, name: 'Danielle Brooks', communityTag: 'School District 4', rating: 5.0 },
    createdAt: '2026-10-27T10:45:00Z'
  },
  {
    id: 404,
    title: 'Fisher-Price SpaceSaver Clean & Wash High Chair',
    description: 'Straps securely to most dining chairs. Dishwasher safe tray and machine-washable seat pad. Compact for small kitchens.',
    category: 'kids',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'Sunnyvale Commons Playground',
    images: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 34, name: 'Allison Green', communityTag: 'Sunnyvale Commons', rating: 4.8 },
    createdAt: '2026-10-25T13:30:00Z'
  },
  {
    id: 405,
    title: 'Strider 12 Classic No-Pedal Balance Bike (Ages 18m - 5yr)',
    description: 'Teaches kids balance and steering before moving to pedaled bikes. Never-flat foam tires and adjustable handlebar/seat height.',
    category: 'kids',
    listingType: 'SELL',
    price: 20.00,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Community Bike Trail Gazebo',
    images: [
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 35, name: 'Ben Gallagher', communityTag: 'Highland Trail', rating: 4.9 },
    createdAt: '2026-10-28T14:00:00Z'
  },
  {
    id: 406,
    title: 'Montessori Wooden Activity Cube & Shape Sorter',
    description: '5-in-1 bead maze, sliding animals, clock, shape sorter, and spinning gears. Natural wood with water-based safe paint.',
    category: 'kids',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Maplewood Daycare Lobby',
    images: [
      'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 36, name: 'Chloe Kim', communityTag: 'Maplewood Suburb', rating: 5.0 },
    createdAt: '2026-10-27T17:15:00Z'
  },
  {
    id: 407,
    title: 'Ergobaby Omni 360 All-Position Baby Carrier',
    description: 'Breathable cool air mesh carrier. Ergonomic forward and inward facing positions. Lumbar support belt for parent comfort.',
    category: 'kids',
    listingType: 'SELL',
    price: 35.00,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'City Maternity Clinic Lobby',
    images: [
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 37, name: 'Maria Gomez', communityTag: 'Southside', rating: 4.8 },
    createdAt: '2026-10-26T15:00:00Z'
  },
  {
    id: 408,
    title: 'Micro Kickboard 3-Wheel Lean-to-Steer Scooter',
    description: 'Swiss-engineered smooth glide scooter with LED light-up front wheels. T-bar handlebar adjusts as kids grow. Fun and safe.',
    category: 'kids',
    listingType: 'SWAP',
    price: 0,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'Central Park Carousel Pavilion',
    images: [
      'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 38, name: 'Lucas Martin', communityTag: 'Central Park North', rating: 4.7 },
    createdAt: '2026-10-28T12:45:00Z'
  },
  {
    id: 409,
    title: 'Soft Foldable Non-Toxic Foam Playmat (6x4 Feet)',
    description: 'Waterproof reversible play mat with alphabet design on one side and modern bohemian pattern on other. Cleans with a damp cloth.',
    category: 'kids',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'Eastside Community Center Porch',
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 39, name: 'Eva Schmidt', communityTag: 'Eastside Meadows', rating: 5.0 },
    createdAt: '2026-10-27T19:30:00Z'
  },
  {
    id: 410,
    title: 'Melissa & Doug Solid Wood Railway Train Track Set',
    description: '50-piece wooden track with magnetic train cars, bridges, trees, and street signs. Compatible with Brio and Thomas train sets.',
    category: 'kids',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'North River Park Clubhouse',
    images: [
      'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 40, name: 'Simon Bell', communityTag: 'North River', rating: 4.9 },
    createdAt: '2026-10-28T16:00:00Z'
  },

  // ==========================================
  // SECTION 5: KITCHEN & APPLIANCES (10 Items)
  // ==========================================
  {
    id: 501,
    title: 'Breville Stainless Espresso Machine & Portafilter',
    description: 'Makes rich cafe-quality espresso. Descaled with filtered water. Free to someone wanting to make espresso at home.',
    category: 'appliances',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'South Harbor Library Steps',
    images: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 41, name: 'Arthur Pendelton', communityTag: 'Old Port District', rating: 4.9 },
    createdAt: '2026-10-28T11:00:00Z'
  },
  {
    id: 502,
    title: 'Ninja Professional 1000W Countertop Blender',
    description: 'Crushes ice and frozen fruit into restaurant-grade smoothies in seconds. 72 oz pitcher, BPA free, dishwasher safe.',
    category: 'appliances',
    listingType: 'SELL',
    price: 25.00,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Westside Farmers Market',
    images: [
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 42, name: 'Monica Geller', communityTag: 'West Village', rating: 5.0 },
    createdAt: '2026-10-26T14:40:00Z'
  },
  {
    id: 503,
    title: 'Instant Pot Duo 7-in-1 Pressure Cooker (6 Quart)',
    description: 'Pressure cooker, slow cooker, rice maker, steamer, sauté pan, and yogurt maker. Stainless steel inner pot in clean condition.',
    category: 'appliances',
    listingType: 'SELL',
    price: 30.00,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Community Culinary Center',
    images: [
      'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1594213114663-ddf3f2a02117?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 43, name: 'Chef Rajiv', communityTag: 'Midtown East', rating: 4.9 },
    createdAt: '2026-10-27T12:15:00Z'
  },
  {
    id: 504,
    title: 'Lodge Cast Iron 10.25-Inch Seasoned Skillet',
    description: 'Pre-seasoned with 100% natural vegetable oil. Excellent heat retention and even cooking. Indestructible kitchen staple.',
    category: 'appliances',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'Bakers Row Plaza',
    images: [
      'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 44, name: 'Hannah Abbott', communityTag: 'Bakers Row', rating: 4.7 },
    createdAt: '2026-10-28T08:30:00Z'
  },
  {
    id: 505,
    title: 'Cuisinart 4-Slice Stainless Steel Wide-Slot Toaster',
    description: 'Dual control panels with 6 browning settings, bagel, defrost, and reheat functions. Slide-out crumb trays for easy cleanup.',
    category: 'appliances',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'North Green Community Cafe',
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 45, name: 'Steve Harrington', communityTag: 'North Green', rating: 4.8 },
    createdAt: '2026-10-25T16:00:00Z'
  },
  {
    id: 506,
    title: 'Cosori 5.8 Qt Digital Air Fryer with Recipe Cookbook',
    description: '11 one-touch cooking presets, nonstick dishwasher-safe basket. Uses up to 85% less oil for crispy wings and roasted vegetables.',
    category: 'appliances',
    listingType: 'SELL',
    price: 35.00,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Oak Ridge Community Kitchen',
    images: [
      'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 46, name: 'Lisa Kudrow', communityTag: 'Oak Ridge', rating: 5.0 },
    createdAt: '2026-10-28T13:40:00Z'
  },
  {
    id: 507,
    title: '1.7L Cordless Borosilicate Glass Electric Kettle',
    description: 'Blue LED indicator lights up while boiling. Auto shut-off within 30 seconds of water coming to a rolling boil. Descaled and sanitized.',
    category: 'appliances',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Central Station Coffee Kiosk',
    images: [
      'https://images.unsplash.com/photo-1594213114663-ddf3f2a02117?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 47, name: 'Liam Vance', communityTag: 'Central District', rating: 4.9 },
    createdAt: '2026-10-27T09:10:00Z'
  },
  {
    id: 508,
    title: 'Crock-Pot 6-Quart Programmable Slow Cooker',
    description: 'Digital timer counts down cooking time from 30 minutes to 20 hours. Automatically shifts to warm setting. Removable oval stoneware.',
    category: 'appliances',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'Highland Community Church Hall',
    images: [
      'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 48, name: 'Beverly Crusher', communityTag: 'Highland', rating: 4.7 },
    createdAt: '2026-10-26T18:00:00Z'
  },
  {
    id: 509,
    title: '16-Piece Ceramic Dinnerware Plate & Bowl Set (Matte Black)',
    description: '4 dinner plates, 4 salad plates, 4 cereal bowls, and 4 mugs. Microwave and dishwasher safe with modern rim detail.',
    category: 'appliances',
    listingType: 'SWAP',
    price: 0,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Pottery Studio Courtyard',
    images: [
      'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 49, name: 'Zack Taylor', communityTag: 'East End Arts', rating: 4.8 },
    createdAt: '2026-10-28T10:00:00Z'
  },
  {
    id: 510,
    title: 'KitchenAid 5-Speed Ultra Hand Mixer with Beaters',
    description: 'Compact, lightweight, and versatile. 5 speeds handle everything from slow stir to fast whip. Includes stainless turbo beater accessories.',
    category: 'appliances',
    listingType: 'SELL',
    price: 15.00,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'Downtown Market Hall',
    images: [
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 50, name: 'Patricia Oconnor', communityTag: 'Downtown Market', rating: 5.0 },
    createdAt: '2026-10-27T14:50:00Z'
  },

  // ==========================================
  // SECTION 6: BOOKS, HOBBIES & MEDIA (10 Items)
  // ==========================================
  {
    id: 601,
    title: 'Classic Sci-Fi & Literature 25-Book Boxed Set',
    description: 'Authors include Isaac Asimov, Ursula K. Le Guin, Arthur C. Clarke, and Steinbeck. Pristine spines, smoke-free home.',
    category: 'books',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'City Central Station Cafe',
    images: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 51, name: 'Rachel Adams', communityTag: 'East Valley', rating: 4.7 },
    createdAt: '2026-10-27T08:30:00Z'
  },
  {
    id: 602,
    title: 'Fender FA-115 Full Dreadnought Acoustic Guitar with Gig Bag',
    description: 'Spruce top with gloss finish, warm resonant sound. Includes clip-on tuner, guitar strap, and nylon carry bag. Ideal for beginner musicians.',
    category: 'books',
    listingType: 'SELL',
    price: 60.00,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Music Conservatory Steps',
    images: [
      'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 52, name: 'Julian King', communityTag: 'Symphony Hall District', rating: 5.0 },
    createdAt: '2026-10-28T10:30:00Z'
  },
  {
    id: 603,
    title: 'Acrylic Painting Artist Studio Set (24 Colors + Wooden Easel)',
    description: 'High-pigment acrylic paints, 6 nylon brushes, stretched canvas panels, and folding tabletop Beechwood easel.',
    category: 'books',
    listingType: 'SWAP',
    price: 0,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Artisan Square Loft',
    images: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 53, name: 'Naomi Campbell', communityTag: 'Loft District', rating: 4.9 },
    createdAt: '2026-10-26T16:45:00Z'
  },
  {
    id: 604,
    title: 'Board Game Bundle: Catan, Ticket to Ride, & Wingspan',
    description: 'All game pieces, cards, and dice accounted for. Boxes in crisp condition. Great strategy games for family game nights.',
    category: 'books',
    listingType: 'SELL',
    price: 35.00,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Board Game Lounge Lobby',
    images: [
      'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 54, name: 'Gary Gygax', communityTag: 'University Circle', rating: 5.0 },
    createdAt: '2026-10-28T14:15:00Z'
  },
  {
    id: 605,
    title: 'Introduction to Algorithms (CLRS 4th Edition Hardcover)',
    description: 'Definitive reference for computer science algorithms and data structures. Crisp binding, no highlighting.',
    category: 'books',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Engineering Library Desk',
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 55, name: 'Alex Rivera', communityTag: 'Science Quad', rating: 4.9 },
    createdAt: '2026-10-27T10:00:00Z'
  },
  {
    id: 606,
    title: 'Vintage Vinyl Records Collection (Classic Rock & Soul - 15 LPs)',
    description: 'Fleetwood Mac, Led Zeppelin, Stevie Wonder, and Marvin Gaye. Sleeves in good condition, records play smoothly without skips.',
    category: 'books',
    listingType: 'SELL',
    price: 40.00,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'Retro Groove Records Porch',
    images: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 56, name: 'Miles Davis', communityTag: 'Old Quarter', rating: 5.0 },
    createdAt: '2026-10-25T15:30:00Z'
  },
  {
    id: 607,
    title: 'Canon EOS Rebel T6 DSLR Camera with 18-55mm Lens',
    description: '18MP CMOS sensor, built-in Wi-Fi and NFC. Includes lithium battery, wall charger, neck strap, and 32GB SD card. Perfect for photography students.',
    category: 'books',
    listingType: 'SELL',
    price: 95.00,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'City Botanical Garden Center',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 57, name: 'Ansel Adams', communityTag: 'Garden District', rating: 4.8 },
    createdAt: '2026-10-28T11:45:00Z'
  },
  {
    id: 608,
    title: 'Complete Harry Potter Hardcover Box Set (Books 1-7)',
    description: 'Original Mary GrandPré illustrations and decorative red trunk chest. Passing it along to inspire another young reader.',
    category: 'books',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'GOOD',
    status: 'RESERVED',
    pickupLocation: 'Town Library Main Lobby',
    images: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 58, name: 'Ginny Weasley', communityTag: 'North Valley', rating: 4.9 },
    createdAt: '2026-10-27T17:00:00Z'
  },
  {
    id: 609,
    title: 'Kalimba 17-Key Thumb Piano in Solid Mahogany Wood',
    description: 'Ore metal tines engraved with musical notes. Comes with velvet bag, tuning hammer, study booklet, and silicone finger protectors.',
    category: 'books',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Peace Park Bench',
    images: [
      'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 59, name: 'Luna Lovegood', communityTag: 'Riverside Walk', rating: 5.0 },
    createdAt: '2026-10-28T09:00:00Z'
  },
  {
    id: 610,
    title: 'Set of 3 National Parks 1,000-Piece Jigsaw Puzzles',
    description: 'Yellowstone, Yosemite, and Zion retro illustrated travel poster puzzles. Sealed pieces inside, zero missing components.',
    category: 'books',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Forest Trailhead Visitor Kiosk',
    images: [
      'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 60, name: 'John Muir', communityTag: 'Mountain Green', rating: 4.9 },
    createdAt: '2026-10-26T13:15:00Z'
  },

  // ==========================================
  // SECTION 7: SPORTS & OUTDOORS (10 Items)
  // ==========================================
  {
    id: 701,
    title: 'Trek 21-Speed Hybrid Commuter Bicycle',
    description: 'Tires hold air well, tuned up in August. Includes rear cargo rack, front LED light, and bell. Great for commuting or bike path rides.',
    category: 'sports',
    listingType: 'SELL',
    price: 50.00,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'Riverfront Bike Trail Entrance',
    images: [
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 61, name: 'Devon Lee', communityTag: 'Riverside Walk', rating: 4.9 },
    createdAt: '2026-10-28T13:45:00Z'
  },
  {
    id: 702,
    title: 'Coleman Sundome 4-Person Waterproof Camping Tent',
    description: 'WeatherTec system with patented welded floors and inverted seams. Sets up in 10 minutes. Ground stakes and rainfly included.',
    category: 'sports',
    listingType: 'SELL',
    price: 35.00,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Camping Club Pavilion',
    images: [
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 62, name: 'Travis Barker', communityTag: 'Pine Hill', rating: 4.8 },
    createdAt: '2026-10-27T15:00:00Z'
  },
  {
    id: 703,
    title: 'Manduka PRO Non-Slip 6mm High Density Yoga Mat',
    description: 'Ultra-dense cushioning to protect joints. Closed-cell surface seals out moisture and sweat. Freshly sanitized with lavender mat cleaner.',
    category: 'sports',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Yoga Studio Porch',
    images: [
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 63, name: 'Serena Vance', communityTag: 'Wellness Village', rating: 5.0 },
    createdAt: '2026-10-28T07:30:00Z'
  },
  {
    id: 704,
    title: 'Cast Iron Adjustable Dumbbell Set (40 Lbs Total Weight)',
    description: 'Two handles, 4 collars, four 2.5-lb plates, and four 5-lb plates. Rust-free solid cast iron for home gym training.',
    category: 'sports',
    listingType: 'SELL',
    price: 30.00,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'Fitness Center Garage',
    images: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 64, name: 'Arnold Brown', communityTag: 'Iron Gym District', rating: 4.9 },
    createdAt: '2026-10-26T18:20:00Z'
  },
  {
    id: 705,
    title: 'Wilson US Open Tennis Rackets (Pair) + Can of Tennis Balls',
    description: 'Two adult graphite composite tennis rackets with fresh grip tape and head covers. Balanced control and power.',
    category: 'sports',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'Public Tennis Courts Gate 1',
    images: [
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 65, name: 'Roger Federer fan', communityTag: 'Courtside Meadows', rating: 5.0 },
    createdAt: '2026-10-28T12:15:00Z'
  },
  {
    id: 706,
    title: 'Intex Explorer K2 2-Person Inflatable Kayak Set',
    description: 'Heavy-duty puncture-resistant vinyl. Includes two 86-inch aluminum paddles, high-output hand pump, and carry duffel bag.',
    category: 'sports',
    listingType: 'SELL',
    price: 55.00,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Lakeview Marina Dock',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 66, name: 'Cody Maverick', communityTag: 'Lakeview Point', rating: 4.8 },
    createdAt: '2026-10-27T16:40:00Z'
  },
  {
    id: 707,
    title: 'Element Section 8.0" Complete Skateboard',
    description: '7-ply maple deck with Raw Element trucks, 52mm 99A wheels, and smooth ABEC-5 bearings. Mild tail scuffs, tons of life left.',
    category: 'sports',
    listingType: 'SWAP',
    price: 0,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'Skatepark Bowl Bench',
    images: [
      'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 67, name: 'Tony Hawk fan', communityTag: 'Downtown Skate Zone', rating: 4.9 },
    createdAt: '2026-10-28T15:20:00Z'
  },
  {
    id: 708,
    title: 'Marmot Trestles 30°F Mummy Sleeping Bag',
    description: 'SpiraFil high-loft insulation keeps warm in damp conditions. Compression stuff sack included. Sanitized and ready for autumn camping.',
    category: 'sports',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Scout Troop Hall Entrance',
    images: [
      'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 68, name: 'Bear Grylls follower', communityTag: 'Highland Ridge', rating: 5.0 },
    createdAt: '2026-10-26T17:50:00Z'
  },
  {
    id: 709,
    title: 'Spalding NBA Street Outdoor Rubber Basketball (Official Size 7)',
    description: 'Deep channel design for superior grip and durability on outdoor blacktop asphalt courts. Holds air tight.',
    category: 'sports',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'GOOD',
    status: 'AVAILABLE',
    pickupLocation: 'Community Basketball Court',
    images: [
      'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 69, name: 'Kobe Fan', communityTag: 'Hoop City', rating: 4.7 },
    createdAt: '2026-10-28T16:30:00Z'
  },
  {
    id: 710,
    title: 'Rollerblade Zetrablade Adult Inline Fitness Skates (Men Size 10)',
    description: 'High cuff for extra ankle support, 80mm wheels with SG5 bearings. Smooth, quiet roll on paved paths.',
    category: 'sports',
    listingType: 'SELL',
    price: 35.00,
    itemCondition: 'LIKE_NEW',
    status: 'AVAILABLE',
    pickupLocation: 'Paved Greenbelt Path Kiosk',
    images: [
      'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80'
    ],
    seller: { id: 70, name: 'Brice Wayne', communityTag: 'Greenbelt Meadows', rating: 4.9 },
    createdAt: '2026-10-27T18:10:00Z'
  }
];
