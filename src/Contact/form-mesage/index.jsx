const FormMessage = () => {
  return (
    <div className="flex justify-center items-center pb-[100px]">
      <div className="flex w-[95%]">
        <div>
          <div>
            <h1 className="text-[#3A3939] text-[40px] font-semibold">
              We would love to hear from you.
            </h1>
            <p className="text-[#555555] pt-8 pb-[48px]">
              If you have any query or any type of suggestion, you can contact
              us here. We would love to hear from you.
            </p>
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="email"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Message
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-7 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                  />
                </div>
              </div>
            </form>
          </div>
          <button className="bg-[#024E82] hover:bg-blue-700 text-white font-bold py-4 px-20 ">
            Button
          </button>
        </div>
        <div className="ml-[70px]">
          <div>
            <h1 className="text-[#3A3939] text-[40px] font-semibold">
              Visit US
            </h1>
            <p className="text-[#555555] pt-4">UET Lahore, Punjab</p>
            <p className="text-[#555555]  pb-[48px]">
              Pakistan Phone: +923039898987
            </p>
          </div>
          <div>
            <h1>Get In Touch</h1>
            <p>You can get in touch with us on this provided email. </p>
            <p>Email: hmjawad087@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormMessage;
