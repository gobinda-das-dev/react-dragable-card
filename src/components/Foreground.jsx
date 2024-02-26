import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref = useRef(null)  
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: '.9mb',
      close: true,
      tag: { isOpen:  true, tagtitle: "download now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: '.9mb',
      close: true,
      tag: { isOpen:  true, tagtitle: "download now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: '.9mb',
      close: true,
      tag: { isOpen:  false, tagtitle: "upload", tagColor: "green" },
    },
  ]

  return (
    <div ref={ref} className='fixed z-[3] h-full w-full flex gap-10 p-5'>
      {data.map((item, index) => <Card data={item} key={index} refrence={ref} />)}
        
    </div>
  )
}

export default Foreground