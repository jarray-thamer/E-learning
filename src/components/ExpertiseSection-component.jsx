import { TbTargetArrow } from "react-icons/tb";
import { IoEyeSharp } from "react-icons/io5";
import { IoDiamond } from "react-icons/io5";

const ExpertiseSection = () => {
  return (
    <div className="flex flex-col mt-20">
      <div className="flex flex-col justify-center text-center poppins">
        <h1 className="font-bold" style={{ fontSize: "40px" }}>
          Digital currency is our expertise
        </h1>
        <p
          className=" font-normal"
          style={{ fontSize: "30px", color: "#0007FF" }}
        >
          become the main supporter of the young entrepreneurs in MENA region
        </p>
      </div>
      {/* Cards */}
      <div className="flex flex-row mx-auto">
        {/* Card */}
        <div
          style={{ boxShadow: "-20 20 20 0 #000000" }}
          className="pb-8 rounded-3xl  mx-12 mt-24 flex flex-col justify-center text-center w-80 shadow-lg poppins px-4"
        >
          <TbTargetArrow
            color="white"
            size={"6em"}
            style={{ background: "#6011A3" }}
            className=" mx-auto -mt-12 p-3 rounded-full"
          />
          <h4 className=" mt-7 font-normal" style={{ fontSize: "30px" }}>
            MISSION
          </h4>
          <p style={{ color: "#444444" }} className=" font-medium text-lg">
            Our goal is to help create at least 100 projects by 2024. Those
            project will be the landmark and the role model to the other
            entrepreneurs and with that we can say we planted the seed for the
            blockchain era in North Africa and the Middle East.{" "}
          </p>
        </div>
        {/* Card */}
        <div
          style={{ boxShadow: "-20 20 20 0 #000000" }}
          className="pb-8 rounded-3xl mx-12 mt-24 flex flex-col justify-center text-center w-80 shadow-lg poppins px-4"
        >
          <IoDiamond
            color="white"
            size={"6em"}
            style={{ background: "#6011A3" }}
            className=" mx-auto -mt-12 p-3 rounded-full"
          />
          <h4 className=" mt-7 font-normal" style={{ fontSize: "30px" }}>
            MISSION
          </h4>
          <p style={{ color: "#444444" }} className=" font-medium text-lg">
            Our goal is to help create at least 100 projects by 2024. Those
            project will be the landmark and the role model to the other
            entrepreneurs and with that we can say we planted the seed for the
            blockchain era in North Africa and the Middle East.{" "}
          </p>
        </div>
        {/* Card */}
        <div
          style={{ boxShadow: "-20 20 20 0 #000000" }}
          className="pb-8 rounded-3xl mx-12 mt-24 flex flex-col justify-center text-center w-80 shadow-lg poppins px-4"
        >
          <IoEyeSharp
            color="white"
            size={"6em"}
            style={{ background: "#6011A3" }}
            className=" mx-auto -mt-12 p-3 rounded-full"
          />
          {/* <img
            src="eyeicon.png"
            alt="eye icon"
            style={{ backgroundColor: "#6011A3" }}
            className="mx-auto -mt-12 rounded-full"
          /> */}
          <h4 className=" mt-7 font-normal" style={{ fontSize: "30px" }}>
            MISSION
          </h4>
          <p style={{ color: "#444444" }} className=" font-medium text-lg">
            Our goal is to help create at least 100 projects by 2024. Those
            project will be the landmark and the role model to the other
            entrepreneurs and with that we can say we planted the seed for the
            blockchain era in North Africa and the Middle East.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
