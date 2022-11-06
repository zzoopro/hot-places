interface BackdrawerProps {
  onClick: () => void;
  children?: JSX.Element;
}

const Backdrawer = ({ onClick, children }: BackdrawerProps) => {
  return (
    <div
      id="backdrawer"
      className="fixed flex justify-center items-center bg-black opacity-50 w-screen h-screen z-40"
      onClick={onClick}
    ></div>
  );
};

export default Backdrawer;
