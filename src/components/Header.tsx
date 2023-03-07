import React, { useState } from "react";
import Logo from "../images/Union.png";
import { BiMenuAltLeft, BiSearch } from "react-icons/bi";
import ProfileImg from "../images/profileImage.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import ISidebarProp from "../interface/ISidebarProp";

const Header = ({setShowMenu}: ISidebarProp) => {
  const [showProfile, setShowProfile] = useState(false);

  const handleShowProfile = () => {
    setShowProfile((p) => !p);
  };

  return (
    <header>
      <div className="left">
        <div className="logo">
          <BiMenuAltLeft onClick={()=> setShowMenu(true)} className="open" />
          <img src={Logo} alt="logo-img" />
          <h3>lendsqr</h3>
        </div>
      </div>
      <div className="right">
        <div className="search-container">
          <input type="text" placeholder="search for anything" />
          <div className="icon-container">
            <BiSearch className="icon" size={21} />
          </div>
        </div>
        <div className="details">
          <ul
            style={{ display: showProfile ? "block" : "none" }}
            className="profile-pop"
          >
            <AiOutlineClose
              onClick={handleShowProfile}
              color="black"
              size={12}
              className="close"
            />
            <li>Adedeji</li>
            <li>Notification</li>
            <li>Docs</li>
          </ul>
          <p className="doc">Docs</p>
          <IoIosNotificationsOutline className="icon" size={30} />
          <div onClick={handleShowProfile} className="img-wrap">
            <img src={ProfileImg} alt="prof-img" />
          </div>
          <p className="username">Adedeji</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
