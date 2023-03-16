import { motion } from "framer-motion";

const OurCapability = () => {
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
        <p className="text-3xl">
          To Carry Technologies & Solutions We have Build Everything for Our Own
          Use <br /> On Pseudo Level Hence We Are not Depend On Third Parties
          for Our Offerings <br /> BIMAPER has Tackled many Obstacle in the
          Process, Now We're Happy to <br /> Announce{" "}
          <span className="font-bold">
            "Everything of Your Need for a Great Market Presence"
          </span>{" "}
          We Do!
        </p>
        <p className="text-3xl mb-8">
          We're Capable Beyond That Providing 'Technology Transfer' and 'Human{" "}
          <br />
          Resource Outsourcing' along Necessary Training, Supervision On Planned{" "}
          <br />
          Path of Long Term Strategy Execution, Monitoring Daily Bits of
          Operation for <br /> Our Clients. We can Ease Your Content, Context,
          Contest & Help Stand Out.
        </p>
        <div className="flex gap-14">
          <div className="flex flex-col gap-4 font-semibold">
            <p className="text-3xl text-techBlue">
              Brand is 1, Branding is 2, Performance is 3. <br /> This Series of
              Process 'We Solve Any Problem <br /> at Any Stage of Planning' To
              name a Few Like <br /> Free Web Hosting and Free SSL Certificate,{" "}
              <br />
              Creative Graphics Designing Includes Concept <br /> Branding &
              Beyond, Website Back & Frontend <br /> along Android & AppleOS
              App. Development, <br /> We Optimize Website's Ranking On the
              Search <br /> Through Our SEO & SMO also Very Important <br />{" "}
              Mention We Manage Social Media Presence...
            </p>
          </div>
          <div className="bg-highGlow w-80 h-80 mt-5"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default OurCapability;
