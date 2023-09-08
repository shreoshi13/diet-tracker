import React from "react";
import Navbar from "./Navbar";


const Home = () => {

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-auto">
            <h1 className="display-4 fw-bold">Good health starts with what you eat.</h1>
            <button className="btn btn-primary btn-lg">Get Started</button>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-slice%402x.e3eec8a8.png&w=1920&q=75" alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">

          <div className="col-md-6">
            <img className="img-fluid" src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fsecondary-hero-slice%402x.png&w=512&q=75" alt="" />
          </div>
          <div className="col-md-6 my-auto">
            <h1 className="display-4 fw-bold">Happy Life Starts with Health .</h1>
            <button className="btn btn-primary btn-lg">Start Following Now</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-auto">
            <h1 className="display-4 fw-bold">Good health starts with what you eat.</h1>
            <button className="btn btn-primary btn-lg">Get Started</button>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src="" alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card text-center border-0">
            <div className="m-3">
              <img className="p-4 rounded-circle shadow" style={{ objectFit: 'contain' }} src="https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg" alt="" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Learn. Track. Improve.</h5>
              <p className="card-text">
                Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals.
              </p>

            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card text-center border-0">
            <div className="m-3">

              <img className="p-4 rounded-circle shadow border-0" style={{ objectFit: 'contain' }} src="https://www.myfitnesspal.com/_next/static/media/barcode.18277ae4.svg" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Logging Simplified</h5>
              <p className="card-text">
                Scan barcodes, save meals and recipes, and use Quick Tools for fast and easy food tracking.
              </p>

            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card text-center border-0">
            <div className="m-3">
              <img className="p-4 rounded-circle shadow border-0" style={{ objectFit: 'contain' }} src="https://www.myfitnesspal.com/_next/static/media/shoeblue.28e2684f.svg" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Stay Motivated</h5>
              <p className="card-text">
                Join the World’s Largest Fitness Community for advice, tips, and support 24/7.
              </p>

            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Home;

