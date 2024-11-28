// In this page adding hover button and box.
const Contact = () => {
  return (
    <div id="contact" className="pt-[80px]">
      <>
        <div className="box text-center flex items-center flex-col gap-3 cursor-pointer dark:hover:bg-slate-700 hover:bg-slate-200 hover:-translate-y-0.5">
          <div className="w-16 h-16 rounded bg-purple flex items-center flex-shrink-0 mb-5">
            <img
              src={"/src/assets/icons/stars.svg"}
              alt="icon"
              width={35}
              height={35}
              className="bg-purple-800 rounded-lg"
            />
          </div>
          <h2 className="text-gray-700 font-bold text-xl dark:text-gray-200">
            I had love to hear form you.
          </h2>
          <p className="text-gray-700 font-semibold dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            similique corporis adipisci eum esse dicta atque repellendus,
            distinctio minus doloribus! Molestias vel officiis, ea mollitia
            quaerat ab. Cum, aperiam mollitia?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-20 gap-5 pb-10">
          {/* left side */}
          <div className="">
            <div className="space-y-8">
              <div className="box p-6 text-center cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 hover:-translate-y-0.5">
                <p className="text-grey-600 font-bold">You can Email me here</p>
                <h6 className="text-grey-700">admin34@gmail.com</h6>
              </div>
              <div className="box p-6 text-center cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 hover:-translate-y-0.5">
                <p className="text-grey-600 font-bold">Give Me a call on</p>
                <h6 className="text-grey-700">+880123456789</h6>
              </div>
              <div className="box p-6 text-center cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 hover:-translate-y-0.5">
                <p className="text-grey-600 font-bold">Location</p>
                <h6 className="text-grey-700">Dhaka,Bangladesh</h6>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="box">
            <form action="" className="space-y-5 md:flex-col">
                <div className="flex gap-5 flex-col md:flex-row">
                    <input type="text" placeholder="First Name" className="px-2 py-3 w-full rounded-md outline-none"/>
                    <input type="text" placeholder="Last Name" className="px-2 py-3 w-full rounded-md outline-none"/>
                </div>
                <div className="flex gap-5 flex-col md:flex-row">
                    <input type="text" placeholder="Email" className="px-2 py-3 w-full rounded-md outline-none"/>
                    <input type="text" placeholder="Phone" className="px-2 py-3 w-full rounded-md outline-none"/>
                </div>
                  <textarea placeholder='Message' className='min-h-[200px] rounded-sm px-1 outline-none pb-4 flex w-full'></textarea>
                  <button type='submit' className="px-4 py-2 bg-purple-800 pt-4 rounded-md text-white cursor-pointer hover:-translate-y-0.5">Send</button>
            </form>
        </div>
        </div>
      </>
    </div>
  );
};

export default Contact;
