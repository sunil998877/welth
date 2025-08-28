import React from 'react'

const active = () => {
    return (
        <section className=' py-18    bg-blue-50    '>
        <div className="container mx-auto  text-center flex justify-evenly items-center text-black">
            <div>
                    <h3 className='font-bold text-4xl text-blue-600'>50K+</h3>
                    <p className='mt-3'>Active Users</p>
            </div>
            <div>
                <h3 className='font-bold text-4xl text-blue-600'>$2B+</h3>
                <p className='mt-3'>Transactions Tracked</p>
            </div>
            <div>
                <h3 className='font-bold text-4xl text-blue-600'>99.9%</h3>
                <p className='mt-3'>Uptime</p>
            </div>
            <div>
                <h3 className='font-bold text-4xl text-blue-600'>4.9/5</h3>
                <p className='mt-3'>User Rating</p>
            </div>
        </div>

    </section>
    )
}

export default active