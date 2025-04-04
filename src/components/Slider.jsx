import React, { useState } from 'react'
import { descriptions, images } from '../data'
import { ArrowLeft, ArrowRight} from "lucide-react";

const genRandomNumber = () => {
    return Math.floor(Math.random() * 41) - 20;
}

const Slider = () => {

    const [index, setIndex] = useState(0);

  return (
    <div className=' relative'>
        <div className=" flex gap-x-20 lg:items-start items-center lg:flex-row flex-col">
            <div className=" sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] relative">
                {
                    images.map((image,i) => (
                        <img src={image} key={i} alt="" className={` w-full h-full absolute object-cover rounded-3xl ${i===index?"activeImg":"inactiveImg"} transition-all duration-300`}
                        style={{
                            transform: `rotate(${index==i ? 0:genRandomNumber()}deg)`
                        }}
                         />
                    ))
                }
            </div>
            <div className=" relative sm:w-[400px] w-[320px] mt22
             lg:mt-5">
                {
                    descriptions.map((desc,i) => (
                        <p key={i} className={` text-center sm:text-xl text-gray-600 absolute ${i===index?"activeDesc":"inactiveDesc"} transition-all duration-300`}>
                            {desc}
                        </p>
                    ))
                }
            </div>
            
        </div>
        <div className=" absolute bottom-0 lg:-bottom-20 left-1/2 -translate-1/2 flex gap-x-5">
            <button 
            className=' bg-gray-100 p-1.5 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200 transition-colors'
            onClick={() => {
                setIndex((prev)=> {
                    if(prev===0){
                        return images.length-1;
                    }else{
                        return prev-1;
                    }
                })
            }}
            >
                <ArrowLeft size={18}></ArrowLeft>
            </button>
            <button
            className=' bg-gray-100 p-1.5 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200 transition-colors'
            onClick={() => {
                setIndex((prev)=> {
                    if(prev===images.length-1){
                        return 0;
                    }else{
                        return prev+1;
                    }
                })
            }}
            >
                <ArrowRight size={18}></ArrowRight>
            </button>
        </div>
    </div>
  )
}

export default Slider