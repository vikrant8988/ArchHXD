function StyledA({ children, href }) {
  const styleName = `text-3xl text-stone-100 mx-[10px] w-4 
  inline-block transition-all duration-300 hover:-translate-y-2.5 hover:text-[2rem]`;

  return (
    <a href={href} target="_blank" className={styleName}>
      {children}
    </a>
  );
}

export default StyledA;
