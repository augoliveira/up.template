'use client';
import { LinkProps } from 'next/link';

export type ActiveLinkProps = {
  childre: React.ReactNode;
} & LinkProps;
