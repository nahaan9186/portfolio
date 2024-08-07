import React from 'react';
import applications from '../data';

const ApplicationItemSingle = ({ code, title, description, codeLink }) => (
  <div
    style={{ backgroundImage: `url(${code})` }}
    className='shadow-lg shadow-[#178C38] group container rounded-md flex justify-center items-center mx-auto content-div '
  >
    {/* Hover Effects */}
    <div className=' opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col '>
      <span className=' text-lg font-bold text-black-500 tracking-wider'>
        {title}
      </span>
      <p className='text-center'>{description}</p>
      <div className='pt-8 text-center'>
        <a href={codeLink}>
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#178C38] text-black-500 font-bold text-lg'>
            Show Webpage
          </button>
        </a>
      </div>
    </div>
  </div>
);

const ApplicationItemDouble = ({ code, title, description, codeLink, GitHubLink }) => (
  <div
    style={{ backgroundImage: `url(${code})` }}
    className='shadow-lg shadow-[#178C38] group container rounded-md flex justify-center items-center mx-auto content-div '
  >
    {/* Hover Effects */}
    <div className=' opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col '>
      <span className=' text-lg font-bold text-black-500 tracking-wider'>
        {title}
      </span>
      <p className='text-center'>{description}</p>
      <div className='pt-8 text-center'>
        <a href={codeLink}>
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#178C38] text-black-500 font-bold text-lg'>
            Show Webpage
          </button>
        </a>
        <a href={GitHubLink}>
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#178C38] text-black-500 font-bold text-lg'>
            GitHub
          </button>
        </a>
      </div>
    </div>
  </div>
);

const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen text-black-500 bg-[#A6A2A2]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-black-500 border-[#178C38]'>
            Work
          </p>
          <p className='py-6 text-2xl'>이런 것들을 했었더랬죠</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          {applications.map((app, index) => (
            app.GitHubLink ? 
              <ApplicationItemDouble key={index} {...app} /> :
              <ApplicationItemSingle key={index} {...app} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;