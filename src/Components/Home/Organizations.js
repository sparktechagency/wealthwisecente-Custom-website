import React from 'react';

const Organizations = () => {
    return (
        <div className='grid md:grid-cols-2 md:py-20 py-10'>
            {/* First Card with Dark Overlay */}
            <div className='relative md:p-14 p-10 bg-[url("/Images/Home/organigation.jpg")] bg-cover bg-center bg-no-repeat min-h-[60vh] text-white flex flex-col justify-center items-start gap-5'>
                {/* Dark Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

                <h2 className='md:text-4xl text-2xl font-semibold z-10'>
                    For Individuals And <br />
                    Organizations
                </h2>
                <p className='z-10'>
                    We understand how important it is to feel secure. Our team is dedicated to helping you explore the best protection options tailored to your needs. Whether you're looking for personal, home, or business protection,
                </p>
            </div>

            {/* Second Card with Dark Overlay */}
            <div className='relative bg-[url("/Images/Home/organigation-2.png")] bg-cover bg-center bg-no-repeat min-h-[60vh] z-[-99] px-20 py-10 flex flex-col justify-center items-start gap-5'>
                {/* Dark Overlay */}
                <div className="absolute z-[-1] top-0 left-0 w-full h-full bg-[#fbf8f3] opacity-80"></div>
                {/* Optionally, you can add content for the second card */}
                <div className='grid grid-cols-2 gap-10 md:gap-20 md:w-2/3 mx-auto z-[9999] mt-10'>
                    <div className='z-[9999]  text-center'>
                        <h2 className='md:text-4xl text-2xl font-semibold mb-2'>1233</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className='z-[9999]  text-center'>
                        <h2 className='md:text-4xl text-2xl font-semibold mb-2'>1233</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className='z-[9999]  text-center'>
                        <h2 className='md:text-4xl text-2xl font-semibold mb-2'>1233</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className='z-[9999]  text-center'>
                        <h2 className='md:text-4xl text-2xl font-semibold mb-2'>1233</h2>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Organizations;
