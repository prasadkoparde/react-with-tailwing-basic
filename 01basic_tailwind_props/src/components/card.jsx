import React from 'react'

export default function card({heading, desc}) {
  return (
    <>
       <div  className="wrapper">
            <img className="object-cover rounded-t-sm" width='200' height='200'
                src="https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            </a>
            <div className="flex flex-col justify-between p-4 leading-normal" >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
            </div>
        </div>
    </>
  )
}
