import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function BlogPost({ 
  title,
  subtitle,
  description,
  category = "Blog",
  publishDate,
  links = [],
  children 
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      
      <article className={styles.blogPost}>
        <div className={styles.center}>
          <div className={styles.category}>{category}</div>
          <h1 className={styles.blogTitle}>
            {title}
            {subtitle && (
              <>
                <br />
                <span className={styles.subtitle} style={{fontSize: "0.55em"}}>{subtitle}</span>
              </>
            )}
          </h1>
          {publishDate && (
            <div className={styles.publishDate} style={{ fontSize: "1.0em" }}>{publishDate}</div>
          )}
          
          {links.length > 0 && (
            <div className={styles.linkContainer}>
              {links.map((link, index) => (
                <span key={index}>
                  <a href={link.url} className={`${styles.textLink} ${styles.borderedLink}`} target="_blank" rel="noopener noreferrer">
                    {link.text}
                  </a>
                  {index < links.length - 1 && <span className={styles.linkDivider}>•</span>}
                </span>
              ))}
            </div>
          )}
        </div>

        <div id="content" className={styles.blogContent}>
          {children}
        </div>
      </article>
    </>
  )
} 