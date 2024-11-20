import hero from "../../assets/image-font-landing.png";
import Button from "../ui/Button";
import Header from "./Header";
import gift from "../../assets/gift.png";
import Rigth from "../icons/Rigth";

function Hero() {
  return (
    <div className=" bg-cover  w-full relative flex flex-col items-center">
      <img src={hero} alt="" />
      <div className="absolute top-0 left-0 w-full h-full">
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-[56px] ">Unlimited movies, TV shows, and more</h1>
        <p className="text-xl">Watch anywhere, Cancel anytime.</p>
        <div className="flex flex-col gap-3 mt-4 items-center">
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Email Address"
              className="bg-primary-dark text-white  px-4 py-2 text-lg rounded-md border text-primary  border-primary/45 "
            />
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
      <div className="gift-session w-[1292px] h-36  py-[22px] rounded  justify-center mx-auto items-center inline-flex absolute -bottom-10   ">
        <img src={gift} alt="gift-icon" className="w-[100px] h-[100px]" />
        <div className="flex flex-col gap-1 items-center">
          <p className="text-2xl font-bold">
            The Netflix you love for just $6.99
          </p>
          <p>Get the standard with ads plan</p>
          <a href="" className="flex items-center gap-2 text-secondary-blue-3">
            Learn More{" "}
            <span>
              <Rigth />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
