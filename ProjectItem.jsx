import React from 'react'

export default function ProjectItem(props) {
  return (
    <>
        <div className="item px-7 my-6">
                <span onClick={()=>{props.onSelect(props.id)}} className='bg-violet-700 hover:bg-red-500 text-white  cursor-pointer text-2xl rounded-full px-4 py-1.5 '>x</span>
                <h3 className='text-violet-700 text-2xl font-bold py-5 my-4 inline px-5'>{props.work}</h3>
            </div>

    </>
  )
}
