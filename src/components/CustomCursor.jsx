import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };
    window.addEventListener('mousemove', updatePosition);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Glowing effect */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isPointer ? 'scale-125' : 'scale-100'} transition-transform duration-200`}
        style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(127,108,224,0.35) 0%, rgba(127,108,224,0.15) 60%, rgba(127,108,224,0) 100%)',
          filter: 'blur(8px)',
          pointerEvents: 'none',
        }}
      />
      {/* Center dot */}
      <div className="w-3 h-3 rounded-full relative z-10" style={{ background: '#7F6CE0' }} />
    </div>
  );
};

export default CustomCursor; 