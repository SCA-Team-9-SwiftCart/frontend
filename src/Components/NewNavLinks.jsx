function NewNavLinks({ link, icon1: Icon1, icon2: Icon2 }) {
  return (
    <div className="flex gap-2 items-center">
      {Icon1 && <Icon1 />}
      <span>{link}</span>
      {Icon2 && <Icon2 />}
    </div>
  );
}

export default NewNavLinks;
