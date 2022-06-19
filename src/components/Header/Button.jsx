import React from 'react';
import '../../../styles/Button.module.css';
import Link from 'next/link'

export function Button() {
  return (
    <Link href='sign-up'>
      <button className='btn'>Sign Up</button>
    </Link>
  );
}
