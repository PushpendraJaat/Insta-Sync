import React from 'react';
import logo from '../../public/og-image.svg'
import Image from 'next/image';

const LogoSmall: React.FC = () => (
  <> <Image
    src={logo}
    alt="Vercel Logo"
    className="dark:invert"
    width={100}
    height={24}
    priority
  /></>
);

export default LogoSmall;
