import { useEffect, useRef, useState } from "react";

interface StatsCounterProps {
  end: number;
  label: string;
  suffix?: string;
  decimals?: number;
}

export const StatsCounter = ({ end, label, suffix = "", decimals = 0 }: StatsCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, end, decimals]);

  return (
    <div ref={ref} className="text-center p-4 rounded-lg hover:bg-muted/50 transition-all hover:scale-105 transform">
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
        {decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs md:text-sm text-muted-foreground font-medium">{label}</div>
    </div>
  );
};
