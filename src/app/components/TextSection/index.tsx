import CTAButton, { CTAButtonProps } from './CTAButton';

import styles from './index.module.scss';

interface TextSectionProps {
  title: string;
  subtitle: string;
  text: string;
  ctaButton: CTAButtonProps;
}
export default function TextSection({
  title,
  subtitle,
  text,
  ctaButton,
}: TextSectionProps) {
  return (
    <section className={styles['text-section']}>
      <h2 className={styles['text-section__title']}>{title}</h2>
      <span className={styles['text-section__subtitle']}>{subtitle}</span>
      <p className={styles['text-section__text']}>{text}</p>

      <CTAButton {...ctaButton} />
    </section>
  );
}
