import React, { useState } from "react";
import "./dashboard.scss";
import Logo from "../../images/Union.png";
import {BiSearch} from 'react-icons/bi'
import ProfileImg from '../../images/profileImage.png'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {GiHandBag} from 'react-icons/gi'
import {GoHome} from 'react-icons/go'
import {HiOutlineUsers} from 'react-icons/hi'
import {FaUsers} from 'react-icons/fa'
import {FcMoneyTransfer} from 'react-icons/fc'
import {FaRegHandshake} from 'react-icons/fa'
import {MdOutlineEnergySavingsLeaf} from 'react-icons/md'
import {GiReceiveMoney} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiUser} from 'react-icons/hi'
import {Outlet} from 'react-router-dom'
import './dashboardLayout.scss'

const DashboardLayout = () => {
  const [showProfile, setShowProfile] = useState(false)

  const handleShowProfile = ()=>{
    setShowProfile(p=> !p)
  }
  return (
    <div className="dashboard">
      <header>
        <div className="left">
          <div className="logo">
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
            <ul style={{display: showProfile ? 'block' : 'none'}} className="profile-pop">
              <AiOutlineClose onClick={handleShowProfile} color="black" size={12} className="close" />
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
      <main>
        <div className="sidebar">
          {/* <div className="wrapper"> */}
            <div className="item switch-org">
              <GiHandBag />
              <select className="org" name="organisation" id="organisation">
                <option value="organisation">Switch Organisation</option>
              </select>
            </div>
            <div className="item dashboard-org">
              <GoHome />
              Dashboard
            </div>
            <p>CUSTOMERS</p>
            <ul>
              <li className="active">
                <HiOutlineUsers className="icon className='icon'" />
                Users
              </li>
              <li>
                <FaUsers className='icon' />
                Guarantors
              </li>
              <li>
                <FcMoneyTransfer className='icon' />
                Loans
              </li>
              <li>
                <FaRegHandshake className='icon' />
                Decision Models
              </li>
              <li>
                <MdOutlineEnergySavingsLeaf className='icon' />
                Savings
              </li>
              <li>
                <GiReceiveMoney className='icon' />
                Loan Requests
              </li>
              <li>
                <HiUser className='icon' />
                Whitelist
              </li>
            </ul>
          {/* </div> */}
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
