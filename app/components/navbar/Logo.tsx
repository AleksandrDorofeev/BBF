'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push('/')}
      alt="Logo"
      className=' cursor-pointer'
      height='150'
      width="150"
      src='/images/bbf-logo.jpeg'
    />
  )
}

export default Logo;