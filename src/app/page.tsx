import Link from 'next/link';
import '../app/globals.css';

export default function Home() {

  return(
    <>
      <h1 className='text-2xl font-bold m-4'> Welcome Home ! </h1>
      <Link href="/blog" className='m-4 text-xl text-blue-500'> Blog </Link>
    </>
  )
}