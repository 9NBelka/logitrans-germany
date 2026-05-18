import { LucideIcon } from 'lucide-react';

export enum FormType {
  TRANSPORT = 'transport',
  LOGISTICS = 'logistics',
  MOVING = 'moving',
  GENERAL = 'general',
}

export interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
