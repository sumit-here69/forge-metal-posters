export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice: number;
  badge: string | null;
  sizes: string[];
  image: string;
  images: string[];
  description: string;
  details: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
}

export interface Collection {
  name: string;
  slug: string;
  description: string;
  image: string;
  count: number;
  gradient: string;
}

export const collections: Collection[] = [
  {
    name: "Movies",
    slug: "movies",
    description:
      "Iconic movie moments captured on brushed aluminum. From cult classics to modern blockbusters.",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    count: 45,
    gradient: "from-red-950 to-red-800",
  },
  {
    name: "Cars & Supercars",
    slug: "cars",
    description:
      "The world's most legendary automobiles in stunning metal print detail.",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    count: 30,
    gradient: "from-neutral-800 to-neutral-600",
  },
  {
    name: "Anime",
    slug: "anime",
    description:
      "Your favorite anime characters and scenes brought to life on premium aluminum.",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
    count: 40,
    gradient: "from-indigo-950 to-indigo-800",
  },
  {
    name: "Music",
    slug: "music",
    description:
      "Celebrate the legends. Album art and iconic artists on metal that resonates.",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    count: 25,
    gradient: "from-amber-950 to-amber-800",
  },
  {
    name: "Sports",
    slug: "sports",
    description:
      "The greatest moments in sports history. Champions immortalized on metal.",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
    count: 35,
    gradient: "from-emerald-950 to-emerald-800",
  },
  {
    name: "Gaming",
    slug: "gaming",
    description:
      "Level up your setup with gaming-inspired metal posters. From retro to modern.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    count: 20,
    gradient: "from-purple-950 to-purple-800",
  },
];

export const products: Product[] = [
  // MOVIES
  {
    id: 1,
    name: "1966 Shelby Mustang GT350 | Muscle Car Wall Art",
    slug: "shelby-mustang-gt350",
    category: "Cars & Supercars",
    categorySlug: "cars",
    price: 1499,
    originalPrice: 2499,
    badge: "Bestseller",
    sizes: ["A4", "A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    ],
    description:
      "A tribute to the legendary 1966 Shelby Mustang GT350, printed on premium brushed aluminum. The metallic finish gives this muscle car art an incredible depth and shimmer that captures every curve and line of this American icon.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.9,
    reviews: 127,
    inStock: true,
  },
  {
    id: 2,
    name: "The Dark Knight | Batman Trilogy Metal Poster",
    slug: "dark-knight-trilogy",
    category: "Movies",
    categorySlug: "movies",
    price: 1299,
    originalPrice: 1999,
    badge: "New",
    sizes: ["A4", "A3"],
    image:
      "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=800&q=80",
      "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=800&q=80",
      "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=800&q=80",
    ],
    description:
      "The Dark Knight rises on brushed aluminum. This stunning metal poster captures the brooding atmosphere of Gotham with incredible depth. The metallic surface adds a cinematic quality that makes Batman feel alive on your wall.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.8,
    reviews: 89,
    inStock: true,
  },
  {
    id: 3,
    name: "Attack on Titan | Eren Yeager Metal Print",
    slug: "attack-on-titan-eren",
    category: "Anime",
    categorySlug: "anime",
    price: 999,
    originalPrice: 1499,
    badge: null,
    sizes: ["A4", "A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&q=80",
      "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=800&q=80",
    ],
    description:
      "Eren Yeager in all his glory, printed on premium brushed aluminum. The metallic finish brings out the intense details and vibrant colors of this iconic anime character. A must-have for any Attack on Titan fan.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.9,
    reviews: 203,
    inStock: true,
  },
  {
    id: 4,
    name: "Lamborghini Aventador | Supercar Metal Art",
    slug: "lamborghini-aventador",
    category: "Cars & Supercars",
    categorySlug: "cars",
    price: 1499,
    originalPrice: 2499,
    badge: "Trending",
    sizes: ["A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    ],
    description:
      "The Lamborghini Aventador in all its aggressive beauty, captured on brushed aluminum. The metallic surface perfectly complements the car's sharp lines and exotic design, creating a poster that commands attention in any room.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.8,
    reviews: 156,
    inStock: true,
  },
  {
    id: 5,
    name: "Breaking Bad | Heisenberg Metal Poster",
    slug: "breaking-bad-heisenberg",
    category: "Movies",
    categorySlug: "movies",
    price: 1299,
    originalPrice: 1999,
    badge: null,
    sizes: ["A4", "A3"],
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80",
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
    ],
    description:
      "Say my name. The iconic Heisenberg portrait on brushed aluminum with incredible tonal depth. The metallic finish adds a gritty, cinematic quality that perfectly captures the dark intensity of Breaking Bad.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.7,
    reviews: 94,
    inStock: true,
  },
  {
    id: 6,
    name: "Interstellar | Black Hole Metal Art",
    slug: "interstellar-black-hole",
    category: "Movies",
    categorySlug: "movies",
    price: 1499,
    originalPrice: 2499,
    badge: "Bestseller",
    sizes: ["A4", "A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
      "https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=800&q=80",
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
    ],
    description:
      "Gargantua awaits. The breathtaking black hole from Interstellar, printed on brushed aluminum. The metallic surface creates an otherworldly shimmer that makes this cosmic artwork truly transcendent.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.9,
    reviews: 312,
    inStock: true,
  },
  {
    id: 7,
    name: "Spider-Man | Spider Verse Metal Print",
    slug: "spider-verse",
    category: "Movies",
    categorySlug: "movies",
    price: 999,
    originalPrice: 1499,
    badge: "New",
    sizes: ["A4", "A3"],
    image:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&q=80",
      "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=800&q=80",
      "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=800&q=80",
    ],
    description:
      "Miles Morales swings into your space on premium brushed aluminum. The vibrant pop-art style of Spider-Verse is amplified by the metallic finish, creating colors that literally glow.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.8,
    reviews: 67,
    inStock: true,
  },
  {
    id: 8,
    name: "Porsche 911 GT3 RS | Racing Metal Art",
    slug: "porsche-911-gt3-rs",
    category: "Cars & Supercars",
    categorySlug: "cars",
    price: 1499,
    originalPrice: 2499,
    badge: null,
    sizes: ["A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    ],
    description:
      "The Porsche 911 GT3 RS — engineering perfection on brushed aluminum. Every aerodynamic detail, every racing line, captured with stunning clarity on premium metal.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.9,
    reviews: 84,
    inStock: true,
  },
  {
    id: 9,
    name: "Naruto Uzumaki | Sage Mode Metal Poster",
    slug: "naruto-sage-mode",
    category: "Anime",
    categorySlug: "anime",
    price: 999,
    originalPrice: 1499,
    badge: "Trending",
    sizes: ["A4", "A3"],
    image:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
      "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=800&q=80",
    ],
    description:
      "Naruto in Sage Mode, channeling nature energy on premium brushed aluminum. The orange and gold tones shimmer on the metallic surface, bringing this legendary ninja to life.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.9,
    reviews: 178,
    inStock: true,
  },
  {
    id: 10,
    name: "Bohemian Rhapsody | Queen Metal Print",
    slug: "bohemian-rhapsody-queen",
    category: "Music",
    categorySlug: "music",
    price: 1299,
    originalPrice: 1999,
    badge: "Bestseller",
    sizes: ["A4", "A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    ],
    description:
      "Is this the real life? Freddie Mercury and Queen immortalized on brushed aluminum. The metallic surface adds a rock-and-roll edge that no paper print can match.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.8,
    reviews: 142,
    inStock: true,
  },
  {
    id: 11,
    name: "Ferrari F40 | Classic Supercar Metal Art",
    slug: "ferrari-f40",
    category: "Cars & Supercars",
    categorySlug: "cars",
    price: 1499,
    originalPrice: 2499,
    badge: null,
    sizes: ["A4", "A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    ],
    description:
      "The Ferrari F40 — the last car personally approved by Enzo Ferrari. This masterpiece of Italian engineering looks absolutely stunning on brushed aluminum, with every curve catching the light.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.9,
    reviews: 96,
    inStock: true,
  },
  {
    id: 12,
    name: "Cyberpunk Night City | Gaming Metal Poster",
    slug: "cyberpunk-night-city",
    category: "Gaming",
    categorySlug: "gaming",
    price: 1299,
    originalPrice: 1999,
    badge: "New",
    sizes: ["A4", "A3"],
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    ],
    description:
      "Night City glows on brushed aluminum. The neon cyberpunk aesthetic is perfectly complemented by the metallic finish, creating a poster that genuinely seems to glow in the right light.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.7,
    reviews: 58,
    inStock: true,
  },
  {
    id: 13,
    name: "Lionel Messi | GOAT Metal Poster",
    slug: "messi-goat",
    category: "Sports",
    categorySlug: "sports",
    price: 1299,
    originalPrice: 1999,
    badge: "Bestseller",
    sizes: ["A4", "A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
      "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80",
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80",
    ],
    description:
      "The GOAT on metal. Lionel Messi in his most iconic moment, printed on premium brushed aluminum. A must-have for any football fan's wall.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.9,
    reviews: 234,
    inStock: true,
  },
  {
    id: 14,
    name: "Demon Slayer | Tanjiro Metal Print",
    slug: "demon-slayer-tanjiro",
    category: "Anime",
    categorySlug: "anime",
    price: 999,
    originalPrice: 1499,
    badge: null,
    sizes: ["A4", "A3"],
    image:
      "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&q=80",
    ],
    description:
      "Water Breathing, First Form. Tanjiro Kamado's iconic attack captured on brushed aluminum. The swirling water effects look absolutely mesmerizing on the metallic surface.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.8,
    reviews: 145,
    inStock: true,
  },
  {
    id: 15,
    name: "The Weeknd | After Hours Metal Poster",
    slug: "weeknd-after-hours",
    category: "Music",
    categorySlug: "music",
    price: 1299,
    originalPrice: 1999,
    badge: "Trending",
    sizes: ["A4", "A3"],
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    ],
    description:
      "The neon-soaked After Hours aesthetic on brushed aluminum. The reds and blues of this album art glow with an intensity that only metal can deliver.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.7,
    reviews: 78,
    inStock: true,
  },
  {
    id: 16,
    name: "Retro Gaming Console | Pixel Art Metal Print",
    slug: "retro-gaming-pixel",
    category: "Gaming",
    categorySlug: "gaming",
    price: 999,
    originalPrice: 1499,
    badge: null,
    sizes: ["A4", "A3"],
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    ],
    description:
      "Nostalgia meets premium. Classic gaming aesthetics on brushed aluminum, perfect for the retro gamer's setup. The metallic finish adds a futuristic twist to pixel art.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.8,
    reviews: 63,
    inStock: true,
  },
  {
    id: 17,
    name: "Cristiano Ronaldo | CR7 Metal Poster",
    slug: "cristiano-ronaldo-cr7",
    category: "Sports",
    categorySlug: "sports",
    price: 1299,
    originalPrice: 1999,
    badge: null,
    sizes: ["A4", "A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80",
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
      "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=800&q=80",
    ],
    description:
      "CR7 in his most iconic celebration, printed on brushed aluminum. The metallic sheen perfectly complements the golden light of a stadium under floodlights.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.9,
    reviews: 198,
    inStock: true,
  },
  {
    id: 18,
    name: "Pulp Fiction | Vintage Cinema Metal Art",
    slug: "pulp-fiction-vintage",
    category: "Movies",
    categorySlug: "movies",
    price: 1299,
    originalPrice: 1999,
    badge: null,
    sizes: ["A4", "A3"],
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80",
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
    ],
    description:
      "Tarantino's masterpiece on brushed aluminum. The retro color palette of Pulp Fiction is elevated by the metallic surface, giving this cult classic a premium, gallery-worthy finish.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.8,
    reviews: 112,
    inStock: true,
  },
  {
    id: 19,
    name: "McLaren P1 | Hypercar Metal Print",
    slug: "mclaren-p1",
    category: "Cars & Supercars",
    categorySlug: "cars",
    price: 1499,
    originalPrice: 2499,
    badge: "New",
    sizes: ["A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    ],
    description:
      "The McLaren P1 — where art meets engineering. This hypercar looks breathtaking on brushed aluminum, with the metallic finish echoing the car's own carbon fiber and titanium construction.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.9,
    reviews: 71,
    inStock: true,
  },
  {
    id: 20,
    name: "One Piece | Luffy Gear 5 Metal Poster",
    slug: "one-piece-luffy-gear5",
    category: "Anime",
    categorySlug: "anime",
    price: 1299,
    originalPrice: 1999,
    badge: "Trending",
    sizes: ["A4", "A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1560972550-aba3456b5564?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1560972550-aba3456b5564?w=800&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&q=80",
    ],
    description:
      "Monkey D. Luffy's legendary Gear 5 transformation on brushed aluminum. The white and gold tones of Sun God Nika shimmer on the metallic surface like nothing you've ever seen.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.9,
    reviews: 267,
    inStock: true,
  },
  {
    id: 21,
    name: "Pink Floyd | Dark Side of the Moon Metal Art",
    slug: "pink-floyd-dark-side",
    category: "Music",
    categorySlug: "music",
    price: 1499,
    originalPrice: 2499,
    badge: null,
    sizes: ["A4", "A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    ],
    description:
      "The iconic prism on brushed aluminum. The rainbow spectrum refracting through the triangle looks absolutely magical on the metallic surface, creating prismatic light effects.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.9,
    reviews: 189,
    inStock: true,
  },
  {
    id: 22,
    name: "Formula 1 | Racing Metal Poster",
    slug: "formula-1-racing",
    category: "Sports",
    categorySlug: "sports",
    price: 1499,
    originalPrice: 2499,
    badge: null,
    sizes: ["A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80",
      "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80",
    ],
    description:
      "The thrill of Formula 1 racing captured on premium brushed aluminum. Speed, precision, and engineering excellence — this poster brings the racetrack to your wall.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.8,
    reviews: 87,
    inStock: true,
  },
  {
    id: 23,
    name: "The Last of Us | Joel & Ellie Metal Print",
    slug: "last-of-us-joel-ellie",
    category: "Gaming",
    categorySlug: "gaming",
    price: 1299,
    originalPrice: 1999,
    badge: "Bestseller",
    sizes: ["A4", "A3"],
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    ],
    description:
      "Joel and Ellie's journey on brushed aluminum. The post-apocalyptic atmosphere is beautifully rendered on the metallic surface, with earthy tones and dramatic lighting.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.9,
    reviews: 156,
    inStock: true,
  },
  {
    id: 24,
    name: "Inception | Dream Layers Metal Art",
    slug: "inception-dream-layers",
    category: "Movies",
    categorySlug: "movies",
    price: 1299,
    originalPrice: 1999,
    badge: null,
    sizes: ["A4", "A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80",
    ],
    description:
      "Is this a dream? Nolan's mind-bending masterpiece on brushed aluminum. The layered cityscapes and surreal architecture look incredible on the metallic surface.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.8,
    reviews: 134,
    inStock: true,
  },
];

// Helper functions
export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getRelatedProducts(
  productId: number,
  limit: number = 4
): Product[] {
  const product = getProductById(productId);
  if (!product) return [];
  return products
    .filter(
      (p) => p.categorySlug === product.categorySlug && p.id !== productId
    )
    .slice(0, limit);
}

// Instagram/social images
export const socialImages = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80",
  "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&q=80",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80",
];

// Hero images
export const heroImage =
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80";
