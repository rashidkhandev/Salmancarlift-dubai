import React from 'react';

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  center = false,
  className = ''
}) => {
  return (
    <div className={`section-head ${center ? 'center' : ''} ${className}`}>
      {eyebrow && (
        <span className="eyebrow" style={center ? { justifyContent: 'center' } : {}}>
          {eyebrow}
        </span>
      )}
      {title && <h2>{title}</h2>}
      {subtitle && <p style={center ? { margin: '0 auto' } : {}}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
