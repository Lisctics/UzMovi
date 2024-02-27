// import React, { useEffect, useState } from 'react';

// export default function Index() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         function getValuesFromLocalStorage() {
//             const values = [];

//             for (let i = 0; i < localStorage.length; i++) {
//                 const key = localStorage.key(i);
//                 const value = JSON.parse(localStorage.getItem(key));

//                 if (key.endsWith('.img')) {
//                     const titleKey = key.replace('.img', '.title');
//                     const titleValue = JSON.parse(localStorage.getItem(titleKey));

//                     values.push({ type: 'image', key, value, titleKey, titleValue });
//                 }
//             }

//             return values;
//         }

//         const localStorageValues = getValuesFromLocalStorage();
//         setData(localStorageValues);
//     }, []);

//     const handleDelete = (imageKey, titleKey) => {
//         localStorage.removeItem(imageKey);
//         localStorage.removeItem(titleKey);
//         const updatedData = data.filter(item => item.key !== imageKey);
//         setData(updatedData);
//     }

//     return (
//         <div className='mt-[20px]'>
//             <center>
//                 {data.map((item, index) => (
//                     <div key={index} className='bg-[black] grid rounded w-[800px] h-[200px] mb-5' onClick={() => handleDelete(item.key, item.titleKey)}>
//                         <img
//                             src={item.value}
//                             alt=""
//                             className='h-[200px] w-[400px]'
//                         />
//                         <h1 className='text-white ml-[350px] mt-[-120px]'>{item.titleValue}</h1>
//                     </div>
//                 ))}
//             </center>
//         </div>
//     );
// }


import React from 'react'
import { useFavoriteContext } from "../../context/favorite"
import { GrTrash } from "react-icons/gr";


export default function index() {
  const {favorite, setFavorite} = useFavoriteContext()
  const deleteItem = (id) => {
    const updatedCart = favorite.filter(item => item.id !== id);
    setFavorite(updatedCart);
  }
  return (
    <div>
        {favorite.length < 1? (
          <div>
            <h1 className='text-white'>HAMASI PUSTO</h1>
          </div>
        ) : ""}
        {favorite.map((item) => {
          return(
            <div key={item.id} className='bg-[black] grid rounded w-[800px] h-[200px] mb-5'>
              <img className='h-[200px] w-[400px]' src={item.image} alt="" />
              <h1 className='text-white ml-[470px] mt-[-120px]'>{item.title}</h1>
              <GrTrash className='-mt-6 ml-[770px]' color='white' onClick={() => deleteItem(item.id)}/>
            </div>
          )
        })}
    </div>
  )
}
