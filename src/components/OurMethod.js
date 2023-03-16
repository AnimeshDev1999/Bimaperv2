import { motion } from "framer-motion";

const OurMethod = () => {
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
        <p className="text-3xl mb-8">
          At BIMAPER we follow Our Own Developed Method as a Scientific Piece of
          Art <br /> for Purposeful Communication Behalf of Our Clients which
          works toward <br /> Enhancing Brand Image Performance. A Team of
          Industry Experts having <br /> more than a Decade of Experience Solves
          Each Problem like a Mathmatician <br /> Solves an Equation, We
          Brainstorm, We Discuss Every Possibility, Even we <br /> ask and
          Provide Our Clients some options of Openions, We Review Database{" "}
          <br /> to Overcome into Competetion, We have Proven Ourselves as a
          Diffrent <br /> Perspective to Detailed Overview of the Market and
          Business.
        </p>
        <div className="flex gap-14">
          <div className="flex flex-col gap-4 font-semibold">
            <p className="text-3xl text-techBlue">
              To Explain The Developed Method BIMAPER <br /> uses, We're
              Recalling Purpose 'Enhancing <br /> Brand Image Performance' to
              Achieve This. <br /> We're Explaining It into a Formula, Before
              any <br /> Implementation We Analyze Properly
            </p>
            <p className="text-3xl text-techBlue">
              We Read "Current Business Stage Multiplies <br /> By Availed
              Services Adding Involved Effort <br /> Into that which gets
              Totaled as Progressed <br /> Business Stage" is Sustainable with
              Minimum <br /> Effort Implemented On the TimeLine
            </p>
          </div>
          <div className="bg-highGlow w-80 h-80 mt-5"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default OurMethod;
