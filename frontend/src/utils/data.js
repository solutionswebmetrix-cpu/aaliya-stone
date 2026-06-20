// Categories and Subcategories
export const categories = [
  {
    id: 1,
    name: "Marble",
    slug: "marble",
    subcategories: [
      { id: "sub-101", name: "Green Marble", slug: "green-marble" },
      { id: "sub-102", name: "Banswara White Marble", slug: "banswara-white-marble" },
      { id: "sub-103", name: "Calcutta Viola Marble", slug: "calcutta-viola-marble" },
      { id: "sub-104", name: "Katni Marble", slug: "katni-marble" },
      { id: "sub-105", name: "Makrana White Marble", slug: "makrana-white-marble" },
      { id: "sub-106", name: "Rainforest Brown Marble", slug: "rainforest-brown-marble" },
      { id: "sub-107", name: "Rainforest Green Marble", slug: "rainforest-green-marble" },
      { id: "sub-108", name: "Wonder Marble", slug: "wonder-marble" }
    ]
  },
  {
    id: 2,
    name: "Granite",
    slug: "granite",
    subcategories: [
      { id: "sub-201", name: "Absolute Black Granite", slug: "absolute-black-granite" },
      { id: "sub-202", name: "Black Galaxy Granite", slug: "black-galaxy-granite" },
      { id: "sub-203", name: "Kashmir White Granite", slug: "kashmir-white-granite" },
      { id: "sub-204", name: "Colonial White Granite", slug: "colonial-white-granite" },
      { id: "sub-205", name: "Sira Grey Granite", slug: "sira-grey-granite" },
      { id: "sub-206", name: "Crystal Blue Granite", slug: "crystal-blue-granite" },
      { id: "sub-207", name: "Crystal Yellow Granite", slug: "crystal-yellow-granite" },
      { id: "sub-208", name: "Crystal Brown Granite", slug: "crystal-brown-granite" },
      { id: "sub-209", name: "Rajasthan Black Granite", slug: "rajasthan-black-granite" },
      { id: "sub-210", name: "Chima Pink Granite", slug: "chima-pink-granite" },
      { id: "sub-211", name: "Multi Red Granite", slug: "multi-red-granite" }
    ]
  },
  {
    id: 3,
    name: "Sandstone",
    slug: "sandstone",
    subcategories: []
  },
  {
    id: 4,
    name: "Limestone",
    slug: "limestone",
    subcategories: [
      { id: "sub-401", name: "Indian Limestone", slug: "indian-limestone" },
      { id: "sub-402", name: "Imported Limestone", slug: "imported-limestone" }
    ]
  },
  {
    id: 5,
    name: "Slate Stone",
    slug: "slate-stone",
    subcategories: []
  },
  {
    id: 6,
    name: "Travertine",
    slug: "travertine",
    subcategories: []
  },
  {
    id: 7,
    name: "Basalt Stone",
    slug: "basalt-stone",
    subcategories: [
      { id: "sub-701", name: "Basalt", slug: "basalt" }
    ]
  },
  {
    id: 8,
    name: "Semi Precious Stone Work",
    slug: "semi-precious-stone-work",
    subcategories: [
      { id: "sub-801", name: "Inlay Work", slug: "inlay-work" },
      { id: "sub-802", name: "Outlay Work", slug: "outlay-work" }
    ]
  },
  {
    id: 9,
    name: "Interior Stone Products",
    slug: "interior-stone-products",
    subcategories: [
      { id: "sub-901", name: "Stone Fireplace", slug: "stone-fireplace" },
      { id: "sub-902", name: "Stone Balusters & Railings", slug: "stone-balusters-railings" },
      { id: "sub-903", name: "Stone Table Tops", slug: "stone-table-tops" }
    ]
  },
  {
    id: 10,
    name: "Bathroom Stone Products",
    slug: "bathroom-stone-products",
    subcategories: [
      { id: "sub-1001", name: "Stone Bathtub", slug: "stone-bathtub" },
      { id: "sub-1002", name: "Stone Basins", slug: "stone-basins" }
    ]
  },
  {
    id: 11,
    name: "Furniture Stone Products",
    slug: "furniture-stone-products",
    subcategories: [
      { id: "sub-1101", name: "Stone Coffee Table", slug: "stone-coffee-table" }
    ]
  },
  {
    id: 12,
    name: "Architectural Stone Products",
    slug: "architectural-stone-products",
    subcategories: [
      { id: "sub-1201", name: "Stone Columns", slug: "stone-columns" },
      { id: "sub-1202", name: "Stone Benches", slug: "stone-benches" },
      { id: "sub-1203", name: "Stone Fountains", slug: "stone-fountains" },
      { id: "sub-1204", name: "Stone Gazebos", slug: "stone-gazebos" }
    ]
  },
  {
    id: 13,
    name: "Landscaping & Outdoor Stone",
    slug: "landscaping-outdoor-stone",
    subcategories: [
      { id: "sub-1301", name: "Kerb Stones", slug: "kerb-stones" },
      { id: "sub-1302", name: "Cobble Stones", slug: "cobble-stones" },
      { id: "sub-1303", name: "Stone Pavers", slug: "stone-pavers" }
    ]
  },
  {
    id: 14,
    name: "Memorial Stone Products",
    slug: "memorial-stone-products",
    subcategories: [
      { id: "sub-1401", name: "Grave Stones", slug: "grave-stones" }
    ]
  }
];

// Add category reference to each subcategory
categories.forEach(category => {
  category.subcategories.forEach(subcategory => {
    subcategory.category = category;
  });
});

// Helper to get category and subcategory for products
const getCategory = (catSlug) => categories.find(c => c.slug === catSlug);
const getSubcategory = (catSlug, subSlug) => {
  const cat = getCategory(catSlug);
  return cat?.subcategories.find(s => s.slug === subSlug);
};

// All product definitions
const productDefinitions = [
  // Marble
  {
    id: 101,
    name: "Green Marble",
    slug: "green-marble",
    categorySlug: "marble",
    subcategorySlug: "green-marble",
    image: "Green marble.png",
    images: ["Green marble.png"],
    category: getCategory("marble"),
    subcategory: getSubcategory("marble", "green-marble"),
    shortDescription: "Beautiful natural stone with rich green base and elegant veining.",
    description: "Green Marble is a stunning natural stone featuring a rich green base color adorned with elegant white and gray veining. Quarried from premium locations, this marble variety offers a sophisticated and timeless appearance that elevates any interior space.",
    features: ["Rich green base color with natural variations", "Elegant white and gray veining patterns", "Highly durable and long-lasting material", "Smooth polished finish that enhances beauty", "Timeless aesthetic that complements any design"],
    benefits: ["Adds natural beauty and sophistication to interiors", "Compatible with both classic and modern design styles", "Increases property value with premium natural stone", "Easy to maintain with proper care", "Unique veining ensures no two pieces are identical"],
    applications: ["Kitchen countertops", "Bathroom vanities", "Floor tiles", "Wall cladding", "Fireplace surrounds", "Decorative accents"],
    maintenance: "Clean with pH-neutral cleaner, avoid harsh chemicals, wipe spills immediately, seal annually.",
    whyChoose: "Green Marble offers a unique and elegant look that brings the beauty of nature into your space, creating a luxurious and sophisticated atmosphere.",
    metaTitle: "Green Marble | Premium Natural Stone",
    metaDescription: "Discover premium Green Marble with rich green base and elegant veining. Perfect for sophisticated interiors and luxury designs.",
    keywords: ["Green Marble", "Marble", "Natural Stone", "Luxury Stone", "Interior Design"],
    imageAlt: "Elegant Green Marble with natural veining",
    tags: ["Green Marble", "Marble", "Natural Stone", "Luxury Stone"]
  },
  {
    id: 102,
    name: "Banswara White Marble",
    slug: "banswara-white-marble",
    categorySlug: "marble",
    subcategorySlug: "banswara-white-marble",
    image: "Banswara white marble.png",
    images: ["Banswara white marble.png"],
    category: getCategory("marble"),
    subcategory: getSubcategory("marble", "banswara-white-marble"),
    shortDescription: "Pure white marble from Banswara, Rajasthan with subtle gray veining.",
    description: "Banswara White Marble is a premium quality white marble quarried in Banswara, Rajasthan. Known for its pure white base and subtle gray veining, this marble is highly sought after for creating bright and elegant interiors.",
    features: ["Pristine white base color", "Subtle gray veining for natural beauty", "Highly durable Indian marble", "Smooth polished finish", "Timeless and elegant appearance"],
    benefits: ["Brightens up any interior space", "Perfect for both traditional and modern designs", "Premium Indian marble quality", "Easy to maintain and clean", "Adds elegance and value to property"],
    applications: ["Flooring", "Wall cladding", "Kitchen countertops", "Bathroom vanities", "Tabletops", "Decorative elements"],
    maintenance: "Clean with pH-neutral cleaner, avoid harsh chemicals, wipe spills immediately, seal annually.",
    whyChoose: "Banswara White Marble offers a timeless, elegant look that creates bright and sophisticated interiors, perfect for any design style.",
    metaTitle: "Banswara White Marble | Premium Indian Marble",
    metaDescription: "Explore Banswara White Marble from Rajasthan. Pure white with subtle gray veining, perfect for elegant interiors.",
    keywords: ["Banswara White Marble", "White Marble", "Indian Marble", "Natural Stone"],
    imageAlt: "Premium Banswara White Marble with subtle gray veining",
    tags: ["Banswara White Marble", "White Marble", "Indian Marble", "Natural Stone"]
  },
  {
    id: 103,
    name: "Calcutta Viola Marble",
    slug: "calcutta-viola-marble",
    categorySlug: "marble",
    subcategorySlug: "calcutta-viola-marble",
    image: "Calcutta viola marble.png",
    images: ["Calcutta viola marble.png"],
    category: getCategory("marble"),
    subcategory: getSubcategory("marble", "calcutta-viola-marble"),
    shortDescription: "Luxurious marble with white base and striking purple-gray veining.",
    description: "Calcutta Viola Marble is an exquisite natural stone featuring a bright white base with striking purple and gray veining. This luxurious marble variety adds a touch of opulence and sophistication to any interior space.",
    features: ["Bright white base color", "Striking purple and gray veining", "Luxurious and exotic appearance", "Highly durable and premium quality", "Unique natural patterns"],
    benefits: ["Creates stunning focal points in any space", "Perfect for luxury and high-end designs", "Unique natural variations ensure exclusivity", "Timeless beauty that never goes out of style", "Adds significant value to property"],
    applications: ["Kitchen islands", "Feature walls", "Bathroom surrounds", "Flooring", "Tabletops", "Bar tops", "High-end decorative applications"],
    maintenance: "Clean with pH-neutral cleaner, avoid harsh chemicals, wipe spills immediately, seal annually.",
    whyChoose: "Calcutta Viola Marble offers a luxurious and exotic appearance that elevates any interior, creating a sophisticated and opulent atmosphere.",
    metaTitle: "Calcutta Viola Marble | Luxury Exotic Stone",
    metaDescription: "Discover Calcutta Viola Marble with white base and striking purple-gray veining. Perfect for luxury interiors.",
    keywords: ["Calcutta Viola Marble", "Marble", "Luxury Stone", "Exotic Stone"],
    imageAlt: "Luxurious Calcutta Viola Marble with purple-gray veining",
    tags: ["Calcutta Viola Marble", "Marble", "Luxury Stone", "Exotic Stone"]
  },
  {
    id: 104,
    name: "Katni Marble",
    slug: "katni-marble",
    categorySlug: "marble",
    subcategorySlug: "katni-marble",
    image: "Katni marble.png",
    images: ["Katni marble.png"],
    category: getCategory("marble"),
    subcategory: getSubcategory("marble", "katni-marble"),
    shortDescription: "Beautiful marble from Katni with warm tones and natural patterns.",
    description: "Katni Marble is a beautiful natural stone quarried in Katni, Madhya Pradesh. Known for its warm tones and intricate natural patterns, this marble variety is perfect for creating cozy and inviting interiors.",
    features: ["Warm beige and cream base tones", "Intricate natural patterns and veining", "High-quality Indian marble", "Durable and long-lasting", "Warm and inviting appearance"],
    benefits: ["Adds warmth and coziness to interiors", "Perfect for traditional and rustic designs", "Affordable luxury with premium quality", "Easy to maintain and care for", "Unique natural patterns"],
    applications: ["Flooring", "Wall cladding", "Kitchen countertops", "Bathroom vanities", "Fireplace surrounds", "Decorative elements"],
    maintenance: "Clean with pH-neutral cleaner, avoid harsh chemicals, wipe spills immediately, seal annually.",
    whyChoose: "Katni Marble offers a warm and inviting look that creates cozy interiors, perfect for homes and traditional design styles.",
    metaTitle: "Katni Marble | Warm Natural Stone",
    metaDescription: "Explore Katni Marble from Madhya Pradesh. Warm tones with natural patterns, perfect for cozy interiors.",
    keywords: ["Katni Marble", "Marble", "Indian Marble", "Natural Stone"],
    imageAlt: "Beautiful Katni Marble with warm tones and natural patterns",
    tags: ["Katni Marble", "Marble", "Indian Marble", "Natural Stone"]
  },
  {
    id: 105,
    name: "Makrana White Marble",
    slug: "makrana-white-marble",
    categorySlug: "marble",
    subcategorySlug: "makrana-white-marble",
    image: "Makrana white marble.png",
    images: ["Makrana white marble.png"],
    category: getCategory("marble"),
    subcategory: getSubcategory("marble", "makrana-white-marble"),
    shortDescription: "World-famous white marble from Makrana, used in the Taj Mahal.",
    description: "Makrana White Marble is world-famous for its exceptional quality and pure white color. Quarried in Makrana, Rajasthan, this marble has been used in iconic monuments like the Taj Mahal, making it a symbol of luxury and timeless beauty.",
    features: ["Pristine pure white color", "Fine grain and smooth texture", "World-famous premium quality", "Highly durable and long-lasting", "Timeless and elegant appearance"],
    benefits: ["Iconic and prestigious marble variety", "Adds unmatched elegance to any space", "High resale value and investment worth", "Timeless beauty that lasts generations", "Easy to polish and maintain"],
    applications: ["Flooring", "Wall cladding", "Kitchen countertops", "Bathroom vanities", "Tabletops", "Decorative sculptures", "High-end architectural projects"],
    maintenance: "Clean with pH-neutral cleaner, avoid harsh chemicals, wipe spills immediately, polish regularly.",
    whyChoose: "Makrana White Marble is the epitome of luxury and timeless beauty, offering unmatched quality and prestige that elevates any space to extraordinary levels.",
    metaTitle: "Makrana White Marble | World-Famous Luxury Stone",
    metaDescription: "Discover Makrana White Marble, the iconic stone used in the Taj Mahal. Premium quality white marble for luxury interiors.",
    keywords: ["Makrana White Marble", "White Marble", "Luxury Stone", "Taj Mahal Marble"],
    imageAlt: "Iconic Makrana White Marble, the stone of the Taj Mahal",
    tags: ["Makrana White Marble", "White Marble", "Luxury Stone", "Taj Mahal Marble"]
  },
  {
    id: 106,
    name: "Rainforest Brown Marble",
    slug: "rainforest-brown-marble",
    categorySlug: "marble",
    subcategorySlug: "rainforest-brown-marble",
    image: "Rainforest brown.png",
    images: ["Rainforest brown.png"],
    category: getCategory("marble"),
    subcategory: getSubcategory("marble", "rainforest-brown-marble"),
    shortDescription: "Exotic marble with warm brown base and tree-like patterns.",
    description: "Rainforest Brown Marble is an exotic natural stone featuring a warm brown base with intricate tree-like patterns that resemble a rainforest. This unique marble variety creates stunning focal points in any interior.",
    features: ["Warm brown base color", "Intricate tree-like natural patterns", "Exotic and unique appearance", "Highly durable and premium quality", "Eye-catching and dramatic"],
    benefits: ["Creates stunning and dramatic focal points", "Perfect for luxury and exotic designs", "Unique natural patterns ensure exclusivity", "Timeless beauty that stands out", "Adds luxury and sophistication"],
    applications: ["Feature walls", "Kitchen islands", "Bathroom surrounds", "Flooring", "Tabletops", "Bar tops", "Luxury decorative accents"],
    maintenance: "Clean with pH-neutral cleaner, avoid harsh chemicals, wipe spills immediately, seal annually.",
    whyChoose: "Rainforest Brown Marble offers an exotic and unique appearance that transforms any space into a luxurious and dramatic environment.",
    metaTitle: "Rainforest Brown Marble | Exotic Unique Stone",
    metaDescription: "Explore Rainforest Brown Marble with warm brown base and tree-like patterns. Perfect for exotic luxury interiors.",
    keywords: ["Rainforest Brown Marble", "Marble", "Exotic Stone", "Unique Stone"],
    imageAlt: "Exotic Rainforest Brown Marble with tree-like patterns",
    tags: ["Rainforest Brown Marble", "Marble", "Exotic Stone", "Unique Stone"]
  },
  {
    id: 107,
    name: "Rainforest Green Marble",
    slug: "rainforest-green-marble",
    categorySlug: "marble",
    subcategorySlug: "rainforest-green-marble",
    image: "Rainforest green.png",
    images: ["Rainforest green.png"],
    category: getCategory("marble"),
    subcategory: getSubcategory("marble", "rainforest-green-marble"),
    shortDescription: "Stunning marble with green base and rainforest-like patterns.",
    description: "Rainforest Green Marble is a stunning natural stone featuring a rich green base with intricate rainforest-like patterns. This exotic marble variety brings the beauty of nature indoors, creating a refreshing and luxurious atmosphere.",
    features: ["Rich green base color", "Intricate rainforest-like patterns", "Exotic and refreshing appearance", "Highly durable and premium quality", "Unique and eye-catching"],
    benefits: ["Brings the beauty of nature indoors", "Creates refreshing and luxurious interiors", "Unique natural patterns ensure exclusivity", "Timeless beauty that stands out", "Adds sophistication and value"],
    applications: ["Feature walls", "Kitchen countertops", "Bathroom vanities", "Flooring", "Tabletops", "Bar tops", "Luxury decorative elements"],
    maintenance: "Clean with pH-neutral cleaner, avoid harsh chemicals, wipe spills immediately, seal annually.",
    whyChoose: "Rainforest Green Marble offers an exotic and refreshing appearance that transforms any space into a luxurious, nature-inspired environment.",
    metaTitle: "Rainforest Green Marble | Exotic Nature-Inspired Stone",
    metaDescription: "Discover Rainforest Green Marble with rich green base and rainforest-like patterns. Perfect for nature-inspired luxury interiors.",
    keywords: ["Rainforest Green Marble", "Marble", "Exotic Stone", "Nature-Inspired Stone"],
    imageAlt: "Stunning Rainforest Green Marble with nature-inspired patterns",
    tags: ["Rainforest Green Marble", "Marble", "Exotic Stone", "Nature-Inspired Stone"]
  },
  {
    id: 108,
    name: "Wonder Marble",
    slug: "wonder-marble",
    categorySlug: "marble",
    subcategorySlug: "wonder-marble",
    image: "Wonder marble.png",
    images: ["Wonder marble.png"],
    category: getCategory("marble"),
    subcategory: getSubcategory("marble", "wonder-marble"),
    shortDescription: "Beautiful marble with wonderous patterns and warm tones.",
    description: "Wonder Marble is a beautiful natural stone featuring wonderous patterns and warm tones that create a magical appearance. This unique marble variety is perfect for creating enchanting and elegant interiors.",
    features: ["Warm beige and cream tones", "Wonderous natural patterns", "Unique and magical appearance", "Highly durable and premium quality", "Elegant and timeless"],
    benefits: ["Creates enchanting and magical interiors", "Perfect for elegant and unique designs", "Unique natural patterns ensure exclusivity", "Timeless beauty that lasts", "Adds elegance and value to property"],
    applications: ["Flooring", "Wall cladding", "Kitchen countertops", "Bathroom vanities", "Fireplace surrounds", "Decorative elements"],
    maintenance: "Clean with pH-neutral cleaner, avoid harsh chemicals, wipe spills immediately, seal annually.",
    whyChoose: "Wonder Marble offers a unique and magical appearance that transforms any space into an enchanting and elegant environment.",
    metaTitle: "Wonder Marble | Unique Magical Stone",
    metaDescription: "Explore Wonder Marble with wonderous patterns and warm tones. Perfect for enchanting elegant interiors.",
    keywords: ["Wonder Marble", "Marble", "Unique Stone", "Elegant Stone"],
    imageAlt: "Beautiful Wonder Marble with wonderous patterns",
    tags: ["Wonder Marble", "Marble", "Unique Stone", "Elegant Stone"]
  },

  // Granite
  {
    id: 201,
    name: "Absolute Black Granite",
    slug: "absolute-black-granite",
    categorySlug: "granite",
    subcategorySlug: "absolute-black-granite",
    image: "Absolute black granite.png",
    images: ["Absolute black granite.png"],
    category: getCategory("granite"),
    subcategory: getSubcategory("granite", "absolute-black-granite"),
    shortDescription: "Premium black granite with deep uniform black color.",
    description: "Absolute Black Granite is a premium natural stone featuring a deep, uniform black color with a highly polished finish. This granite variety is perfect for creating sleek, modern, and sophisticated interiors.",
    features: ["Deep uniform black color", "Highly polished mirror-like finish", "Extremely durable and scratch-resistant", "Low porosity and water-resistant", "Sleek and modern appearance"],
    benefits: ["Sleek modern appearance that complements any design", "Extremely low maintenance", "Highly durable for high-traffic areas", "Resistant to scratches, heat, and stains", "Timeless and sophisticated look"],
    applications: ["Kitchen countertops", "Bathroom vanities", "Flooring", "Staircases", "Tabletops", "Bar tops", "Both interior and exterior"],
    maintenance: "Clean with mild soap and water, avoid harsh chemicals, wipe spills immediately.",
    whyChoose: "Absolute Black Granite offers a sleek, modern look with exceptional durability, making it perfect for both residential and commercial applications.",
    metaTitle: "Absolute Black Granite | Premium Modern Stone",
    metaDescription: "Discover Absolute Black Granite with deep uniform black color. Perfect for sleek modern interiors and high-traffic areas.",
    keywords: ["Absolute Black Granite", "Black Granite", "Granite", "Modern Stone"],
    imageAlt: "Premium Absolute Black Granite with deep black color",
    tags: ["Absolute Black Granite", "Black Granite", "Granite", "Modern Stone"]
  },
  {
    id: 202,
    name: "Black Galaxy Granite",
    slug: "black-galaxy-granite",
    categorySlug: "granite",
    subcategorySlug: "black-galaxy-granite",
    image: "Black galaxy granite.png",
    images: ["Black galaxy granite.png"],
    category: getCategory("granite"),
    subcategory: getSubcategory("granite", "black-galaxy-granite"),
    shortDescription: "Stunning granite with black base and sparkling golden flecks.",
    description: "Black Galaxy Granite is a stunning natural stone featuring a deep black base with sparkling golden and silver flecks that resemble a starry galaxy. This exotic granite variety creates breathtaking focal points in any space.",
    features: ["Deep black base color", "Sparkling golden and silver flecks", "Galaxy-like sparkling appearance", "Highly durable and premium quality", "Exotic and eye-catching"],
    benefits: ["Creates stunning and dramatic focal points", "Perfect for luxury and exotic designs", "Highly durable and low maintenance", "Unique sparkling appearance", "Adds luxury and sophistication"],
    applications: ["Kitchen countertops", "Bathroom vanities", "Feature walls", "Tabletops", "Bar tops", "Luxury decorative applications"],
    maintenance: "Clean with mild soap and water, avoid harsh chemicals, wipe spills immediately.",
    whyChoose: "Black Galaxy Granite offers a unique and sparkling appearance that transforms any space into a luxurious, starry environment.",
    metaTitle: "Black Galaxy Granite | Sparkling Exotic Stone",
    metaDescription: "Explore Black Galaxy Granite with black base and sparkling golden flecks. Perfect for luxury exotic interiors.",
    keywords: ["Black Galaxy Granite", "Granite", "Exotic Stone", "Luxury Stone"],
    imageAlt: "Stunning Black Galaxy Granite with sparkling golden flecks",
    tags: ["Black Galaxy Granite", "Granite", "Exotic Stone", "Luxury Stone"]
  },
  {
    id: 203,
    name: "Kashmir White Granite",
    slug: "kashmir-white-granite",
    categorySlug: "granite",
    subcategorySlug: "kashmir-white-granite",
    image: "Kashmir white granite.png",
    images: ["Kashmir white granite.png"],
    category: getCategory("granite"),
    subcategory: getSubcategory("granite", "kashmir-white-granite"),
    shortDescription: "Beautiful white granite with gray and black specks.",
    description: "Kashmir White Granite is a beautiful natural stone featuring a white base with delicate gray and black specks. This granite variety is perfect for creating bright, clean, and elegant interiors.",
    features: ["Bright white base color", "Delicate gray and black specks", "Clean and elegant appearance", "Highly durable and versatile", "Timeless and classic"],
    benefits: ["Brightens up any interior space", "Perfect for both classic and modern designs", "Highly durable and low maintenance", "Versatile and complements any decor", "Adds elegance and value"],
    applications: ["Kitchen countertops", "Bathroom vanities", "Flooring", "Wall cladding", "Tabletops", "Both residential and commercial"],
    maintenance: "Clean with mild soap and water, avoid harsh chemicals, wipe spills immediately.",
    whyChoose: "Kashmir White Granite offers a bright, clean, and elegant look that complements any design style, making it perfect for any space.",
    metaTitle: "Kashmir White Granite | Bright Elegant Stone",
    metaDescription: "Discover Kashmir White Granite with white base and gray-black specks. Perfect for bright elegant interiors.",
    keywords: ["Kashmir White Granite", "White Granite", "Granite", "Elegant Stone"],
    imageAlt: "Beautiful Kashmir White Granite with gray and black specks",
    tags: ["Kashmir White Granite", "White Granite", "Granite", "Elegant Stone"]
  },
  {
    id: 204,
    name: "Colonial White Granite",
    slug: "colonial-white-granite",
    categorySlug: "granite",
    subcategorySlug: "colonial-white-granite",
    image: "Colonial white granite.png",
    images: ["Colonial white granite.png"],
    category: getCategory("granite"),
    subcategory: getSubcategory("granite", "colonial-white-granite"),
    shortDescription: "Warm white granite with subtle gray and black patterns.",
    description: "Colonial White Granite is a warm and inviting natural stone featuring a white base with subtle gray and black patterns. This granite variety is perfect for creating cozy, traditional, and elegant interiors.",
    features: ["Warm white base color", "Subtle gray and black patterns", "Warm and inviting appearance", "Highly durable and versatile", "Timeless and classic"],
    benefits: ["Adds warmth and coziness to interiors", "Perfect for traditional and classic designs", "Highly durable and low maintenance", "Versatile and complements any decor", "Timeless and elegant look"],
    applications: ["Kitchen countertops", "Bathroom vanities", "Flooring", "Wall cladding", "Fireplace surrounds", "Residential applications"],
    maintenance: "Clean with mild soap and water, avoid harsh chemicals, wipe spills immediately.",
    whyChoose: "Colonial White Granite offers a warm, inviting, and classic look that creates cozy and elegant interiors.",
    metaTitle: "Colonial White Granite | Warm Classic Stone",
    metaDescription: "Explore Colonial White Granite with warm white base and subtle patterns. Perfect for cozy traditional interiors.",
    keywords: ["Colonial White Granite", "White Granite", "Granite", "Classic Stone"],
    imageAlt: "Warm Colonial White Granite with subtle gray and black patterns",
    tags: ["Colonial White Granite", "White Granite", "Granite", "Classic Stone"]
  },
  {
    id: 205,
    name: "Sira Grey Granite",
    slug: "sira-grey-granite",
    categorySlug: "granite",
    subcategorySlug: "sira-grey-granite",
    image: "Sira grey granite.png",
    images: ["Sira grey granite.png"],
    category: getCategory("granite"),
    subcategory: getSubcategory("granite", "sira-grey-granite"),
    shortDescription: "Sophisticated grey granite with natural patterns.",
    description: "Sira Grey Granite is a sophisticated natural stone featuring a grey base with natural patterns. This granite variety is perfect for creating modern, elegant, and contemporary interiors.",
    features: ["Sophisticated grey base color", "Natural patterns and variations", "Modern and elegant appearance", "Highly durable and versatile", "Timeless and contemporary"],
    benefits: ["Perfect for modern and contemporary designs", "Versatile and elegant", "Highly durable and low maintenance", "Complements any decor style", "Adds sophistication and value"],
    applications: ["Kitchen countertops", "Bathroom vanities", "Flooring", "Wall cladding", "Tabletops", "Both residential and commercial"],
    maintenance: "Clean with mild soap and water, avoid harsh chemicals, wipe spills immediately.",
    whyChoose: "Sira Grey Granite offers a sophisticated, modern, and elegant look that complements any contemporary design style.",
    metaTitle: "Sira Grey Granite | Sophisticated Modern Stone",
    metaDescription: "Discover Sira Grey Granite with sophisticated grey base and natural patterns. Perfect for modern elegant interiors.",
    keywords: ["Sira Grey Granite", "Grey Granite", "Granite", "Modern Stone"],
    imageAlt: "Sophisticated Sira Grey Granite with natural patterns",
    tags: ["Sira Grey Granite", "Grey Granite", "Granite", "Modern Stone"]
  },
  {
    id: 206,
    name: "Crystal Blue Granite",
    slug: "crystal-blue-granite",
    categorySlug: "granite",
    subcategorySlug: "crystal-blue-granite",
    image: "Crystal blue granite.png",
    images: ["Crystal blue granite.png"],
    category: getCategory("granite"),
    subcategory: getSubcategory("granite", "crystal-blue-granite"),
    shortDescription: "Stunning granite with blue tones and crystal-like patterns.",
    description: "Crystal Blue Granite is a stunning natural stone featuring blue tones and crystal-like patterns. This exotic granite variety creates unique and eye-catching interiors that stand out.",
    features: ["Beautiful blue tones", "Crystal-like patterns", "Unique and exotic appearance", "Highly durable and premium quality", "Eye-catching and dramatic"],
    benefits: ["Creates unique and eye-catching focal points", "Perfect for luxury and exotic designs", "Highly durable and low maintenance", "Unique blue color and patterns", "Adds luxury and sophistication"],
    applications: ["Kitchen countertops", "Bathroom vanities", "Feature walls", "Tabletops", "Bar tops", "Luxury decorative applications"],
    maintenance: "Clean with mild soap and water, avoid harsh chemicals, wipe spills immediately.",
    whyChoose: "Crystal Blue Granite offers a unique, exotic, and eye-catching appearance that transforms any space into a luxurious environment.",
    metaTitle: "Crystal Blue Granite | Unique Exotic Stone",
    metaDescription: "Explore Crystal Blue Granite with blue tones and crystal-like patterns. Perfect for unique exotic interiors.",
    keywords: ["Crystal Blue Granite", "Blue Granite", "Granite", "Exotic Stone"],
    imageAlt: "Stunning Crystal Blue Granite with blue tones and crystal patterns",
    tags: ["Crystal Blue Granite", "Blue Granite", "Granite", "Exotic Stone"]
  },
  {
    id: 207,
    name: "Crystal Yellow Granite",
    slug: "crystal-yellow-granite",
    categorySlug: "granite",
    subcategorySlug: "crystal-yellow-granite",
    image: "Crystal yellow granite.png",
    images: ["Crystal yellow granite.png"],
    category: getCategory("granite"),
    subcategory: getSubcategory("granite", "crystal-yellow-granite"),
    shortDescription: "Warm yellow granite with crystal-like patterns.",
    description: "Crystal Yellow Granite is a warm and cheerful natural stone featuring a yellow base with crystal-like patterns. This granite variety is perfect for creating bright, sunny, and inviting interiors.",
    features: ["Warm yellow base color", "Crystal-like patterns", "Bright and cheerful appearance", "Highly durable and versatile", "Warm and inviting"],
    benefits: ["Brightens up any interior space", "Creates warm and cheerful interiors", "Highly durable and low maintenance", "Versatile and complements any decor", "Adds warmth and value"],
    applications: ["Kitchen countertops", "Bathroom vanities", "Flooring", "Wall cladding", "Tabletops", "Residential applications"],
    maintenance: "Clean with mild soap and water, avoid harsh chemicals, wipe spills immediately.",
    whyChoose: "Crystal Yellow Granite offers a warm, cheerful, and bright look that creates sunny and inviting interiors.",
    metaTitle: "Crystal Yellow Granite | Warm Cheerful Stone",
    metaDescription: "Discover Crystal Yellow Granite with warm yellow base and crystal-like patterns. Perfect for bright cheerful interiors.",
    keywords: ["Crystal Yellow Granite", "Yellow Granite", "Granite", "Warm Stone"],
    imageAlt: "Warm Crystal Yellow Granite with crystal-like patterns",
    tags: ["Crystal Yellow Granite", "Yellow Granite", "Granite", "Warm Stone"]
  },
  {
    id: 208,
    name: "Crystal Brown Granite",
    slug: "crystal-brown-granite",
    categorySlug: "granite",
    subcategorySlug: "crystal-brown-granite",
    image: "Crystal brown granite.png",
    images: ["Crystal brown granite.png"],
    category: getCategory("granite"),
    subcategory: getSubcategory("granite", "crystal-brown-granite"),
    shortDescription: "Rich brown granite with crystal-like patterns.",
    description: "Crystal Brown Granite is a rich and inviting natural stone featuring a brown base with crystal-like patterns. This granite variety is perfect for creating warm, cozy, and rustic interiors.",
    features: ["Rich brown base color", "Crystal-like patterns", "Warm and cozy appearance", "Highly durable and versatile", "Rustic and inviting"],
    benefits: ["Adds warmth and coziness to interiors", "Perfect for rustic and traditional designs", "Highly durable and low maintenance", "Versatile and complements any decor", "Timeless and elegant look"],
    applications: ["Kitchen countertops", "Bathroom vanities", "Flooring", "Wall cladding", "Fireplace surrounds", "Residential applications"],
    maintenance: "Clean with mild soap and water, avoid harsh chemicals, wipe spills immediately.",
    whyChoose: "Crystal Brown Granite offers a warm, cozy, and rustic look that creates inviting and comfortable interiors.",
    metaTitle: "Crystal Brown Granite | Warm Rustic Stone",
    metaDescription: "Explore Crystal Brown Granite with rich brown base and crystal-like patterns. Perfect for warm rustic interiors.",
    keywords: ["Crystal Brown Granite", "Brown Granite", "Granite", "Rustic Stone"],
    imageAlt: "Rich Crystal Brown Granite with crystal-like patterns",
    tags: ["Crystal Brown Granite", "Brown Granite", "Granite", "Rustic Stone"]
  },
  {
    id: 209,
    name: "Rajasthan Black Granite",
    slug: "rajasthan-black-granite",
    categorySlug: "granite",
    subcategorySlug: "rajasthan-black-granite",
    image: "Rajasthan black granite.png",
    images: ["Rajasthan black granite.png"],
    category: getCategory("granite"),
    subcategory: getSubcategory("granite", "rajasthan-black-granite"),
    shortDescription: "Premium black granite quarried in Rajasthan, India.",
    description: "Rajasthan Black Granite is a premium natural stone quarried in Rajasthan, India. Featuring a deep black color with subtle natural variations, this granite variety is perfect for creating luxurious and sophisticated interiors.",
    features: ["Deep black base color", "Premium Indian granite quality", "Highly durable and consistent", "Sleek and modern appearance", "Timeless and elegant"],
    benefits: ["Perfect for luxury and sophisticated designs", "Highly durable and low maintenance", "Premium Indian granite quality", "Adds sophistication and value", "Timeless and elegant look"],
    applications: ["Kitchen countertops", "Bathroom vanities", "Flooring", "Staircases", "Tabletops", "Bar tops", "Both interior and exterior"],
    maintenance: "Clean with mild soap and water, avoid harsh chemicals, wipe spills immediately.",
    whyChoose: "Rajasthan Black Granite offers premium quality and a deep black color that adds sophistication and luxury to any space.",
    metaTitle: "Rajasthan Black Granite | Premium Indian Stone",
    metaDescription: "Discover Rajasthan Black Granite, premium Indian black granite. Perfect for luxury sophisticated interiors.",
    keywords: ["Rajasthan Black Granite", "Black Granite", "Indian Granite", "Premium Stone"],
    imageAlt: "Premium Rajasthan Black Granite quarried in India",
    tags: ["Rajasthan Black Granite", "Black Granite", "Indian Granite", "Premium Stone"]
  },
  {
    id: 210,
    name: "Chima Pink Granite",
    slug: "chima-pink-granite",
    categorySlug: "granite",
    subcategorySlug: "chima-pink-granite",
    image: "Chima pink granite.png",
    images: ["Chima pink granite.png"],
    category: getCategory("granite"),
    subcategory: getSubcategory("granite", "chima-pink-granite"),
    shortDescription: "Unique pink granite with distinctive patterns.",
    description: "Chima Pink Granite is a unique and eye-catching natural stone featuring a pink base with distinctive patterns. This granite variety is perfect for creating unique and feminine interiors.",
    features: ["Beautiful pink base color", "Distinctive natural patterns", "Unique and eye-catching appearance", "Highly durable and versatile", "Warm and feminine"],
    benefits: ["Creates unique and eye-catching focal points", "Perfect for feminine and unique designs", "Highly durable and low maintenance", "Unique pink color and patterns", "Adds warmth and value"],
    applications: ["Kitchen countertops", "Bathroom vanities", "Feature walls", "Tabletops", "Decorative elements", "Residential applications"],
    maintenance: "Clean with mild soap and water, avoid harsh chemicals, wipe spills immediately.",
    whyChoose: "Chima Pink Granite offers a unique, eye-catching, and feminine appearance that creates beautiful and distinctive interiors.",
    metaTitle: "Chima Pink Granite | Unique Eye-Catching Stone",
    metaDescription: "Explore Chima Pink Granite with pink base and distinctive patterns. Perfect for unique feminine interiors.",
    keywords: ["Chima Pink Granite", "Pink Granite", "Granite", "Unique Stone"],
    imageAlt: "Unique Chima Pink Granite with distinctive patterns",
    tags: ["Chima Pink Granite", "Pink Granite", "Granite", "Unique Stone"]
  },
  {
    id: 211,
    name: "Multi Red Granite",
    slug: "multi-red-granite",
    categorySlug: "granite",
    subcategorySlug: "multi-red-granite",
    image: "Multi red.png",
    images: ["Multi red.png"],
    category: getCategory("granite"),
    subcategory: getSubcategory("granite", "multi-red-granite"),
    shortDescription: "Vibrant granite with multiple red tones and patterns.",
    description: "Multi Red Granite is a vibrant and dynamic natural stone featuring multiple red tones and patterns. This granite variety is perfect for creating bold, dramatic, and eye-catching interiors.",
    features: ["Vibrant multiple red tones", "Dynamic natural patterns", "Bold and dramatic appearance", "Highly durable and versatile", "Eye-catching and unique"],
    benefits: ["Creates bold and dramatic focal points", "Perfect for vibrant and unique designs", "Highly durable and low maintenance", "Dynamic red tones and patterns", "Adds energy and value"],
    applications: ["Kitchen countertops", "Bathroom vanities", "Feature walls", "Flooring", "Tabletops", "Bar tops", "Decorative applications"],
    maintenance: "Clean with mild soap and water, avoid harsh chemicals, wipe spills immediately.",
    whyChoose: "Multi Red Granite offers a vibrant, bold, and dramatic appearance that creates dynamic and eye-catching interiors.",
    metaTitle: "Multi Red Granite | Vibrant Dramatic Stone",
    metaDescription: "Discover Multi Red Granite with multiple red tones and patterns. Perfect for bold dramatic interiors.",
    keywords: ["Multi Red Granite", "Red Granite", "Granite", "Vibrant Stone"],
    imageAlt: "Vibrant Multi Red Granite with multiple red tones",
    tags: ["Multi Red Granite", "Red Granite", "Granite", "Vibrant Stone"]
  },

  // Basalt
  {
    id: 701,
    name: "Basalt",
    slug: "basalt",
    categorySlug: "basalt-stone",
    subcategorySlug: "basalt",
    image: "Basalt.png",
    images: ["Basalt.png", "Basalt 1.png"],
    category: getCategory("basalt-stone"),
    subcategory: getSubcategory("basalt-stone", "basalt"),
    shortDescription: "Dark volcanic rock with fine-grained texture, perfect for modern designs.",
    description: "Basalt is a dark volcanic rock with a fine-grained texture, formed from rapidly cooled lava. This natural stone is known for its durability, density, and sleek appearance, making it perfect for both interior and exterior applications.",
    features: ["Dark gray to black color", "Fine-grained dense texture", "Extremely durable and hard", "Weather-resistant for outdoor use", "Modern and sleek appearance"],
    benefits: ["Perfect for modern and contemporary designs", "Extremely durable and long-lasting", "Weather-resistant for outdoor use", "Low maintenance and easy to clean", "Adds modern sophistication to any space"],
    applications: ["Flooring", "Wall cladding", "Paving", "Landscaping", "Architectural elements", "Kitchen countertops", "Both interior and exterior"],
    maintenance: "Clean with mild soap and water, seal periodically for outdoor use.",
    whyChoose: "Basalt offers a sleek, modern, and durable option for both interior and exterior applications, perfect for contemporary design styles.",
    metaTitle: "Basalt | Dark Volcanic Rock for Modern Designs",
    metaDescription: "Discover Basalt, dark volcanic rock with fine-grained texture. Perfect for modern interior and exterior designs.",
    keywords: ["Basalt", "Volcanic Rock", "Natural Stone", "Modern Stone"],
    imageAlt: "Dark Basalt volcanic rock with fine-grained texture",
    tags: ["Basalt", "Volcanic Rock", "Natural Stone", "Modern Stone"]
  },

  // Sandstone
  {
    id: 301,
    name: "Beige Sandstone",
    slug: "beige-sandstone",
    categorySlug: "sandstone",
    subcategorySlug: null,
    image: "Beige sandstone.png",
    images: ["Beige sandstone.png"],
    category: getCategory("sandstone"),
    subcategory: null,
    shortDescription: "Warm beige sandstone with natural texture, perfect for traditional and rustic designs.",
    description: "Beige Sandstone is a beautiful natural stone featuring a warm beige base color with a natural, textured surface. Quarried from premium locations, this sandstone variety offers a timeless and rustic appearance that adds warmth and character to any space. Perfect for both interior and exterior applications, Beige Sandstone is highly durable and weather-resistant, making it ideal for a wide range of uses.",
    features: ["Warm beige base color", "Natural textured surface", "Highly durable and weather-resistant", "Perfect for both interior and exterior", "Timeless and rustic appearance"],
    benefits: ["Adds warmth and character to any space", "Perfect for traditional and rustic designs", "Highly durable for outdoor use", "Low maintenance and easy to care for", "Natural variations ensure unique appearance"],
    applications: ["Flooring", "Wall cladding", "Paving", "Landscaping", "Fireplace surrounds", "Architectural elements", "Both interior and exterior"],
    maintenance: "Clean with mild soap and water, seal periodically for outdoor use.",
    whyChoose: "Beige Sandstone offers a warm, rustic, and timeless look that adds character and charm to any space, perfect for traditional and nature-inspired designs.",
    metaTitle: "Beige Sandstone | Warm Rustic Natural Stone",
    metaDescription: "Discover Beige Sandstone with warm beige base and natural texture. Perfect for traditional and rustic designs.",
    keywords: ["Beige Sandstone", "Sandstone", "Natural Stone", "Rustic Stone"],
    imageAlt: "Warm Beige Sandstone with natural texture",
    tags: ["Beige Sandstone", "Sandstone", "Natural Stone", "Rustic Stone"]
  },
  {
    id: 302,
    name: "Mint Sandstone",
    slug: "mint-sandstone",
    categorySlug: "sandstone",
    subcategorySlug: null,
    image: "Mint sandstone.png",
    images: ["Mint sandstone.png"],
    category: getCategory("sandstone"),
    subcategory: null,
    shortDescription: "Refreshing mint green sandstone with natural texture, perfect for modern and contemporary designs.",
    description: "Mint Sandstone is a stunning natural stone featuring a refreshing mint green base color with a natural, textured surface. This unique sandstone variety offers a modern and contemporary appearance that brings a fresh and vibrant look to any space. Perfect for both interior and exterior applications, Mint Sandstone is highly durable and weather-resistant, making it ideal for a wide range of uses.",
    features: ["Refreshing mint green base color", "Natural textured surface", "Highly durable and weather-resistant", "Perfect for both interior and exterior", "Modern and contemporary appearance"],
    benefits: ["Brings fresh and vibrant look to any space", "Perfect for modern and contemporary designs", "Highly durable for outdoor use", "Low maintenance and easy to care for", "Unique color ensures eye-catching appearance"],
    applications: ["Flooring", "Wall cladding", "Paving", "Landscaping", "Feature walls", "Architectural elements", "Both interior and exterior"],
    maintenance: "Clean with mild soap and water, seal periodically for outdoor use.",
    whyChoose: "Mint Sandstone offers a fresh, vibrant, and modern look that brings a unique and contemporary style to any space.",
    metaTitle: "Mint Sandstone | Fresh Modern Natural Stone",
    metaDescription: "Discover Mint Sandstone with refreshing mint green base and natural texture. Perfect for modern contemporary designs.",
    keywords: ["Mint Sandstone", "Sandstone", "Natural Stone", "Modern Stone"],
    imageAlt: "Refreshing Mint Sandstone with natural texture",
    tags: ["Mint Sandstone", "Sandstone", "Natural Stone", "Modern Stone"]
  },
  {
    id: 303,
    name: "Pink Sandstone",
    slug: "pink-sandstone",
    categorySlug: "sandstone",
    subcategorySlug: null,
    image: "Pink sandstone.png",
    images: ["Pink sandstone.png"],
    category: getCategory("sandstone"),
    subcategory: null,
    shortDescription: "Beautiful pink sandstone with natural texture, perfect for elegant and feminine designs.",
    description: "Pink Sandstone is a beautiful natural stone featuring a soft pink base color with a natural, textured surface. This elegant sandstone variety offers a feminine and sophisticated appearance that adds charm and elegance to any space. Perfect for both interior and exterior applications, Pink Sandstone is highly durable and weather-resistant, making it ideal for a wide range of uses.",
    features: ["Soft pink base color", "Natural textured surface", "Highly durable and weather-resistant", "Perfect for both interior and exterior", "Elegant and feminine appearance"],
    benefits: ["Adds charm and elegance to any space", "Perfect for elegant and feminine designs", "Highly durable for outdoor use", "Low maintenance and easy to care for", "Unique color ensures distinctive appearance"],
    applications: ["Flooring", "Wall cladding", "Paving", "Landscaping", "Decorative elements", "Architectural elements", "Both interior and exterior"],
    maintenance: "Clean with mild soap and water, seal periodically for outdoor use.",
    whyChoose: "Pink Sandstone offers an elegant, feminine, and charming look that adds sophistication and beauty to any space.",
    metaTitle: "Pink Sandstone | Elegant Feminine Natural Stone",
    metaDescription: "Discover Pink Sandstone with soft pink base and natural texture. Perfect for elegant feminine designs.",
    keywords: ["Pink Sandstone", "Sandstone", "Natural Stone", "Elegant Stone"],
    imageAlt: "Beautiful Pink Sandstone with natural texture",
    tags: ["Pink Sandstone", "Sandstone", "Natural Stone", "Elegant Stone"]
  },
  {
    id: 304,
    name: "Rainbow Sandstone",
    slug: "rainbow-sandstone",
    categorySlug: "sandstone",
    subcategorySlug: null,
    image: "Rainbow sandstone.png",
    images: ["Rainbow sandstone.png"],
    category: getCategory("sandstone"),
    subcategory: null,
    shortDescription: "Vibrant rainbow-colored sandstone with natural patterns, perfect for bold and unique designs.",
    description: "Rainbow Sandstone is a vibrant and dynamic natural stone featuring multiple colors that resemble a rainbow, with natural patterns and variations. This unique sandstone variety offers a bold and eye-catching appearance that creates stunning focal points in any space. Perfect for both interior and exterior applications, Rainbow Sandstone is highly durable and weather-resistant, making it ideal for a wide range of uses.",
    features: ["Vibrant rainbow-colored patterns", "Natural textured surface", "Highly durable and weather-resistant", "Perfect for both interior and exterior", "Bold and eye-catching appearance"],
    benefits: ["Creates stunning and bold focal points", "Perfect for unique and vibrant designs", "Highly durable for outdoor use", "Low maintenance and easy to care for", "Unique patterns ensure one-of-a-kind appearance"],
    applications: ["Flooring", "Feature walls", "Paving", "Landscaping", "Decorative elements", "Architectural accents", "Both interior and exterior"],
    maintenance: "Clean with mild soap and water, seal periodically for outdoor use.",
    whyChoose: "Rainbow Sandstone offers a vibrant, bold, and unique look that creates stunning and dynamic focal points in any space.",
    metaTitle: "Rainbow Sandstone | Vibrant Unique Natural Stone",
    metaDescription: "Discover Rainbow Sandstone with vibrant rainbow patterns and natural texture. Perfect for bold unique designs.",
    keywords: ["Rainbow Sandstone", "Sandstone", "Natural Stone", "Vibrant Stone"],
    imageAlt: "Vibrant Rainbow Sandstone with natural patterns",
    tags: ["Rainbow Sandstone", "Sandstone", "Natural Stone", "Vibrant Stone"]
  },
  {
    id: 305,
    name: "Red Sandstone",
    slug: "red-sandstone",
    categorySlug: "sandstone",
    subcategorySlug: null,
    image: "Red sandstone.png",
    images: ["Red sandstone.png"],
    category: getCategory("sandstone"),
    subcategory: null,
    shortDescription: "Rich red sandstone with natural texture, perfect for traditional and heritage designs.",
    description: "Red Sandstone is a rich and vibrant natural stone featuring a deep red base color with a natural, textured surface. This classic sandstone variety offers a traditional and heritage appearance that adds warmth and grandeur to any space. Perfect for both interior and exterior applications, Red Sandstone is highly durable and weather-resistant, making it ideal for a wide range of uses.",
    features: ["Rich red base color", "Natural textured surface", "Highly durable and weather-resistant", "Perfect for both interior and exterior", "Traditional and heritage appearance"],
    benefits: ["Adds warmth and grandeur to any space", "Perfect for traditional and heritage designs", "Highly durable for outdoor use", "Low maintenance and easy to care for", "Classic color ensures timeless appearance"],
    applications: ["Flooring", "Wall cladding", "Paving", "Landscaping", "Architectural elements", "Heritage projects", "Both interior and exterior"],
    maintenance: "Clean with mild soap and water, seal periodically for outdoor use.",
    whyChoose: "Red Sandstone offers a rich, traditional, and heritage look that adds warmth and grandeur to any space.",
    metaTitle: "Red Sandstone | Rich Traditional Natural Stone",
    metaDescription: "Discover Red Sandstone with rich red base and natural texture. Perfect for traditional heritage designs.",
    keywords: ["Red Sandstone", "Sandstone", "Natural Stone", "Traditional Stone"],
    imageAlt: "Rich Red Sandstone with natural texture",
    tags: ["Red Sandstone", "Sandstone", "Natural Stone", "Traditional Stone"]
  },
  {
    id: 306,
    name: "Teak Sandstone",
    slug: "teak-sandstone",
    categorySlug: "sandstone",
    subcategorySlug: null,
    image: "Teak sandstone.png",
    images: ["Teak sandstone.png"],
    category: getCategory("sandstone"),
    subcategory: null,
    shortDescription: "Warm teak-colored sandstone with natural texture, perfect for warm and inviting designs.",
    description: "Teak Sandstone is a warm and inviting natural stone featuring a teak brown base color with a natural, textured surface that resembles wood grain. This beautiful sandstone variety offers a warm and cozy appearance that adds comfort and charm to any space. Perfect for both interior and exterior applications, Teak Sandstone is highly durable and weather-resistant, making it ideal for a wide range of uses.",
    features: ["Warm teak brown base color", "Natural wood-grain texture", "Highly durable and weather-resistant", "Perfect for both interior and exterior", "Warm and cozy appearance"],
    benefits: ["Adds warmth and comfort to any space", "Perfect for warm and inviting designs", "Highly durable for outdoor use", "Low maintenance and easy to care for", "Unique wood-like texture ensures distinctive appearance"],
    applications: ["Flooring", "Wall cladding", "Paving", "Landscaping", "Fireplace surrounds", "Architectural elements", "Both interior and exterior"],
    maintenance: "Clean with mild soap and water, seal periodically for outdoor use.",
    whyChoose: "Teak Sandstone offers a warm, cozy, and inviting look that adds comfort and charm to any space, with a unique wood-like texture.",
    metaTitle: "Teak Sandstone | Warm Inviting Natural Stone",
    metaDescription: "Discover Teak Sandstone with warm teak base and natural wood-like texture. Perfect for warm inviting designs.",
    keywords: ["Teak Sandstone", "Sandstone", "Natural Stone", "Warm Stone"],
    imageAlt: "Warm Teak Sandstone with natural wood-like texture",
    tags: ["Teak Sandstone", "Sandstone", "Natural Stone", "Warm Stone"]
  },

  // Limestone
  {
    id: 401,
    name: "Black Limestone",
    slug: "black-limestone",
    categorySlug: "limestone",
    subcategorySlug: null,
    image: "Black limestone.png",
    images: ["Black limestone.png"],
    category: getCategory("limestone"),
    subcategory: null,
    shortDescription: "Elegant black limestone with natural texture, perfect for modern and sophisticated designs.",
    description: "Black Limestone is an elegant and sophisticated natural stone featuring a deep black base color with a natural, textured surface. This premium limestone variety offers a modern and sleek appearance that adds luxury and refinement to any space. Perfect for both interior and exterior applications, Black Limestone is highly durable and weather-resistant, making it ideal for a wide range of uses.",
    features: ["Deep black base color", "Natural textured surface", "Highly durable and weather-resistant", "Perfect for both interior and exterior", "Modern and sophisticated appearance"],
    benefits: ["Adds luxury and refinement to any space", "Perfect for modern and sophisticated designs", "Highly durable for outdoor use", "Low maintenance and easy to care for", "Sleek color ensures timeless appearance"],
    applications: ["Flooring", "Wall cladding", "Paving", "Landscaping", "Kitchen countertops", "Architectural elements", "Both interior and exterior"],
    maintenance: "Clean with mild soap and water, seal periodically for outdoor use.",
    whyChoose: "Black Limestone offers an elegant, modern, and sophisticated look that adds luxury and refinement to any space.",
    metaTitle: "Black Limestone | Elegant Modern Natural Stone",
    metaDescription: "Discover Black Limestone with deep black base and natural texture. Perfect for modern sophisticated designs.",
    keywords: ["Black Limestone", "Limestone", "Natural Stone", "Modern Stone"],
    imageAlt: "Elegant Black Limestone with natural texture",
    tags: ["Black Limestone", "Limestone", "Natural Stone", "Modern Stone"]
  },
  {
    id: 402,
    name: "Gold Limestone",
    slug: "gold-limestone",
    categorySlug: "limestone",
    subcategorySlug: null,
    image: "Gold limestone.png",
    images: ["Gold limestone.png"],
    category: getCategory("limestone"),
    subcategory: null,
    shortDescription: "Luxurious gold limestone with natural texture, perfect for premium and elegant designs.",
    description: "Gold Limestone is a luxurious and elegant natural stone featuring a warm gold base color with a natural, textured surface. This premium limestone variety offers a rich and sophisticated appearance that adds opulence and grandeur to any space. Perfect for both interior and exterior applications, Gold Limestone is highly durable and weather-resistant, making it ideal for a wide range of uses.",
    features: ["Warm gold base color", "Natural textured surface", "Highly durable and weather-resistant", "Perfect for both interior and exterior", "Luxurious and elegant appearance"],
    benefits: ["Adds opulence and grandeur to any space", "Perfect for premium and elegant designs", "Highly durable for outdoor use", "Low maintenance and easy to care for", "Rich color ensures distinctive appearance"],
    applications: ["Flooring", "Wall cladding", "Paving", "Landscaping", "Kitchen countertops", "Architectural elements", "Both interior and exterior"],
    maintenance: "Clean with mild soap and water, seal periodically for outdoor use.",
    whyChoose: "Gold Limestone offers a luxurious, elegant, and opulent look that adds grandeur and sophistication to any space.",
    metaTitle: "Gold Limestone | Luxurious Elegant Natural Stone",
    metaDescription: "Discover Gold Limestone with warm gold base and natural texture. Perfect for premium elegant designs.",
    keywords: ["Gold Limestone", "Limestone", "Natural Stone", "Luxury Stone"],
    imageAlt: "Luxurious Gold Limestone with natural texture",
    tags: ["Gold Limestone", "Limestone", "Natural Stone", "Luxury Stone"]
  },
  {
    id: 403,
    name: "Kota Blue Limestone",
    slug: "kota-blue-limestone",
    categorySlug: "limestone",
    subcategorySlug: null,
    image: "Kota blue limestone.png",
    images: ["Kota blue limestone.png"],
    category: getCategory("limestone"),
    subcategory: null,
    shortDescription: "Beautiful blue limestone from Kota, perfect for cool and refreshing designs.",
    description: "Kota Blue Limestone is a beautiful natural stone quarried in Kota, India, featuring a cool blue base color with a natural, textured surface. This premium limestone variety offers a refreshing and calm appearance that brings a sense of tranquility to any space. Perfect for both interior and exterior applications, Kota Blue Limestone is highly durable and weather-resistant, making it ideal for a wide range of uses.",
    features: ["Cool blue base color", "Natural textured surface", "Highly durable and weather-resistant", "Perfect for both interior and exterior", "Refreshing and calm appearance"],
    benefits: ["Brings tranquility and calm to any space", "Perfect for cool and refreshing designs", "Highly durable for outdoor use", "Low maintenance and easy to care for", "Unique blue color ensures distinctive appearance"],
    applications: ["Flooring", "Wall cladding", "Paving", "Landscaping", "Kitchen countertops", "Architectural elements", "Both interior and exterior"],
    maintenance: "Clean with mild soap and water, seal periodically for outdoor use.",
    whyChoose: "Kota Blue Limestone offers a beautiful, cool, and refreshing look that brings tranquility and calm to any space.",
    metaTitle: "Kota Blue Limestone | Cool Refreshing Natural Stone",
    metaDescription: "Discover Kota Blue Limestone with cool blue base and natural texture. Perfect for cool refreshing designs.",
    keywords: ["Kota Blue Limestone", "Limestone", "Natural Stone", "Cool Stone"],
    imageAlt: "Beautiful Kota Blue Limestone with natural texture",
    tags: ["Kota Blue Limestone", "Limestone", "Natural Stone", "Cool Stone"]
  },
  {
    id: 404,
    name: "Yellow Limestone",
    slug: "yellow-limestone",
    categorySlug: "limestone",
    subcategorySlug: null,
    image: "Yellow limestone.png",
    images: ["Yellow limestone.png"],
    category: getCategory("limestone"),
    subcategory: null,
    shortDescription: "Warm yellow limestone with natural texture, perfect for bright and cheerful designs.",
    description: "Yellow Limestone is a warm and cheerful natural stone featuring a bright yellow base color with a natural, textured surface. This beautiful limestone variety offers a sunny and inviting appearance that brings warmth and happiness to any space. Perfect for both interior and exterior applications, Yellow Limestone is highly durable and weather-resistant, making it ideal for a wide range of uses.",
    features: ["Bright yellow base color", "Natural textured surface", "Highly durable and weather-resistant", "Perfect for both interior and exterior", "Warm and cheerful appearance"],
    benefits: ["Brings warmth and happiness to any space", "Perfect for bright and cheerful designs", "Highly durable for outdoor use", "Low maintenance and easy to care for", "Sunny color ensures uplifting appearance"],
    applications: ["Flooring", "Wall cladding", "Paving", "Landscaping", "Kitchen countertops", "Architectural elements", "Both interior and exterior"],
    maintenance: "Clean with mild soap and water, seal periodically for outdoor use.",
    whyChoose: "Yellow Limestone offers a warm, cheerful, and sunny look that brings happiness and positivity to any space.",
    metaTitle: "Yellow Limestone | Warm Cheerful Natural Stone",
    metaDescription: "Discover Yellow Limestone with bright yellow base and natural texture. Perfect for bright cheerful designs.",
    keywords: ["Yellow Limestone", "Limestone", "Natural Stone", "Warm Stone"],
    imageAlt: "Warm Yellow Limestone with natural texture",
    tags: ["Yellow Limestone", "Limestone", "Natural Stone", "Warm Stone"]
  },

  // Project Products
  {
    id: 801,
    name: "Blue Agate Stone Vanity Top",
    slug: "blue-agate-stone-vanity-top",
    categorySlug: "bathroom-stone-products",
    subcategorySlug: "stone-basins",
    image: "Blue Agate Stone Vanity Top.png",
    images: ["Blue Agate Stone Vanity Top.png"],
    category: getCategory("bathroom-stone-products"),
    subcategory: getSubcategory("bathroom-stone-products", "stone-basins"),
    shortDescription: "Stunning blue agate stone vanity top, perfect for luxury bathroom designs.",
    description: "The Blue Agate Stone Vanity Top is a stunning and luxurious piece featuring beautiful blue agate stone with natural patterns and translucent qualities. This premium vanity top offers a one-of-a-kind appearance that creates a breathtaking focal point in any bathroom. Handcrafted with precision and attention to detail, the Blue Agate Stone Vanity Top combines natural beauty with exceptional functionality, making it perfect for luxury and high-end bathroom designs.",
    features: ["Beautiful blue agate stone", "Natural patterns and translucency", "Handcrafted with precision", "Exceptional durability and functionality", "Unique and luxurious appearance"],
    benefits: ["Creates breathtaking focal points in bathrooms", "Perfect for luxury and high-end designs", "One-of-a-kind natural beauty", "Highly durable and long-lasting", "Adds opulence and sophistication to any space"],
    applications: ["Bathroom vanities", "Luxury bathrooms", "High-end residential projects", "Commercial spaces", "Interior design accents"],
    maintenance: "Clean with mild soap and water, avoid harsh chemicals, polish periodically to maintain shine.",
    whyChoose: "The Blue Agate Stone Vanity Top offers stunning, unique, and luxurious beauty that transforms any bathroom into a spa-like oasis.",
    metaTitle: "Blue Agate Stone Vanity Top | Luxury Bathroom Piece",
    metaDescription: "Discover the Blue Agate Stone Vanity Top with stunning blue agate stone. Perfect for luxury bathroom designs.",
    keywords: ["Blue Agate Vanity Top", "Vanity Top", "Luxury Stone", "Bathroom Decor"],
    imageAlt: "Stunning Blue Agate Stone Vanity Top",
    tags: ["Blue Agate Vanity Top", "Vanity Top", "Luxury Stone", "Bathroom Decor"]
  },
  {
    id: 802,
    name: "Luxury Hand-Carved Marble Mandir",
    slug: "luxury-hand-carved-marble-mandir",
    categorySlug: "interior-stone-products",
    subcategorySlug: "stone-fireplace",
    image: "Luxury Hand-Carved Marble Mandir.png",
    images: ["Luxury Hand-Carved Marble Mandir.png"],
    category: getCategory("interior-stone-products"),
    subcategory: getSubcategory("interior-stone-products", "stone-fireplace"),
    shortDescription: "Exquisite hand-carved marble mandir, perfect for spiritual and decorative purposes.",
    description: "The Luxury Hand-Carved Marble Mandir is an exquisite and sacred piece featuring intricate hand-carved designs on premium quality marble. Crafted by skilled artisans with generations of experience, this marble mandir showcases exceptional craftsmanship and attention to detail. Perfect for creating a sacred space in your home, the Luxury Hand-Carved Marble Mandir combines spiritual significance with timeless beauty, making it a treasured heirloom for generations to come.",
    features: ["Premium quality marble", "Intricate hand-carved designs", "Skilled artisan craftsmanship", "Timeless and sacred appearance", "Exceptional durability"],
    benefits: ["Creates a sacred space in your home", "Perfect for spiritual and decorative purposes", "Treasured heirloom for generations", "Exquisite craftsmanship and beauty", "Adds spirituality and elegance to any space"],
    applications: ["Home mandirs", "Spiritual spaces", "Residential interiors", "Temple decor", "Cultural and religious spaces"],
    maintenance: "Clean with mild soap and water, avoid harsh chemicals, polish periodically to maintain shine.",
    whyChoose: "The Luxury Hand-Carved Marble Mandir offers exquisite craftsmanship, spiritual significance, and timeless beauty that enriches any home.",
    metaTitle: "Luxury Hand-Carved Marble Mandir | Sacred Home Decor",
    metaDescription: "Discover the Luxury Hand-Carved Marble Mandir with intricate designs. Perfect for spiritual home decor.",
    keywords: ["Marble Mandir", "Hand-Carved Mandir", "Spiritual Decor", "Home Mandir"],
    imageAlt: "Exquisite Luxury Hand-Carved Marble Mandir",
    tags: ["Marble Mandir", "Hand-Carved Mandir", "Spiritual Decor", "Home Mandir"]
  },
  {
    id: 803,
    name: "Sandstone Garden Planters",
    slug: "sandstone-garden-planters",
    categorySlug: "landscaping-outdoor-stone",
    subcategorySlug: "stone-pavers",
    image: "Sandstone Garden Planters.png",
    images: ["Sandstone Garden Planters.png"],
    category: getCategory("landscaping-outdoor-stone"),
    subcategory: getSubcategory("landscaping-outdoor-stone", "stone-pavers"),
    shortDescription: "Beautiful sandstone garden planters, perfect for enhancing outdoor spaces.",
    description: "The Sandstone Garden Planters are beautiful and durable planters crafted from premium quality sandstone with natural texture and appearance. Perfect for enhancing gardens, patios, and outdoor spaces, these sandstone planters offer a timeless and rustic look that complements any landscape design. Highly durable and weather-resistant, the Sandstone Garden Planters are designed to withstand the elements and provide years of beauty and functionality.",
    features: ["Premium quality sandstone", "Natural texture and appearance", "Highly durable and weather-resistant", "Perfect for outdoor use", "Timeless and rustic design"],
    benefits: ["Enhances gardens and outdoor spaces", "Perfect for any landscape design", "Durable and long-lasting", "Low maintenance and easy to care for", "Adds natural beauty to your outdoor area"],
    applications: ["Garden planters", "Patio decor", "Outdoor spaces", "Landscape design", "Residential and commercial gardens"],
    maintenance: "Clean with mild soap and water, seal periodically for outdoor use.",
    whyChoose: "The Sandstone Garden Planters offer beautiful, durable, and timeless design that enhances any outdoor space.",
    metaTitle: "Sandstone Garden Planters | Beautiful Outdoor Decor",
    metaDescription: "Discover Sandstone Garden Planters with natural texture. Perfect for enhancing outdoor spaces.",
    keywords: ["Sandstone Planters", "Garden Planters", "Outdoor Decor", "Landscape Design"],
    imageAlt: "Beautiful Sandstone Garden Planters",
    tags: ["Sandstone Planters", "Garden Planters", "Outdoor Decor", "Landscape Design"]
  },
  {
    id: 804,
    name: "Scalloped Marble Tray Collection",
    slug: "scalloped-marble-tray-collection",
    categorySlug: "interior-stone-products",
    subcategorySlug: "stone-table-tops",
    image: "Scalloped Marble Tray Collection.png",
    images: ["Scalloped Marble Tray Collection.png"],
    category: getCategory("interior-stone-products"),
    subcategory: getSubcategory("interior-stone-products", "stone-table-tops"),
    shortDescription: "Elegant scalloped marble tray collection, perfect for serving and decorative purposes.",
    description: "The Scalloped Marble Tray Collection is an elegant and versatile collection of marble trays featuring beautiful scalloped edges and premium quality marble. Perfect for serving, organizing, and decorative purposes, these marble trays offer a timeless and sophisticated appearance that enhances any table setting or interior space. Crafted with precision and attention to detail, the Scalloped Marble Tray Collection combines functionality with natural beauty, making it a perfect addition to any home.",
    features: ["Premium quality marble", "Beautiful scalloped edges", "Versatile and functional", "Timeless and sophisticated design", "Exceptional durability"],
    benefits: ["Perfect for serving and decorative purposes", "Enhances any table setting or interior space", "Timeless and elegant design", "Highly durable and long-lasting", "Adds sophistication and beauty to your home"],
    applications: ["Serving trays", "Decorative trays", "Home organization", "Table settings", "Interior decor accents"],
    maintenance: "Clean with mild soap and water, avoid harsh chemicals, polish periodically to maintain shine.",
    whyChoose: "The Scalloped Marble Tray Collection offers elegant, versatile, and timeless design that enhances any home decor.",
    metaTitle: "Scalloped Marble Tray Collection | Elegant Home Decor",
    metaDescription: "Discover the Scalloped Marble Tray Collection with beautiful scalloped edges. Perfect for serving and decor.",
    keywords: ["Marble Tray", "Scalloped Tray", "Home Decor", "Serving Tray"],
    imageAlt: "Elegant Scalloped Marble Tray Collection",
    tags: ["Marble Tray", "Scalloped Tray", "Home Decor", "Serving Tray"]
  }
];

// Export all products
export const products = productDefinitions;

// Export all categories
export const getAllCategories = () => categories;

// Export all products
export const getAllProducts = () => products;

// Export featured products (9 products for home page)
export const featuredProducts = [
  products.find(p => p.id === 105), // Makrana White Marble
  products.find(p => p.id === 201), // Absolute Black Granite
  products.find(p => p.id === 202), // Black Galaxy Granite
  products.find(p => p.id === 101), // Green Marble
  products.find(p => p.id === 106), // Rainforest Brown Marble
  products.find(p => p.id === 203), // Kashmir White Granite
  products.find(p => p.id === 701), // Basalt
  products.find(p => p.id === 103), // Calcutta Viola Marble
  products.find(p => p.id === 205)  // Sira Grey Granite
].filter(Boolean);

// Helper functions to get products
export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getProductById = (id) => products.find(p => p.id === id);
export const getProductsByCategory = (categorySlug) => products.filter(p => p.categorySlug === categorySlug);

// Update getProductsBySubcategory to accept either (subSlug) or (catSlug, subSlug)
export const getProductsBySubcategory = (catOrSubSlug, subSlug) => {
  if (subSlug) {
    return products.filter(p => p.categorySlug === catOrSubSlug && p.subcategorySlug === subSlug);
  }
  // If only one argument is passed, treat it as subSlug and search all categories
  return products.filter(p => p.subcategorySlug === catOrSubSlug);
};

// Get category by slug
export const getCategoryBySlug = (slug) => categories.find(c => c.slug === slug);

// Find subcategory by slug
export const findSubcategoryBySlug = (slug) => {
  for (const category of categories) {
    const subcategory = category.subcategories.find(s => s.slug === slug);
    if (subcategory) return subcategory;
  }
  return null;
};

// Search function
export const searchProducts = (query) => {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return [];
  
  return products.filter(product => {
    return (
      product.name.toLowerCase().includes(normalizedQuery) ||
      (product.shortDescription && product.shortDescription.toLowerCase().includes(normalizedQuery)) ||
      (product.keywords && product.keywords.some(keyword => keyword.toLowerCase().includes(normalizedQuery))) ||
      (product.category?.name && product.category.name.toLowerCase().includes(normalizedQuery)) ||
      (product.subcategory?.name && product.subcategory.name.toLowerCase().includes(normalizedQuery))
    );
  });
};
