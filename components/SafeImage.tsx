import React, { useState } from 'react';
import Image from 'next/image';

export const SafeImage = ({ src, alt, fill, className, priority, ...props }: any) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-zinc-900/50 ${fill ? 'w-full h-full' : 'w-full'}`}>
      {!isLoaded && !priority && (
        <div className="absolute inset-0 z-10 animate-shimmer bg-zinc-800/20" />
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={fill ? undefined : 1000}
        height={fill ? undefined : 1000}
        sizes={fill ? undefined : "100vw"}
        style={fill ? undefined : { width: '100%', height: 'auto' }}
        priority={priority}
        className={`transition-all duration-700 ease-out ${isLoaded || priority ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} ${className}`}
        onLoad={() => setIsLoaded(true)}
        referrerPolicy="no-referrer"
        {...props}
      />
    </div>
  );
};
