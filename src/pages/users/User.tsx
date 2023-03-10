import { useEffect, useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import axios from "axios";
import "./user.scss";
import Loading from "../../components/Loading";
import { Link, useParams } from "react-router-dom";
import IUser from "../../interface/IUser";

const User = () => {
  const [user, setUser] = useState<IUser | null>(null);
  // const [loading, setLoading] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    // ` https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
    const getUser = async() => {
      const userId = `user-${id}`;
      // console.log(userId)
      const storedUsersString = localStorage.getItem("users");
      const storedUsersMap = storedUsersString
        ? new Map(JSON.parse(storedUsersString))
        : new Map();

      if (storedUsersMap.has(userId)) {
        const data = storedUsersMap.get(userId)
        setUser(data as IUser)
      } else {
        const { data } = await axios.get(` https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`);
        storedUsersMap.set(userId, data);
        setUser(data)
      }

      localStorage.setItem(
        "users",
        JSON.stringify(Array.from(storedUsersMap.entries()))
      );
      // console.log(storedUsersMap, "the stored Map");
    };
    getUser();
  }, [id]);

  if (!user) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="wrapper">
        <div className="header">
          <div className="left">
            <div className="icon-container">
              <Link className="link" to="/dashboard/users">
                <MdKeyboardBackspace size={36} style={{ cursor: "pointer" }} />
              </Link>
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
              <img src={user?.profile.avatar} alt="" />
            </div>
            <div className="username">
              <h3>{user?.userName}</h3>
              <span>{user?.accountNumber}</span>
            </div>
          </div>
          <div className="user-tier">
            <span>User's Tier</span>
            <div className="icon">
              <IoIosStarOutline className="ico" />
              <IoIosStarOutline className="ico" />
              <IoIosStarOutline className="ico" />
            </div>
          </div>
          <div className="user-amount">
            <div className="user-amount-container">
              <h3>#{user?.accountBalance}</h3>
              <span>{user?.orgName}</span>
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
                <h3>
                  {user?.profile.firstName} {user?.profile.lastName}
                </h3>
              </div>
              <div className="box">
                <span>PHONE NUMBER</span>
                <h3>{user?.profile.phoneNumber}</h3>
              </div>
              <div className="box">
                <span>EMAIL ADDRESS</span>
                <h3>{user?.email}</h3>
              </div>
              <div className="box">
                <span>BVN</span>
                <h3>{user?.profile.bvn}</h3>
              </div>
              <div className="box">
                <span>GENDER</span>
                <h3>{user?.profile.gender}</h3>
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
                <h3>{user?.profile.address}</h3>
              </div>
            </div>
            <h3>Education and Employment</h3>
            <div className="container">
              <div className="box">
                <span>LEVEL OF EDUCATION</span>
                <h3>{user?.education.level}</h3>
              </div>
              <div className="box">
                <span>Employment Status</span>
                <h3>{user?.education.employmentStatus}</h3>
              </div>
              <div className="box">
                <span>SECTOR OF EMPLOYMENT</span>
                <h3>{user?.education.sector}</h3>
              </div>
              <div className="box">
                <span>DURATION OF EMPLOYMENT</span>
                <h3>{user?.education.duration}</h3>
              </div>
              <div className="box">
                <span>OFFICE EMAIL</span>
                <h3>grace@lendsqr.com</h3>
              </div>
              <div className="box">
                <span>MONTHLY INCONE</span>
                <h3>
                  #{user?.education.monthlyIncome[0]} - #
                  {user?.education.monthlyIncome[1]}
                </h3>
              </div>
              <div className="box">
                <span>LOAN REPAYMENT</span>
                <h3>{user?.education.loanRepayment}</h3>
              </div>
            </div>
            <h3>Social</h3>
            <div className="container">
              <div className="box">
                <span>TWITTER</span>
                <h3>{user?.socials.twitter}</h3>
              </div>
              <div className="box">
                <span>FACEBOOK</span>
                <h3>{user?.socials.facebook}</h3>
              </div>
              <div className="box">
                <span>INSTAGRAM</span>
                <h3>{user?.socials.instagram}</h3>
              </div>
            </div>
            <h3>Guarantor</h3>
            <div className="container">
              <div className="box">
                <span>FULL NAME</span>
                <h3>
                  {user?.guarantor.firstName} {user?.guarantor.lastName}
                </h3>
              </div>
              <div className="box">
                <span>PHONE NUMBER</span>
                <h3>{user?.guarantor.phoneNumber}</h3>
              </div>
              <div className="box">
                <span>ADDRESS</span>
                <h3>{user?.guarantor.address}</h3>
              </div>
              <div className="box">
                <span>RELATIONSHIP</span>
                <h3>Sister</h3>
              </div>
              <div className="box">
                <span>FULL NAME</span>
                <h3>
                  {user?.guarantor.firstName} {user?.guarantor.lastName}
                </h3>
              </div>
              <div className="box">
                <span>PHONE NUMBER</span>
                <h3>{user?.guarantor.phoneNumber}</h3>
              </div>
              <div className="box">
                <span>ADDRESS</span>
                <h3>{user?.guarantor.address}</h3>
              </div>
              <div className="box">
                <span>RELATIONSHIP</span>
                <h3>Sister</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
