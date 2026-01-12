import Link from 'next/link';
import { Menu } from '@headlessui/react';
import styles from '../styles/Home.module.css';

export default function Header() {
  const blogPosts = [
    { 
      title: 'DreamGen', 
      path: '/dreamgen',
      description: 'A synthetic robot data generation pipeline using video world models'
    },
    {
      title: 'FLARE',
      path: '/flare',
      description: 'Robot Learning with Implicit World Modeling'
    },
    {
      title: 'GR00T N1.5',
      path: '/gr00t-n1_5',
      description: 'An (Improved) Open Foundation Model for Generalist Humanoid Robots'
    }
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <span>GEAR @ NVIDIA Research</span>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/publications" className={styles.navLink}>Publications</Link>
        <div className={styles.navItem}>
          <Menu as="div" className={styles.megaDropdown}>
            <Menu.Button className={styles.megaDropdownToggle}>
              Blog
            </Menu.Button>
            <Menu.Items className={styles.megaDropdownPanel}>
              <div className={styles.megaDropdownContent}>
                <div className={styles.megaDropdownSection}>
                  <h3 className={styles.megaDropdownTitle}>Blog Posts</h3>
                  <div className={styles.megaDropdownGrid}>
                    {blogPosts.map((post, index) => (
                      <div key={index} className={styles.megaDropdownItem}>
                        <Menu.Item>
                          {({ active }) => (
                            <Link 
                              href={post.path} 
                              className={`${styles.megaDropdownLink} ${active ? styles.megaDropdownLinkActive : ''}`}
                            > 
                              <span className={styles.megaDropdownLinkTitle}>{post.title}</span>
                              <span className={styles.megaDropdownLinkDescription}>{post.description}</span>
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Menu.Items>
          </Menu>
        </div>
      </nav>
    </header>
  );
}
