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
    subcategories: []
  },
  {
    id: 5,
    name: "Basalt Stone",
    slug: "basalt-stone",
    subcategories: [
      { id: "sub-701", name: "Basalt", slug: "basalt" }
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
