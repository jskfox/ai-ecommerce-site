import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="relative h-16 w-32">
        <Image
          src="/digilapheader.png"
          alt="Digilap"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
