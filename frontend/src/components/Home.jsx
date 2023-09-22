import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "./Footer";

const Home = () => {
  // const progressCircle = useRef(null);
  // const progressContent = useRef(null);
  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   progressCircle.current.style.setProperty('--progress', 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };

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
      <p className="text-center">
        Trying to lose weight, tone up, lower your BMI, or invest in your
        overall health? We give you the right features to get there.
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
            <div>
              <div className="card text-center">
                <h2>Personal Experiences</h2>
                <p className="text-center">
                  Every day, more than 3,000 members reach their goals with
                  FitnessBuddy. Get inspired for the journey ahead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
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
          modules={[Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card py-5" onAutoplayTimeLeft={setInterval={}}>
              <img
                className="slide-img"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUZGBgYGBgYGhgYGBgYGBgYGBgaGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjQrISE0NDQ0NDQ0NDQ0MTQ0MTQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAMEBQYBBwj/xAA/EAACAQIEAwUHAQcEAAcBAAABAgADEQQFITESQVEGImFxgRMykaGxwfDRFEJSYnLh8QcjgpIzNFNUc7LCFv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACIRAQEBAQACAwEAAwEBAAAAAAABAhEhMQMSQVETMmEicf/aAAwDAQACEQMRAD8AwgENVnFWPKsRkqzoEJVjgWBG7QX03j9o1WTSAUGPck22H25k/KQKzjZduvMx7Mj3/MC3lcyFBQlWGtOcUx5KoXXc/TzhREihl/F7x4R1JkoYSgvvF28rKPib39LSCuIHPiPkSIqmIXZUCnxJYyfKuxMatQGi0/QM5+ph/typoqcLdLAn9R8ZVrUP8VupGhPlaSKBVeV26dPOHDlWKEsCz3tyUsbeZA3PhrK3E1y2iiyj0+AGg9BJKo1Q94+g/NJY0cpThuaqKehI+ineLsiuWs4UPjGmk/GoASOMN5aCQGlRnZwMMN+GBOiMklKQI2t47j6xt6JGxBA5jl59Iqb2lnhnR7Blsdg4NrecXeHJKrBT2PIwAtyZd43A8AKm1t1sRr+sr6eHvqPw7wlO5QwsS7ybTwxJtbcH6XkamlzaHU8aLK81QBVLFSNDxXII568ppKZDAEagi4PUTCYGijHhYkNcWI8TN5gadkCnUjS/WIqLgij3DFKSzirDURKsdUQNxVjirEqx0LAA4ZVZxiuBbDc7D85S64ZlM8Hf11gcVlaoWN2NzGYZMCBivaDOmEiFjYAk9BAOcZnVEfbDFbBveP7vP16QKigQ6OBJMOkOl/QaxoXkrD4Z22/vFRFpl+HQashJ/mI+hlzVxARbtRuvUH7TPvh6tMAkkX8Iw1Zm0vfykc61l47jqisbopUdL3+0glJNo4Zmjr4Mg7G1ukrsibm1UmdtJD0TfUQhQO9tPpDqfrUdV1lxg8G3DxqAbaMh56creH4bWg0srLDujf5HofAywyslVKPodhpc7jn1G48vGK676aZzz2cfDcS90eQO48D4Suw6haluTcjpqOfhtb1lsa1iAd9vO2xHXfn1ErczSxDed/MHW3pb4SYev6I9xlPMN9Lj7D4yFUw1qrKOvEB4HW3zixeJ4mJ/mHzH58I5Tc+1QnnYX8CND8bSk+0RqfeuOp/xNt2fxLVKYLakaX5nz8Zj8Q3DV6An76fpNV2YSyH+o/A7GOI16XnDFHeGdlM2WVY4qziiOqIGSiOIsSLHVEA4RMv2iIB8TbTwE1nDMpnuHJe5/LQOKAwI4+8GBnaIF9rnpew9fCSmx7KCqkDwQcKj4byF7UgWGn1MFRAd/h9Htc7sfUwbX8fKPJRA3nVUubLoIuq4Ohg76seEeIt82tNBgKKLsOIdbgfFrWtIuAydjbl9TNXleSgakTHe5HRj4qhYjCI66LryF3b1vosDAdlLnifTpYTY4bAqOUnpQmH+S/jb6Z/VLhuz1NRoPXnJA7No51XTwl9QoS4w2HEJ2lqyPOc27Fqq8SjTn5SowWVLTfhcXU6BvPa/gf7dJ7PUoBhYiYzN8jI4gviQDsQdwfCVrsLNmv8A6zX7LTpElRodx00/x+WlBm6APxLqrcv4T08uh5beU7H1HQEPfg24ua9A/wBm+PU0Jqni4Cbi+h+0eO+xuTjtPEh+42jj3T1I1HxjeMPHcdTxD1AuP+1xGcbS4T0Ohv57GNLXJ33HzH+ZtHPf4gC/Fb80N5McWCdR9BtGlpXqDxJ/PnH8c4AX+m358ZaIj43vHfXcev8AiarsvX4u7/L8wb/QmZOkbkE9LTYdkqOjN/Nb5H+0E69NJrFHeGKNmyyiOosFRHlWM3VEcVYlWOKsA5aUedKAD8z9poAsqM+p9wm2wJ+UBGFgEwoLRRTkmYSnz+EirLDD6A+A18P76gesKeYNkvLbKcKCdpU02+t/z5fCaDJjqJlu+HR8clrV5fhRLyhRAlfl+0uKM5a6q6qSSixoRxDBNTKCy0onSVlAyfSM0yy0lgxqvRVhqI4kTS6hms0yCm4YEXvfpcX39J5fnnZlqDErqnTpPbKkos1wSsDcaEETPtzfDbNmvFeOUqnH3H3tYH9frItfCW1HI6jwIuPkRLfN8B7J2G2unkf7ymfF3Ou/+f1m+b2eGW8/W+TSkBlPS+v0jFdrlQdhHK666cx87n7RioefQ/eXGNH7LhJB5Gei9n8NwUU6kAnzOs86Xvsik24m1PnvPVMFTARQNgANJURo7aKHaKNmzCLHlEFRHFEDEojyrBQRxRAiAkXMcPxoy9QRJyiHwwDyIiCZa9ocJ7PEOtrAnjXybX63HpKwiC3aY1k1msn9Ta+QFx8yZCU2kmq+lvI/IxU8ioGX+UvqJQUJocoTWZb9N/j9t1lWoEvaKSmypbATQ4ZZy8dNrhpxIsmlNIyFj4n7H8Osm00kSk4G8k/ttNR3nA9ZpmM9VMScaY/N+3uHokqrcTeFj8plcb/qO7aLwj1BNvIH7y+VHXpWIxqLoWF9Ba4vqem8hVMdTfu8YBOwOmvTXnPK8V2g/aBwshLG+i94W5nhOoEYT9oYd3j4dgCzWPLuni238N5Nz/VzU/Ft2+pFTe3XWee8Wv5zmwr1K7IyVixXhIUsFPCeWq26b6+My1LDFnAA/d+mkv4/E4Pl7rnFjicC4opVt3ef2lPWBAFus9ArIpy6x/dAv6H9AJisvw/G6pzJAHncR512X/iN48yf1edlspFjXqKSBoq2udNzbrf6S7wWco1Tg4WRuV7WbwNpuMsy5AlyABw2A5nxmEz3L+DEowG72mN1brtbzM+v1jR+1Tr8jFGvZxTT/JWP+HKiQR1RBUR1ROhxiQR1BBVY6ogHVWOKsSiOKIBkO3OXllWuB7vdb+knQ+h+sxiJe/kT8NT8r/Cew1qKurIwurAgg8wd559mGQNQL3uVADI46hgLH0JHwgrNZto47ROmtoJUwUdpVrGXOW5sikXEoloseUI0iOdvW0m5lVnWo9PyvtBSNhxAec1OBzJDoGB9Z4MhYbH5yzwGb1abAhj5EzLXxfxrn5v7HviYgESFjsWEBaZDs/2kD2BOp5TVvgzWXTnML2eK3nPbD5x2yqKSqKAfG5mQx+cYiubM7EfwrcL8BvPVT2LpjvOvEflKbOsvFJeGlSAJIAsNSSbADxvLzqZ/EaxdfrzhcI/MBb820+X+ZdZXk9Bv/FxAHUIB8LmFUygt7RXb/cAYcPFs4uACRvr6SPhMuDVKTKjrwsCyikzE2YHYgg7W1FptL9p7Y2fW+uvQMsweDpJZKZcHdiVcnzAPytLSjXoubLo3MMCGtts3LTpaYfDdlai0mb/cSqz3UBhwqlhfiHNiTfQfpNP2YyKuCGqvxAbXHeB5jX6zHc8++ujH+vbOLOrliuCoXfp+ayurdmURkIX3abD14wQfS03OFwgURvH0xaRZZDzrywWNy8Jh3QaXDfqDMP2TwrviQUW5RXYdOJUPDf1Inpudr/tP4KfpMx/prheE1a3Vwg8QvvefvfKVi8zR8k7qUGR9oK4YpWckg2N9LS0zSztTfq/0VpVducEKOI4k04+9YdZOwKs1Kjxb3ZvTh4R/9pPP1csh3vTssPZjpOzo+rj/AMtUKiOKJxRHFWbOYSCOqICiOqIASiOCcUQgIB0CV/aKnfDVfBOL/qQfoJZgTlWiHVkbZ1ZD5MCD9YqJeV4y8eCCBVplSyt7ykqfNTY/MQ190eUTY3Uc3sNPKS6GCDr3feBB4ToWHMAnnI67y4yxOLe8VvDzn7IlPBqbsvEbggoadz42YiynTca76yLmGF4OEAH3RxGxtxW1tebWmvCNJns7e5k53bVa+OZntV5ViSlRWvswn0T2ZcMinwE+cKQsw85792JrXop5CR8n+0q/j7c2NU9MGU+c5YlRCpW+5HKxtYfU/GXTxplvJp5ry/EZQyGyJYD+EAD4SxynCON0Leakb/n0m3qYEE3tO0qFuUmZaX5fCtw2XMR7oUHfmfSW2HwiqLAR9FjyiXMxldU2qWlbmJ0lq5sJSY+pvJ34ivj81mc7a1Gr/wDG5+Ckyq7CE08IzMD3WY2A1J3A85c4+mHR0OzKy+jAj7yR2bdBSIsAeIkjxsJnm+ONde+oOJy5MSVqOhBIFw2trThpWY6WA0UdAP7/AEl9icUgFtPSU7tckzT48d13+Mfm+Xmef0EU7FOpxKFBHQIKCOKIwJRHFE4ohqIB1RHAIKiOAQBQliAnQIB5t21wHs8SXA7lYcY/q0Djz4u9/wAxKOn7vkSPvPT+1OVftGHZVF3Tvp1JA7y/8hcedp5jQNwfQxVpm9hyjTuZoctpWlJg95fYZ7TLVdGJE6s9hMvmj3Jl7ia2kzWPe5ixD+SoyDnPbP8ATirxUU8J4ok9d/0ve1L1h8v5S+L9n/HpLnWCY27wRUmdpyJdOEUjdFo9LnpF8VwJOkxRqo8fovZvEPpKTGtLHEPKvEm8w1eujE4qMWbA+RmfzRGGGqOHZHRzwspIutlIv13l/mei22LBgD4hSftM9VqceDqBte8tx6KLQxD3Vrlob2ScZu5RSxO9yLyVaDQQBVA2CgegEO07Hm29DaKFFKJSKI6ogII8ggYlEJROKI4ogHQIYE4BCAgCEICcEMQBCZTO+yAd2q0CFLXLIwIUk7lCNid7WtfmJrIQkiWz08cTumWFKtD7R4T2eIdercYt0fvW9CSPSVyNJsdGdJuIr6SnxDXMlVXkKpCQ9XpUp7F2AThpLPIUTQaz13sXWVaaazP5vUX8P63pQ2gEQ3xalAenSZ8Z/U9qyNhaioNnupB87HSZVpJb+NDhnk4PIeEW68VrX19JIAl59M9exM0YqNDYxl4tU8xDrSK6ya4kXEOF3mbSVmu0FTQqDrYga27248NvzWU+WUlqJXXkzofS1/1/BJGeVS7mxsQxFjpcBb6eOoOvSRezLcSV6g2LgW5hlXvfWXnxOlrz4aFRYWiMSm4B8IjOt57kUUUYVKiOqICiOKIAYEMTiiEBAOqIU4IQgCAhCKEBAOiKKdAgGC7fUQlSnUAtxhlbxItbl08ZmL856N2yy5q+Hslro3Hr0ANwPjPMMPVk2NM3xw65kapJVQSM5hFU0zy/7NZzWpNwqQy32N735AH9ZnyL8prOx+SCo49q3Au4F9Tz/T4Sd2TPlXxzV14bnKu1Q7vGtuIaXNzbmbWl8M/QGxQkdRqPX0uZksd2P46itSqhRzvqAPCaXAZBSX3692tbcAcrHzFtPXrOfs/HVy/rS4POaT6cQB0089rSauIRrWYa+My79nkOqvroBY8gLD86W6SAuW4hHUB7rfU3vbQHiAPjxC3iOkfaz+k/K27yO5kTA1XACub+I28vCSHaK3ok4j16vDKPM80QgAgFW3FibEbg6WHn+GfmdQjb3tx4+nPf5zP49wUF+6SQQb6AgjQ9Rc/OSuKTPgBcg3AAKk8VwVJFvBhe3jrvLXs3hSmEXiFi/E5/5m4+VpR5mntKiYdAxZmAaxIHBfv3J90b8jym5NAKgVRoBYDwG0q/68E9q3CG6L4afDT7R2ZjOu0D4N1DUw9Jr7HhdW3OuxuOXgdZIwvbHBuNahQ/wupHzFwfjOnF7mVw/Jm51YvbRSs//o8H/wC4p/8AaKWgSiOKICiOqIB0QlnBOiAEIQgiGIB0QhOCEIAgJ2KdEA4yXFp5X2qyNsNULAf7bsSjDWx3KN48/KeryJmWXpiKbU6gup5i3Ep6qTsfGAl48eQ3Ebp4csZY5tlNTCVeCpqrC6sPdYc7dCOY/WNo1hpIvhtOU0hRDa4uN7x9MZfVeInqoP3tK+rRJN5ZZS3CdR8ZOvXV498XeVZpXA2qcrbH/wDUt6NPE1TohHiW+oA+8s8rNLgXugHS80mAxCDpMPFr0JPrPfVBg8ixg19twnyP6yxp5dj+IA1k4eZKm/oLy+XFhtF1kqivMw5Getf2I2CpVFFnsfGSXa0dZ5DxFUAGSy9qDMsV3ja91ubEEXHMjp+ecz+a4oKtyxHCTbxuLWJ6/C9tjJHaHGKhZ1YaA6a6W3uL6eUpsly84lxUqAhF1RNg3ieZUctr+kqT9p2/jQ9kMr4UNZx331GluFDsBfXXc+k09VdIOEp2Fvzzj7rpJvkTwwnbDLPa0nX94d9f6hPKQt1N9xPcs3TQ+Rni+c0gtV7bEk/Ga/Br3Gfz57JpWRRRTpcr21Y4ICwxBAhCgiEBACEMCCBDEAQEKcE7ACiAiE7AFCAiAnYBX53lK4mkabafvI38D20M8nx2EqYdzTqrwsPUMuoDKeht5z2gTzb/AFGzenUdaKAM1Itxv0J04AfC1z426GLnTzeM/TYGWuCoBrCZ2nV6S1wGN4SJnqVvjU60VbAVgl0qFR0Gsg5VgsVVYAvUtc6l3UcuQ35zR5diuMAcuc1eXogHIWtMftfTpsns7kWAdEAYk6c5eWMPD11tbwkbEZguoPxH6+kX1/6m67+G8RiOHS+tvLXpM7nucoqcV9BrtZgR7wt5H3edrcxGO0mYMCBfQ6XtYjnfTXa/nrMtgsO+OcjiIpLcOebt/BpbzJ6EWhM/tHTFLCvjKvGb+zDNew0extz04dBr5zeZVgQoBOpFrDkOhncLgFQBQAFAAAHQbDylnTUCK66qTh9ITnSN8cjYjFBREXFTn1cKhM8XzirxVG85u+1ucaFQZ5y12abfDn9R8+vEyaikn9ninR1y8eyrHBAWGBBDohrBEJYAYhCCIYgHRCgidEAKdnBOwDoiMUpO1HaBMJTvo1RgQiHr/G38o+e0Ar+23aT9nT2VM/7zjf8A9ND+9/UeXx6X8oJj+KxD1HZ3YszG7MdyT+bRiCpODR7STQaxvIcOm3KKxUrcZLj+EAc5qKeaBVve3633nmeFqMNt5MfMn0BuLfMzHWO10Z+Tx5enYTPCw6fXeQ8dnqjdvK3Xe4+G0w1DNXNlXTlrsJf5bk6OQ9Ry5/h2TxuP3ufxkXPPaprvoSB8a9gxWkG7zc35lVB3FywvytNxgMIqIFRQqqLADb88ZFwNFU90W/OXSTXq2EjWurk4fNhG3xFpXYjHW5yrr5l4yVcXdbHADeZfO86sCAZX4/OPGZHMseXO80zi1G9TMR80xZdjrImGXnG3N5LpJYTpk5OOPWu3orRRzgijS9cWEIIhCNIp0TghLADWEIIhCAdhCCIQgHROzkg5vm9HDIWqsBp3UBHG55BR99oB3Os1p4WkajnwVebtyUfc8hPGc0zGpiKjVahuzH0UclA5ASRnuc1MXUNSobDZVHuqvQePU85AVIKkNhZ3gkhaccFOBoRWDLBaGhJkBjcwCdhKmxlv7IOsz1F7Hzl3l1extI1Gmb+ARCptNRkOKK6GVtfChhcQMM5QzPX/AKjbP/mvQaWKFt4xisxAEzdPH6byNi8wvzmX1rT7ROx2YnrKjE4/TeQK2KvIGIxE1zhnrY8ZiyZWO8TveNsZrnPHPrXRU95OQSHQEnJKSOKKx6xQJ60IQiigl0QhFFADWFFFBIhCiigp2ePdt/8AztXzH0iigIpEj6RRQWdEd5RRQIWL9wypWKKBu8/WWWF94RRSdelZ9tRhfdkOtvFFMY6KISHiYoo4SueRKs7FNIy0jGDFFLZn6O3rJqcoooA9FFFAn//Z"
                alt=""
              />
              <div className="card-body text-center">
                <p className="small mb-0">
                  The progress tracking is another big motivator. Seeing the charts and graphs tracking my weight loss and fitness improvements is incredibly satisfying. It's hard to believe how far I've come in just a few months.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card py-5">
              <img
                className="slide-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYknGc6WnbFb-SZN8ldUx1lWErN55AmehBuw&usqp=CAU"
                alt=""
              />
              <div className="card-body text-center">
                <p className="small mb-0">
                  Honestly, this app has made me more educated about nutrition and has transformed the way I eat. It's become an essential part of my daily routine, and I can't imagine going back to my old habits. It's not just a diet app; it's a lifestyle change for me, and I couldn't be happier with the results."
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card py-5">
              <img
                className="slide-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWgjCOOazYvYIXWAddif7dGUbDROfE5d5s2A&usqp=CAU"
                alt=""
              />
              <div className="card-body text-center">
                <p className="small mb-0">
                  One of the best features is the goal setting. I set out to lose some weight and improve my overall health, and the app tailored a plan just for me. It recommends meals and snacks that align with my goals and even reminds me to drink water and take walks. I love how it adapts as I progress, keeping me motivated.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card py-5">
              <img
                className="slide-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqx2Oq7utCrVQ5UpetapfH0gvPHdUvQBOfEA&usqp=CAU"
                alt=""
              />
              <div className="card-body text-center">
                <p className="small mb-0">
                  I can't believe how much my life has changed since I started using a diet app. It's been a game-changer for me. Before, I struggled with maintaining a healthy diet and often gave in to unhealthy cravings. But now, it's like having a personal nutritionist right in my pocket.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card py-5">
              <img
                className="slide-img"
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <div className="card-body text-center">

                <p className="small mb-0">
                  The convenience of tracking my meals is incredible. I just input what I eat, and the app calculates the calories, macronutrients, and even micronutrients for me. It's eye-opening to see how the little things add up throughout the day. I've become so much more aware of what I put into my body
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <Footer />
    </div>
  );
};
export default Home;
