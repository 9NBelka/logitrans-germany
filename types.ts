import { LucideIcon } from 'lucide-react';

export enum FormType {
  TRANSPORT = 'TRANSPORT',
  LOGISTICS = 'LOGISTICS',
  MOVING = 'MOVING',
  GENERAL = 'GENERAL'
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