import Link from 'next/link';

const ErrorPage = () => {
  

  return (
    <>
      <div className="flex flex-col my-24">
        <li className="bg-purple-200 py-24 text-center font-bold text-2xl list-none">
          Error! Go Back to Home Page! ‼️
        </li>
        <Link href="/"
           className="font-bold bg-purple-800 text-white py-4 px-8 rounded-md text-center" >
            Go Home
         
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
