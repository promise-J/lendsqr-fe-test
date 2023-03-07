import {GiHandBag} from 'react-icons/gi'
import {GoHome} from 'react-icons/go'
import {HiOutlineUsers} from 'react-icons/hi'
import {FaUsers} from 'react-icons/fa'
import {FcMoneyTransfer} from 'react-icons/fc'
import {FaRegHandshake} from 'react-icons/fa'
import {MdOutlineEnergySavingsLeaf} from 'react-icons/md'
import {GiReceiveMoney} from 'react-icons/gi'
import {HiUser} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import ISidebarProp from '../interface/ISidebarProp'


const Sidebar = ({showMenu, setShowMenu}: ISidebarProp) => {
  const handleClose = ()=>{
    setShowMenu(false)
  }
  return (
    // <div className="sidebar">
    <div className="sidebar" style={{width: showMenu ? '150vw' : '0'}}>
      <AiOutlineClose className='close' onClick={handleClose} />
      {/* <div className="wrapper"> */}
      <div className="item switch-org">
        <GiHandBag />
        <select onChange={handleClose} className="org" name="organisation" id="organisation">
          <option value="organisation">Switch Organisation</option>
        </select>
      </div>
      <Link onClick={handleClose} className="link" to="/dashboard">
      <div className="item dashboard-org">
        <GoHome />
        Dashboard
      </div>
      </Link>
      <p>CUSTOMERS</p>
      <ul>
        <Link onClick={handleClose} className='link' to='users'>
        <li className="active">
          <HiOutlineUsers className="icon className='icon'" />
          Users
        </li>
        </Link>
        <li>
          <FaUsers className="icon" />
          Guarantors
        </li>
        <li>
          <FcMoneyTransfer className="icon" />
          Loans
        </li>
        <li>
          <FaRegHandshake className="icon" />
          Decision Models
        </li>
        <li>
          <MdOutlineEnergySavingsLeaf className="icon" />
          Savings
        </li>
        <li>
          <GiReceiveMoney className="icon" />
          Loan Requests
        </li>
        <li>
          <HiUser className="icon" />
          Whitelist
        </li>
      </ul>
      {/* </div> */}
    </div>
  );
};

export default Sidebar;
