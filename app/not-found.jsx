import Link from 'next/link';

const PageNotFound = () => {
  return (
    <div className='bg-slate-800 text-white min-h-screen flex text-center justify-center items-center'>
      <div className='h-fit'>
        <h1 className='text-2xl font-bold tracking-wider'>Page Not Found</h1>
        <p className='my-2'>Sorry, the page you requested could not be found.</p>
        <Link href="/" className='underline underline-offset-4 text-green-600'>
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;