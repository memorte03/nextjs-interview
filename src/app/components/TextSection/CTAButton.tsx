'use client';

import Link from 'next/link';

import styles from './index.module.scss';

export interface CTAButtonProps {
  title: string;
  href: string;
}
export default function CTAButton({ title, href }: CTAButtonProps) {
  return (
    <Link className={styles['ctaButton']} href={href}>
      {title}
    </Link>
  );
}
