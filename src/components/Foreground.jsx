import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "This is the first card ever I made in the learning process of React",
      filesize: '.900mb',
      close: true,
      tag: { isOpen:  true, tagtitle: "download now", tagColor: "green" },
    },
    {
      desc: "Hey, viewers how's your day going? Are you fine?",
      filesize: '.9mb',
      close: true,
      tag: { isOpen:  true, tagtitle: "upload", tagColor: "blue" },
    },
    {
      desc: "This is a card without any buttons. So do not expect to download anything from it.",
      filesize: '10mb',
      close: true,
      tag: { isOpen:  false, tagtitle: "download", tagColor: "green" },
    },
  ]

  return (
    <div ref={ref} className='fixed z-[3] h-full w-full flex gap-10 p-5'>
      {data.map((item, index) => <Card data={item} key={index} refrence={ref} />)}
        
    </div>
  )
}

export default Foreground