import React from 'react';
import SideBarRow from './SideBarRow';
import { SideBarData } from '../static/SideBarData';

function SideBar() {
  return (
    <div className="side-bar">
      <ui>
        {SideBarData.map((val, key) => {
          return <SideBarRow key={key} {...val} />;
        })}
      </ui>
    </div>
  );
}

export { SideBar };
