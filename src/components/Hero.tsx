import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  analyticsVariants,
  buttonVariants,
  cardVariants,
  containerVariants,
  floatingVariants,
  glowVariants,
  headingVariants,
  shimmerVariants,
  subheadingVariants,
  transferVariants,
} from "../animations/heroAnimations";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end center"],
  });

  // Parallax values for different cards
  const mainCardY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const analyticsCardY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const transferCardY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-28 text-white">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <motion.h1
              variants={headingVariants}
              className="text-6xl lg:text-7xl font-semibold leading-tight"
            >
              Banking Without <br />
              <span className="text-[#C6A972]">Limits.</span>
            </motion.h1>

            <motion.p
              variants={subheadingVariants}
              className="mt-4 text-[#8E9196] max-w-md"
            >
              Send, save, spend and grow your money with premium digital
              banking.
            </motion.p>

            <div className="mt-8 flex gap-4">
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                className="px-6 py-3 rounded-2xl bg-[#C6A972] text-black font-medium transition-shadow duration-300 hover:shadow-lg hover:shadow-[#C6A972]/40"
              >
                Open Account
              </motion.button>

              <motion.button
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 text-white  hover:border-[#C6A972]/60 hover:bg-white/10"
              >
                Watch Demo
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Right Visual - Cards Container */}
        <motion.div className="relative flex items-center justify-center min-h-137.5">
          {/* Analytics Card */}
          <motion.div
            variants={analyticsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            animate="animate"
            custom={0}
            className="absolute top-10 right-0 w-72"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="p-5 rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl"
              style={{ rotate: 6 }}
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm text-[#8E9196]">Monthly Revenue</p>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-2xl font-semibold mt-1"
                  >
                    ₦12.4M
                  </motion.h3>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-[#C6A972]/20 flex items-center justify-center text-[#E0C48A]">
                  ↗
                </div>
              </div>

              <div className="flex items-end gap-2 h-32">
                {[40, 70, 55, 90, 75, 100].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: `${height}%`, opacity: 1 }}
                    transition={{
                      delay: 1.2 + i * 0.08,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="flex-1 rounded-full bg-linear-to-t from-[#8E6D3B] to-[#E0C48A]"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Main Premium Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            animate="animate"
            style={{ y: mainCardY }}
            className="relative w-105 h-65 rounded-[36px] bg-linear-to-br from-[#1A1B1E] to-[#0F1012] border border-white/10 overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
          >
            {/* Animated Floating Motion */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute inset-0"
            >
              {/* Glow */}
              <motion.div
                variants={glowVariants}
                animate="animate"
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(224,196,138,0.18),transparent_35%)]"
              />

              {/* Metallic Line with Shimmer */}
              <motion.div
                variants={shimmerVariants}
                animate="animate"
                className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#E0C48A]/60 to-transparent"
                style={{
                  backgroundSize: "200% 100%",
                  backgroundPosition: "0% 0%",
                }}
              />

              {/* Decorative Blur */}
              <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-[#C6A972]/10 blur-3xl" />
            </motion.div>

            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              {/* Top Section */}
              <motion.div
                className="flex justify-between items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <p className="text-[#8E9196] text-sm uppercase tracking-[0.2em]">
                    Nova Pay
                  </p>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    viewport={{ once: true }}
                    className="mt-3 text-3xl font-semibold"
                  >
                    $24,580
                  </motion.h3>
                </div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full border border-[#C6A972]/40" />
                </motion.div>
              </motion.div>

              {/* Bottom Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                viewport={{ once: true }}
              >
                <p className="text-[#8E9196] text-xs tracking-[0.3em] uppercase mb-3">
                  Card Number
                </p>

                <div className="flex gap-4 text-xl tracking-[0.2em] text-[#EAE4DB]">
                  {["4321", "••••", "••••", "9084"].map((num, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {num}
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  className="mt-8 flex justify-between items-end"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <p className="text-[#8E9196] text-xs uppercase tracking-[0.2em]">
                      Card Holder
                    </p>

                    <p className="mt-2 text-[#F6F3EE] font-medium">Joel Hart</p>
                  </div>

                  <div className="text-right">
                    <p className="text-[#8E9196] text-xs uppercase tracking-[0.2em]">
                      Expires
                    </p>

                    <p className="mt-2 text-[#F6F3EE] font-medium">08/30</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Transfer Card */}
          <motion.div
            variants={transferVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            animate="animate"
            style={{ y: transferCardY }}
            className="absolute bottom-10 left-0 w-64"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="p-5 rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl"
              style={{ rotate: -6 }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 rounded-2xl bg-[#C6A972]/15 flex items-center justify-center text-[#E0C48A] text-lg"
                >
                  ✓
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-white font-medium">Transfer Successful</p>

                  <p className="text-sm text-[#8E9196]">
                    ₦240,000 sent instantly
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Inline styles for gradient animation */}
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 0%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
