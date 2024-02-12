/* eslint-disable react/no-unescaped-entities */
const ContactSection = () => {
  return (
    <div className="mx-9">
      <h1
        style={{ fontSize: "40px" }}
        className=" text-center poppins font-bold my-28"
      >
        To Contact us
      </h1>
      <div className="flex flex-row mx-auto justify-around	">
        <img src="contactimg.png" alt="contact img " className="mx-8 w-full" />
        <div className="flex flex-col mx-8 w-full px-12">
          <form className="poppins font-normal text-2xl">
            <div className="flex flex-col my-5">
              <label htmlFor="email">
                Work email<span style={{ color: "red" }}>*</span>
              </label>
              <input
                style={{ borderRadius: "20px", border: " 5px solid #7720CB" }}
                type="email"
                id="email"
                name="email"
                required
                className=" py-4 mt-2"
              />
            </div>
            <div className="flex flex-col my-5">
              <label htmlFor="email">
                What's your name?<span style={{ color: "red" }}>*</span>
              </label>
              <input
                style={{ borderRadius: "20px", border: " 5px solid #7720CB" }}
                type="email"
                id="email"
                name="email"
                required
                className=" py-4 mt-2"
              />
            </div>
            <div className="flex flex-col my-5">
              <label htmlFor="description">
                What do you want to know?<span style={{ color: "red" }}>*</span>
              </label>
              <textarea
                style={{ borderRadius: "20px", border: " 5px solid #7720CB" }}
                id="description"
                name="description"
                rows="5"
                placeholder="type here ..."
                className="p-4"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                className="button primary-button"
                style={{ color: "white", backgroundColor: "#8123C7" }}
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
