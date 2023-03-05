import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import ProfileImg from "../../images/UserImage.png";
import { IoIosStarOutline } from "react-icons/io";
import "./user.scss";

const User = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="header">
          <div className="left">
            <div className="icon-container">
              <MdKeyboardBackspace size={36} style={{ cursor: "pointer" }} />
              <span>Back To Users</span>
            </div>
            <h3>User Details</h3>
          </div>
          <div className="right">
            <button>Blacklist User</button>
            <button>Activate User</button>
          </div>
        </div>
        <div className="first-section">
          <div className="username-container">
            <div className="img-container">
              <img src={ProfileImg} alt="" />
            </div>
            <div className="username">
              <h3>Grace Effiom</h3>
              <span>LSQFf587g90</span>
            </div>
          </div>
          <div className="user-tier">
            <span>User's Tier</span>
            <div className="icon">
              <IoIosStarOutline />
              <IoIosStarOutline />
              <IoIosStarOutline />
            </div>
          </div>
          <div className="user-amount">
            <div className="user-amount-container">
              <h3>#200,000.00</h3>
              <span>9912345678/Providus Bank</span>
            </div>
          </div>
        </div>
        <div className="tabs">
          <span className="active">General Details</span>
          <span>Document</span>
          <span>Bank Details</span>
          <span>Loan</span>
          <span>Savings</span>
          <span>App and System</span>
        </div>
        <div className="details">
            <div className="detail">
                <h3>Personal</h3>
                <div className="container">
                    <div className="box">
                        <span>FULL NAME</span>
                        <h3>Grace Effiom</h3>
                    </div>
                    <div className="box">
                        <span>PHONE NUMBER</span>
                        <h3>07093848395</h3>
                    </div>
                    <div className="box">
                        <span>EMAIL ADDRESS</span>
                        <h3>Grace Effiom</h3>
                    </div>
                    <div className="box">
                        <span>BVN</span>
                        <h3>Grace Effiom</h3>
                    </div>
                    <div className="box">
                        <span>FULL NAME</span>
                        <h3>Grace Effiom</h3>
                    </div>
                    <div className="box">
                        <span>GENDER</span>
                        <h3>Female</h3>
                    </div>
                    <div className="box">
                        <span>MARITAL STATUS</span>
                        <h3>Single</h3>
                    </div>
                    <div className="box">
                        <span>CHILDREN</span>
                        <h3>None</h3>
                    </div>
                    <div className="box">
                        <span>TYPE OF RESIDENCE</span>
                        <h3>Parent's Apartment</h3>
                    </div>
                </div>
                <h3>Education and Employment</h3>
                <div className="container">
                    <div className="box">
                        <span>LEVEL OF EDUCATION</span>
                        <h3>B.Sc</h3>
                    </div>
                    <div className="box">
                        <span>Employment Status</span>
                        <h3>Employed</h3>
                    </div>
                    <div className="box">
                        <span>SECTOR OF EMPLOYMENT</span>
                        <h3>Fintech</h3>
                    </div>
                    <div className="box">
                        <span>DURATION OF EMPLOYMENT</span>
                        <h3>2 years</h3>
                    </div>
                    <div className="box">
                        <span>OFFICE EMAIL</span>
                        <h3>grace@lendsqr.com</h3>
                    </div>
                    <div className="box">
                        <span>FULL NAME</span>
                        <h3>Grace Effiom</h3>
                    </div>
                    <div className="box">
                        <span>MONTHLY INCONE</span>
                        <h3>#200,000.00 - #400,000.00</h3>
                    </div>
                    <div className="box">
                        <span>LOAN REPAYMENT</span>
                        <h3>40,000</h3>
                    </div>
                </div>
                <h3>Social</h3>
                <div className="container">
                    <div className="box">
                        <span>TWITTER</span>
                        <h3>@grace_effiom</h3>
                    </div>
                    <div className="box">
                        <span>FACEBOOK</span>
                        <h3>Grace Effiom</h3>
                    </div>
                    <div className="box">
                        <span>INSTAGRAM</span>
                        <h3>@grace_effiom</h3>
                    </div>
                </div>
                <h3>Guarantor</h3>
                <div className="container">
                    <div className="box">
                        <span>FULL NAME</span>
                        <h3>Grace Effiom</h3>
                    </div>
                    <div className="box">
                        <span>FULL NAME</span>
                        <h3>Grace Effiom</h3>
                    </div>
                    <div className="box">
                        <span>FULL NAME</span>
                        <h3>Grace Effiom</h3>
                    </div>
                    <div className="box">
                        <span>FULL NAME</span>
                        <h3>Grace Effiom</h3>
                    </div>
                    <div className="box">
                        <span>FULL NAME</span>
                        <h3>Grace Effiom</h3>
                    </div>
                    <div className="box">
                        <span>FULL NAME</span>
                        <h3>Grace Effiom</h3>
                    </div>
                    <div className="box">
                        <span>FULL NAME</span>
                        <h3>Grace Effiom</h3>
                    </div>
                    <div className="box">
                        <span>FULL NAME</span>
                        <h3>Grace Effiom</h3>
                    </div>
                </div>
                <div className="container">
                    <div className="box">
                        <span>FULL NAME</span>
                        <h3>Grace Effiom</h3>
                    </div>
                    <div className="box">
                        <span>FULL NAME</span>
                        <h3>Grace Effiom</h3>
                    </div>
                    <div className="box">
                        <span>FULL NAME</span>
                        <h3>Grace Effiom</h3>
                    </div>
                    <div className="box">
                        <span>FULL NAME</span>
                        <h3>Grace Effiom</h3>
                    </div>
                    <div className="box">
                        <span>FULL NAME</span>
                        <h3>Grace Effiom</h3>
                    </div>
                    <div className="box">
                        <span>FULL NAME</span>
                        <h3>Grace Effiom</h3>
                    </div>
                    <div className="box">
                        <span>FULL NAME</span>
                        <h3>Grace Effiom</h3>
                    </div>
                    <div className="box">
                        <span>FULL NAME</span>
                        <h3>Grace Effiom</h3>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default User;
