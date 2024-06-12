function NavLinks({ link, icon1: Icon1, icon2: Icon2 }) {
  return (
    <div className="flex gap-3 items-center text-[1.2rem]">
      {Icon1 && <Icon1 />}
      <span>{link}</span>
      {Icon2 && <Icon2 />}
    </div>
  );
}

export default NavLinks;
