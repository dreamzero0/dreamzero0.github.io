import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function MDXLayout({ 
  children, 
  frontMatter = {},
  title,
  subtitle,
  description,
  category,
  publishDate,
  links
}) {
  // Use frontMatter if available, otherwise fall back to props
  const meta = {
    title: title || frontMatter.title || "Blog Post",
    subtitle: subtitle || frontMatter.subtitle,
    description: description || frontMatter.description || "A blog post written in MDX",
    category: category || frontMatter.category || "Blog",
    publishDate: publishDate || frontMatter.publishDate,
    links: links || frontMatter.links || []
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      
      <article className={styles.blogPost}>
        <div className={styles.center}>
          <div className={styles.category}>{meta.category}</div>
          <h1 className={styles.blogTitle}>
            {meta.title}
            {meta.subtitle && (
              <>
                <br />
                <span className={styles.subtitle} style={{fontSize: "0.55em"}}>{meta.subtitle}</span>
              </>
            )}
          </h1>
          {meta.publishDate && (
            <div className={styles.publishDate} style={{ fontSize: "1.0em" }}>{meta.publishDate}</div>
          )}
          
          {meta.links.length > 0 && (
            <div className={styles.linkContainer}>
              {meta.links.map((link, index) => (
                <span key={index}>
                  <a href={link.url} className={`${styles.textLink} ${styles.borderedLink}`} target="_blank" rel="noopener noreferrer">
                    {link.text}
                  </a>
                  {index < meta.links.length - 1 && <span className={styles.linkDivider}>•</span>}
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