import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion"

const Card = ({data, refrence}) => {
  return (
    <motion.div drag dragConstraints={refrence} className='relative w-52 h-64 bg-zinc-900/80 rounded-[30px] text-white py-8 px-5 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm font-semibold leading-tight mt-4'>{data.desc}</p>        
        <footer className='absolute bottom-0 left-0 w-full'>
            <div className='flex justify-between items-center mb-4 px-5'>
                <span className='font-semibold text-sm'>{data.filesize}</span>
                <span className='h-6 w-6 bg-zinc-500 flex items-center justify-center rounded-full'>
                  {data.close ? <RxCross2 size=".8rem" /> : <MdFileDownload size=".8em" />}
                    
                </span>
            </div>
            {data.tag.isOpen && (              
              <div className={`py-4 ${data.tag.tagColor === 'blue' ? 'bg-blue-600' : 'bg-green-600'} flex items-center justify-center`}>
                <h1 className='capitalize font-semibold text-sm'>{data.tag.tagtitle}</h1>
              </div>
            )}
        </footer>
    </motion.div>
  )
}

export default Card