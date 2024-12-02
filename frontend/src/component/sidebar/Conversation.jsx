import React from 'react'

const Conversation = () => {
  return <>
    <div className='flex gap-2 items-center hover:bg-blue-500 rounded p-2 py-1 cursor-pointer'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src='https://th.bing.com/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' alt=''></img>
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-slate-700'>Jon Snow</p>

                <span className='text-xl'>just now</span>
            </div>
        </div>
    </div>
    
   <div className='divider my-0 py-0 h-1 '></div>
    </>
}

export default Conversation