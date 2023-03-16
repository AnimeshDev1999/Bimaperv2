import { motion } from "framer-motion";

const ExplainMe = () => {
  const anim = { opacity: 1, x: 0 };
  const init = { opacity: 0, x: "8rem" };
  return (
    <motion.div
      return
      animate={anim}
      initial={init}
      transition={{ duration: ".5" }}
      className="glass"
    >
      <motion.div
        transition={{ duration: ".6" }}
        animate={anim}
        initial={init}
        className="bimaper-box-1 font-normal"
      >
        <h1 className="text-5xl font-light mb-4">
          We're Both Sailing On The Same Boat Here!
        </h1>
        <p className="text-3xl font-normal">
          BIMAPER is Available On Various Mode of Communication For Your
          Convenience <br />
        </p>
        <p className="text-3xl mb-8 font-normal">
          Let Us Know Your Concern And Connect Further...
        </p>
        <div className="flex flex-col gap-8">
          <p className="text-3xl font-semibold text-techBlue">
            Tick The Preferred Mode of Communication
          </p>
          <form className="flex flex-col gap-8">
            <div className="flex gap-20">
              <label className="text-3xl flex items-center" htmlFor="">
                <input className="h-10 w-10" type="checkbox" />
                &nbsp; &nbsp; Whatsapp
              </label>
              <label className="text-3xl flex items-center" htmlFor="">
                <input className="h-10 w-10" type="checkbox" />
                &nbsp; &nbsp; E-Mail
              </label>
              <label className="text-3xl flex items-center" htmlFor="">
                <input className="h-10 w-10" type="checkbox" />
                &nbsp; &nbsp; Phone Call
              </label>
            </div>
            <label className="text-3xl" htmlFor="">
              Time &nbsp; &nbsp;
              <input
                className="bg-transparent border-4 border-slate-400"
                type="time"
              />
            </label>
            <div className="grid grid-cols-2 gap-x-10 gap-y-5 mr-36">
              <input
                className="bg-transparent border-4 border-slate-400 px-3 text-2xl"
                placeholder="E-Mail"
                type="email"
              />
              <input
                className="bg-transparent border-4 border-slate-400 px-3 text-2xl"
                placeholder="Phone Number"
                type="text"
              />
              <input
                className="bg-transparent border-4 border-slate-400 px-3 text-2xl"
                placeholder="Your Name / Company Name"
                type="text"
              />
            </div>
            <textarea
              className="resize-none w-5/6 p-1 bg-transparent border-4 border-slate-400 px-3 text-2xl"
              name=""
              placeholder="Your Message"
              cols="30"
              rows="3"
            ></textarea>
            <input
              className="cursor-pointer w-max bg-techBlue text-3xl font-semibold px-3"
              value="Submit"
              type="submit"
            />
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default ExplainMe;
