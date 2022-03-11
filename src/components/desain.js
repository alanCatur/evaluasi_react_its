import React from 'react'

export default function Desain(props) {
  return (

    <div className="flex flex-col h-screen justify-between">
      <div className='w-full grid grid-cols-12 items-center text-black bg-white-500 text-xl'>
        <div className='col-span-2'></div>
        <div className='col-span-8 text-xl text-center'>Evaluasi Bootcamp React</div>
      </div>
      <div className='container mx-auto px-4 space-y-4 my-4 overflow-auto h-full'>
        {props.children}
      </div>
    </div>
  )
}
