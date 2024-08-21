import React from 'react'

const Header = () => {
  return (
    <section className='bg-primary flex items-center justify-between p-4'>
        <div>
            <h1>Logo</h1>
        </div>
        <div className='flex gap-4 items-center justify-around'>
            <div>
                <h1>Blogs</h1>
            </div>
            <div>
                <input className='border border-primary px-4 py-2 rounded text-sm focus:outline-none' type="text" placeholder='Text' />
            </div>
            <div>
                <button className='bg-button text-white px-4 py-2 rounded text-sm'>Create Blog Post</button>
            </div>
        </div>
    </section>
  )
}

export default Header