import React from "react";
import "./Landing1.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Landing1 = () => {
  return (
    <main>
      <div className="left">
        <nav>
          <FaArrowLeft />
          <div className="ncenter">
          <li>About</li>
          <li>Home</li>
          </div>
          <FaTwitter className="ticon" />
        </nav>
        <div className="lcenter">
          <h1>Hello,</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            provident eligendi, ipsum officia illo dolorum?
          </p>
          <h3>Read</h3>
        </div>
      </div>
      <div className="right">
        <div className="rtop">
          <img
            src="https://images.unsplash.com/photo-1531618760866-6809c75dcc45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsdWUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
            alt=""
          />
        </div>
        <div className="rb1">
          <img
            src="https://plus.unsplash.com/premium_photo-1675667390417-d9d23160f4a6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="rb2">
          <img
            src="https://plus.unsplash.com/premium_photo-1675667881424-9bd504919c09?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default Landing1;
