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
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Read about the details:</div>
        <a href={paperUrl} style={{ color: '#4285F4', textDecoration: 'none', fontWeight: 500 }}>
          {title}
        </a>
      </div>
    </div>
  );
};

export default PaperInfo; 