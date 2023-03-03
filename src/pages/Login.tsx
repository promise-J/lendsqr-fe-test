import React from "react";
import LoginImg from "../images/pablo-sign-in.png";
import Logo from "../images/Union.png";

const Login = () => {
  return (
    <div className="login">
      <div className="left">
        <div className="logo">
          <img src={Logo} alt="logo-img" />
          <h3>lendsqr</h3>
        </div>
        <div className="image-container">
          <img className="login-img" src={LoginImg} alt="login-img" />
        </div>
      </div>
      <div className="right">
      <div className="right-login-content">
            <h2>Welcome!</h2>
            <p className="details-desc">Enter details to login</p>
            <div className="input-container">
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-container">
                <p>Show</p>
              <input type="text" placeholder="Password" />
            </div>
            <p className="forget">FORGOT PASSWORD?</p>
            <button>LOG IN</button>
          </div>
      </div>
    </div>
  );
};

// const Login = () => {
//   return (
//     <div className="login">
//       <div className="login-wrapper">
//         <div className="left-login">
//           <div className="logo">
//             <img src={Logo} alt="logo-img" />
//             <h3>lendsqr</h3>
//           </div>
//           <img src={LoginImg} alt="login-img" />
//         </div>
        // <div className="right-login">
        //   <div className="right-login-content">
        //     <h2>Welcome!</h2>
        //     <p className="details-desc">Enter details to login</p>
        //     <div className="input-container">
        //       <input type="text" placeholder="Email" />
        //     </div>
        //     <div className="input-container">
        //         <p>Show</p>
        //       <input type="text" placeholder="Password" />
        //     </div>
        //     <p className="forget">FORGOT PASSWORD?</p>
        //     <button>LOG IN</button>
        //   </div>
        // </div>
//       </div>
//     </div>
//   );
// };

export default Login;
