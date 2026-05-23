import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Instant precise tracking for the inner dot
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Fluid spring tracking for the outer ring
  const springConfig = { damping: 20, stiffness: 200, mass: 0.3 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleHover = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a, button, [role="button"], [role="link"]') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Only add event listeners for non-touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseover', handleHover);
      document.addEventListener('mouseout', () => setIsHovering(false));
      
      // Hide default cursor globally
      document.body.style.cursor = 'none';
      const css = document.createElement('style');
      css.innerHTML = `* { cursor: none !important; }`;
      document.head.appendChild(css);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleHover);
      document.removeEventListener('mouseout', () => setIsHovering(false));
      document.body.style.cursor = 'auto';
    };
  }, [mouseX, mouseY]);

  // Don't render on mobile devices
  if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Outer physics-based trailing ring */}
      <motion.div 
        className="fixed left-0 top-0 pointer-events-none z-[10000] mix-blend-difference rounded-full hidden sm:block"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 64 : 40,
          height: isHovering ? 64 : 40,
          border: isHovering ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255, 255, 255, 0.5)',
          backgroundColor: isHovering ? 'rgba(255,255,255,0.15)' : 'transparent',
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.25s ease-out, height 0.25s ease-out, background-color 0.25s ease, border 0.25s ease, opacity 0.3s ease',
        }}
      />
      
      {/* Inner instant tracking dot */}
      <motion.div 
        className="fixed left-0 top-0 pointer-events-none z-[10000] mix-blend-difference rounded-full bg-white hidden sm:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 6 : 10,
          height: isHovering ? 6 : 10,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.2s ease-out, height 0.2s ease-out, opacity 0.3s ease',
        }}
      />
    </>
  );
};
