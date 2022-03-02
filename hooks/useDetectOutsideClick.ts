import React, { useEffect } from 'react';

const useDetectOutsideClick = (ref: React.RefObject<HTMLElement>, handler: () => void) => {
  const listener = (event: MouseEvent | TouchEvent) => {
    if (!ref.current || ref.current?.contains(event.target as Node)) {
      return;
    }

    handler();
  };

  useEffect(() => {
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  });
};

export default useDetectOutsideClick;
