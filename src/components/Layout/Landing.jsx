import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import brand4 from "../../assets/brand4.png";
import Rigth from "../icons/Rigth";
import Button from "../ui/Button";
import Dropdown from "./Dropdown";

function Landing() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center justify-center gap-5 mt-10 mx-auto divide-primary/40 divide-y-2 w-full  ">
        <div className="flex items-center w-[1104px] justify-center h-[410px] mt-10 mx-auto gap-10">
          <div className="flex items-center flex-col justify-center">
            <h1 className="text-[48px] font-bold text-center ">
              Enjoy on your TV
            </h1>
            <p className="text-lg font-medium w-96">
              Watch on Smart TVs, playstation, Xbox, Chromecast, Apple TV,
              Blue-ray players,and more
            </p>
          </div>
          <img src={brand1} alt="brand-icon" className="w-[398px] h-[224px] " />
        </div>
        <div className="flex items-center flex-row-reverse w-[1104px] justify-center h-[410px] mt-10 mx-auto gap-10">
          <div className="flex items-center flex-col justify-center">
            <h1 className="text-[48px] font-bold text-center ">
              Enjoy on your TV
            </h1>
            <p className="text-lg font-medium w-96">
              Watch on Smart TVs, playstation, Xbox, Chromecast, Apple TV,
              Blue-ray players,and more
            </p>
          </div>
          <img src={brand2} alt="brand-icon" className="w-[398px] h-[224px] " />
        </div>
        <div className="flex items-center w-[1104px] justify-center h-[410px] mt-10 mx-auto gap-10">
          <div className="flex items-center flex-col justify-center">
            <h1 className="text-[48px] font-bold text-center ">
              Enjoy on your TV
            </h1>
            <p className="text-lg font-medium w-96">
              Watch on Smart TVs, playstation, Xbox, Chromecast, Apple TV,
              Blue-ray players,and more
            </p>
          </div>
          <img src={brand3} alt="brand-icon" className="w-[398px] h-[224px] " />
        </div>
        <div className="flex items-center flex-row-reverse w-[1104px] justify-center h-[410px] mt-10 mx-auto gap-10">
          <div className="flex items-center flex-col justify-center">
            <h1 className="text-[48px] font-bold text-center ">
              Enjoy on your TV
            </h1>
            <p className="text-lg font-medium w-96">
              Watch on Smart TVs, playstation, Xbox, Chromecast, Apple TV,
              Blue-ray players,and more
            </p>
          </div>
          <img src={brand4} alt="brand-icon" className="w-[398px] h-[224px] " />
        </div>
      </div>
      <div>
        <span className=" sr-only">Frequently -questions</span>
        <h1 className="text-[48px] font-bold text-center ">
          Frequently Asked Questions
        </h1>
        <div className="mt-10 flex flex-col gap-4">
          <Dropdown
            title="What is Netflix?"
            content="Netflix is a streaming service that offers a wide variety of movies, TV shows, and original content. It is available on smartphones, tablets, and computers."
          />
          <Dropdown
            title="How much does Netflix cost?"
            content="Netflix is a streaming service that offers a wide variety of movies, TV shows, and original content. It is available on smartphones, tablets, and computers."
          />
          <Dropdown
            title="Where can I watch Netflix?"
            content="Netflix is a streaming service that offers a wide variety of movies, TV shows, and original content. It is available on smartphones, tablets, and computers."
          />
          <Dropdown
            title="How do I cancel?"
            content="Netflix is a streaming service that offers a wide variety of movies, TV shows, and original content. It is available on smartphones, tablets, and computers."
          />
          <Dropdown
            title="What can I watch on Netflix?"
            content="Netflix is a streaming service that offers a wide variety of movies, TV shows, and original content. It is available on smartphones, tablets, and computers."
          />
          <Dropdown
            title="is Netflix good for kids?"
            content="Netflix is a streaming service that offers a wide variety of movies, TV shows, and original content. It is available on smartphones, tablets, and computers."
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-primary-dark text-white  px-4 py-2 text-lg rounded-md border text-primary  border-primary/45 "
          />
          <Button classname="flex items-center gap-2 ">
            <p className="font-semibold">Get Started</p>
            <Rigth />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
