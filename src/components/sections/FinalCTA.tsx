import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="px-6 pb-24 pt-10 md:px-10 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-sky-300/20 via-white/5 to-transparent px-6 py-16 md:px-12 md:py-24"
      >
        <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-300">
            Start your journey
          </p>

          <h2 className="mb-6 text-4xl font-semibold leading-tight md:text-6xl">
            Ready to discover the world through a new perspective?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Dive into immersive destinations, cinematic layouts and a premium
            travel experience built to inspire exploration and curiosity.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#destinations"
              className="rounded-full bg-sky-300 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 transition duration-300 hover:scale-[1.03] hover:bg-sky-200"
            >
              Explore Destinations
            </a>

            <a
              href="#home"
              className="rounded-full border border-white/20 bg-white/8 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition duration-300 hover:bg-white/15"
            >
              Back to Top
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
