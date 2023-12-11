import styles from './index.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className={styles['wrapper']}>
      <div className={styles['inner-wrapper']}>{children}</div>
    </main>
  );
}
