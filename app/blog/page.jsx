'use client'

import { getDownloadURL, ref, getStorage } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { ClipLoader } from 'react-spinners';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { db } from '../firebase/config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
function Blog() {
  const [loadingInProgress, setLoading] = useState(true);
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, 'Posts');
  const storage = getStorage();
  const router = useRouter();
  const handleGetStartedClick = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await getDocs(postsCollectionRef);
        const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        console.log('Number of posts:', posts.length);

        const postsWithImages = await Promise.all(
          posts.map(async (post) => {
            if (post.imageUrl) {
              const imageUrl = await getDownloadURL(ref(storage, post.imageUrl));
              return { ...post, imageUrl };
            }
            return post;
          })
        );

        setPostList(postsWithImages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    getPosts();
  }, [router]);

  const user = auth.currentUser;
  const signUserOut = () => {
    signOut(auth)
      .then(() => {
        // Show a toast notification when the user logs out
        toast.success('Logged out successfully', {
          position: 'top-right',
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        router.push('/');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };


  return (
    <>
      <nav className='my-8 justify-end max-w-7xl px-4 flex gap-4'>
        {user ? ( // Check if there is a logged-in user
          <>
            <Link href={'/createpost'} className='bg-purple-700 text-white px-4 py-2 rounded-md hover:text-purple-200'>
              Create Post
            </Link>
            <button onClick={signUserOut} className='bg-slate-100 text-black px-4 py-2 rounded-md hover:font-bold'>
              Log Out
            </button>
          </>
        ) : (
          <Link href={'login'} onClick={handleGetStartedClick} to='/login' className='bg-slate-100 text-black px-4 py-2 rounded-md hover:font-bold'>
            Sign Up/Login
          </Link>
        )}
      </nav>
      {loadingInProgress ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color='purple' size={50} />
        </div>
      ) : (
        <div className='max-w-6xl bg-purple-100 mx-auto leading-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center px-4 py-4 items-center h-full mb-24'>
         {postList.map((post) => (
            <div className='shadow-lg flex flex-col justify-center px-8 rounded-md items-center hover:scale-110 bg-white  transition cursor-pointer h-[500px] overflow-hidden border' key={post.id}>
              <div>
                <div>
                  <h1 className='text-center font-bold text-xl my-4'>{post.title}</h1>
                </div>
              </div>
              {post.imageUrl && (
                <Image width={400} height={400}
                  className='w-full mb-8 rounded-md hover:opacity-30'
                  src={post.imageUrl}
                  alt='Post Image'
                  style={{ maxWidth: '1024px', height: '200px', objectFit: 'cover' }}
                />
              )}
              <div>{post.postTextTruncated}</div>
              <div>
                <Link onClick={handleGetStartedClick} to={`/full-post/${post.id}`} className='px-4 py-2 rounded-md bg-red-600 text-white hover:bg-white hover:text-blue-600 hover:border'>
                  See more →
                </Link>
              </div>
              <h3 className='mt-4'>
                <span className='font-bold'>Posted By: </span>
                <span className='text-red-600'>{post.author?.name || 'Unknown Author'}</span>
              </h3>
              
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Blog;
