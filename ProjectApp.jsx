import React, { useState } from 'react';
import ProjectItem from './ProjectItem';

// function List (props){
//     return (
//         <>
//             <div className="item px-7 my-6">
//                 <span onClick={deleteItem} className='bg-violet-700 text-white cursor-pointer text-2xl rounded-full px-4 py-1.5 '>x</span>
//                 <h3 className='text-violet-700 text-2xl font-bold py-5 my-4 inline px-5'>{props.work}</h3>
//             </div>
            
//         </>
//     )
// }

export default function ProjectApp() {

    const [temp , setTemp] = useState("");
    const [item , setItem] = useState([]);

    const onChangeEvent = (event) =>{

        setTemp(event.target.value);
    }

    const addItem = () =>{
        // console.log("added item");

        setItem ((preValue ) =>{

            return [
                ...preValue ,
                temp 
            ]
        })

        setTemp("");

    }

    const deleteItem = (id)=>{
        console.log("deleted");
        // console.log(id);

        setItem( (preValue) =>{

            // ye wala function ek array return krega condition k according
           return preValue.filter((element , index)=>{
            //    if(index != id){
            //        return true ;
            //    }else{
            //        return false ;
            //    }
                return index !== id
           })

        } )

    }

  return (
    <>

            <div className="box rounded-3xl drop-shadow-2xl lg:w-1/2 w-[100%] h-[80%] border-2 flex flex-col item-center overflow-auto bg-violet-200 shadow">
                <h1 className='bg-violet-700  text-center text-white text-3xl font-bold py-5'>ToDo List</h1>
                <div className='text-center'>
                    <input onChange={onChangeEvent} name='item' style={{ borderBottomStyle : 'solid' ,borderBottomColor : '#6d28d9' , borderBottomWidth: 'thick'}} type="text" className='px-4 my-5 border-hidden text-center w-2/3 text-3xl active:outline-none' placeholder='Add a Items' value={temp} />
                    <span onClick={addItem} className='text-white bg-violet-700 hover:bg-green-400 ml-4 text-center px-5 py-3.5 text-3xl font-bold rounded-full cursor-pointer'> + </span>
                </div>
                
                {item.map((element , index)=>{

                    return ( <ProjectItem id={index} work = {element} onSelect = {deleteItem} ></ProjectItem> )
                })}
                

            </div>

    </>
  )
}
