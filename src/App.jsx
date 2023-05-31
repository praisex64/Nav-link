import React from "react"; 
import { BrowserRouter, Routes, Route, NavLink, Outlet 
 } from "react-router-dom";

 function Layout() {
  const activeStyle = {

     fontWeight: "bold", 
     textDecoration: "underline", 
     color: "red"

  }

  return (
    <div>
      <h3>Welcome to my page!</h3>
      <nav>
        <NavLink 
         style={({isActive}) => isActive ? 'my-link' : null}
        to="/">Home</NavLink>
        <NavLink 
         style={({isActive}) => isActive ? 'my-link' : null }
        to="about">About</NavLink>
        <NavLink 
         style={({isActive}) => isActive ? 'my-link' : null }
        to="contact">Contact</NavLink>
      </nav>
      <Outlet />
    </div>
  )
 }

 function HomePage() {
  return (
    <main>
      <h2>Home</h2>
    </main>
  ); 
 }


 function AboutPage() {
  return (
    <main>
       <h2>About Me</h2>
    </main>
  )
 }

 function ContactPage() {
  return (
    <main>
      <h2>Contact</h2>
    </main>
  )
 }


 function App() {
   return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element = {<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
   )

 }

 export default App; 

