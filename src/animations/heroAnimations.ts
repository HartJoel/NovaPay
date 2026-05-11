// Container (stagger wrapper)
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Heading
export const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

// Subheading
export const subheadingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

// Buttons
export const buttonVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.98,
  },
};

// Main card
export const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut" as const,
    },
  },
};

// Analytics card
export const analyticsVariants = {
  hidden: { opacity: 0, x: 60, y: -40 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 6,
    transition: {
      duration: 0.9,
      ease: "easeOut" as const,
      delay: 0.3,
    },
  },
};

// Transfer card
export const transferVariants = {
  hidden: { opacity: 0, x: -60, y: 40 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: -6,
    transition: {
      duration: 0.9,
      ease: "easeOut" as const,
      delay: 0.5,
    },
  },
};

// Floating animation (loop)
export const floatingVariants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Glow pulse
export const glowVariants = {
  animate: {
    opacity: [0.15, 0.25, 0.15],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Shimmer line
export const shimmerVariants = {
  animate: {
    backgroundPosition: ["0% 0%", "100% 0%"],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "linear" as const,
    },
  },
};
