import Head from "next/head";
import { MdLockOutline } from "react-icons/md";
import Image from "next/image";
import { useEffect, useState } from "react";
import resetvalidation from "./resetvalidate";



export default function Reset({resetForm}){
    const [values, setValues] = useState({
        npassword:"",
        fpassword:"",
    });


    
    const[errors, setErrors] = useState({})
    const [dataIsChange , setDataIsChange] = useState(false)

    const handleChange =(event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }
    const Click = (event) => { 
        setErrors(resetvalidation(values));
        setDataIsChange(true)
    }    
    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsChange ) {
            resetForm(true)
        }
    } ,[errors])
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
            <main className="flex items-center justify-content-center w-full flex-1 px-40 text-center">
                <div className="bg-[#06202A] rounded-2xl flex w-2/3 max-w-full">
                    
             <div className="w-3/5 p-10">
                <div className=" absolute container-0 right-36 ">
               <Image className="" 
                     src="/bg.png"
                     alt="bg"
                     width={600}
                     height={290}
                    />
                    </div>
                 

                    {/* Reset Password  Section */}

                 <div className="py-0.5">
                     
                        <h2 className="text-3xl font-bold text-white mb-2">Reset Your Password</h2>
                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                      
                        <div className="flex flex-col items-center">          
                         <div className=" bg-gray-100 w-64 p-1 flex items-center mb-4 rounded-full">
                        <MdLockOutline className=" text-gray-400 m-2"/>
                        <input type="password" name="npassword" placeholder=" New Password"
                         value={values.npassword} onChange={handleChange} 
                        className=" bg-gray-100 text-black outline-none text-sm flex-1" />
                       {errors.npassword && <p className='error text-red-900'>{errors.npassword}</p>}
                         </div>
                          

                        <div className=" bg-gray-100 w-64 p-1 flex items-center rounded-full">
                        <MdLockOutline className=" text-gray-400 m-2"/>
                        <input type="password" name="fpassword" placeholder="Again Password" value={values.fpassword}
                        onChange={handleChange}
                        className=" bg-gray-100 text-black outline-none text-sm flex-1" />
                        {errors.fpassword && <p className='error text-red-900'>{errors.fpassword}</p>}
                        </div>     

                        <div className=" mb-8"></div>
                        

                        <a onClick={(e) => Click(e)}  className="border-2 border-white text-white rounded-full px-12 py-2
                         inline-block font-semibold hover:bg-white hover:text-[#06202A] cursor-pointer">Reset</a>
                     
                 </div>
              </div>
             </div>
        </div>
    </main>
  </div>
    )   
}