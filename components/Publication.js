import styles from '../styles/Home.module.css';
import LazyVideo from './LazyVideo';
import Image from 'next/image';

export default function Publication({ 
  title, 
  authors, 
  conference, 
  image, 
  video, 
  projectLink, 
  paperLink, 
  codeLink, 
  datasetLink, 
  modelsLink, 
  benchmarkLink, 
  announcementLink, 
  awards
}) {
  // Helper function to format authors with symbols
  const formatAuthors = (authors) => {
    if (!authors) return null;
    
    // Replace special symbols for proper rendering
    const formattedAuthors = authors.replace(/✉/g, '✉').replace(/\*/g, '*').replace(/†/g, '†');
    return formattedAuthors;
  };

  return (
    <div className={styles.publicationItem}>
      {/* Media (Video or Image) */}
      {(video || image) && (
        <div className={styles.publicationMedia}>
          {video ? (
            <LazyVideo src={video} />
          ) : image ? (
            <div className={styles.publicationImage}>
              <img src={image} alt={title} />
            </div>
          ) : null}
        </div>
      )}
      
      <div className={styles.publicationContent}>
        {/* Title */}
        <h3 className={styles.publicationTitle}>{title}</h3>
        
        {/* Authors */}
        {authors && (
          <p className={styles.publicationAuthors}>{formatAuthors(authors)}</p>
        )}
        
        {/* Conference/Journal */}
        {conference && (
          <p className={styles.publicationConference}>{conference}</p>
        )}
        
        {/* Awards */}
        {awards && awards.length > 0 && (
          <div className={styles.publicationAwards}>
            {awards.map((award, index) => (
              <span key={index} className={styles.award}>{award}</span>
            ))}
          </div>
        )}
        
        {/* Links */}
        <div className={styles.publicationLinks}>
          {projectLink && (
            <a href={projectLink} target="_blank" rel="noopener noreferrer" className={styles.publicationLink}>project</a>
          )}
          {paperLink && (
            <a href={paperLink} target="_blank" rel="noopener noreferrer" className={styles.publicationLink}>paper</a>
          )}
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer" className={styles.publicationLink}>code</a>
          )}
          {datasetLink && (
            <a href={datasetLink} target="_blank" rel="noopener noreferrer" className={styles.publicationLink}>dataset</a>
          )}
          {modelsLink && (
            <a href={modelsLink} target="_blank" rel="noopener noreferrer" className={styles.publicationLink}>models</a>
          )}
          {benchmarkLink && (
            <a href={benchmarkLink} target="_blank" rel="noopener noreferrer" className={styles.publicationLink}>benchmark</a>
          )}
          {announcementLink && (
            <a href={announcementLink} target="_blank" rel="noopener noreferrer" className={styles.publicationLink}>announcement</a>
          )}
        </div>
      </div>
    </div>
  );
} 