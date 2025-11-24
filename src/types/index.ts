import { LucideProps } from 'lucide-react';
import { ComponentType } from 'react';

export interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: ComponentType<LucideProps>;
  image: string;
  tags?: string[];
}
