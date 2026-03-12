import { motion } from "framer-motion";
import editorialImage from "../../assets/images/editorial.jpg";

export default function EditorialSection() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:grid-cols-2 md:p-8 lg:p-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={editorialImage}
            alt="Scenic travel landscape"
            className="h-[320px] w-full scale-[1.02] object-cover md:h-[500px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-300">
            Travel, redesigned
          </p>

          <h2 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl">
            Every destination tells a story worth experiencing
          </h2>

          <p className="mb-8 text-base leading-7 text-slate-300 md:text-lg">
            Explore the World is designed as a cinematic digital experience,
            combining immersive imagery, elegant typography and modern front-end
            interactions to create a memorable journey from the very first
            scroll.
          </p>

          <a
            href="#destinations"
            className="inline-flex rounded-full border border-white/15 bg-sky-300 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 transition duration-300 hover:scale-[1.03] hover:bg-sky-200"
          >
            Discover Places
          </a>
        </motion.div>
      </div>
    </section>
  );
}
