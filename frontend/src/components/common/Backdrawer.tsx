interface BackdrawerProps {
  onClick: () => void;
}

const Backdrawer = ({ onClick }: BackdrawerProps) => {
  return (
    <div
      className="bg-black opacity-5 w-screen h-screen z-40"
      onClick={onClick}
    ></div>
  );
};

export default Backdrawer;
