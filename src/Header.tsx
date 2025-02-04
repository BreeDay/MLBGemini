import React from 'react';
import LogoIcon from "./mylb-logo.png";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import SideMenu from "./SideMenu";

export const Header = () => {
  // const login = useGoogleLogin({
  //   onSuccess: async tokenResponse => {
  //     const token = tokenResponse.access_token;
  //   // fetching userinfo can be done on the client or the server
  //   const userInfo = await axios
  //     .get('https://www.googleapis.com/oauth2/v3/userinfo', 
  //       { headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
  //     })
  //   const result = userInfo.data;
  //   console.log(result)
  //   console.log(result.name)

  //  // contains name, email & googleId(sub)
  // },  })

  //  const navigate = useNavigate(); // useNavigate is inside of the component

  //  function handleLogout(){
  //     googleLogout() // function to handle logout
  //  }
   
  return (
    <header className="pt-4 border-b border-white/15 bg-blue-900 md:border-none sticky top-0 z-10 backdrop-blur">
      <div className="container">
        <div className="flex justify-between w-full items-center md:border-b border-white/15 md:p-2.5 rounded-xl backdrop-blur">
          <div>
            <div className="h-16 w-16 inline-flex justify-left items-left border-none">
              <img src={LogoIcon} alt="MyLB Logo" className="rounded-lg h-16 w-24"/>
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition">About</a>
              <a href="#" className="text-white/70 hover:text-white transition">How It Works</a>
              <a href="#" className="text-white/70 hover:text-white transition">Technical Implementation</a>
              <div className="flex gap-4 items-center text-white">
                {/* <button className="text-white border py-2 px-3 rounded-lg font-medium text-sm bg-blue-900 hover:bg-red-800 shadow-[0px_0px_12px_#8c45ff]" onClick={() => login()}>Lets Play Ball!</button> */}
                {/* <GoogleLogin
                  onSuccess={(credentialResponse) => {
                     console.log(credentialResponse);
                     console.log(jwtDecode(credentialResponse.credential as string));
                    navigate("/dashboard");
                  }}
                 onError={() => console.log('Login failed')}
                 auto_select={true}
                /> */}
              </div>
            </nav>
           </div>
        </div>
      </div>
    </header>
  );
};