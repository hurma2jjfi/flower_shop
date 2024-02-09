import React from "react";
import Welcome from "../pages/Welcome";
import { About, Blog, Event, Menu, Services } from "../pages";
// import LoginPage from './components/pages/LoginPage';

export default function Home() {
  return (
    <>
      <Welcome />
      <About />
      <Services />
      <Event />
      <Menu />
      <Blog />
      {/* <LoginPage /> */}
      
    </>
  );
}
