require('dotenv').config()
const mongoose = require('mongoose')
const Product = require('./models/Product')
const connectDB = require('./config/db')

const products = [
  {
    name: 'Beige Linen Sectional Sofa',
    description: `Transform your living room with this **hand-stitched linen sectional**. Its clean, angular silhouette pairs effortlessly with any interior palette. The deep-seated cushions are filled with a premium down-alternative blend that holds its shape beautifully over time.\n\n- Frame: **Solid oak hardwood**\n- Upholstery: **100% natural linen**\n- Cushion fill: Down-alternative + memory foam`,
    price: 285000,
    category: 'Living Room',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80',
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=900&q=80',
    ],
    dimensions: { width: 280, height: 85, depth: 95 },
    stock: 5,
    featured: true,
    material: 'Solid Oak, Natural Linen',
  },
  {
    name: 'Travertine Coffee Table',
    description: `A sculptural statement piece carved from **natural travertine stone**. Each table carries its own unique veining, making it a one-of-a-kind treasure for your living room.\n\n- Material: **Natural travertine**\n- Base: **Brushed brass**\n- Weight: 45 kg`,
    price: 95000,
    category: 'Living Room',
    images: [
      'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?w=900&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80',
    ],
    dimensions: { width: 110, height: 40, depth: 60 },
    stock: 8,
    featured: true,
    material: 'Natural Travertine, Brushed Brass',
  },
  {
    name: 'Walnut Japandi Bed Frame',
    description: `Inspired by the Japanese concept of *wabi-sabi*, this platform bed celebrates the natural beauty of solid walnut. The low-profile design creates a serene, grounded atmosphere in any bedroom.\n\n- Frame: **Solid American walnut**\n- Finish: **Natural oil**\n- Fits: King size mattress (180×200 cm)`,
    price: 175000,
    category: 'Bedroom',
    images: [
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=900&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80',
    ],
    dimensions: { width: 190, height: 35, depth: 215 },
    stock: 4,
    featured: true,
    material: 'Solid American Walnut',
  },
  {
    name: 'Fluted Nightstand',
    description: `Delicate fluted detailing elevates this nightstand from functional to artful. Crafted with precision joinery and finished in a soft, matte white that catches the morning light beautifully.\n\n- Material: **MDF with lacquer finish**\n- Drawer: **Soft-close mechanism**`,
    price: 42000,
    category: 'Bedroom',
    images: [
      'https://images.unsplash.com/photo-1592229505726-ca121723b8ef?w=900&q=80',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=900&q=80',
    ],
    dimensions: { width: 45, height: 60, depth: 40 },
    stock: 12,
    featured: false,
    material: 'Lacquered MDF',
  },
  {
    name: 'Minimal Oak Desk',
    description: `Designed for focused minds. This understated desk features a solid oak top with a subtle waterfall edge, supported by a powder-coated steel frame that keeps the silhouette clean and contemporary.\n\n- Top: **Solid oak, oiled finish**\n- Frame: **Matte black powder-coated steel**\n- Cable management channel included`,
    price: 68000,
    category: 'Workspace',
    images: [
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&q=80',
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=900&q=80',
    ],
    dimensions: { width: 140, height: 75, depth: 70 },
    stock: 7,
    featured: true,
    material: 'Solid Oak, Powder-coated Steel',
  },
  {
    name: 'Leather Swivel Chair',
    description: `A modern reinterpretation of the executive chair. Italian full-grain leather wraps a form that is as comfortable as it is beautiful. The low-profile base allows it to tuck neatly under any desk.\n\n- Upholstery: **Full-grain Italian leather**\n- Base: **Cast aluminium, chrome**\n- Mechanism: **Height adjustable, 360° swivel**`,
    price: 95000,
    category: 'Workspace',
    images: [
      'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=900&q=80',
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=900&q=80',
    ],
    dimensions: { width: 65, height: 115, depth: 68 },
    stock: 6,
    featured: false,
    material: 'Full-grain Italian Leather, Cast Aluminium',
  },
  {
    name: 'Ceramic Bud Vase Set',
    description: `A trio of hand-thrown stoneware vases in graduating heights. Each piece is individually fired, resulting in subtle variations that make the set uniquely yours. Perfect paired with dried pampas or a single architectural stem.\n\n- Material: **Stoneware**\n- Glaze: **Matte earth tones**\n- Set of **3 pieces**`,
    price: 12500,
    category: 'Decor',
    images: [
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=900&q=80',
      'https://images.unsplash.com/photo-1615800098779-1be32e60cca3?w=900&q=80',
    ],
    dimensions: { width: 10, height: 30, depth: 10 },
    stock: 25,
    featured: false,
    material: 'Stoneware',
  },
  {
    name: 'Linen Accent Armchair',
    description: `Every element of this armchair has been considered — from the slight recline of the back to the precision of the hand-sewn seams. Upholstered in a stone-coloured linen with a subtle texture that improves with age.\n\n- Frame: **Beech wood**\n- Upholstery: **Belgian linen**\n- Leg finish: **Natural oiled beech**`,
    price: 78000,
    category: 'Living Room',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80',
    ],
    dimensions: { width: 72, height: 82, depth: 78 },
    stock: 9,
    featured: false,
    material: 'Beech Wood, Belgian Linen',
  },
  {
    name: 'Velvet Lounge Chair',
    description: `Sumptuous olive velvet envelops this sculptural armchair. The exaggerated curve of the backrest cradles you perfectly, while the polished nickel legs add a contemporary edge.\n\n- Upholstery: **100% velvet**\n- Frame: **Kiln-dried hardwood**\n- Legs: **Polished nickel**`,
    price: 85000,
    category: 'Living Room',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
      'https://images.unsplash.com/photo-1596437636633-883db98d5324?w=900&q=80',
    ],
    dimensions: { width: 85, height: 90, depth: 82 },
    stock: 6,
    featured: true,
    material: 'Velvet, Hardwood, Nickel',
  },
  {
    name: 'Marble Console Table',
    description: `A study in minimalism. Single slab of honed **Carrara marble** atop slender steel legs. The natural veining creates organic beauty in your entryway or behind the sofa.\n\n- Top: **Carrara marble (2cm thick)**\n- Legs: **Matte black steel**`,
    price: 28000,
    category: 'Living Room',
    images: [
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80',
    ],
    dimensions: { width: 120, height: 75, depth: 35 },
    stock: 10,
    featured: false,
    material: 'Carrara Marble, Steel',
  },
  {
    name: 'Oak Wardrobe',
    description: `Timeless craftsmanship meets modern proportions. This wardrobe features soft-close doors and internal LED lighting that illuminates when opened. Customizable hanging space and drawers.\n\n- Material: **European oak**\n- Finish: **Matte lacquer**\n- Features: **Soft-close, LED lighting**`,
    price: 220000,
    category: 'Bedroom',
    images: [
      'https://images.unsplash.com/photo-1549175853-7d3d8e2e1d5e?w=900&q=80',
      'https://images.unsplash.com/photo-1600214641476-f01598a05197?w=900&q=80',
    ],
    dimensions: { width: 180, height: 220, depth: 60 },
    stock: 3,
    featured: true,
    material: 'European Oak',
  },
  {
    name: 'Ergonomic Task Lamp',
    description: `Precision-engineered for long workdays. 7-point dimmable LED with balanced arm that stays exactly where you position it. Anti-glare diffuser and USB-C charging port built in.\n\n- Light: **Dimmable LED (3000K warm)**\n- Arm: **Counterbalanced aluminum**\n- Base: **Marble**`,
    price: 22000,
    category: 'Workspace',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80',
    ],
    dimensions: { width: 25, height: 50, depth: 25 },
    stock: 15,
    featured: false,
    material: 'Aluminum, Marble',
  },
  {
    name: 'Brass Abstract Sculpture',
    description: `Hand-forged brass sculpture by local artisan. Organic forms capture movement and light. Signed and dated. Perfect focal point for console table or shelf.\n\n- Material: **Recycled brass**\n- Finish: **Hand-patinated**\n- Dimensions: **One of a kind**`,
    price: 45000,
    category: 'Decor',
    images: [
      'https://images.unsplash.com/photo-1578887638499-1e0d7e1c9f57?w=900&q=80',
      'https://images.unsplash.com/photo-1580489944761-10a60fb6d2ac?w=900&q=80',
    ],
    dimensions: { width: 20, height: 35, depth: 15 },
    stock: 2,
    featured: true,
    material: 'Recycled Brass',
  },
  {
    name: 'Wool Throw Blanket',
    description: `Handwoven from **New Zealand merino wool**. Reversible design with subtle color variation. Perfect weight for sofa or bed. Machine washable.\n\n- Material: **100% merino wool**\n- Size: **200x140 cm**\n- Care: **Machine wash cold**`,
    price: 18000,
    category: 'Decor',
    images: [
      'https://images.unsplash.com/photo-1587773729782-40a70a685b16?w=900&q=80',
      'https://images.unsplash.com/photo-1608258179395-e5a4c61e35f7?w=900&q=80',
    ],
    dimensions: { width: 140, height: 200 },
    stock: 20,
    featured: false,
    material: 'Merino Wool',
  },
  {
    name: 'Ceramic Floor Planter',
    description: `Architectural planter for your statement plant. **Hand-thrown stoneware** with reactive glaze that varies piece to piece. Includes drainage saucer.\n\n- Material: **Stoneware**\n- Glaze: **Reactive matte**\n- Drainage: **Yes**`,
    price: 15000,
    category: 'Decor',
    images: [
      'https://images.unsplash.com/photo-1612095908373-01e175419b91?w=900&q=80',
      'https://images.unsplash.com/photo-1598928508446-7e2289a041bc?w=900&q=80',
    ],
    dimensions: { width: 40, height: 45, depth: 40 },
    stock: 18,
    featured: false,
    material: 'Stoneware',
  },
]

async function seed() {
  await connectDB()
  await Product.deleteMany({})
  const inserted = await Product.insertMany(products)
  console.log(`✅ Seeded ${inserted.length} products`)
  await mongoose.disconnect()
  console.log('📦 Database disconnected. Done.')
}

seed().catch((err) => {
  console.error('Seed error:', err)
  process.exit(1)
})
