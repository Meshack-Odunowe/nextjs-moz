// 'use client'
// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../firebase/config";
// import { FcGoogle } from "react-icons/fc";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import img from "../../public/group.jpg";
// import Image from "next/image";
// // import { useAuth } from "../context/Context";

// function Login() {
//   let router = useRouter();
//   // const { signIn: contextSignIn } = useAuth(); 

//   const signInWithGoogle = async () => {
//     window.scrollTo(0, 0);

//     try {
//       const result = await signInWithPopup(auth, provider);
//       // Authentication was successful
//       console.log("User signed in:", result.user.uid);

//       // Call the signIn function from the useAuth hook
//       contextSignIn(result.user);

//       // Show a success toast notification
//       toast.success("Signed in successfully", {
//         position: "top-right",
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });

//       router.push("blog");
//     } catch (error) {
//       // Authentication failed
//       console.error("Error signing in:", error);

//       // Show an error toast notification
//       toast.error("Error signing in. Please try again.", {
//         position: "top-right",
//         autoClose: 1000, 
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     }
//   };

//   return (
//     <>
//       <div className="flex flex-col md:flex-row gap-8 px-4">
//         <div className="bg-purple-100 relative md:rounded-e-full">
//           <Image width={600} height={400}
//             src={img}
//             alt="image"
//             className="overflow-hidden h-[700px] object-cover md:rounded-e-full shadow-2xl rounded-md"
//           />
//         </div>

//         <div className="flex flex-col justify-center items-center">
//           <div className="shadow-2xl border p-8 rounded-md">
//             <p className="text-center font-bold my-8">
//               Sign In With Google to Continue
//             </p>
//             <button
//               className="py-2 flex items-center w-fit gap-4 px-6 bg-purple-700 rounded-md text-white"
//               onClick={signInWithGoogle}
//               aria-label="Sign in with Google"
//             >
//               <span className="text-2xl">
//                 <FcGoogle />
//               </span>
//               Sign in with Google
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;
function login() {
  return (
    <div>
      <h2>login</h2>
    </div>
  )
}

export default login

