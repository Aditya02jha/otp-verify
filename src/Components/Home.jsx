import React , {useState}from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  const Navigate = useNavigate();
    const [ph, setph] = useState(91);
    function handleSubmit(event){
        event.preventDefault();
        console.log(ph);
        Navigate('/otp');

    }
  return (
    <div className='flex justify-center bg-black items-center h-screen w-screen text-white rounded-sm '>
        <form onSubmit={handleSubmit}>
            <input 
            placeholder="Enter UserName" 
            onChange={(event)=>{setph(event.target.value)}} 
            value ={ph} 
            type="number" 
            className='p-5 rounded-sm m-5 text-black'
            />    
            <button className='bg-green-400' type='submit'>GENERATE OTP</button>       
        </form>
    </div>
  )
}

export default Home