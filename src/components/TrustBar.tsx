import { Truck, RotateCcw, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    desc: "On orders above Rs. 999",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    desc: "7-day return policy",
  },
  {
    icon: Shield,
    title: "Premium Quality",
    desc: "Brushed aluminum finish",
  },
  {
    icon: Sparkles,
    title: "Vivid Colors",
    desc: "HD UV-printed artwork",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-neutral-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="flex items-center gap-3">
              <div className="p-2.5 bg-neutral-50 rounded-xl">
                <f.icon size={20} strokeWidth={1.5} className="text-neutral-700" />
              </div>
              <div>
                <p className="text-sm font-medium">{f.title}</p>
                <p className="text-xs text-neutral-400">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
