import React from 'react';

interface HolographicElementProps {
  size: 'small' | 'medium' | 'large';
  position: 'top-left' | 'top-right' | 'bottom-center';
}

const HolographicElement: React.FC<HolographicElementProps> = ({ size, position }) => {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large': return 'w-96 h-96';
      case 'medium': return 'w-64 h-64';
      default: return 'w-32 h-32';
    }
  };

  const getPositionClasses = (position: string) => {
    switch (position) {
      case 'top-left': return 'top-10 left-10';
      case 'top-right': return 'top-10 right-10';
      case 'bottom-center': return 'bottom-10 left-1/2 transform -translate-x-1/2';
      default: return 'top-10 left-10';
    }
  };

  return (
    <div className={`absolute ${getPositionClasses(position)} ${getSizeClasses(size)} opacity-20`}>
      <div className="relative w-full h-full">
        <div className="holographic-ring w-full h-full border-cyan-400"></div>
        <div className="holographic-ring holographic-ring-reverse w-4/5 h-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-purple-400"></div>
        <div className="holographic-ring w-3/5 h-3/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-pink-400"></div>
      </div>
    </div>
  );
};

export default HolographicElement;