import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "../../assets/images/hero.jpg";

export default function Hero() {
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 800], [0, 180]);
  const contentY = useTransform(scrollY, [0, 800], [0, 120]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0.35]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y: backgroundY, backgroundImage: `url(${heroImage})` }}
        className="absolute inset-0 bg-cover bg-center scale-110"
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/20 to-black/20" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-sky-200 md:text-base">
          Explore • Discover • Experience
        </p>

        <h1 className="mb-6 text-4xl font-semibold leading-[1.05] md:text-7xl lg:text-8xl">
          Explore the World
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-6 text-slate-200 md:text-xl md:leading-8">
          Discover breathtaking places, hidden landscapes and unforgettable
          journeys through nature, culture and atmosphere.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#destinations"
            className="rounded-full bg-sky-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 transition duration-300 hover:scale-[1.03] hover:bg-sky-300"
          >
            Start Exploring
          </a>

          <a
            href="#why"
            className="rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition duration-300 hover:bg-white/20"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </section>
  );
}
