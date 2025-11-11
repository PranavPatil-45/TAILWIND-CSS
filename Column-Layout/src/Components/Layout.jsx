import React from 'react'

const Layout = () => {
  return (
    <div className='bg-gray-200 2xl:columns-4 xl:columns-3 md:columns-2 columns-1 m-3 space-y-3 space-x-3'>

            {


                Array.from({ length: 15}).map((_, i) => <div className='bg-sky-50 p-3 rounded break-inside-avoid'>
                    <img src={"https://picsum.photos/300/200?random=" + i} alt="" className='rounded mb-3 w-full' />
                </div>)
            }

        </div>
  )
}

export default Layout
