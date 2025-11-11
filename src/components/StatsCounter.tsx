import { useEffect, useRef, useState } from "react";

interface StatsCounterProps {
  end: number;
  label: string;
  suffix?: string;
}

export const StatsCounter = ({ end, label, suffix = "" }: StatsCounterProps) => {
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
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div
      ref={ref}
      className="glass glass-hover p-8 rounded-2xl text-center transform transition-all duration-500"
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-muted-foreground text-sm md:text-base font-medium">
        {label}
      </div>
    </div>
  );
};
