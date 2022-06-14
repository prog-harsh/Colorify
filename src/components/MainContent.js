import ColorCard from "./ColorCard";
import "./MainContent.css";

const MainContent = (props) => {
	
  return (
    <div className="main">
      {props.hexCodes.map((hex) => (
        <ColorCard key={hex + Math.round()} hex={hex} />
      ))}
    </div>
  );
};

export default MainContent;
