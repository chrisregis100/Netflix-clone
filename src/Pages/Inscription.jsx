import { useState } from "react";
import authImage from "../assets/auth-image.png";
import Button from "../components/ui/Button";
import toast from "react-hot-toast";

function Inscription() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const response = await fetch("http://localhost:5000/api/signup", {
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
      toast.success(data.message);
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
        <h1 className="text-4xl font-bold py-4">Sign Up</h1>

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
          <input
            type="password"
            placeholder="Confirm Password"
            className=" py-2 px-4 border border-primary/45 rounded-md  w-[315px] h-[56px]"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button classname=" w-[315px] h-[56px]">Sign Up</Button>
        </form>

        <p className=" flex gap-4">
          Have an account?{" "}
          <a href="/Authentification" className="font-bold text-lg">
            Sign In
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

export default Inscription;
