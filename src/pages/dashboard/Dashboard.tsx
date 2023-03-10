import React, { useEffect, useState, ChangeEvent, MouseEvent } from "react";
import { HiOutlineUsers } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { AiOutlineFileSync } from "react-icons/ai";
import { BsDatabase } from "react-icons/bs";
import { CgSortAz } from "react-icons/cg";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import IUser from "../../interface/IUser";
import { setDate, sortPagination } from "../../util/User";
import Loading from "../../components/Loading";
import axios from "axios";
import { Link } from "react-router-dom";
import PaginateButton from "../../components/PaginateButton";

const Dashboard = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const USERPERPAGE = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lowRange, highRange] = sortPagination(currentPage, USERPERPAGE);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
        );
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  const handleButtonNavigation = (dir: string) => {
    if (dir === "left") {
      if (lowRange <= 0) return;
      setCurrentPage((el) => el - 1);
    }
    if (dir === "right") {
      if (highRange >= users.length) return;
      setCurrentPage((el) => el + 1);
    }
  };



  function getPageNumber() {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(users.length / USERPERPAGE); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  const handlePageClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    setCurrentPage(+target.value);
  };

  const handleSelectPage = (e: ChangeEvent<HTMLElement>)=>{
    const target = e.target as HTMLSelectElement
    setCurrentPage(+target.value)
  }


  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="wrapper">
        <h2>Users</h2>
        <div className="users-box">
          <div className="user-box userbox-1">
            <div className="icon-box">
              <HiOutlineUsers />
            </div>
            <p className="title">USERS</p>
            <p className="value">{users?.length}</p>
          </div>
          <div className="user-box userbox-2">
            <div className="icon-box">
              <FaUsers />
            </div>
            <p className="title">ACTIVE USERS</p>
            <p className="value">2,453</p>
          </div>
          <div className="user-box userbox-3">
            <div className="icon-box">
              <AiOutlineFileSync />
            </div>
            <p className="title">USERS WITH LOANS</p>
            <p className="value">12,453</p>
          </div>
          <div className="user-box userbox-4">
            <div className="icon-box">
              <BsDatabase />
            </div>
            <p className="title">USERS WITH SAVINGS</p>
            <p className="value">102,453</p>
          </div>
        </div>
        <div className="dashboard-table">
          <div className="thead">
            <div className="tr">
              <div className="th">
                Organization <CgSortAz size={22} />
              </div>
              <div className="th">
                Username <CgSortAz size={22} />
              </div>
              <div className="th">
                Email <CgSortAz size={22} />
              </div>
              <div className="th">
                Phone Number <CgSortAz size={22} />
              </div>
              <div className="th">
                Date Joined <CgSortAz size={22} />
              </div>
              <div className="th">
                Status <CgSortAz size={22} />
              </div>
            </div>
          </div>
          <div className="tbody">
            {users.slice(lowRange, highRange).map((el) => (
              <Link key={el.id} className="link" to={`/dashboard/user/${el.id}`}>
              <div className="tr" key={el.id}>
                <div title={el.orgName} className="td">{el.orgName.slice(0, 10)}..</div>
                <div title={el.userName} className="td">{el.userName}</div>
                <div title={el.email} className="td">{el.email.slice(0, 4)}..{el.email.slice(el.email.length - 9,el.email.length)}</div>
                <div title={el.phoneNumber} className="td">{el.phoneNumber}</div>
                <div className="td">{setDate(el.createdAt)}</div>
                <div className="td">
                  <span className="active">Active</span>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="pagination">
          <div className="left">
            <span>Showing</span>
            <select
              name="paginate"
              id="paginate"
              value={currentPage}
              onChange={(e) => handleSelectPage(e)}
            >
              {getPageNumber().map((pageNumber) => (
                <option key={pageNumber} value={pageNumber}>
                  {pageNumber}
                </option>
              ))}
            </select>
            <span>Out of 100</span>
          </div>
          <div className="right">
            <button className="ctrl" onClick={() => handleButtonNavigation("left")}>
              <AiOutlineLeft />
            </button>
            {getPageNumber().map((pageNumber) => (
             <PaginateButton key={pageNumber} currentPage={currentPage} handlePageClick={handlePageClick} pageNumber={pageNumber} />
            ))}
            <button className="ctrl" onClick={() => handleButtonNavigation("right")}>
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
