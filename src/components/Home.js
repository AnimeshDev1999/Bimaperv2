import { motion } from "framer-motion";

const Home = () => {
  const anim = { opacity: 1, x: 0 };
  const init = { opacity: 0, x: "8rem" };

  const randomiser = (e) => {
    e.target.onmouseover = (event) => {
      let iterations = 0;
      const interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return event.target.dataset.value[index];
            }
            return Math.floor(Math.random() * 9);
          })
          .join("");
        if (iterations >= event.target.dataset.value.length)
          clearInterval(interval);
        iterations += 1;
      }, 50);
    };
  };
  return (
    <motion.div
      animate={anim}
      initial={init}
      transition={{ duration: ".5" }}
      className="home-base"
    >
      <div className="flex">
        <div className="flex w-1/2 grow">
          <div className="flex flex-col gap-5 part-box grow">
            <h1>Present</h1>
            <div className="box-1">
              <div className="bar mr-4 relative">
                <span
                  onMouseEnter={randomiser}
                  data-value="126.8k Cr"
                  className="growth"
                >
                  126.8k Cr
                </span>
                <span
                  onMouseEnter={randomiser}
                  data-value="2022"
                  className="year"
                >
                  2022
                </span>
              </div>
              <div className="bar ml-4 relative h-3/4">
                <span
                  onMouseEnter={randomiser}
                  data-value="146.5k Cr"
                  className="growth"
                >
                  146.5k Cr
                </span>
                <span
                  onMouseEnter={randomiser}
                  data-value="2023"
                  className="year"
                >
                  2023
                </span>
                <span className="bg-techBlue text-highGlow absolute right-1/2 translate-x-1/2 w-full text-center py-1 font-bold">
                  15.5%
                </span>
              </div>
            </div>
            <div className="para-box">
              <p className="text-highGlow">
                For B2B firms, marketing budgets as a percent of firm revenue
                fell within the 6-8% range
              </p>
              <p>
                For B2C firms, marketing budgets as a percent of firm revenue
                were around 8-14%
              </p>
              <p className="line">
                Marketing budgets as a percent of overall firm budgets have been
                fairly consistent <br /> for B2B firms the past few years, in
                the 9-11% range, but avrage much higher <br /> for B2C
                companies, upto as much as 20%
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 grow">
          <div className="flex flex-col gap-5 part-box grow">
            <h1>Prediction</h1>
            <div className="box-2">
              <p
                onMouseEnter={randomiser}
                data-value="172k Cr"
                className="hac stat-1 font-light"
              >
                172k Cr
              </p>
              <span className="text-xl flex justify-center items-center p-10 bg-techBlue text-highGlow font-bold top-4 right-4 absolute">
                18%
              </span>
              <span
                onMouseEnter={randomiser}
                data-value="2028"
                className="text-xl absolute font-bold top-4 left-4"
              >
                2028
              </span>
            </div>
            <div className="para-box">
              <p className="text-highGlow">
                India’s digital advertising is growing at a compound <br />{" "}
                annual growth rate(CAGR) of 19-21 percent,
              </p>
              <p className="line">
                Digital ad spending will account for 65%-70% of overall <br />{" "}
                advertising spend in India. However, in FY23, it will observe{" "}
                <br /> a muted growth due to macro factors, the report noted
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="para-box-1">
        <p className="mt-10 text-techBlue font-semibold text-4xl">
          BIMAPER Assures You Saving Money In The Process, <br /> 'It'll Run
          Towards Low Cost & Better Effective Every Other Day'.
        </p>
        <p className="text-techBlue font-semibold text-4xl">
          Only Spending on One Time Purchase of Your Product / Service <br />{" "}
          Will Not Going to Get You A Regular Customer For Your Business <br />
        </p>
        <p className="text-techBlue font-semibold text-4xl">
          Allow BIMAPER to Help You Out with It !
        </p>
      </div>
      <div className="advert"></div>
    </motion.div>
  );
};

export default Home;
