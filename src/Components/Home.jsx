import React , {useState}from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { phone } from '../atoms/phone';
import toast ,  { Toaster } from 'react-hot-toast';

const Home = () => {
  const Navigate = useNavigate();
    const [ph, setph] = useRecoilState(phone);
    function handleSubmit(event){
        event.preventDefault();
        console.log(ph);
        if(ph.length == 10){
          toast.success("OTP Sent Succesfully!");
          setTimeout(() => {
            Navigate('/otp');
          }, 500);
          
        }
        else{
          toast.error("Please Enter Valid Phone Number");
        }
    }
  return (
    <div className='flex justify-center bg-black items-center h-screen w-screen text-white rounded-sm '>
    <Toaster/>
        <form onSubmit={handleSubmit}>
            <input 
            placeholder="Enter phone Number" 
            onChange={(event)=>{setph(event.target.value)}} 
            value ={ph} 
            type="number" 
            className='p-5 rounded-sm m-5 text-black'
            minLength={10}
            />    
            <button className='bg-green-400' type='submit'>GENERATE OTP</button>       
        </form>
    </div>
  )
}

export default Home