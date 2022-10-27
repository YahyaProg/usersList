import { BsInstagram } from "react-icons/bs";
import { TbBrandTwitter } from "react-icons/tb";
import { TbBrandFacebook } from "react-icons/tb";
const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <span className="social-container">
          <BsInstagram />
        </span>
        <span className="social-container">
          <TbBrandTwitter />
        </span>
        <span className="social-container">
          <TbBrandFacebook />
        </span>
      </div>
      <div className="date">
        <p>info</p>
        <p>support</p>
        <p>marketing</p>
      </div>
      <span>2022@</span>
    </div>
  );
};

export default Footer;
