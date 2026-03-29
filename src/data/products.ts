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
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    count: 45,
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
  // CARS & SUPERCARS
  {
    id: 1,
    name: "Audi S5 Sportback | Sunset Edition Metal Wall Art | 8 Panel Split Wall Set",
    slug: "audi-s5-sunset",
    category: "Cars & Supercars",
    categorySlug: "cars",
    price: 1499,
    originalPrice: 2499,
    badge: "Bestseller",
    sizes: ["A4", "A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=800&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&q=80",
    ],
    description:
      "An orange Audi S5 Sportback bathed in golden sunset light beneath a dramatic bridge, printed on premium brushed aluminum. The warm tones and metallic finish create an incredible sense of depth that captures the car's sleek silhouette. A stunning centrepiece for any automotive enthusiast's wall.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
      "8 panel split wall set option available",
    ],
    rating: 4.9,
    reviews: 127,
    inStock: true,
  },
  {
    id: 2,
    name: "Spider-Man | Web Slinger Metal Poster",
    slug: "spider-man-web-slinger",
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
      "Spider-Man in his iconic web-shooting pose, captured in stunning detail on brushed aluminum. The metallic surface brings out every texture of the suit and adds a dynamic intensity to this action-packed shot. A must-have for any Marvel fan's collection.",
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
    name: "Neon Genesis Evangelion | Asuka Langley Metal Print",
    slug: "evangelion-asuka",
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
      "Asuka Langley from Neon Genesis Evangelion, striking against a bold red background on premium brushed aluminum. The metallic finish amplifies the vivid reds and brings out the intricate details of this iconic anime figure. A standout piece for any Evangelion fan.",
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
    name: "Mercedes-AMG GT R | Track Beast Metal Art | 3 Piece Set",
    slug: "mercedes-amg-gt-r",
    category: "Cars & Supercars",
    categorySlug: "cars",
    price: 1499,
    originalPrice: 2499,
    badge: "Trending",
    sizes: ["A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
      "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80",
    ],
    description:
      "The grey Mercedes-AMG GT R with striking yellow accents, poised on the track and ready to unleash. Printed on brushed aluminum, the metallic finish mirrors the car's own aggressive bodywork and creates a poster that commands attention in any room.",
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
    name: "Central Cinema | Neon Nights Metal Poster",
    slug: "cinema-neon-nights",
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
      "The glowing pink neon of the Central Cinema sign illuminates the night in this atmospheric shot, printed on brushed aluminum. The metallic surface makes the neon colours genuinely shimmer and glow, capturing that magical feeling of a night at the movies.",
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
    name: "Milky Way | Starry Night Sky Metal Art",
    slug: "milky-way-starry-night",
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
      "A breathtaking view of the Milky Way stretching across a purple night sky, with a shooting star cutting through the cosmos. Printed on brushed aluminum, the metallic surface makes every star shimmer and glow, creating a truly transcendent piece of cosmic wall art.",
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
    name: "Spider-Man | Dark Portrait Metal Print",
    slug: "spider-man-dark-portrait",
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
      "A dramatic close-up of Spider-Man emerging from the shadows, glowing eyes piercing through the darkness. On brushed aluminum, the deep blacks and subtle highlights create an intensely cinematic portrait that feels alive on your wall.",
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
    name: "McLaren 720S | Silver Arrow Metal Art | 3 Piece Set",
    slug: "mclaren-720s",
    category: "Cars & Supercars",
    categorySlug: "cars",
    price: 1499,
    originalPrice: 2499,
    badge: null,
    sizes: ["A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80",
      "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?w=800&q=80",
    ],
    description:
      "The white McLaren 720S gleaming in the countryside, a perfect fusion of speed and serenity. Printed on brushed aluminum, the silver tones of the car blend seamlessly with the metallic surface, creating a stunningly refined piece of automotive art.",
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
    name: "Anime Wall Collage | Manga Collection Metal Poster",
    slug: "anime-wall-collage",
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
      "A curated collection of anime and manga prints being arranged on a wall, capturing the art of the otaku lifestyle. On brushed aluminum, the vibrant colours of each print pop with incredible intensity, making this a perfect tribute to anime culture.",
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
    name: "Guitar Studio | Acoustic Vibes Metal Print",
    slug: "guitar-studio-acoustic",
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
      "A warm, inviting guitar studio filled with acoustic guitars, a keyboard, and a microphone, ready to make music. Printed on brushed aluminum, the golden tones and moody lighting give this piece a rich, intimate feel that any musician will love.",
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
    name: "Mercedes-AMG GT | Golden Rush Metal Art | 3 Piece Set",
    slug: "mercedes-amg-gt-golden",
    category: "Cars & Supercars",
    categorySlug: "cars",
    price: 1499,
    originalPrice: 2499,
    badge: null,
    sizes: ["A4", "A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
      "https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&q=80",
    ],
    description:
      "A yellow Mercedes-AMG GT tearing down the open road in a blur of golden speed. On brushed aluminum, the vibrant yellow bodywork and motion blur create an electrifying sense of velocity that leaps off the wall.",
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
    name: "Esports Arena | Pro Gaming Setup Metal Poster",
    slug: "esports-arena",
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
      "An esports pro locked in at their gaming station, ROG headset on and screens blazing. Printed on brushed aluminum, the neon glow of the monitors and ambient lighting create a poster that captures the intensity and focus of competitive gaming.",
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
    name: "Football Kickoff | Soccer Metal Poster",
    slug: "football-kickoff",
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
      "A Nike football boot resting on the ball, close-up on the grass, ready for kickoff. Printed on brushed aluminum, the sharp detail and rich greens bring the pitch to life, making this a perfect piece for any football fan's wall.",
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
    name: "Anime Classics | Wall Art Collection Metal Print",
    slug: "anime-classics-collection",
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
      "A stunning wall collage featuring beloved anime classics — Sailor Moon, One Piece, Pokemon, and Studio Ghibli all together. On brushed aluminum, the vibrant artwork pops with gallery-quality colour, celebrating the greatest anime of all time in one piece.",
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
    name: "Live Concert | Stage Lights Metal Poster",
    slug: "live-concert-stage",
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
      "A performer's silhouette commanding the stage, bathed in smoke and dramatic lighting. Printed on brushed aluminum, the contrast between the dark figure and the glowing stage lights creates an electrifying atmosphere that captures the raw energy of live music.",
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
    name: "Retro Gaming | Game Boy & Classics Metal Print",
    slug: "retro-gaming-classics",
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
      "A nostalgic collection of retro gaming consoles — Game Boy, Commodore, and cassettes — bathed in neon purple light. On brushed aluminum, the warm glow and vintage hardware evoke pure gaming nostalgia with a premium, modern twist.",
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
    name: "Football Match | Street Soccer Metal Poster",
    slug: "football-match",
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
      "Two players' legs locked in battle for the ball — the raw intensity of a football match captured up close. On brushed aluminum, every blade of grass and muscle tension is rendered in sharp detail, bringing the beautiful game to life on your wall.",
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
    name: "Vintage Cinema | Film Reels Metal Art",
    slug: "vintage-cinema-reels",
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
      "Vintage film reels, a classic projector, and old cameras — a love letter to the golden age of cinema. Printed on brushed aluminum, the warm sepia tones and antique textures gain a timeless, gallery-worthy finish that celebrates the art of filmmaking.",
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
    name: "Audi R8 V10 | Mountain Road Metal Print | 3 Piece Set",
    slug: "audi-r8-v10",
    category: "Cars & Supercars",
    categorySlug: "cars",
    price: 1499,
    originalPrice: 2499,
    badge: "New",
    sizes: ["A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    ],
    description:
      "A grey Audi R8 V10 in a stunning rear three-quarter view, carving through a mountain road at sunset. On brushed aluminum, the metallic finish echoes the car's own aluminium body panels, creating a seamless fusion of automotive art and premium material.",
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
    name: "Manga Mural | Japanese Street Art Metal Poster",
    slug: "manga-mural-street",
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
      "A striking black and white Japanese manga mural painted on a street wall, where urban grit meets anime artistry. On brushed aluminum, the bold ink lines and dramatic compositions take on a gallery-quality sheen that elevates street art to fine art.",
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
    name: "Music Studio | Drums & Stage Metal Art",
    slug: "music-studio-drums",
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
      "A moody music studio with drums and a microphone set against an exposed brick wall, bathed in atmospheric lighting. On brushed aluminum, the warm tones and industrial textures create a rich, immersive piece that any musician would be proud to display.",
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
    name: "Football Pitch | The Beautiful Game Metal Poster",
    slug: "football-pitch",
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
      "A football resting on the lush green pitch, simple and iconic — the essence of the beautiful game. On brushed aluminum, the vivid greens and crisp white of the ball create a clean, striking piece that celebrates football in its purest form.",
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
    name: "RGB Gaming Keyboard | Neon Setup Metal Print",
    slug: "rgb-gaming-keyboard",
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
      "A close-up of an RGB gaming keyboard ablaze with neon colours, each key glowing in the dark. On brushed aluminum, the vibrant lighting effects shimmer across the metallic surface, making this the perfect piece for any gamer's setup.",
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
    name: "Film Projector | Cinema Light Metal Art",
    slug: "film-projector-light",
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
      "A film projector casting a powerful beam of light through a dark, smoky room — pure cinematic magic. On brushed aluminum, the contrast between the brilliant light and deep shadows creates a dramatic, atmospheric piece that any film lover will treasure.",
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
  // MORE CARS
  {
    id: 25,
    name: "Range Rover Sport | Black Edition Metal Art | 3 Piece Set",
    slug: "range-rover-sport",
    category: "Cars & Supercars",
    categorySlug: "cars",
    price: 1299,
    originalPrice: 1999,
    badge: "New",
    sizes: ["A4", "A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80",
      "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80",
      "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=800&q=80",
    ],
    description:
      "The black Range Rover Sport commands presence from a front-on garage view, all imposing grille and darkened styling. On brushed aluminum, the deep blacks and subtle reflections give this piece an intensity and luxury that matches the vehicle itself.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.8,
    reviews: 88,
    inStock: true,
  },
  {
    id: 26,
    name: "BMW 4 Series | Estoril Blue Metal Print | 3 Piece Set",
    slug: "bmw-4-series-blue",
    category: "Cars & Supercars",
    categorySlug: "cars",
    price: 1699,
    originalPrice: 2999,
    badge: "Bestseller",
    sizes: ["A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&q=80",
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&q=80",
    ],
    description:
      "A blue BMW 4 Series in a stunning side profile on the street, showcasing its elegant coupe lines. On brushed aluminum, the Estoril Blue paintwork gleams with a depth that paper simply cannot achieve, making this a showstopper for any BMW enthusiast.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.9,
    reviews: 112,
    inStock: true,
  },
  {
    id: 27,
    name: "Mercedes-AMG GT R | Monaco Noir Metal Art | 3 Piece Set",
    slug: "mercedes-amg-gt-r-monaco",
    category: "Cars & Supercars",
    categorySlug: "cars",
    price: 1299,
    originalPrice: 1999,
    badge: "Trending",
    sizes: ["A4", "A3"],
    image:
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=800&q=80",
    ],
    description:
      "A matte black Mercedes-AMG GT R parked at the Monaco harbour with a luxury yacht in the background — the ultimate lifestyle shot. On brushed aluminum, the stealth-black finish and Mediterranean backdrop create a piece dripping with sophistication.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.8,
    reviews: 76,
    inStock: true,
  },
  {
    id: 28,
    name: "Lamborghini Hurac\u00e1n | White Storm Metal Poster | 3 Piece Set",
    slug: "lamborghini-huracan-white",
    category: "Cars & Supercars",
    categorySlug: "cars",
    price: 1299,
    originalPrice: 1999,
    badge: null,
    sizes: ["A4", "A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=800&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    ],
    description:
      "The white Lamborghini Hurac\u00e1n Performante in a dramatic front close-up, every aggressive vent and sharp line on full display. On brushed aluminum, the pristine white bodywork glows against the metallic surface, creating a piece of pure Italian supercar art.",
    details: [
      "Printed on 0.45mm brushed aluminum",
      "UV-resistant archival inks",
      "Vivid HD color reproduction",
      "Magnetic mounting system included",
      "Waterproof & scratch-resistant",
    ],
    rating: 4.9,
    reviews: 143,
    inStock: true,
  },
  {
    id: 29,
    name: "Lamborghini Aventador | Dubai Sunset Metal Art",
    slug: "lamborghini-aventador-dubai",
    category: "Cars & Supercars",
    categorySlug: "cars",
    price: 1499,
    originalPrice: 2499,
    badge: null,
    sizes: ["A3", '13x19"'],
    image:
      "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?w=800&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    ],
    description:
      "A Lamborghini Aventador from the rear with its iconic scissor doors open, set against a Dubai desert sunset. On brushed aluminum, the warm golden light and dramatic silhouette create a breathtaking fusion of Italian engineering and Arabian luxury.",
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
