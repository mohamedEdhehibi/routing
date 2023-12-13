

//WorkShop Routing
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, Outlet } from 'react-router-dom';
import './App.css';
import Home from './WorkShop/Home';
import Category from './WorkShop/Category';
import Product from './WorkShop/Product';
import AdminArea from './WorkShop/AdminArea';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your authentication logic here
    setIsLoggedIn(true);
  };

  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/category">Category</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                {isLoggedIn ? (
                  <Link to="/admin">Admin Area</Link>
                ) : (
                  <button onClick={handleLogin}>Login</button>
                )}
              </li>
            </ul>
          </nav>

          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />}>
              <Route path=":categoryId" element={<CategoryDetails />} />
            </Route>
            <Route path="/products" element={<Product />} />
            <Route
              path="/admin"
              element={isLoggedIn ? <AdminArea /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </Router>
      <div><Outlet /></div>
    </>
  );
};

// Nested Routes Components
const CategoryDetails = ({ categoryId }) => {
  return <div>Category Details Component for ID: {categoryId}</div>;
};

export default App;


//Demo 1
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import './App.css'
// import Home from './Demo1/Home';
// import Category from './Demo1/Categorie';
// import Products from './Demo1/Product';
// import Contact from './Demo1/Contact';
// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav className="navbar navbar-light nav2">
//           <ul className="nav2 navbar-nav">
//             {/* Link components are used for linking to other views */}
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/category">Category</Link>
//             </li>
//             <li>
//               <Link to="/products">Products</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>
//         {/* Route components are rendered if the path prop matches the current URL */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/category" element={<Category />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
// ************************************************************************************
// App.jsx Dome 2
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Home from './Demo 2 useNavigate/Home';
// import Profile from './Demo 2 useNavigate/Profile';
// // 

// function App() {
//     return (
//         <div className="App">
//             <Router>
//                 <Routes>
//                     <Route path='/' element={<Home />} />
//                     <Route index path='/profile' element={<Profile />} />
//                 </Routes>
//             </Router>
//         </div>
//     );
// }

// export default App;
// **********************************************************************************
// // About Demo3
// import React from 'react'

// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import About from './Demo 3 useLocation/About';
// const App = () => {
//   return (
//       <Router>
//           <div>
//               <Routes>
//                   <Route path='/contact' element={<About />}></Route>
//               </Routes>
//           </div>
//       </Router>
//   )
// }
// export default App
//***************************************************************************** */
// Demo 4 Use Params
// import React from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './demo 4 useParams/Home';
// import Profile from './demo 4 useParams/Profile';

// const App = () => {
//   return (
//       <Router>

//               <div className="App">
//                   <Routes>
//                       <Route path='/' element={<Home />}></Route>
//                       <Route index path='/profile/:userid' element={<Profile />}></Route>
//                   </Routes>

//           </div>
//       </Router>
//   )
// }

// export default App
//******************************************************************* */
//****************************************************************************** 
// Demo 5 nested rout
// import React from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './Demo 5 nested raout/Home';
// import User from './Demo 5 nested raout/User';
// import Profile from './Demo 5 nested raout/Profile';
// import Account from './Demo 5 nested raout/Account';

// const App = () => {
//   return (
//     <div className="App">
//       <>
//         <Router>
//           <h1>React Router</h1>

//           <nav>
//             <Link to="/home">Home</Link>
//             <Link to="/user">User</Link>
//           </nav>

//  <Routes>
//             <Route index element={<Home />} />
//             <Route path="home" element={<Home />} />

//             <Route path="/user/*" element={<User />}>

//             </Route>
//           </Routes> 
//  outlet*********  
// * <Routes>
//             <Route index element={<Home />} />
//             <Route path="home" element={<Home />} />
            
//             <Route path="user" element={<User />}>
//               <Route path="profile" element={<Profile />} />
//               <Route path="account" element={<Account />} />
//             </Route>
//           </Routes>
//         </Router>
//       </>
//     </div>
//   );
// }

// export default App  

