import React from "react";
import { HiOutlineUsers } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { AiOutlineFileSync } from "react-icons/ai";
import { BsDatabase } from "react-icons/bs";
import { CgSortAz } from "react-icons/cg";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

const Users = () => {
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
            <p className="value">2,453</p>
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
          <div className="table-form">
            <div className="form-input">
              <label>Organisation</label>
              <select name="org" id="org">
                <option value="">Select</option>
              </select>
            </div>
            <div className="form-input">
              <label>Username</label>
              <input type="text" placeholder="User" />
            </div>
            <div className="form-input">
              <label>Email</label>
              <input type="text" placeholder="Email" />
            </div>
            <div className="form-input">
              <label>Date</label>
              <input type="text" placeholder="Date" />
            </div>
            <div className="form-input">
              <label>Phone Number</label>
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="form-input">
              <label>Status</label>
              <input type="text" placeholder="Status" />
            </div>
            <div className="form-input btn">
              <button>Reset</button>
              <button>Filter</button>
            </div>
          </div>
          <thead>
            <tr>
              <th>
                Organization <CgSortAz size={22} />
              </th>
              <th>
                Username <CgSortAz size={22} />
              </th>
              <th>
                Email <CgSortAz size={22} />
              </th>
              <th>
                Phone Number <CgSortAz size={22} />
              </th>
              <th>
                Date Joined <CgSortAz size={22} />
              </th>
              <th>
                Status <CgSortAz size={22} />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>None</td>
              <td>None</td>
              <td>Adedeji@gmail.com</td>
              <td>08135353535</td>
              <td>May 12, 2022 10:00 AM</td>
              <td>Inactive</td>
            </tr>
            <tr>
              <td>None</td>
              <td>None</td>
              <td>Adedeji@gmail.com</td>
              <td>08135353535</td>
              <td>May 12, 2022 10:00 AM</td>
              <td>Inactive</td>
            </tr>
            <tr>
              <td>None</td>
              <td>None</td>
              <td>Adedeji@gmail.com</td>
              <td>08135353535</td>
              <td>May 12, 2022 10:00 AM</td>
              <td>Inactive</td>
            </tr>
            <tr>
              <td>None</td>
              <td>None</td>
              <td>Adedeji@gmail.com</td>
              <td>08135353535</td>
              <td>May 12, 2022 10:00 AM</td>
              <td>Inactive</td>
            </tr>
            <tr>
              <td>None</td>
              <td>None</td>
              <td>Adedeji@gmail.com</td>
              <td>08135353535</td>
              <td>May 12, 2022 10:00 AM</td>
              <td>Inactive</td>
            </tr>
            <tr>
              <td>None</td>
              <td>None</td>
              <td>Adedeji@gmail.com</td>
              <td>08135353535</td>
              <td>May 12, 2022 10:00 AM</td>
              <td>Inactive</td>
            </tr>
            <tr>
              <td>None</td>
              <td>None</td>
              <td>Adedeji@gmail.com</td>
              <td>08135353535</td>
              <td>May 12, 2022 10:00 AM</td>
              <td>Inactive</td>
            </tr>
            <tr>
              <td>None</td>
              <td>None</td>
              <td>Adedeji@gmail.com</td>
              <td>08135353535</td>
              <td>May 12, 2022 10:00 AM</td>
              <td>Inactive</td>
            </tr>
            <tr>
              <td>None</td>
              <td>None</td>
              <td>Adedeji@gmail.com</td>
              <td>08135353535</td>
              <td>May 12, 2022 10:00 AM</td>
              <td>Inactive</td>
            </tr>
          </tbody>
        </div>
        <div className="pagination">
          <div className="left">
            <span>Showing</span>
            <select name="paginate" id="paginate">
              <option value="100">100</option>
            </select>
            <span>Out of 100</span>
          </div>
          <div className="right">
            <button>
              <AiOutlineLeft />
            </button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>...</button>
            <button>15</button>
            <button>16</button>
            <button>
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
