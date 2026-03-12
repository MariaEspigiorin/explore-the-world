import { motion } from "framer-motion";
import DestinationCard from "../ui/DestinationCard";
import { destinations } from "../../data/destinations";

export default function Destinations() {
  return (
    <section id="destinations" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300">
            Featured Destinations
          </p>

          <h2 className="mb-4 text-4xl font-semibold md:text-5xl">
            Discover iconic places across the globe
          </h2>

          <p className="text-slate-300">
            A curated collection of destinations chosen for their atmosphere and
            visual identity.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <DestinationCard {...destination} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
