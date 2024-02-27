import React, { useEffect, useState } from 'react';

export default function Index() {
    const [data, setData] = useState([]);

    useEffect(() => {
        function getValuesFromLocalStorage() {
            const values = [];

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = JSON.parse(localStorage.getItem(key));

                if (key.endsWith('.img')) {
                    const titleKey = key.replace('.img', '.title');
                    const titleValue = JSON.parse(localStorage.getItem(titleKey));

                    values.push({ type: 'image', key, value, titleKey, titleValue });
                }
            }

            return values;
        }

        const localStorageValues = getValuesFromLocalStorage();
        setData(localStorageValues);
    }, []);

    const handleDelete = (imageKey, titleKey) => {
        localStorage.removeItem(imageKey);
        localStorage.removeItem(titleKey);
        const updatedData = data.filter(item => item.key !== imageKey);
        setData(updatedData);
    }

    return (
        <div>
            {data.map((item, index) => (
                <div key={index} className='bg-orange-500 w-[300px] h-[160p] mb-5' onClick={() => handleDelete(item.key, item.titleKey)}>
                    <img
                        src={item.value}
                        alt=""
                        className='h-[150px] w-[200px]'
                    />
                    <h1 className='text-white'>{item.titleValue}</h1>
                </div>
            ))}
        </div>
    );
}
