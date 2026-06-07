"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";

const fadeUpVariant: any = {
  hidden: { opacity: 0, y: 50, z: -30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    z: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const scrollToServices = () => {
    document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center overflow-x-hidden pt-24 pb-32">
      <Header />

      {/* Hero Section */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="w-full max-w-[1200px] px-8 mt-20 flex flex-col md:flex-row items-center gap-12"
      >
        <motion.div variants={fadeUpVariant} className="flex-1 flex flex-col gap-6">
          <h1 className="font-antonio text-6xl md:text-8xl font-bold uppercase leading-[0.9] tracking-tighter text-white">
            Transforming<br/> Ideas into<br/> <span className="text-primary">Impact.</span>
          </h1>
          <p className="font-inter text-lg text-textMuted max-w-[480px]">
            Business analyst, content creator, and product tester. I deliver actionable insights, impactful content, and thorough product reviews for brands seeking growth.
          </p>
          <div className="flex gap-4 mt-4">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(208, 255, 113, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-black font-antonio font-bold uppercase tracking-widest px-8 py-4 rounded-full"
            >
              Let&apos;s Collaborate
            </motion.button>
            <motion.button 
              onClick={scrollToServices}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(51, 51, 51, 1)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-cardBorder text-white font-antonio font-bold uppercase tracking-widest px-8 py-4 rounded-full border border-white/10 flex items-center gap-2"
            >
              <span>🛒</span> View Services
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          variants={fadeUpVariant} 
          className="flex-1 relative w-full aspect-square md:aspect-[4/5] rounded-[40px] overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Avatar / Hero Image Match */}
          <div className="absolute inset-0 bg-card rounded-[40px] border border-white/5 flex items-center justify-center p-4">
            <img 
              src="/images/mIm9lrb8l1W8blmrYlGXhMAdo.png" 
              alt="Manish Avatar" 
              className="w-full h-full object-cover rounded-[32px]"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Services Anchor Section */}
      <motion.section 
        id="services-section"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="w-full max-w-[1200px] px-8 mt-40 flex flex-col gap-12"
      >
        <motion.div variants={fadeUpVariant} className="flex flex-col gap-4">
          <span className="font-antonio text-primary font-bold tracking-[2px] uppercase">Services</span>
          <h2 className="font-antonio text-5xl md:text-6xl font-bold uppercase text-white">Business Analysis & Strategy</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Market Research", desc: "Deep dive analysis into market trends and opportunities." },
            { title: "Product Testing", desc: "Rigorous beta testing and user story development." },
            { title: "Content Strategy", desc: "Building the content flywheel to scale your reach." }
          ].map((service, i) => (
            <motion.div 
              key={i}
              variants={fadeUpVariant}
              whileHover={{ 
                y: -10, 
                borderColor: "rgba(208, 255, 113, 0.5)",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.5)"
              }}
              className="bg-card p-8 rounded-[32px] border border-cardBorder flex flex-col gap-4 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-cardBorder flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <div className="w-4 h-4 bg-white group-hover:bg-black rounded-sm transition-colors duration-300" />
              </div>
              <h3 className="font-antonio text-2xl font-bold uppercase text-white mt-4">{service.title}</h3>
              <p className="font-inter text-textMuted text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
