// import React from 'react'
// import mobile from './Assets/mobile.svg';
// import chat from './Assets/chat.svg';
// import apple from './Assets/apple.svg';
// import android from './Assets/android.svg';
// import androidtv from './Assets/androidtv.svg';
// import fire from './Assets/fire.svg';
// import ios from './Assets/ios.svg';
// import roku from './Assets/roku.svg';
// import smarttv from './Assets/smarttv.svg';
// import lg from './Assets/lg.svg';
// import watchos from './Assets/watchos.svg';


// function Distribution() {
//     return (
//         <div className="dist">

//             <div className="dist_heading">Web Platform</div>

//             <div className="dist_comp">

//                   <div className="dist_comp1 bg-white border border-gray-300 rounded shadow flex flex-col justify-center items-center">
                
//                   <div className="dist_comp11">
//                   <img src={mobile} alt="Logo" />
//                   </div>

//                   <div className="dist_comp12">
//                   https://s2i.uscreen.io
//                   </div>

//                   <div className="dist_comp13 ">
                  
//                        Connected 
//                   </div>

//                   <div className="dist_comp14 text-sm text-gray-600 text-center mt-4">
//                   Works on all web browsers.
//                   </div>
                
//                    </div>

//                    <div className="dist_comp2 bg-white border border-gray-300 rounded shadow col-span-2  bg-gray-200">
                    
//                     <div className="dist_comp21 ">
//                     <img src={chat} alt="Logo" />
//                         </div>

//                         <div className="dist_comp22 ">
//                         What’s the difference between the Web Platform and Native OTT Apps?
//                         </div>

//                         <div className="dist_comp23 ">
//                         The <strong>Web Platform </strong> streams your video content via any browser accessible on computers, phones, tablets, etc.
// <br /><strong>Native OTT Apps</strong> deliver video streaming directly to user’s mobile device or TV via an installed app - no browser necessary. Research shows that majority of users prefer native OTT apps over the internet browser, which is a strong consideration if you’re planning to scale your service. Depending on your package, additional fees may apply.
//                         </div>

//                         <div className="dist_comp24 ">
//                         Learn more
//                         </div>
                  
//                   </div>

//              </div>
           
//          <div className="dist_heading2"> Native Apps </div>
 
// <div className="dist_comp_b grid grid-cols-3 gap-12">

//       <div className="dist_comp_ba bg-white border border-gray-300 rounded shadow flex flex-col p-8 items-center justify-center">
//     <div className="dist_comp_b1">
//     <img src={ios} alt="Logo" />
//         </div>

//         <div className="dist_comp_b2 ">
//               iOS
//         </div>

//         <div className="dist_comp_b3">
//            Request app
//         </div>

//         <div className="dist_comp_b4">
//            Find out more
//         </div>
//         </div>

//         <div className="dist_comp_ba bg-white border border-gray-300 rounded shadow flex flex-col p-8 items-center justify-center">
//     <div className="dist_comp_b1">
//     <img src={android} alt="Logo" />
//         </div>

//         <div className="dist_comp_b2">
//               android
//         </div>

//         <div className="dist_comp_b3">
//            Request app
//         </div>

//         <div className="dist_comp_b4">
//            Find out more
//         </div>
//         </div>

//         <div className="dist_comp_ba bg-white border border-gray-300 rounded shadow flex flex-col p-8 items-center justify-center">
//     <div className="dist_comp_b1 mb-8 ">
//     <img src={roku} alt="Logo" />
//         </div>

//         <div className="dist_comp_b2 mb-4">
//               Roku
//         </div>

//         <div className="dist_comp_b3  ">
//            Request app
//         </div>

//         <div className="dist_comp_b4">
//            Find out more
//         </div>
//         </div>

//         <div className="dist_comp_ba bg-white border border-gray-300 rounded shadow flex flex-col p-8 items-center justify-center">
//     <div className="dist_comp_b1">
//     <img src={apple} alt="Logo" />
//         </div>

//         <div className="dist_comp_b2">
//               Apple TV
//         </div>

//         <div className="dist_comp_b3">
//            Request app
//         </div>

//         <div className="dist_comp_b4">
//            Find out more
//         </div>
//         </div>

//         <div className="dist_comp_ba bg-white border border-gray-300 rounded shadow flex flex-col p-8 items-center justify-center">
//     <div className="dist_comp_b1">
//     <img src={fire} alt="Logo" />
//         </div>

//         <div className="dist_comp_b2">
//               Fire TV
//         </div>

//         <div className="dist_comp_b3">
//            Request app
//         </div>

//         <div className="dist_comp_b4">
//            Find out more
//         </div>
//         </div>

//         <div className="dist_comp_ba bg-white border border-gray-300 rounded shadow flex flex-col p-8 items-center justify-center">
//     <div className="dist_comp_b1 mb-6">
//     <img src={androidtv} alt="Logo" />
//         </div>

//         <div className="dist_comp_b2 ">
//              Android TV
//         </div>

//         <div className="dist_comp_b3">
//            Request app
//         </div>

//         <div className="dist_comp_b4">
//            Find out more
//         </div>
//         </div>

//         <div className="dist_comp_ba bg-white border border-gray-300 rounded shadow flex flex-col p-8 items-center justify-center">
//     <div className="dist_comp_b1">
//     <img src={watchos} alt="Logo" />
//         </div>

//         <div className="dist_comp_b2">
//               watchOS Fitness App
//         </div>

//         <div className="dist_comp_b3">
//            Request app
//         </div>

//         <div className="dist_comp_b4">
//            Find out more
//         </div>
//         </div>

//         <div className="dist_comp_ba bg-white border border-gray-300 rounded shadow flex flex-col p-8 items-center justify-center">
//     <div className="dist_comp_b1">
//     <img src={smarttv} alt="Logo" />
//         </div>

//         <div className="dist_comp_b2">
//               Samsung TV
//         </div>

//         <div className="dist_comp_b3">
//            Request app
//         </div>

//         <div className="dist_comp_b4">
//            Find out more
//         </div>
//         </div>

//         <div className="dist_comp_ba bg-white border border-gray-300 rounded shadow flex flex-col p-8 items-center justify-center">
//     <div className="dist_comp_b1">
//     <img src={ios} alt="Logo" />
//         </div>

//         <div className="dist_comp_b2">
//               LG WebOS
//         </div>

//         <div className="dist_comp_b3">
//            Request app
//         </div>

//         <div className="dist_comp_b4">
//            Find out more
//         </div>
//         </div>

        
 
//     </div>
  
//         </div>
//     )
// }

// export default Distribution
