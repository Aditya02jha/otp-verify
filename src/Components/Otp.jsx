import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRecoilValue } from "recoil";
import { phone } from "../atoms/phone";
const Otp = () => {
  const [otp, setotp] = useState(["", "", "", ""]);
  const phonenum = useRecoilValue(phone);

  function handleSubmit(e) {
    e.preventDefault();
    toast.success(`OTP sent on +91-${phonenum}`);
    console.log(otp.join(""));
  }
  function handleChange(event, index) {
    //check vale is number
    // if number -->setotp = [...otp] and otp[index] = value --> next sibling focus
    // console.log(typeof(event.target.value) , index);
    const value = event.target.value;
    if (/^\d+$/.test(value) == true) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setotp(newOtp);
    }

    if (value && index < otp.length - 1) {
      event.target.nextSibling.focus();
    }
  }

  const otpInput = otp.map((value, index) => (
    <input
      className="text-white bg-gray-600 h-20 w-20 border-white border-2 m-2 p-2"
      maxLength={1}
      type="text"
      inputMode="numeric"
      onChange={(e) => handleChange(e, index)}
      value={value}
      key={index}
    />
  ));

  return (
    <div className="flex justify-center bg-black items-center h-screen w-screen text-white rounded-sm ">
      <Toaster position="top-center" reverseOrder={false} />
      <form
        onSubmit={handleSubmit}
        className="flex-col flex-wrap items-center justify-center "
      >
        {otpInput}
        <button type="submit" className="bg-green-500 m-5 p-5">
          SUBMIT OTP
        </button>
      </form>
    </div>
  );
};

export default Otp;
