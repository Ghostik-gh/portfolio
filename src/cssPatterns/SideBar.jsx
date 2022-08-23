import React, { useState } from 'react';
import SideBarRow from './SideBarRow';
import { SideBarData } from '../static/SideBarData';
import * as AiIcons from 'react-icons/ai';

function SideBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <AiIcons.AiOutlineBars onClick={showSidebar} className="side-bar-icon" />
      <div className={sidebar ? 'side-bar active' : 'side-bar'}>
        <div onClick={showSidebar}>
          {SideBarData.map((val, key) => {
            return <SideBarRow key={key} {...val} />;
          })}
        </div>
      </div>
    </>
  );
}

export { SideBar };
