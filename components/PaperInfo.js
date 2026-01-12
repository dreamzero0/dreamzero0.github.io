import React from 'react';

const PaperInfo = ({ 
  title, 
  paperUrl = "#", 
  tags = [], 
  authors = [],
  paperType = "paper"
}) => {
  return (
    <div style={{ marginTop: 60, padding: 24, background: '#f7f7f7', borderRadius: 12 }}>
      
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {tags.map((tag, i) => (
            <span key={i} style={{ 
              display: 'inline-block', 
              padding: '6px 12px', 
              background: '#e8f0fe', 
              color: '#4285F4', 
              borderRadius: 16, 
              fontSize: 14,
              fontWeight: 500
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>To read more about {paperType}:</div>
        <a href={paperUrl} style={{ color: '#4285F4', textDecoration: 'none', fontWeight: 500 }}>
          {title}
        </a>
      </div>
      
      <div>
        <div style={{ fontWeight: 600, marginBottom: 12 }}>Authors:</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 8 }}>
          {authors.map((author, i) => (
            <React.Fragment key={i}>
              {author.url ? (
                <a 
                  href={author.url} 
                  style={{ 
                    color: '#333', 
                    textDecoration: 'underline', 
                    fontWeight: 500 
                  }}
                >
                  {author.name}
                </a>
              ) : (
                <span 
                  style={{ 
                    color: '#333', 
                    fontWeight: 500 
                  }}
                >
                  {author.name}
                </span>
              )}
              {i < authors.length - 1 && ','}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaperInfo; 