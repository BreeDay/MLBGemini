import React from 'react';
import LogoIcon from "./mylb-logo.png";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

// import { Button } from "@/components/Button"
import  Baseball  from "./baseball.svg"
export const Hero = () => {
  const navigate = useNavigate(); // useNavigate is inside of the component
  
    const login = useGoogleLogin({
      onSuccess: async tokenResponse => {
        const token = tokenResponse.access_token;
      // fetching userinfo can be done on the client or the server
      const userInfo = await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', 
          { headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
      const result = userInfo.data;
      console.log(result)
     // contains name, email & googleId(sub)
    },  })
  
  return <section className="h-[492px] flex items-center bg-blue-800">
    <img src={Baseball} alt="Baseball Picture" className="absolute h-64 w-64 top-1/2 left-1/2 -translate-x-50 -translate-y-1/3"/>
    <div className="container text-center relative">
      <h1 className="lg:text-8xl md:text-4xl sm:text-4xl top-1/2 left-1/2 font-semibold p-4 tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(255,255,255,.5))] drop-shadow-xl text-transparent bg-clip-text">My League Baseball</h1>
      <p className="[text-shadow:_0_4px_8px_#000000] text-lg text-white drop-shadow-md my-5">Using the Latest AI Tech to Elevate your Baseball Experience</p>
      <div className="flex justify-center mt-5">
      <button className="text-white border py-2 px-3 rounded-lg font-medium text-sm bg-blue-900 hover:bg-red-800 shadow-[0px_0px_12px_#8c45ff]" onClick={() => login()}>Lets Play Ball!</button>
      {/* <GoogleLogin
                  onSuccess={(credentialResponse) => {
                     console.log(credentialResponse);
                     console.log(jwtDecode(credentialResponse.credential as string));
                    navigate("/profile");
                  }}
                 onError={() => console.log('Login failed')}
                 auto_select={true}
                /> */}
      </div>
    </div>
  </section>;
};
