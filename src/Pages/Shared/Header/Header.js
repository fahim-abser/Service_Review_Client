// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../../assets/logo.png';
// import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
// const Header = () => {
//     const { user, logOut } = useContext(AuthContext)
//     const HandleClick = () => {
//       logOut()
//         .then(() => { })
//         .catch(error => console.log(error))
//     }

//     const menuItem = <>
//         <li className='font-semibold'>
//             <Link to='/'>Home</Link>
//             <Link to='/allservices'>Services</Link>
//             <Link to='/blog'>Blog</Link>
//             {/* <Link to='/login'>Login</Link> */}
//         </li>
//     </>
//     return (
//         <div className="navbar bg-base-100 h-20  mb-5">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </label>
//                     <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//                         {menuItem}
//                     </ul>
//                 </div>
//                 <Link to='/' className="btn btn-ghost normal-case text-xl">
//                     <img src={logo} alt="" />
//                     <h3>LUCKY Lens</h3>
//                 </Link>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal p-0">
//                     {menuItem}
//                 </ul>
//             </div>
//             <div className="navbar-end">
//            {
//              user?.uid ? 
//              <div>
//                  <button onClick={HandleClick} className='btn btn-info me-3 text-light'>Logout</button>
//                  {/* <Image title={user?.displayName} roundedCircle src={user?.photoURL} style={{ height: '40px', width: '40px' }}></Image> */}
//                </div> :
 
//                  <div className='btn btn-ghost'>
//                  <Link to='/login'>Login</Link>
//                  </div>
//            }
//             </div>
//         </div>
//     );
// };

// export default Header;


import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    const menuItems = <> <li className='font-semibold'>
            <Link to='/'>Home</Link>
            <Link to='/allservices'>Services</Link>
            <Link to='/blog'>Blog</Link>
         </li>
        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/addservice'>Add Service</Link></li>
                    <li className='font-semibold'><Link to='/myreview'>My Review</Link></li>
                    <li className='font-semibold'>
                        <button onClick={ handleLogOut } className='btn-ghost'>Sign Out</button>
                    </li>
                </>
                :
                <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                    <h3>LUCKY Lens</h3>
                 </Link>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img  alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            {/* <div className="navbar-end">
            </div> */}
        </div>
    );
};

export default Header;