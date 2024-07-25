import React from 'react'

const Team = () => {
  const team=[
    {
      img:"t1.jpg",
      name:"JEREMY THOMAS",
      designation:"CHIEF EXECUTIVE OFFICER"
    },
    {
      img:"t8.jpg",
      name:"RACHEL MOORE",
      designation:"SR.EXECUTIVE RECRUITER"
    },
    {
      img:"t9.jpg",
      name:"MASON SMITH",
      designation:"EXECUTIVE RECRUITER"
    },
    {
      img:"t4.jpg",
      name:"OLIVIA PARKER",
      designation:"HEAD OF LEADERSHIP CONSULTING"
    },
    {
      img:"t5.jpg",
      name:"TRAVIS YOUNG",
      designation:"MANAGING DIRECTOR, EXECUTIVE SEARCH"
    },
    {
      img:"t7.jpg",
      name:"JULIA THOMPSON",
      designation:"BUSINESS DEVELOPMENT MANAGER"
    },
  ]
  return (
    <section className='sm:grid sm:grid-cols-3 gap-10 flex flex-col items-center lg:px-[9rem] px-[1.5rem] py-[3rem]'>
      {
        team.map((item,index)=>(
          <div key={index} className='shadow-lg rounded-md w-[75%]'>
            <div>
              <img src={item.img} className='rounded-t-md' alt="" />
            </div>
            <div className='p-6 text-center'>
              <h4 className='h5 opacity-80 hover:opacity-50'>{item.name}</h4>
              <p className='p text-primary'>{item.designation}</p>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default Team