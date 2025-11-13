import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  highlight?: string;
  subtitle: string;
  tag: string;
  highlightColor?: string;
}

export const HeroSection = ({
  title,
  highlight = "",
  subtitle,
  tag,
  highlightColor = "text-primary"
}: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-r from-primary/5 to-primary/10 py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            {tag}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {title} {highlight && <span className={highlightColor}>{highlight}</span>}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
