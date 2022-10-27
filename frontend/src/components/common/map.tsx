interface MapProps {
  height: number;
}

const Map = ({ height }: MapProps) => {
  return (
    <div
      id="map"
      className="bg-gray-500"
      style={{ width: "100%", height: height + "px" }}
    ></div>
  );
};

export default Map;
