import { IoCheckmark } from "react-icons/io5";
const WhyChoose = () => {
  return (
    <div className="whyChooseContainer flex flex-row py-4 px-8">
      <div
        className="flex flex-row"
        style={{
          height: "80%",
        }}
      >
        <div className="flex flex-col text-white mr-8 mt-16">
          <h3 className="inter font-extrabold text-4xl">
            Why choose Grain Chain Lab
          </h3>
          <p className="inter font-normal text-2xl mt-4">
            Grain Chain Lab represents the link between the main actors that can
            make a change. GCL gives the student a set of important assets that
            help him create his own project :
          </p>
          {/* Lists */}
          <div className=" text-white flex flex-col py-10 mt-3">
            <div className="flex flex-row align-items-center mt-2 mb-2">
              <IoCheckmark
                className=" rounded-full p-1"
                color="white"
                size={"2em"}
                style={{ backgroundColor: "#6953D3" }}
              />
              <p
                className="inter font-normal ml-8"
                style={{ fontSize: "20px" }}
              >
                First of all, the technical knowledge to carry his project.
              </p>
            </div>
            <div className=" mt-2 mb-2 flex flex-row align-items-center">
              <IoCheckmark
                className=" rounded-full p-1"
                color="white"
                size={"2em"}
                style={{ backgroundColor: "#6953D3" }}
              />
              <p
                className="inter font-normal ml-8"
                style={{ fontSize: "20px" }}
              >
                Second, the soft skills.
              </p>
            </div>
            <div className="mt-2 mb-2 flex flex-row align-items-center">
              <IoCheckmark
                className=" rounded-full p-1"
                color="white"
                size={"2em"}
                style={{ backgroundColor: "#6953D3" }}
              />
              <p
                className="inter font-normal ml-8"
                style={{ fontSize: "20px" }}
              >
                Then there’s the IDEATION phase.
              </p>
            </div>
            <div className="mt-2 mb-2 flex flex-row align-items-center">
              <IoCheckmark
                className="p-1 rounded-full "
                color="white"
                size={"2em"}
                style={{ backgroundColor: "#6953D3" }}
              />
              <p
                className="inter font-normal ml-8"
                style={{ fontSize: "20px" }}
              >
                The DEMO DAY to bring aboard investors and launch their
                projects.
              </p>
            </div>
          </div>
        </div>
        <img src="arrowboard.png" alt="arrow board" width={"50%"} />
      </div>
    </div>
  );
};

export default WhyChoose;
