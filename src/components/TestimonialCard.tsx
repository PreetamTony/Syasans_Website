import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const TestimonialCard = ({ name, role, content, rating }: TestimonialCardProps) => {
  return (
    <div className="scroll-reveal glass glass-hover rounded-xl p-6 group">
      <div className="flex gap-1 mb-4 group-hover:scale-110 transition-transform origin-left">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 transition-all ${
              i < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"
            }`}
          />
        ))}
      </div>
      <p className="text-muted-foreground mb-6 italic leading-relaxed">"{content}"</p>
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};
