import { Variants } from 'framer-motion';

// Fade in from bottom
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Fade in from right
export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Scale in
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Slide in from bottom with delay
export const slideInBottom: Variants = {
  hidden: { 
    opacity: 0, 
    y: 100 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2
    }
  }
};

// Rotate in
export const rotateIn: Variants = {
  hidden: { 
    opacity: 0, 
    rotate: -180,
    scale: 0.5
  },
  visible: { 
    opacity: 1, 
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Bounce in
export const bounceIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.3,
    y: -50
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  }
};
