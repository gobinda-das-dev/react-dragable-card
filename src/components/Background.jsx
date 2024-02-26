import React from 'react'

const Background = () => {
  return (
    <div className='fixed z-[2] h-full w-full'>        
      <div className='font-semibold w-full p-10 absolute top-5 text-zinc-600 flex justify-center'>Documents</div>
      <div className='font-semibold text-[14vw] text-zinc-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Docs.</div>
    </div>
  )
}

export default Background