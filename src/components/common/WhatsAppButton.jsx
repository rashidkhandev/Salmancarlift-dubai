import React from 'react';
import { getWhatsAppLink } from '../../utils/contactLinks';
import Button from './Button';

export const WhatsAppButton = ({
  message,
  children = 'Book on WhatsApp',
  size = 'md',
  block = false,
  className = '',
  iconOnly = false
}) => {
  const url = getWhatsAppLink(message);

  if (iconOnly) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`float-btn float-wa pulse ${className}`}
        aria-label="Chat with Salman Carlift on WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.1c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.81 2 .88 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.29.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.45.12.62-.07.17-.19.71-.83.9-1.12.19-.28.38-.24.63-.14.26.09 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.35z" />
        </svg>
      </a>
    );
  }

  return (
    <Button
      href={url}
      variant="wa"
      size={size}
      block={block}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ marginRight: '2px', flexShrink: 0 }}>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.1c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.81 2 .88 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.29.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.45.12.62-.07.17-.19.71-.83.9-1.12.19-.28.38-.24.63-.14.26.09 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.35z" />
      </svg>
      {typeof children === 'string' ? <span>{children}</span> : children}
    </Button>
  );
};

export default WhatsAppButton;
