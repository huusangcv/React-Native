import React, { useState } from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg";

// class DisplayInfo extends React.Component {
//   render() {
//     console.log('>>> render')
//     const { listUser } = this.props;
//     return (
//       <div>
//         {true && (
//           <>
//             {listUser.map((user) => {
//               return (
//                 <div
//                   key={user.id}
//                   className={(+user.age > 18 && "red") || "green"}
//                 >
//                   <h1> My name is {user.name}</h1>
//                   <h3> and my age is {user.age}</h3>
//                   <hr />
//                   <button
//                     onClick={() => {
//                       props.handleDeleteUser(user.id);
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }


const DisplayInfo = (props) => {
  const { listUser } = props
  const [isShowListUser, setIsShowListUser] = useState(true)

  
  // const ShowHideElement = document.querySelector('#ShowHideUser')
  // console.log(ShowHideElement)
  // ShowHideElement.onclick = () => {
  //   console.log('hi')
  // }

  const handleShowHideListUser = () => {
    setIsShowListUser(!isShowListUser)
  }

  return (
      <div className="container">
        {/* <div><span id="ShowHideUser">{isShowListUser && 'Hide List User' || 'Show List User'}</span></div> */}
        <div><span id="ShowHideUser" onClick={() => handleShowHideListUser()}> { isShowListUser && 'Hide List User' || 'Show List User' } </span></div>
        {isShowListUser && (
          <>
            {listUser.map((user) => {
              return (
                <div
                  key={user.id}
                  className={(+user.age > 18 && "red") || "green"}
                >
                  <h1> My name is {user.name}</h1>
                  <h3> and my age is {user.age}</h3>
                  <hr />
                  <button
                    onClick={() => {
                      props.handleDeleteUser(user.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </>
        )}
      </div>
    );
}
export default DisplayInfo;
