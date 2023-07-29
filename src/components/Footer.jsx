import React from "react";
import img2 from "../assets/cool.png"
export default function Footer() {
    return (
      <footer className="w-100 mt-auto bg-secondary p-4 bg-purple-900">
        <div className="container px-5 py-5 mx-auto text-center">
          <div className="message-container">
            <h4 className="message">
              Thank you.{" "}
              <span
                className="emoji"
                role="img"
                aria-label="tongue-face"
                aria-hidden="false"
              ></span>
            </h4>
          </div>
          <div className="image-container">
            <img src={img2} alt="Tongue Face" className="tongue-face-emoji" />
          </div>
        </div>
      </footer>
    );
  }