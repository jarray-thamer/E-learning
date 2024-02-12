import { SiBlockchaindotcom } from "react-icons/si";
import { TfiReload } from "react-icons/tfi";
import { PiArrowLineDownLeftThin } from "react-icons/pi";

const WelcomeToGCL = () => {
  return (
    <div className=" px-8 flex flex-row mx-auto mt-24">
      <img src="welcomegclimg.png" alt="welcome gcl" />
      <div className="flex flex-col ml-4 my-auto">
        <h1
          className="poppins font-bold mb-4"
          style={{ fontSize: "40px", color: "#6400C3" }}
        >
          Welcome to GCL
        </h1>
        <p
          className="mb-2 inter font-medium"
          style={{ fontSize: "28px", color: "#444444" }}
        >
          Grain Chain Lab is a Tunisian incubator that helps young entrepreneurs
          turn their brilliant ideas into successful startups on the blockchain
          networks.
        </p>
        {/* Lists */}
        <div className="flex flex-col py-10">
          <div className="flex flex-row align-items-center ">
            <SiBlockchaindotcom
              className=" rounded-full p-2"
              color="#6953D3"
              size={"2em"}
              style={{ backgroundColor: "#D9D9D9" }}
            />
            <p className="inter font-medium ml-8" style={{ fontSize: "28px" }}>
              Blockchain courses and workshops
            </p>
          </div>
          <div className=" mt-2 mb-2 flex flex-row align-items-center">
            <TfiReload
              className=" rounded-full p-2"
              color="#6953D3"
              size={"2em"}
              style={{ backgroundColor: "#D9D9D9" }}
            />
            <p className="inter font-medium ml-8" style={{ fontSize: "28px" }}>
              Soft skills and management guidance
            </p>
          </div>
          <div className="flex flex-row align-items-center">
            <PiArrowLineDownLeftThin
              className=" rounded-full p-2"
              color="#6953D3"
              size={"2em"}
              style={{ backgroundColor: "#D9D9D9" }}
            />
            <p className="inter font-medium ml-8" style={{ fontSize: "28px" }}>
              Startup creation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeToGCL;
