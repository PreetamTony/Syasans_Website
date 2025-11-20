import { useEffect, useRef, useState } from "react";

interface StatsCounterProps {
  end: number | string;
  label: string;
  suffix?: string;
  decimals?: number;
}

export const StatsCounter = ({ end, label, suffix = "", decimals = 0 }: StatsCounterProps) => {
  const [count, setCount] = useState<number | string>(0);
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

    if (typeof end === 'string') {
      setCount(end);
      return;
    }

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
    <div
      ref={ref}
      className="glass p-6 rounded-xl text-center bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:scale-105 scroll-reveal"
    >
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
        {typeof count === 'number' ? count.toLocaleString() : count}{suffix}
      </div>
      <div className="text-xs md:text-sm text-muted-foreground font-medium">{label}</div>
    </div>
  );
};
