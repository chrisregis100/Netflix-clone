import { useState } from "react";
import authImage from "../assets/auth-image.png";
import Button from "../components/ui/Button";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Authentification() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password, rememberMe);
    const response = await fetch("https://backend-pink-six.vercel.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();

    if (response.ok) {
      console.log(data);
      toast.success("Connexion réussie");
      navigate("/home");
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div
      className="bg-cover w-full h-screen flex flex-col justify-center text-lg"
      style={{ backgroundImage: `url(${authImage})` }}
    >
      <div className="flex flex-col items-center justify-center gap-5 mt-10 mx-auto bg-primary-dark/50 w-[450px] h-[710px]   ">
        <h1 className="text-4xl font-bold py-4">Sign In</h1>

        <form action="" className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or phone number"
            className=" py-2 px-4 border border-primary/45 rounded-md w-[315px] h-[56px]  "
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className=" py-2 px-4 border border-primary/45 rounded-md  w-[315px] h-[56px]"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button classname=" w-[315px] h-[56px]">Sign In</Button>
        </form>
        <p className="text-2xl font-bold">Or</p>
        <div className="flex flex-col gap-4">
          <Button classname="bg-primary text-primary-dark  w-[315px] h-[56px]">
            Use a Sign-In Code
          </Button>
          <button>Forgot Password?</button>
        </div>

        <div className="flex gap-4 items-center justify-start w-[315px] ">
          <input
            type="checkbox"
            id="remember-me"
            className="mr-2  "
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <p className=" flex gap-4">
          New to Netflix?{" "}
          <a href="/Inscription" className="font-bold text-lg">
            Sign Up now
          </a>
        </p>
        <p className="w-[300px] text-sm ">
          This is protected by Google reCAPTCHA to ensure you&apos;re not a bot.{" "}
          <a className="underline text-secondary-blue-100 text-lg">
            Learn more.
          </a>
        </p>
      </div>
    </div>
  );
}

export default Authentification;
