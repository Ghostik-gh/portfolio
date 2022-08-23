import React from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar } from '../cssPatterns/SideBar';
import '../cssPatterns/sidebar.css';
function CssPage() {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
}

export { CssPage };
