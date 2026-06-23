import type { MouseEvent } from 'react';
import type { PageKey } from './data';

export type NavHandler = (e?: MouseEvent) => void;
export type Navigate = (next: PageKey) => void;

export interface PageNavProps {
  onHome: NavHandler;
  onContact: NavHandler;
  onNavigate: Navigate;
}
