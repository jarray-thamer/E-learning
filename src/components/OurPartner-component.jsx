const OurPartner = () => {
  return (
    <div className=" mt-96">
      <div className="flex flex-col text-center justify-center poppins">
        <h2 className="font-bold" style={{ fontSize: "40px" }}>
          Our Partner
        </h2>
        <p className=" mt-8 font-normal" style={{ fontSize: "32px" }}>
          We collaborate with leading top blockchain networks
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center mx-auto ">
        <img src="partner1.png" alt="partner1" className=" mx-7 mt-14" />
        <img src="partner2.png" alt="partner1" className=" mx-7 mt-14" />
        <img src="partner3.png" alt="partner1" className=" mx-7 mt-14" />
        <img src="partner4.png" alt="partner1" className=" mx-7 mt-14" />
        <img src="partner5.png" alt="partner1" className=" mx-7 mt-14" />
      </div>
    </div>
  );
};

export default OurPartner;
