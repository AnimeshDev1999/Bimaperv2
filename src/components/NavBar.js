import logo from "../images/Logo.png";
import n1 from "../images/n1.png";
import n2 from "../images/n2.png";
import n3 from "../images/n3.png";
import n4 from "../images/n4.png";
import n5 from "../images/n5.png";
import n6 from "../images/n6.png";
import flag from "../images/Flag.png";
import { useState } from "react";
import { motion } from "framer-motion";

const NavBar = (props) => {
  const anim = { opacity: 1, x: 0 };
  const init = { opacity: 0, x: "8rem" };
  const data1 = [
    { name: "BIMAPER", ico: logo, cls: "text-4xl" },
    { name: "Our Space", ico: n1, cls: "text-2xl" },
    { name: "Our Method", ico: n2, cls: "text-2xl" },
    { name: "Our Capability", ico: n3, cls: "text-2xl" },
    { name: "Our Creation", ico: n4, cls: "text-2xl" },
  ];
  const data2 = [
    { name: "Explain Me", ico: n5, cls: "text-2xl" },
    { name: "Our Diary", ico: n6, cls: "text-2xl" },
  ];
  const [expand, setExpand] = useState(false);

  const toggle = () => {
    setExpand(!expand);
    const interval = setInterval(() => {
      expand ? props.func[1]("Home") : props.func[1]("BIMAPER");
      clearInterval(interval);
    }, 200);
  };

  return (
    <div onClick={toggle} className={`nav-base${expand ? " exp-div" : ""}`}>
      <div className="nav-wrap">
        {data1.map((item) => (
          <div className="nav-box" key={item.name}>
            {expand ? (
              <motion.h2
                animate={anim}
                initial={init}
                transition={{ duration: ".3" }}
                data-value={item.name}
                onClick={props.func[0]}
                className={
                  item.name === props.func[2]
                    ? item.cls + " nav-txt active-nav"
                    : item.cls + " nav-txt"
                }
              >
                {item.name}
              </motion.h2>
            ) : (
              <img
                data-value={item.name}
                onClick={props.func[0]}
                className="ico"
                src={item.ico}
                alt="Company logo"
              />
            )}
          </div>
        ))}
      </div>
      <div className="nav-wrap">
        {data2.map((item) => (
          <div className="nav-box" key={item.name}>
            {expand ? (
              <motion.h2
                animate={anim}
                initial={init}
                transition={{ duration: ".3" }}
                data-value={item.name}
                onClick={props.func[0]}
                className={
                  item.name === props.func[2]
                    ? item.cls + " nav-txt active-nav"
                    : item.cls + " nav-txt"
                }
              >
                {item.name}
              </motion.h2>
            ) : (
              <img
                data-value={item.name}
                onClick={props.func[0]}
                className="ico"
                src={item.ico}
                alt="Company logo"
              />
            )}
          </div>
        ))}
      </div>
      <img className="flag" src={flag} alt="Indian Flag" />
    </div>
  );
};

export default NavBar;
