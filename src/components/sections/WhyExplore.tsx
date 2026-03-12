import { Globe, Mountain, Compass } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: Globe,
    title: "Curated Destinations",
    description:
      "A selection of places chosen for their beauty, atmosphere and unforgettable visual presence.",
  },
  {
    icon: Mountain,
    title: "Immersive Landscapes",
    description:
      "From alpine lakes to black sand beaches, every destination feels cinematic and memorable.",
  },
  {
    icon: Compass,
    title: "Meaningful Journeys",
    description:
      "More than travel, this experience is about discovery, emotion and connection with the world.",
  },
];

export default function WhyExplore() {
  return (
    <section id="why" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300">
            Why Explore
          </p>
          <h2 className="mb-4 text-4xl font-semibold md:text-5xl">
            Designed to inspire adventure and atmosphere
          </h2>
          <p className="text-base leading-7 text-slate-300 md:text-lg">
            Explore the World is a front-end concept focused on immersive visual
            design, elegant layouts and modern interactive experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-md"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-300/10 text-sky-300">
                  <Icon size={28} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>

                <p className="text-sm leading-7 text-slate-300 md:text-base">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
