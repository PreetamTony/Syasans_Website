import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
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
        target.closest('a, button, [role="button"], [role="link"]')
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
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleHover);
      document.removeEventListener('mouseout', () => setIsHovering(false));
    };
  }, []);

  // Don't render on mobile devices
  if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <div 
        className={`fixed left-0 top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-[9999] transition-all duration-100 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovering ? 'scale-150 bg-primary/10' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-out, width 0.2s ease, height 0.2s ease',
        }}
      />
      <div 
        className={`fixed left-0 top-0 w-2 h-2 rounded-full bg-primary pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-[9999] transition-all duration-200 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovering ? 'scale-50' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease-out',
        }}
      />
    </>
  );
};
