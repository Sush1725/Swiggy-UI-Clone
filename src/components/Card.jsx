import React from 'react'

export default function Card(props) {
  return (
    <div className='w-[273px] shrink-0 grow'>
      <div className='h-[182px] rounded-[15px] overflow-hidden relative'>
        <img className="object-cover w-full h-full" src={props.image} alt={props.name}/>
        <div className='image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[25px] font-bold text-white tracking-tighter'>
        {props.offer}
        </div>
        <div className='mt-3 text-xl font-bold'>
          {props.title}
        </div>
      </div>
    </div>
  )
}
