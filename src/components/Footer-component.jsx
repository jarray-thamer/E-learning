import { MdOutlineMailOutline } from "react-icons/md";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-violet-900 pb-12">
      <img src="footerimg.png" alt="footer" width={"100%"} />
      <footer className="  flex flex-col mx-8 mt-8">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col mx-6 w-4/12">
            <img src="logo.png" className=" w-3/4 text-start" />
            <p className="poppins font-medium text-white text-2xl">
              Grain Chain Lab is a Tunisian incubator that helps young
              entrepreneurs turn their brilliant ideas into successful startups
              on the blockchain networks.
            </p>
          </div>
          <div className=" flex flex-col text-white mt-4 librefont font-normal leading-7">
            <a className="my-2">Information</a>
            <a className="my-2">About Us</a>
            <a className="my-2">Products</a>
            <a className="my-2">Contact Us</a>
            <a className="my-2">Terms of Service</a>
          </div>
          <div className=" text-center text-white librefont font-normal mt-6">
            <h4 className="text-2xl my-7">Follow Us</h4>
            <div className="flex flex-row ">
              <BiLogoLinkedin
                color="#6400C3"
                className="mx-4 p-1"
                size={"2em"}
                style={{ backgroundColor: "white", borderRadius: "50px" }}
              />
              <FaFacebookF
                color="#6400C3"
                className="p-1 mx-4"
                size={"2em"}
                style={{ backgroundColor: "white", borderRadius: "50px" }}
              />
              <FaTwitter
                color="#6400C3"
                className="p-1 mx-4"
                size={"2em"}
                style={{ backgroundColor: "white", borderRadius: "50px" }}
              />
              <FaInstagram
                color="#6400C3"
                className="p-1 mx-4"
                size={"2em"}
                style={{ backgroundColor: "white", borderRadius: "50px" }}
              />
            </div>
          </div>
        </div>
        {/* copyright footer */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <p className="mr-8 text-white librefont font-normal text-xl">
              © Copyright 2023 Online
            </p>
            <p className=" font-light text-white" style={{ fontSize: "22px" }}>
              contact@gcl.lab
            </p>
          </div>
          <div className="flex flex-col">
            <p className="cinzelfont text-white font-normal text-xl mb-2">
              NEWSLETTER
            </p>
            {/* input */}
            <div
              className="group flex items-center"
              style={{ position: "relative", borderBottom: "1px solid grey" }}
            >
              <input
                placeholder="Entre you email address"
                className="footer-input pr-16 bg-transparent text-left h-6"
              />
              <span
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                }}
                className="icon"
              >
                <MdOutlineMailOutline color="white" size={"1.5em"} />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
