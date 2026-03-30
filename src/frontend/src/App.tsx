import {
  CheckCircle2,
  Clock,
  Droplets,
  Fish,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const PHONE = "09880909547";
const PHONE_DISPLAY = "098809 09547";
const WHATSAPP = "https://wa.me/919880909547";
const ADDRESS =
  "547, Sahakarnagar Main Rd, A Block, Sahakar Nagar, Bengaluru, Karnataka 560092";
const HOURS = "Mon – Sun: 9 AM – 8 PM";

const FISH = [
  {
    name: "Goldfish",
    price: "₹100 – ₹300",
    img: "/assets/generated/goldfish.dim_400x300.jpg",
  },
  {
    name: "Betta Fish",
    price: "₹200 – ₹500",
    img: "/assets/generated/betta.dim_400x300.jpg",
  },
  {
    name: "Angelfish",
    price: "₹150 – ₹400",
    img: "/assets/generated/angelfish.dim_400x300.jpg",
  },
  {
    name: "Guppies",
    price: "₹50 – ₹150",
    img: "/assets/generated/guppies.dim_400x300.jpg",
  },
];

const FOOD = [
  {
    name: "Basic Fish Food",
    price: "₹50 – ₹150",
    img: "/assets/generated/fish-food-basic.dim_400x300.jpg",
  },
  {
    name: "Premium Fish Food",
    price: "₹200 – ₹400",
    img: "/assets/generated/fish-food-premium.dim_400x300.jpg",
  },
];

const TANKS = [
  {
    name: "Small Bowl",
    price: "₹100 – ₹300",
    img: "/assets/generated/small-bowl.dim_400x300.jpg",
  },
  {
    name: "Medium Tank",
    price: "₹800 – ₹2000",
    img: "/assets/generated/medium-tank.dim_400x300.jpg",
  },
  {
    name: "Large Aquarium",
    price: "₹3000+",
    img: "/assets/generated/large-aquarium.dim_400x300.jpg",
  },
];

const ACCESSORIES = [
  {
    name: "Filters, Pumps & Lights",
    price: "₹200 – ₹1500",
    img: "/assets/generated/accessories.dim_400x300.jpg",
  },
];

const BIRDS = [
  {
    name: "Budgies (Parakeets)",
    price: "₹300 – ₹800",
    img: "/assets/generated/budgie.dim_400x400.jpg",
  },
  {
    name: "Lovebirds",
    price: "₹800 – ₹2000",
    img: "/assets/generated/lovebirds.dim_400x400.jpg",
  },
  {
    name: "Cockatiels",
    price: "₹2500 – ₹5000",
    img: "/assets/generated/cockatiel.dim_400x400.jpg",
  },
  {
    name: "Bird Cages",
    price: "₹500 – ₹3000",
    img: "/assets/generated/bird-cage.dim_400x400.jpg",
  },
  {
    name: "Bird Food",
    price: "₹100 – ₹500",
    img: "/assets/generated/bird-food.dim_400x400.jpg",
  },
];

const SERVICES = [
  {
    icon: <Droplets size={36} />,
    title: "Aquarium Setup",
    desc: "Professional full aquarium setup — from tank selection to decoration, filtration, and live plant placement.",
  },
  {
    icon: <Wrench size={36} />,
    title: "Maintenance Support",
    desc: "Regular cleaning, water testing, filter servicing, and health checks to keep your aquarium thriving.",
  },
  {
    icon: <HeartHandshake size={36} />,
    title: "Pet Guidance",
    desc: "Expert advice on fish compatibility, feeding schedules, breeding, and bird care tailored to your needs.",
  },
];

const WHY = [
  {
    icon: <Shield size={40} />,
    title: "Healthy Pets",
    desc: "All our fish and birds are sourced from trusted breeders and quarantined for your peace of mind.",
  },
  {
    icon: <Sparkles size={40} />,
    title: "Clean Tanks",
    desc: "Our display tanks are meticulously maintained so you see exactly what you're getting.",
  },
  {
    icon: <CheckCircle2 size={40} />,
    title: "Affordable Prices",
    desc: "Competitive local pricing with no hidden costs. Great value across all product categories.",
  },
  {
    icon: <Fish size={40} />,
    title: "Friendly Local Shop",
    desc: "Family-run shop in Sahakar Nagar. We know our customers and treat every visitor like family.",
  },
];

const GALLERY = [
  {
    img: "/assets/generated/gallery-fish.dim_400x400.jpg",
    label: "Vibrant Fish",
  },
  {
    img: "/assets/generated/gallery-birds.dim_400x400.jpg",
    label: "Exotic Birds",
  },
  {
    img: "/assets/generated/gallery-tank.dim_400x400.jpg",
    label: "Tank Displays",
  },
  {
    img: "/assets/generated/gallery-setup.dim_400x400.jpg",
    label: "Setup Gallery",
  },
  {
    img: "/assets/generated/shop-interior.dim_800x500.jpg",
    label: "Our Store",
  },
  { img: "/assets/generated/birds.dim_600x400.jpg", label: "Bird Section" },
];

const REVIEWS = [
  {
    name: "Ravi Kumar",
    location: "Sahakar Nagar",
    stars: 5,
    text: "Best aquarium shop in the area! Got a beautiful betta fish and the staff helped me set up the whole tank. Very happy!",
  },
  {
    name: "Priya Sharma",
    location: "Hebbal",
    stars: 5,
    text: "Healthy fish, clean store, and super reasonable prices. The goldfish I bought 6 months ago is still thriving. Highly recommend!",
  },
  {
    name: "Mohammed Arif",
    location: "Yelahanka",
    stars: 5,
    text: "The owner gave excellent advice on aquarium setup. The plants and accessories are also great quality at a fair price.",
  },
  {
    name: "Deepa Nair",
    location: "RT Nagar",
    stars: 5,
    text: "Got two lovebirds from here. They are so healthy and active. Will definitely come back for more pets!",
  },
];

const STAR_KEYS = ["star-1", "star-2", "star-3", "star-4", "star-5"];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("visible");
        }
      },
      { threshold: 0.12 },
    );
    for (const el of els) io.observe(el);
    return () => io.disconnect();
  }, []);
}

function ProductCard({
  name,
  price,
  img,
}: { name: string; price: string; img: string }) {
  return (
    <div
      className="neon-border card-lift rounded-2xl overflow-hidden"
      style={{ background: "#0E1A22" }}
    >
      <div style={{ height: 180, overflow: "hidden" }}>
        <img
          src={img}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="p-4">
        <p className="font-semibold text-white text-base mb-1">{name}</p>
        <p className="neon-text font-bold text-sm">{price}</p>
      </div>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-10 fade-up">
      <h2 className="section-title gradient-text">{title}</h2>
      <div className="section-divider" />
    </div>
  );
}

function FooterLink({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li>
      <button
        type="button"
        onClick={() =>
          document.getElementById(label)?.scrollIntoView({ behavior: "smooth" })
        }
        className="capitalize transition-colors duration-200"
        style={{ color: hovered ? "#20E0D6" : "#A8C0CF" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {label}
      </button>
    </li>
  );
}

export default function App() {
  useScrollReveal();
  const navRef = useRef<HTMLElement>(null);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div style={{ background: "#071018", minHeight: "100vh" }}>
      {/* Header */}
      <header
        ref={navRef}
        className="sticky top-0 z-50 flex items-center justify-between px-5 md:px-10 py-3"
        style={{
          background: "rgba(7,16,24,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #2A4A57",
        }}
      >
        <div className="flex items-center gap-2">
          <Fish size={26} className="text-aqua" />
          <span className="font-black text-lg neon-text tracking-wide">
            Haniksha Aqua Land
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          {["products", "services", "gallery", "reviews", "contact"].map(
            (s) => (
              <button
                key={s}
                type="button"
                onClick={() => scrollTo(s)}
                className="capitalize hover:text-aqua transition-colors duration-200"
                data-ocid={`nav.${s}.link`}
              >
                {s}
              </button>
            ),
          )}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE}`}
            className="neon-btn-aqua rounded-full px-4 py-1.5 text-xs font-semibold flex items-center gap-1.5"
            data-ocid="header.call.button"
          >
            <Phone size={13} /> Call
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn-green rounded-full px-4 py-1.5 text-xs font-semibold flex items-center gap-1.5"
            data-ocid="header.whatsapp.button"
          >
            <MessageCircle size={13} /> WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="hero"
        style={{
          position: "relative",
          minHeight: 520,
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src="/assets/generated/hero-bg.dim_1400x700.jpg"
          alt="Aquarium"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(7,16,24,0.88) 0%, rgba(7,16,24,0.65) 100%)",
            zIndex: 1,
          }}
        />
        <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{ border: "1px solid #20E0D6", color: "#20E0D6" }}
            >
              📍 Sahakar Nagar, Bengaluru
            </span>
            <h1
              className="font-black uppercase leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#EAF4FF" }}
            >
              Aquarium &amp; Pet Shop
              <br />
              <span className="gradient-text">in Sahakar Nagar</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-xl">
              Healthy fish, birds &amp; complete aquarium setup — your one-stop
              pet shop in Bengaluru.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${PHONE}`}
                className="neon-btn-aqua rounded-full px-7 py-3 font-bold text-sm flex items-center gap-2"
                data-ocid="hero.call.button"
              >
                <Phone size={16} /> 📞 Call Now
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-btn-green rounded-full px-7 py-3 font-bold text-sm flex items-center gap-2"
                data-ocid="hero.whatsapp.button"
              >
                <MessageCircle size={16} /> 💬 WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-5 md:px-10 max-w-6xl mx-auto">
        <SectionHeader title="Our Products" />
        <div className="mb-12">
          <h3 className="text-aqua font-bold text-xl mb-5 fade-up">🐟 Fish</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FISH.map((p, i) => (
              <div key={p.name} className={`fade-up fade-up-delay-${i + 1}`}>
                <ProductCard {...p} />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-aqua font-bold text-xl mb-5 fade-up">
            🍃 Fish Food
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FOOD.map((p, i) => (
              <div key={p.name} className={`fade-up fade-up-delay-${i + 1}`}>
                <ProductCard {...p} />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-aqua font-bold text-xl mb-5 fade-up">
            🪣 Tanks &amp; Bowls
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {TANKS.map((p, i) => (
              <div key={p.name} className={`fade-up fade-up-delay-${i + 1}`}>
                <ProductCard {...p} />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-aqua font-bold text-xl mb-5 fade-up">
            ⚙️ Accessories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ACCESSORIES.map((p, i) => (
              <div key={p.name} className={`fade-up fade-up-delay-${i + 1}`}>
                <ProductCard {...p} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-aqua font-bold text-xl mb-5 fade-up">🐦 Birds</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {BIRDS.map((p, i) => (
              <div key={p.name} className={`fade-up fade-up-delay-${i + 1}`}>
                <ProductCard {...p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-20 px-5 md:px-10"
        style={{ background: "#0A121A" }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Our Services" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className={`neon-border card-lift rounded-2xl p-8 fade-up fade-up-delay-${i + 1}`}
                style={{ background: "#0E1A22" }}
              >
                <div className="text-aqua mb-4">{s.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-white">{s.title}</h3>
                <p style={{ color: "#A8C0CF", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-20 px-5 md:px-10 max-w-6xl mx-auto">
        <SectionHeader title="Why Choose Us" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY.map((w, i) => (
            <div
              key={w.title}
              className={`neon-border card-lift rounded-2xl p-7 text-center fade-up fade-up-delay-${i + 1}`}
              style={{ background: "#0E1A22" }}
            >
              <div className="text-aqua flex justify-center mb-4">{w.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-white">{w.title}</h3>
              <p
                className="text-sm"
                style={{ color: "#A8C0CF", lineHeight: 1.7 }}
              >
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className="py-20 px-5 md:px-10"
        style={{ background: "#0A121A" }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Gallery" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((g, i) => (
              <div
                key={g.label}
                className={`gallery-tile fade-up fade-up-delay-${(i % 4) + 1}`}
                style={{ aspectRatio: "1/1", background: "#0E1A22" }}
              >
                <img src={g.img} alt={g.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 px-5 md:px-10 max-w-6xl mx-auto">
        <SectionHeader title="What Customers Say" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((r, i) => (
            <div
              key={r.name}
              className={`neon-border card-lift rounded-2xl p-6 fade-up fade-up-delay-${i + 1}`}
              style={{ background: "#0E1A22" }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg mb-4"
                style={{
                  background: "linear-gradient(135deg,#20E0D6,#18B6FF)",
                  color: "#071018",
                }}
              >
                {r.name[0]}
              </div>
              <p className="font-bold text-white mb-0.5">{r.name}</p>
              <p className="text-xs mb-3" style={{ color: "#A8C0CF" }}>
                {r.location}
              </p>
              <div className="flex gap-1 mb-3">
                {STAR_KEYS.slice(0, r.stars).map((k) => (
                  <Star key={k} size={14} fill="#F5C84C" color="#F5C84C" />
                ))}
              </div>
              <p
                className="text-sm italic"
                style={{ color: "#A8C0CF", lineHeight: 1.7 }}
              >
                "{r.text}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section
        id="map"
        className="py-20 px-5 md:px-10"
        style={{ background: "#0A121A" }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Find Us" />
          <div
            className="fade-up rounded-2xl overflow-hidden"
            style={{
              border: "1px solid #2A4A57",
              boxShadow: "0 0 20px rgba(32,224,214,0.1)",
            }}
          >
            <iframe
              title="Haniksha Aqua Land Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d77.5958!3d13.0437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s547%2C+Sahakarnagar+Main+Rd%2C+A+Block%2C+Sahakar+Nagar%2C+Bengaluru%2C+Karnataka+560092!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center fade-up">
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: "#A8C0CF" }}
            >
              <MapPin size={16} className="text-aqua" />
              {ADDRESS}
            </div>
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: "#A8C0CF" }}
            >
              <Clock size={16} className="text-aqua" />
              {HOURS}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-24 px-5 text-center">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-black uppercase mb-4"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", color: "#EAF4FF" }}
            >
              Visit or <span className="gradient-text">Contact Us</span> Today
            </h2>
            <p className="mb-10 text-lg" style={{ color: "#A8C0CF" }}>
              We're open 7 days a week. Come visit our store or reach out
              directly!
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href={`tel:${PHONE}`}
                className="neon-btn-aqua rounded-2xl px-10 py-5 font-bold text-lg flex items-center justify-center gap-3"
                data-ocid="cta.call.button"
              >
                <Phone size={22} /> 📞 Call: {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-btn-green rounded-2xl px-10 py-5 font-bold text-lg flex items-center justify-center gap-3"
                data-ocid="cta.whatsapp.button"
              >
                <MessageCircle size={22} /> 💬 WhatsApp: {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#050D14", borderTop: "1px solid #2A4A57" }}>
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Fish size={22} className="text-aqua" />
              <span className="font-black text-lg neon-text">
                Haniksha Aqua Land
              </span>
            </div>
            <p className="text-sm" style={{ color: "#A8C0CF" }}>
              Your trusted aquarium &amp; pet shop in Sahakar Nagar, Bengaluru.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-sm">
              Contact &amp; Hours
            </h4>
            <p className="text-sm mb-1" style={{ color: "#A8C0CF" }}>
              <MapPin size={13} className="inline text-aqua mr-1" />
              {ADDRESS}
            </p>
            <p className="text-sm mb-1" style={{ color: "#A8C0CF" }}>
              <Phone size={13} className="inline text-aqua mr-1" />
              {PHONE_DISPLAY}
            </p>
            <p className="text-sm" style={{ color: "#A8C0CF" }}>
              <Clock size={13} className="inline text-aqua mr-1" />
              {HOURS}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {["products", "services", "gallery", "reviews", "contact"].map(
                (s) => (
                  <FooterLink key={s} label={s} />
                ),
              )}
            </ul>
          </div>
        </div>
        <div
          className="text-center py-4 text-xs"
          style={{ borderTop: "1px solid #2A4A57", color: "#A8C0CF" }}
        >
          © {new Date().getFullYear()} Haniksha Aqua Land. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
