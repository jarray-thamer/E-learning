const BlogSection = () => {
  return (
    <div className=" mx-8 mt-64 flex flex-col ">
      <h1
        className="text-center poppins font-bold"
        style={{ fontSize: "40px" }}
      >
        Our Blog and News{" "}
      </h1>
      {/* Cards list */}
      <div className="flex flex-row mx-auto mt-28">
        {/* Card */}
        <div className="mt-24 rounded-3xl flex flex-col mx-4 w-1/3">
          <img className="mb-4" src="blogimg1.png" alt="news img 1" />
          <div style={{ opacity: "50%" }}>
            <p
              style={{ backgroundColor: "#6400C3" }}
              className=" rounded-full text-center poppins font-normal text-2xl text-white px-2 py-2 w-2/5 mb-4"
            >
              NEW
            </p>
            <p
              style={{ color: "#252641" }}
              className=" leading-10 poppins font-medium text-2xl"
            >
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </p>
            <p
              style={{ color: "#696984" }}
              className="leading-9 font-normal text-xl my-4"
            >
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <a
              className="underline font-normal text-xl leading-9"
              style={{ color: "rgba(105, 105, 132, 0.5)" }}
            >
              Read more
            </a>
          </div>
        </div>
        {/* Card */}
        <div className=" rounded-3xl flex flex-col mx-4 w-1/3 ">
          <img className="mb-4" src="blogimg2.png" alt="news img 1" />
          <div>
            <p
              style={{ backgroundColor: "#6400C3" }}
              className=" rounded-full text-center poppins font-normal text-2xl text-white px-2 py-2 w-2/5 mb-4"
            >
              NEW
            </p>
            <p
              style={{ color: "#252641" }}
              className=" leading-10 poppins font-medium text-2xl"
            >
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </p>
            <p
              style={{ color: "#696984" }}
              className="leading-9 font-normal text-xl my-4"
            >
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <a
              className="underline font-normal text-xl leading-9"
              style={{ color: "rgba(105, 105, 132, 0.5)" }}
            >
              Read more
            </a>
          </div>
        </div>
        {/* Card */}
        <div className="mt-24 rounded-3xl flex flex-col mx-4 w-1/3">
          <img className="mb-4" src="blogimg3.png" alt="news img 1" />
          <div style={{ opacity: "50%" }}>
            <p
              style={{ backgroundColor: "#6400C3" }}
              className=" rounded-full text-center poppins font-normal text-2xl text-white px-2 py-2 w-1/3 mb-4"
            >
              NEW
            </p>
            <p
              style={{ color: "#252641" }}
              className=" leading-10 poppins font-medium text-2xl"
            >
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </p>
            <p
              style={{ color: "#696984" }}
              className="leading-9 font-normal text-xl my-4"
            >
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <a
              className="underline font-normal text-xl leading-9"
              style={{ color: "rgba(105, 105, 132, 0.5)" }}
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
