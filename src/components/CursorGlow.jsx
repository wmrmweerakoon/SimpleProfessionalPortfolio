import { useEffect, useRef } from 'react';

export const CursorGlow = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed z-50 pointer-events-none rounded-full"
      style={{
        width: '10px',
        height: '10px',
        border: '2px solid black',
        backgroundColor: 'transparent',
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.1s ease-out, top 0.1s ease-out',
        willChange: 'left, top',
      }}
    />
  );
};
