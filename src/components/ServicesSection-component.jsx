const ServicesSection = () => {
  return (
    <div className="">
      <div className=" -mt-28 servicesContainer"></div>
      <div className=" -mt-96 flex flex-col">
        <div className="text-center">
          <h3 className="inter font-bold" style={{ fontSize: "40px" }}>
            Our Services
          </h3>
          <h4 className="inter font-normal text-4xl mt-6">
            All-In-One Grain Chain Lab
          </h4>
        </div>
        {/* Cards list */}
        <div className="mx-16 flex flex-row my-32">
          {/* Card */}
          <div
            className=" bg-white mx-8 rounded-3xl p-8 flex flex-col text-center"
            style={{ boxShadow: "-20px 20px 25px 0 rgba(0, 0, 0, 0.25)" }}
          >
            <img src="serviceimg1.png" className=" px-11" />
            <h5
              className="inter font-semibold text-2xl mt-6 px-4"
              style={{ color: "#2F327D" }}
            >
              Launch your project and start your journey as an entrepreneur
            </h5>
            <p
              className="mt-4 poppins font-normal"
              style={{ fontSize: "20px", color: "#696984" }}
            >
              Attend live courses and workshops to obtain the necessary skills
              to turn your project ideas into viable business
            </p>
          </div>
          {/* Card */}
          <div
            className=" bg-white mx-8 rounded-3xl p-8 flex flex-col text-center"
            style={{ boxShadow: "-20px 20px 25px 0 rgba(0, 0, 0, 0.25)" }}
          >
            <img src="serviceimg2.png" className=" px-11" />
            <h5
              className="inter font-semibold text-2xl mt-6 px-4"
              style={{ color: "#2F327D" }}
            >
              Launch your project and start your journey as an entrepreneur
            </h5>
            <p
              className="mt-4 poppins font-normal"
              style={{ fontSize: "20px", color: "#696984" }}
            >
              Attend live courses and workshops to obtain the necessary skills
              to turn your project ideas into viable business
            </p>
          </div>
          {/* Card */}
          <div
            className="bg-white mx-8 rounded-3xl p-8 flex flex-col text-center"
            style={{ boxShadow: "-20px 20px 25px 0 rgba(0, 0, 0, 0.25)" }}
          >
            <img src="serviceimg3.png" className=" px-11" />
            <h5
              className="inter font-semibold text-2xl mt-6 px-4"
              style={{ color: "#2F327D" }}
            >
              Launch your project and start your journey as an entrepreneur
            </h5>
            <p
              className="mt-4 poppins font-normal"
              style={{ fontSize: "20px", color: "#696984" }}
            >
              Attend live courses and workshops to obtain the necessary skills
              to turn your project ideas into viable business
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
