import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='text-center'>
        <h2 className='text-3xl'>There was a problem</h2>
        <p>We could not found the page you were looking for.</p>
        <p>Go back to <Link href={'/'}>Dashboard</Link></p>
    </div>
  )
}
