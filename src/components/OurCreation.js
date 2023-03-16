import { motion } from "framer-motion";

const OurCreation = () => {
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
          BIMAPER has Created Significant Growth for Our Clients In Terms of
          Having <br /> a Reach into Real Online World, Having more Engagements
          with Potential <br /> Buyers, As Availed/Demanded Our Tech Based
          Solution at The Core Like <br /> Custom Tracking and Monitoring
          Software, Performance Review Softwares, <br /> Great Presence in an
          Open and Accessible World Through Branding and <br /> Business
          Communication Services.
        </p>
        <p className="text-3xl mb-8">
          We Go an Extra Mile If any of Our Client asks for any combination of
          Services <br /> Required, We Provide Creating Special Package Out of
          it.
        </p>
        <div className="flex gap-14">
          <div className="flex flex-col gap-4 font-semibold">
            <p className="text-3xl text-techBlue">
              In this Modern and Developing Era BIMAPER <br /> Differentiate
              Clients into Their #BizPool as <br /> Unique by Quality & The Way
              Clients Deliver <br /> Their Product / Service.
            </p>
            <p className="text-3xl text-techBlue">
              As a Business of Modern World We Wishes <br /> to have People Ask
              and Demand More, Our <br /> Solution Determines Instant Rise in
              Online <br /> Traffic Towards Business which Gravitates <br /> in
              the Entity, BIMAPER is Low Cost, effective <br /> into Competitive
              Market.
            </p>
          </div>
          <div className="bg-highGlow w-80 h-80 mt-5"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default OurCreation;
