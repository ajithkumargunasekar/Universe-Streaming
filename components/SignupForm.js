import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import validation from "./validation";


export default function SignupForm({submitForm}){
    
    const [values, setValues] = useState({
        name : "",
        email:"",
        password:"",
        cpassword:"",
    });
    const[errors, setErrors] = useState({}) 
    const [dataIsCorrect , setDataIsCorrect] = useState(false)
    const handleChange =(event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }
    const click =(event) => {
        setErrors(validation(values));
        setDataIsCorrect(true)
    
    }
    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect ) {
            submitForm(true)
        }
    } ,[errors])

    return (
        <div className=" flex flex-col items-center justify-center min-h-screen py-2 ">
            <div className=" absolute top-0 right-0 h-16 w-40 mt-8 ">
            
            <Image className="transition ease-in-out delay-150
              hover:-translate-y-1 hover:scale-110  duration-150"   
                    src='/universe.png'
                    alt="universe"
                    width={200}
                    height={125} />
            </div>                    
            <Head>
                <title>universe</title>
                <link rel="icon" href="/universe.png" />
            </Head>

        <main className=" flex flex-col items-center justify-center w-4/6 flex-1 px-20 text-center">
             <div className="bg-[#06202A] rounded-2xl flex w-2/3 max-w-4xl">
                    
             <div className="w-3/5 p-5 -mx-52">
              <div className="py-10">
              <div className=" absolute container-4 right-32">
               <Image className="" 
                     src="/bg.png"
                     alt="bg"
                     width={650}
                     height={300}
                    />
                    </div>
                
            <h2 className="text-3xl font-bold text-white mb-2">Register</h2>
            <div className="border-2 w-10 border-white inline-block mb-1"></div>
            <p className="text-gray-400 my-2 mb-4">Create your account. It's free and only takes a minute</p>
            <div className="flex flex-col items-center">

            <div className=" bg-gray-100 w-64 p-1 flex items-center mb-8">
            <label className=" flex items-center text-xs">
            <input type="text" name="name" placeholder="Enter Name" value={values.name}
             onChange={handleChange} className=" bg-gray-100 text-black outline-none text-sm 
            flex-1"  />
            {errors.name && <p className='error text-red-900'>{errors.name}</p>}
            </label>
           </div>   

             <div className=" bg-gray-100 w-64 p-1 flex items-center mb-8">
            <label className=" flex items-center text-xs">
            <input type="email" name="email" placeholder="Email" value={values.email}
            onChange={handleChange} className=" bg-gray-100 text-black outline-none text-sm 
            flex-1" required = {true} />
            {errors.email && <p className='error text-red-900'>{errors.email}</p>}
            </label>
           </div>

            <div className=" bg-gray-100 w-64 p-1 flex items-center mb-6">
            <label className=" flex items-center text-xs"/>
            <input type="password" name="password" placeholder="Enter Password" value={values.password}
            onChange={handleChange}  
            className=" bg-gray-100 text-black outline-none text-sm 
            flex-1"  />
            {errors.password && <p className='error text-red-900'>{errors.password}</p>}
            
            </div>  
            <div className=" bg-gray-100 w-64 p-1 flex items-center mb-6">
            <label className=" flex items-center text-xs"/>
            <input type="password" name="cpassword" placeholder="Again Password" value={values.cpassword}
            onChange={handleChange}
             className=" bg-gray-100 text-black outline-none text-sm 
            flex-1" />
            {errors.cpassword && <p className='error text-red-900'>{errors.cpassword}</p>}
            
            </div> 
            <div className=" flex justify-between w-64 mb-5 font-semibold">                        <label className=" flex items-center text-xs">
            <input type="checkbox" name="remember" className="mr-1"/>I accept the Terms of Use & Privacy Policy.</label>
            </div>

           
          <a onClick={(e) => click(e)} className="border-2 border-white text-white rounded-full px-12 py-2
            inline-block font-semibold hover:bg-white hover:text-[#06202A] cursor-pointer mb-3">
           Create an Account</a>
        
                
          <a href="login">Already have an account? Login
          </a>  
             
              
             </div>
             </div>
                </div>
                </div>
        </main>    
        </div>

    )   
}