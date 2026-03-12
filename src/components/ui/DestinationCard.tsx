import { motion } from "framer-motion";

type Props = {
  title: string;
  country: string;
  description: string;
  image: string;
};

export default function DestinationCard({
  title,
  country,
  description,
  image,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-slate-900"
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <img
        src={image}
        loading="lazy"
        alt={`${title}, ${country}`}
        className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute bottom-0 z-20 p-6">
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-sky-200">
          {country}
        </p>

        <h3 className="mb-3 text-2xl font-semibold">{title}</h3>

        <p className="text-sm text-slate-200">{description}</p>
      </div>
    </motion.article>
  );
}
