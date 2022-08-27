import React, { useState } from 'react';
import './Modal.scss';
import { GiRobotGrab } from 'react-icons/gi';

function RobotSimulator() {
  const [active, setActive] = useState(false);

  const togglePopap = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="robot-card">
        <div className="robot-content">
          <GiRobotGrab className="robot-icon" />
          <div className="robot-description">Robots Simulator on Rust.</div>
          <button onClick={togglePopap} className="watch">
            Watch more
          </button>
        </div>
      </div>
      {active ? (
        <div className="popap" onClick={togglePopap}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src="https://github.com/Ghostik-gh/robots-sim/raw/master/assets/2022_07_31.webp"
              alt="wait video"
            />
            <a className="link" href="https://github.com/Ghostik-gh">
              https://github.com/Ghostik-gh
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default RobotSimulator;
