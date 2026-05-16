import { ChevronDown, Facebook, Infinity } from 'lucide-react';
import React from 'react';

const InstagramLogo = ({ className = "w-16 h-16" }: { className?: string }) => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" 
    alt="Instagram" 
    className={className}
    draggable="false"
  />
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212] font-sans flex flex-col justify-center items-center">
       {/* Main Content */}
       <main className="flex-grow flex w-full max-w-[1200px] items-center justify-center p-4 lg:p-0">
          <div className="flex w-full h-full lg:h-[700px] items-center justify-center">
             
             {/* Left Column (Desktop Only) */}
             <div className="hidden lg:flex flex-col w-1/2 pr-16 border-r border-[#262626] h-auto my-auto justify-center">
               <InstagramLogo className="w-16 h-16 mb-6" />
               <h1 className="text-[3rem] leading-[1.1] font-semibold mt-4 mb-10 text-white">
                 See everyday moments from your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]">close friends.</span>
               </h1>
               
               {/* Collage Representation */}
               <div className="relative w-full h-[450px] mt-2 flex justify-center items-center perspective-[1000px]">
                 {/* Left abstract image card */}
                 <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[180px] h-[320px] rounded-3xl overflow-hidden shadow-2xl rotate-[-10deg] opacity-90 z-10 bg-gradient-to-tr from-pink-600 to-purple-600 border-[6px] border-[#121212]">
                   <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1549468057-5b7fa1a41d7a?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
                 </div>
                 
                 {/* Center phone frame */}
                 <div className="relative w-[230px] h-[450px] rounded-[40px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] z-30 border-[10px] border-[#121212] bg-zinc-900">
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80" alt="Selfie" className="w-full h-full object-cover" />
                    {/* Small UI overlays */}
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-[10px] flex gap-1">
                      <span>🔮</span><span>👀</span><span>🤯</span>
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-6">
                      <div className="h-10 border border-white/40 rounded-full w-full backdrop-blur-sm flex items-center px-4 justify-between text-white/80">
                         <span className="w-8 h-1 bg-white/50 rounded-full inline-block"></span>
                         <span className="text-lg">♡</span>
                      </div>
                    </div>
                 </div>

                 {/* Right image card */}
                 <div className="absolute right-0 top-1/2 -translate-y-[40%] w-[160px] h-[280px] rounded-3xl overflow-hidden shadow-2xl rotate-[12deg] opacity-90 z-20 border-[6px] border-[#121212] bg-zinc-800">
                   <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80" alt="Friend" className="w-full h-full object-cover" />
                   <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-green-500 border-2 border-[#121212] flex items-center justify-center text-white text-xs">★</div>
                   <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full overflow-hidden border-4 border-[#121212]">
                     <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" alt="Avatar" className="w-full h-full object-cover" />
                   </div>
                 </div>
               </div>
             </div>

             {/* Right Column (Login Form) */}
             <div className="w-full lg:w-1/2 flex flex-col items-center lg:pl-20 h-auto my-auto max-w-[400px] lg:max-w-none">
                <div className="w-full lg:w-[350px]">
                  
                  {/* Mobile Language Selector */}
                  <div className="flex justify-center items-center text-[#a8a8a8] text-sm mb-16 lg:hidden">
                    <span>English (US)</span>
                    <ChevronDown size={14} className="ml-1 opacity-70" />
                  </div>

                  {/* Logo/Title */}
                  <div className="flex justify-center lg:justify-start mb-10 w-full">
                    {/* Mobile Logo */}
                    <div className="lg:hidden">
                       <InstagramLogo className="w-[72px] h-[72px]" />
                    </div>
                    {/* Desktop Title */}
                    <h2 className="hidden lg:block text-2xl font-bold self-start w-full text-left text-[#f5f5f5] tracking-wide">Log in to Instagram</h2>
                  </div>

                  {/* Mobile 'Username' text for placeholder differences */}
                  <form className="w-full flex flex-col gap-3.5">
                    {/* Input 1 */}
                    <div className="relative group">
                       <input 
                         type="text" 
                         id="id_input"
                         className="peer w-full bg-transparent border border-[#363636] focus:border-[#a8a8a8] rounded-xl px-4 pt-[18px] pb-2 text-sm text-[#f5f5f5] hover:border-[#a8a8a8] outline-none transition-colors" 
                         placeholder=" " 
                       />
                       <label 
                         htmlFor="id_input" 
                         className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a8a8a8] text-sm transition-all duration-150 peer-focus:top-[14px] peer-focus:text-[11px] peer-[:not(:placeholder-shown)]:top-[14px] peer-[:not(:placeholder-shown)]:text-[11px] pointer-events-none"
                       >
                         <span className="lg:hidden">Username, email or mobile number</span>
                         <span className="hidden lg:inline">Mobile number, username or email address</span>
                       </label>
                    </div>

                    {/* Input 2 */}
                    <div className="relative group">
                       <input 
                         type="password" 
                         id="password_input"
                         className="peer w-full bg-transparent border border-[#363636] focus:border-[#a8a8a8] rounded-xl px-4 pt-[18px] pb-2 text-sm text-[#f5f5f5] hover:border-[#a8a8a8] outline-none transition-colors" 
                         placeholder=" " 
                       />
                       <label 
                         htmlFor="password_input" 
                         className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a8a8a8] text-sm transition-all duration-150 peer-focus:top-[14px] peer-focus:text-[11px] peer-[:not(:placeholder-shown)]:top-[14px] peer-[:not(:placeholder-shown)]:text-[11px] pointer-events-none"
                       >
                         Password
                       </label>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-[#0064e0] lg:bg-[#184a86] lg:hover:bg-[#185fa0] text-[#f5f5f5] font-semibold lg:font-medium rounded-full py-[10px] mt-1 hover:bg-[#0057c2] transition-colors"
                    >
                      Log in
                    </button>
                    
                    <div className="text-center mt-2 lg:mt-3">
                       <button type="button" className="text-[#f5f5f5] text-sm hover:underline font-medium">
                         <span className="lg:hidden">Forgot password?</span>
                         <span className="hidden lg:inline">Forgotten password?</span>
                       </button>
                    </div>

                    {/* Desktop extra login options */}
                    <div className="hidden lg:flex flex-col items-center mt-4 w-full gap-5">
                       <button type="button" className="text-[#f5f5f5] bg-transparent border border-[#363636] w-full py-[10px] rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#1c1c1c] transition-colors">
                         <Facebook size={20} className="text-[#1877f2] fill-[#1877f2]" />
                         Log in with Facebook
                       </button>

                       <button type="button" className="text-[#f5f5f5] bg-transparent border border-[#363636] w-full py-[10px] rounded-full font-semibold hover:bg-[#1c1c1c] transition-colors">
                         Create new account
                       </button>
                    </div>
                  </form>

                  {/* Mobile 'Create account' button */}
                  <div className="mt-auto pt-24 lg:hidden w-full flex flex-col items-center">
                     <button type="button" className="w-full bg-transparent border border-[#0064e0] text-[#0064e0] font-medium text-[15px] rounded-full py-[10px] hover:bg-[#1c1c1c] transition-colors">
                       Create new account
                     </button>
                     
                     <div className="mt-8 flex justify-center text-[#a8a8a8] gap-1 items-center">
                       <Infinity size={22} className="opacity-80" />
                       <span className="text-[14px] font-medium tracking-wide">Meta</span>
                     </div>
                  </div>

                  {/* Desktop Meta text */}
                  <div className="hidden lg:flex mt-10 justify-center text-[#f5f5f5] gap-1.5 items-center">
                    <Infinity size={20} />
                    <span className="text-[14px] font-medium tracking-wide">Meta</span>
                  </div>

                </div>
             </div>

          </div>
       </main>

       {/* Footer (Desktop mainly, visible on large screens) */}
       <footer className="hidden lg:flex flex-col w-full px-4 items-center justify-center text-xs text-[#a8a8a8] pb-12 gap-3 translate-y-8">
         <div className="flex gap-x-4 gap-y-2 flex-wrap justify-center max-w-[1000px]">
           {["Meta", "About", "Blog", "Jobs", "Help", "API", "Privacy", "Terms", "Locations", "Popular", "Instagram Lite", "Meta AI", "Threads", "Contact uploading and non-users", "Meta Verified"].map(link => (
             <a key={link} href="#" className="hover:underline">{link}</a>
           ))}
         </div>
         <div className="flex gap-4">
           <select className="bg-transparent border-none outline-none cursor-pointer text-[#a8a8a8] hover:underline appearance-none w-[70px]">
             <option>English (UK)</option>
             <option>English (US)</option>
           </select>
           <span>© 2024 Instagram from Meta</span>
         </div>
       </footer>
    </div>
  );
}
