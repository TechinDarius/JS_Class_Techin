import robots from "./robots.js";
import Robot from "./Robot.jsx";

function Robots({ searchValue }) {
  const jsx = robots
    .filter((r) => r.name.startsWith(searchValue))
    .map((r) => <Robot myRobot={r} key={r.id} />);

  return <>{jsx}</>;
}

export default Robots;
