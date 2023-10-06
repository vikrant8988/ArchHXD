import { Link } from "react-router-dom";

function StyledLink({ to, children, textColor = "text-stone-100" }) {
  const styleName = ` mx-[10px] font-semibold inline-block
    transition-all duration-300 ${textColor}  text-2xl opacity-60
    hover:opacity-100 hover:font-medium hover:text-[1.6rem] `;
  return (
    <Link className={styleName} to={to}>
      {children}
    </Link>
  );
}

export default StyledLink;
