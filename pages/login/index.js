import Head from "next/head";
import { FaRegEnvelope, FaGooglePlay } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Googleauth from "../../components/Google-auth";



export default function Login(){
const router = useRouter()
const [email , setEmail] = useState()
const [password , setPassword] = useState()
const myfunc = (event) => {
    event.preventDefault() 
if(email === "ajith" && password === "123"){
    router.push('/')
}else {
    alert('incorrect')
}
    
    
}
    return (
        <div className=" flex flex-col items-center justify-center min-h-screen py-2 ">
        <div className="absolute top-0 right-0 h-16 w-40 mt-8">

            <Image className="transition ease-in-out delay-150
              hover:-translate-y-1 hover:scale-110  duration-150" 
                     src="/universe.png"
                     alt="universe"
                     width={200}
                     height={125}
                    />
                    </div>
            <Head>
                <title>universe</title>
                <link rel="icon" href="/universe.png" />
            </Head>
            <main className=" flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-[#06202A] rounded-2xl flex w-2/3 max-w-4xl">
                    
             <div className="w-3/5 p-5">
                

                    {/* Sign in Section */}

                 <div className="py-10">
                        <h2 className="text-3xl font-bold text-white mb-2">Sign in to Account</h2>
                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                        {/* <div className="flex justify-center my-2">
                            <a href="https://vercel.com/new?onboarding=true" className="border-2 border-gray-300 rounded-full p-3 mx-1">
                            <FaFacebookF className="text-sm" />
                            </a>
                             <a href="#" className="border-2 border-gray-300 rounded-full p-3 mx-1"> 
                            </a> 
                        </div> */}
                        
                        <p className="text-gray-400 my-3 mb-2">or your email account</p>
                        <div className="flex flex-col items-center">

                        <div className=" bg-gray-100 w-64 p-1 flex items-center mb-4 rounded-full">
                        <FaRegEnvelope className=" text-gray-400 m-2"/>
                        <input type="email" name="email" placeholder="Email"  value={email} onChange={(e) =>setEmail(e.target.value)} className="  bg-gray-100 text-black outline-none text-sm 
                         flex-1" required = {true} />
                        </div>
                         <div className=" bg-gray-100 w-64 p-1 flex items-center rounded-full">
                        <MdLockOutline className=" text-gray-400 m-2"/>
                        <input type="password" name="password" placeholder="Password" value={password} onChange={(e) =>setPassword(e.target.value)} className=" bg-gray-100 text-black outline-none text-sm 
                        flex-1" required = {true} />
                        </div>  
                        <div className=" flex justify-between w-64 mb-5">
                        <label className=" flex items-center text-xs">
                        <input type="checkbox" name="remember" className="mr-1"/>Remember me</label>

                        {/* Forget Password */}

                        
                        <a href="Password" className="text-xs">Forget Password?</a>
                        
                        
                        </div>
                        
                        <a onClick={(e) => myfunc(e)}  className="border-2 border-white text-white rounded-full px-12 py-2
                         inline-block font-semibold hover:bg-white hover:text-[#06202A] cursor-pointer mb-4">Sign in</a>
                         <div className=" mb-4">
                             <p className=" font-semibold mb-2">OR</p>
                         <Googleauth className="text-sm border-2 rounded-full p-3 mx-1" />

                         </div>

                         </div>
                     </div>
                </div>
                
                {/* Sign up Section */}

                <div className="w-2/5 bg-[#06202A] text-white rounded-tr-2xl rounded-br-2xl py-16  ">
                    <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
                    <div className="border-2 w-10 border-white inline-block mb-2"></div>
                    <p className="mb-8"> Fill up Personal information and start your journey with us.</p>
                    
                    <Link href="Form">
                    <a href="#" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold
                     hover:bg-white hover:text-[#06202A]">Sign up</a>
                     </Link>

                     <a href="https://play.google.com/store/search?q=hotstar&c=apps&hl=en_IN&gl=US">
                     <FaGooglePlay className="text-sm mt-10 mx-36" />Get App
                            </a>

                </div>
                
                </div>

            </main>
            
        </div>
    )   
}