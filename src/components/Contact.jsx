import React from 'react'

const Contact = () => {
  return (
    <section className="paddings mb-10 mt-10">
        <h1 className="h2 text-secondary font-semibold text-center">
          CONTACT US
        </h1>

        <form
          action=""
          className="sm:w-1/2 mx-auto flex flex-col gap-5 py-6 sm:px-12"
        >
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <div className="flex flex-col">
              <input
                type="text"
                name="Full Name"
                className=" py-3 px-6 border-[1px] border-zinc-200 rounded-md"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="Email"
                className="py-3 px-6 border-[1px] border-zinc-200 rounded-md"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <div className="flex flex-col">
              <input
                type="text"
                name="Phone"
                className=" py-3 px-6 border-[1px] border-zinc-200 rounded-md"
                placeholder="Phone"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="Job Title"
                className="py-3 px-6 border-[1px] border-zinc-200 rounded-md"
                placeholder="Subject"
              />
            </div>
          </div>

          <textarea name="Message"
          rows={10}
          placeholder='Message...'
          className="p-3 border-[1px] border-zinc-200 rounded-md"
          id=""></textarea>
        </form>
        <div className="flex justify-center">
          <button type="submit" className="curtain-button rounded-md">
            <span className="p-2">Submit</span>
          </button>
        </div>
      </section>
  )
}

export default Contact