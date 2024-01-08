import React from 'react';

function MyApp() {
  return (
    <>
    <div className='h-full w-full bg-black'>
        <div className='flex flex-wrap justify-center text-white'>
          <div className='rounded-md  m-4 p-6 w-80 h-full'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4'>Welcome to <span className='text-lime-600'>Team Daksh</span></h1>
            <p className='text-sm md:text-base text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="rounded-md m-4 p-6 w-80 h-full">
            <div className='h-1/2 mb-4'>
             <img src="https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&pid=Api&P=0&h=180" className='w-full h-full rounded-md object-cover' alt="Project" />
            </div>
            <div className='h-1/2'>
              <div className='flex flex-col space-y-2'>
                <div className="bg-slate-800 p-2 rounded-md text-xs text-gray-400">Years of experience</div>
                <div className="bg-slate-800 p-2 rounded-md text-xs text-gray-400">Project challenge</div>
              </div>
              <div className='flex flex-col space-y-2 mt-4'>
                <div className="bg-slate-800 p-2 rounded-md text-xs text-gray-400">Positive reviews</div>
                <div className="bg-slate-800 p-2 rounded-md text-xs text-gray-400">Trusted students</div>
              </div>
          </div>
        </div>
      
      <div className='text-white'>
        <div className='flex flex-wrap  justify-center mb-4'>
          <div className='rounded-md  w-1/2 md:w-2/3 h-full' >
          <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4'>About <span className='text-lime-600'>us</span></h1>
          <p className='text-sm md:text-base text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          </div>
          <div>
          <img src="https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg" className='w-full h-32 rounded-md object-cover ml-2 ' alt="Project" />
          </div>
        </div>
        <div className='flex md:flex-wrap flex-wrap-reverse justify-center mt-4 mb-4'>
          <div>
            <img src="https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg" className='w-full h-32 rounded-md object-cover items-center' alt="Project" />
          </div>
          <div className='rounded-md  w-1/2 md:w-2/3 h-full ml-2' >
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4'>Our <span className='text-lime-600'>Mission</span></h1>
            <p className='text-sm md:text-base text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div> 
        </div>
        <div className='flex flex-wrap  justify-center mt-4 mb-4'>
          <div className='rounded-md  w-1/2 md:w-2/3 h-full' >
          <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4'>Welcome to <span className='text-lime-600'>Topic</span></h1>
          <p className='text-sm md:text-base text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          </div>
          <div>
          <img src="https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&pid=Api&P=0&h=180" className='w-full h-32 rounded-md object-cover ml-2 items-center' alt="Project" />
          </div>
        </div>
       </div>
    </div>
    </div>
    </>
  );
}

export default MyApp;



