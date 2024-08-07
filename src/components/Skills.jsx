import React from 'react';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#A6A2A2] text-black-500'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-[#178C38] text-center '>Skills</p>
              <p className='py-4 text-2xl'>이런거 할 줄 알아요! 맡겨만 주세요!</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>NODE.JS</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>SPRING</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>EXPRESS</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>C</p>
              </div>

              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>PYTHON</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>JAVA</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>MSSQL</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>AWS EC2</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>AZURE VM</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>UBUNTU</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>AMAZON LINUX</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>MAC OS</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>PINTOS</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>UNITY & C#</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>ADOBE TOOLS</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>MS OFFICE TOOLS</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>GITHUB</p>
              </div>
          </div>
      </div>
    </div>
  );
};
export default Skills;