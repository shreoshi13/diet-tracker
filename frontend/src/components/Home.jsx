import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



const Home = () => {
  const App = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1
            <img src="data:image/jpeg;base64,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" alt="" />
          </SwiperSlide>
          <SwiperSlide>Slide 2
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYknGc6WnbFb-SZN8ldUx1lWErN55AmehBuw&usqp=CAU" alt="" />
          </SwiperSlide>
          <SwiperSlide>Slide 3
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWgjCOOazYvYIXWAddif7dGUbDROfE5d5s2A&usqp=CAU" alt="" />
          </SwiperSlide>
          <SwiperSlide>Slide 4
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6sd_l4yv79OHajWOwZcFbdV3jFdwqgltZSA&usqp=CAU" alt="" />
          </SwiperSlide>
          <SwiperSlide>Slide 5
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJAFHd_Mz_9J8d1JyfW742srit-ZTvUaI9Ns-lKqaTsqNMC1IX35ktyRzsrIg_NFUnpc&usqp=CAU" alt="" />
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </>
    );
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-auto">
            <h1 className="display-4 fw-bold">
              Good health starts with what you eat.
            </h1>
            <button className="btn btn-primary btn-lg">Get Started</button>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-slice%402x.e3eec8a8.png&w=1920&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fsecondary-hero-slice%402x.png&w=512&q=75"
              alt=""
            />
          </div>
          <div className="col-md-6 my-auto">
            <h1 className="display-4 fw-bold">
              Happy Life Starts with Health .
            </h1>
            <button className="btn btn-primary btn-lg">
              Start Following Now
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-center text-bold ">The Tools for Your Goals</h1>
      <p className="text-center">Trying to lose weight, tone up, lower your BMI, or invest in your overall health? We give you the right features to get there.
      </p>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card text-center border-0">
              <div className="m-3">
                <img
                  className="p-4 rounded-circle shadow"
                  style={{ objectFit: "contain" }}
                  src="https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg"
                  alt=""
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Learn. Track. Improve.</h5>
                <p className="card-text">
                  Keeping a food diary helps you understand your habits and
                  increases your likelihood of hitting your goals.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card text-center border-0">
              <div className="m-3">
                <img
                  className="p-4 rounded-circle shadow border-0"
                  style={{ objectFit: "contain" }}
                  src="https://www.myfitnesspal.com/_next/static/media/barcode.18277ae4.svg"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Logging Simplified</h5>
                <p className="card-text">
                  Scan barcodes, save meals and recipes, and use Quick Tools for
                  fast and easy food tracking.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card text-center border-0">
              <div className="m-3">
                <img
                  className="p-4 rounded-circle shadow border-0"
                  style={{ objectFit: "contain" }}
                  src="https://www.myfitnesspal.com/_next/static/media/shoeblue.28e2684f.svg"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Stay Motivated</h5>
                <p className="card-text">
                  Join the World’s Largest Fitness Community for advice, tips,
                  and support 24/7.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div >
              <div className="card text-center">

                <h2>
                  Personal Experiences
                </h2>
                <p className="text-center">
                Every day, more than 3,000 members reach their goals with FitnessBuddy. Get inspired for the journey ahead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="bg-black">
        <footer class="py-5">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address"></input>
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2023 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </div>
  </footer>
        </div>
      </div>

    </div >
  );
}
export default Home;
