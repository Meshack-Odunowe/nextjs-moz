'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ErrorPage = () => {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };

  return (
    <>
      <div className="flex flex-col my-24">
        <li className="bg-purple-200 py-24 text-center font-bold text-2xl list-none">
          Error! Go Back to Home Page! ‼️
        </li>
        <Link href="/"
           className="font-bold bg-purple-800 text-white py-4 px-8 rounded-md text-center" onClick={goHome}>
            Go Home
         
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
