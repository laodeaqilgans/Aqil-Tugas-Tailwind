 import React from "react";
import logo from "./logo-colors.png"; 
import roket from "./images-removebg-preview.png"; 
import Tablets from "./Tablets_Clipart_Hd_PNG__Black_Tablet_Illustration__Electronic_Supplies__Tablet__Tablet_Illustration_PNG_Image_For_Free_Download-removebg-preview.png"; 
 function App() {
  return (
    <> 
    
      <div class="w-full h-full bg-gradient-to-r from-purple-900 to-violet-800 ">
        <div className="flex mx-40  ">
          
          <img className="h-7 w-24 mt-[17px] mr-3" src={logo} alt="Logo" />
          
          <nav className="flex gap-3 mt-5 text-gray-50"> 
            <nav>Home</nav>
            <nav>Studio</nav>
            <nav>Works</nav>
            <nav>Contacts</nav> 
            
          </nav> 
          
          <div className="ml-[600px]  mt-6 mr-3">🔍</div>
          <button className="bg-rose-500 rounded-md w-20 mt-6 text-gray-50 text-[11px] h-8">Hire Now</button>  
        </div>   
        
        <div className="text-start  mx-40 mt-48"> 
          <h1 className="text-4xl text-gray-50 font-bold">Think. Make.  <br />Solve</h1> <br />       
          <p className="mb-8 text-rose-500"> - What We Do</p> 
          <p className="text-gray-50">we enjoy creating delightful, human-centered digital <br /> experiences.</p> 
          <button className=" bg-rose-500 rounded-md w-20 mt-6 text-gray-50 text-[11px] h-8">Learn More</button> 
        </div >
          
        <div className="absolute ml-[920px] mt-[-250px]">
          <img className="" src={roket} alt="Logo" />
        </div>

        <br /><br /><br /><br />

        <div className="flex mx-40 mt-48">  
          <div>
          <img className="" src={roket} alt="Logo" />
          </div>
          <div className="ml-[400px]">
            <h1 className="text-4xl text-gray-50 font-bold">Think Outside The  <br />  Square Space</h1> <br />       
            <p className="mb-8 text-rose-500"> - Who We Are</p> 
            <p className="text-gray-50">a creative group of designers and developers with a passion for the arts.</p> 
            <button className=" bg-rose-500 rounded-md w-20 mt-6 text-gray-50 text-[11px] h-8">See our Works</button> 
          </div>
        </div >

        <br /><br /><br /><br /><br />

        <div className="flex justify-between p-5">
          <div className="text-start">
            <h1 className="text-7xl font-bold">Web Design</h1> <br />
            <h1 className="text-7xl font-bold">Development</h1> <br />
            <h1 className="text-7xl font-bold">Illustration</h1> <br />
            <h1 className="text-7xl font-bold">Product Design</h1> <br />
            <h1 className="text-7xl font-bold">Sosial Media</h1> <br />
          </div>
          
          <br />

          <div>
            <img src={Tablets} className="w-[530px] h-[430px]"/>
          </div>
        </div>
      </div> 
    </>
  );
}

export default App;
