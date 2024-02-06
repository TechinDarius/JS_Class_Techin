import { useState } from "react";

function Robot({ myRobot }) {
  const { name, email, avatar, reserved } = myRobot;
  const [isReserve, setIsReserve] = useState(reserved);
  const reserveHandler = () => {
    setIsReserve(() => !isReserve);
  };
  return (
    <div className={`robotsCard ${!isReserve && "reserved"}`}>
      <img src={avatar} alt="avatar" />
      <div className="robotName">{name} </div>
      <div className="robotEmail">{email}</div>
      <button className={`${!isReserve && "reserved"}`} onClick={reserveHandler}>{isReserve?'Reserve':"Reserved"}</button>
    </div>
  );
}

export default Robot;
