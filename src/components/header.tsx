import React from 'react'
import CreateBlogModal from './create-blog-modal'

const Header = () => {
  return (
    <section className='bg-white shadow flex items-center justify-between sm:px-12 px-4 py-4'>
        <div>
            <h1>Logo</h1>
        </div>
        <div className='flex gap-4 items-center justify-around'>
            <div>
                <h1>Blogs</h1>
            </div>
            <div className='md:block hidden'>
                <input className='border border-secondary px-4 py-2 rounded text-sm focus:outline-none' type="text" placeholder='Text' />
            </div>
            <div>
                <CreateBlogModal />
                {/* <button className='bg-button text-white px-4 py-2 rounded text-sm'>Create Blog Post</button> */}
            </div>
        </div>
    </section>
  )
}

export default Header