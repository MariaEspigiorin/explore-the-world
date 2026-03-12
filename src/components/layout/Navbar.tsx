import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition ${
          scrolled
            ? "bg-[#07111f]/70 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <h1 className="text-xl font-semibold tracking-[0.2em] uppercase">
            Explore
          </h1>

          {/* desktop menu */}
          <nav className="hidden gap-8 text-sm uppercase tracking-[0.2em] md:flex">
            <a href="#home">Home</a>
            <a href="#why">About</a>
            <a href="#destinations">Destinations</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* mobile button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#07111f] flex flex-col items-center justify-center gap-10 text-xl uppercase tracking-[0.25em]"
          >
            <a onClick={() => setOpen(false)} href="#home">
              Home
            </a>
            <a onClick={() => setOpen(false)} href="#why">
              About
            </a>
            <a onClick={() => setOpen(false)} href="#destinations">
              Destinations
            </a>
            <a onClick={() => setOpen(false)} href="#contact">
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
