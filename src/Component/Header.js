import React from "react";
import './Header.css'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';


const Header = () => {
  return (

    <div className="header">
      <p className="header_name">Blue Tac</p>
      <p className="header_title">Dashboard | Cases</p>
      <p className="header_email">
        <span>john@company.com</span>
        <span><NotificationsNoneIcon /></span>
      </p>
    </div>
 
  );
};

export default Header;
