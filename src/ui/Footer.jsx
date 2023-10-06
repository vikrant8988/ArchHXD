// react icons
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import StyledLink from "./StyledLink";
import StyledA from "./StyledA";

function Footer() {
  return (
    <footer
      className="h-32 relative w-full bg-stone-600
    flex justify-center items-center flex-col px-[50px]
      min-h-[100px] "
    >
      <ul
        className="relative flex justify-center 
      items-center flex-wrap h-10"
      >
        <li>
          <StyledA href="https://fb.com/">
            <BsFacebook className="hover:text-blue-400" />
          </StyledA>
        </li>
        <li>
          <StyledA href="https://instagram.com/">
            <BsInstagram className="hover:text-purple-400" />
          </StyledA>
        </li>
        <li>
          <StyledA href="https://linkedin.com/">
            <BiLogoLinkedinSquare className="hover:text-blue-900" />
          </StyledA>
        </li>
        <li>
          <StyledA href="https://x.com/">
            <BiLogoTwitter className="hover:text-blue-400" />
          </StyledA>
        </li>
      </ul>
      <ul
        className="mt-6 relative flex justify-center 
      items-center flex-wrap"
      >
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="about">About Us</StyledLink>
        </li>
        <li>
          <StyledLink to="contact">Contact Us</StyledLink>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
