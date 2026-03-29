"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const overallStats = {
  rating: 4.9,
  totalReviews: 2347,
  breakdown: [
    { stars: 5, percentage: 82 },
    { stars: 4, percentage: 13 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ],
};

const reviews = [
  {
    name: "Arjun Mehta",
    location: "Mumbai, India",
    rating: 5,
    product: "Interstellar | Black Hole Metal Art",
    text: "Absolutely blown away by the quality. The metallic finish gives the black hole scene an incredible depth that you just cannot get with paper prints. Worth every rupee.",
    date: "2 weeks ago",
  },
  {
    name: "Sarah Chen",
    location: "Singapore",
    rating: 5,
    product: "Attack on Titan | Eren Yeager Metal Print",
    text: "The colors are SO vibrant on the aluminum. My friends all thought it was a backlit display when they first saw it. The magnetic mounting system is genius too.",
    date: "1 month ago",
  },
  {
    name: "Rahul Sharma",
    location: "Delhi, India",
    rating: 5,
    product: "1966 Shelby Mustang GT350",
    text: "As a car enthusiast, this poster is perfect. The brushed aluminum really complements the metallic curves of the Mustang. My home office looks incredible now.",
    date: "3 weeks ago",
  },
  {
    name: "Emily Watson",
    location: "London, UK",
    rating: 4,
    product: "Bohemian Rhapsody | Queen Metal Print",
    text: "Beautiful print and fast international shipping. The only reason I am not giving 5 stars is I wish the 24x36 size was available for this design. The A3 looks great though.",
    date: "1 month ago",
  },
  {
    name: "Karthik Rajan",
    location: "Bengaluru, India",
    rating: 5,
    product: "Cyberpunk Night City | Gaming Metal Poster",
    text: "This thing literally glows. The neon colors on brushed aluminum create this unreal effect. My gaming setup is now complete. Already ordering two more.",
    date: "2 months ago",
  },
  {
    name: "Priya Nair",
    location: "Kochi, India",
    rating: 5,
    product: "One Piece | Luffy Gear 5 Metal Poster",
    text: "Ordered this as a gift for my brother and he absolutely loved it. The white and gold tones of Gear 5 Luffy shimmer beautifully on the metal surface. Packaging was excellent too.",
    date: "3 weeks ago",
  },
  {
    name: "Marcus Johnson",
    location: "New York, USA",
    rating: 5,
    product: "The Dark Knight | Batman Trilogy Metal Poster",
    text: "I have bought prints from many brands but RON is on another level. The Dark Knight poster has this incredible moody atmosphere that the aluminum finish amplifies. Museum quality.",
    date: "1 month ago",
  },
  {
    name: "Ananya Gupta",
    location: "Jaipur, India",
    rating: 4,
    product: "Pink Floyd | Dark Side of the Moon Metal Art",
    text: "The prismatic rainbow effect on metal is mesmerizing. Looks stunning in my living room. Shipping took a bit longer than expected but the quality made up for it.",
    date: "6 weeks ago",
  },
  {
    name: "David Park",
    location: "Seoul, South Korea",
    rating: 5,
    product: "Lamborghini Aventador | Supercar Metal Art",
    text: "Ordered internationally and it arrived perfectly packaged. The print quality is exceptional. The Aventador looks absolutely menacing on brushed aluminum.",
    date: "2 months ago",
  },
  {
    name: "Sneha Patel",
    location: "Ahmedabad, India",
    rating: 5,
    product: "Lionel Messi | GOAT Metal Poster",
    text: "Bought this for my husband and he was speechless. The detail is incredible and the metallic sheen adds a premium feel. Already planning to get the CR7 one next.",
    date: "1 month ago",
  },
  {
    name: "Tom Rivera",
    location: "Melbourne, Australia",
    rating: 5,
    product: "Spider-Man | Spider Verse Metal Print",
    text: "The pop-art style of Spider-Verse is PERFECT for metal printing. Colors literally pop off the surface. My kids love it and so do I. The magnetic mount was super easy to set up.",
    date: "5 weeks ago",
  },
  {
    name: "Vikram Singh",
    location: "Chandigarh, India",
    rating: 5,
    product: "Custom Print - My Motorcycle",
    text: "Got a custom print of my Royal Enfield and it turned out amazing. The team was super helpful with color calibration. Turnaround was quick. Highly recommend the custom service.",
    date: "2 months ago",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          className={
            star <= rating
              ? "fill-amber-400 text-amber-400"
              : "text-neutral-200"
          }
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="bg-white">
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-400">
              Testimonials
            </span>
            <h1
              className="text-4xl sm:text-5xl font-bold mt-3 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Customer Reviews
            </h1>
          </motion.div>

          {/* Overall Rating Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-neutral-50 rounded-2xl p-8 sm:p-10 mb-16"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-16">
              <div className="text-center sm:text-left">
                <p
                  className="text-5xl sm:text-6xl font-bold"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {overallStats.rating}
                </p>
                <div className="flex gap-1 mt-2 justify-center sm:justify-start">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-neutral-500 mt-2">
                  Based on {overallStats.totalReviews.toLocaleString()} reviews
                </p>
              </div>

              <div className="flex-1 w-full space-y-2">
                {overallStats.breakdown.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3">
                    <span className="text-xs text-neutral-500 w-12 text-right">
                      {item.stars} star
                    </span>
                    <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-xs text-neutral-400 w-8">
                      {item.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border border-neutral-100 rounded-2xl p-6 hover:border-neutral-200 transition-colors"
              >
                <StarRating rating={review.rating} />
                <p className="text-sm text-neutral-700 mt-4 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-neutral-100">
                  <p className="text-sm font-medium">{review.name}</p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {review.location}
                  </p>
                  <p className="text-xs text-neutral-400 mt-2">
                    Purchased:{" "}
                    <span className="text-neutral-500">{review.product}</span>
                  </p>
                  <p className="text-xs text-neutral-300 mt-1">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
