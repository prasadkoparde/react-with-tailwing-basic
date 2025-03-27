import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length, setLength]= useState<number|string>(8);
  const [isCharAllowed, setIsCharAllowed]= useState<boolean>(false);
  const [isNumberAllowed, setIsNumberAllowed]= useState<boolean>(false);
  const [password, setPassword]= useState<string>("");
  const passwordRef=useRef(null);
  const passwordGenerator= useCallback(()=>{
  let pass='';
  let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  if(isCharAllowed) str +='!@#$%^&*?';
  if(isNumberAllowed) str += '0123456789';
  for (let index = 1; index <= Number(length); index++) {
     const char
     = Math.floor(Math.random()*(str.length)+1);
    pass += str.charAt(char);
  }
  setPassword(pass)
  },[length, isCharAllowed, isNumberAllowed, setPassword ]);

  useEffect(()=>{
    passwordGenerator()
  },[length, isCharAllowed, isNumberAllowed, passwordGenerator]);

 const copyToClipBoard=useCallback(()=>{
   passwordRef?.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])
  return (
    <>
      <div className="mx-auto mt-10 
                   block max-w-sm p-6 bg-white border border-gray-200 text-white
                   rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800  dark:hover:bg-gray-700">
             <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Password Generator</h3>
             <div className="mx-auto mt-6 flex flex-wrap max-w-lg gap-x-4">
              <input
                id="email-address"
                type="text"
                value={password}
                readOnly
                placeholder="Password..."
                ref={passwordRef}
                className="min-w-0 flex-auto rounded-md  p-6 shadow-lg outline outline-gray-300 px-3.5 py-2 text-base  placeholder:text-gray-100 focus:outline-2 focus:-outline-inset-2  sm:text-sm/6"
              />
              <button
                  type="submit" onClick={copyToClipBoard}
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                   Copy
              </button>
            </div> 
            <div className=" mt-6 flex flex-wrap max-w-lg justify-evenly">
              <div className="flex">                
                <input type="range" min={8} max={15} value={length}
                  className="cursor-pointer mx-4" 
                 onChange={(e)=>setLength(e.target.value)}/>
                <label htmlFor="chars" >Length {length} </label>
              </div>
              <div className="mr-4 flex justify-items-center">
                <label htmlFor="chars">Include Chars</label>
                <input 
                type="checkbox"
                 name="chars" 
                 className="ml-5"
                 defaultChecked={isCharAllowed}
                  onChange={()=>setIsCharAllowed((prev)=>{
                  return !prev
                })}/>
              </div>
              <div className="mr-4 flex justify-items-center">
                <label htmlFor="numbers">Include Numbers</label>
                <input 
                defaultChecked={isNumberAllowed}
                type="checkbox" 
                name="numbers" 
                className="ml-5" 
                onChange={()=>setIsNumberAllowed((prev)=>!prev)}/>
              </div>
            </div>
    </div>  
    </>
  )
}

export default App
