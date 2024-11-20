function Footer() {
  return (
    <footer className="text-primary/85 mt-10 flex flex-col justify-center h-[430px] w-full items-center border-t-2 border-primary/35 ">
      <h1 className="mx-40 mb-5 text-lg">
        Questions ?{" "}
        <a href="tel" className="underline">
          1-844-505-2993
        </a>{" "}
      </h1>
      <div className="flex text-lg justify-center gap-20 items-center w-full">
        <div className=" flex flex-col gap-2">
          <a href="">FAQ</a>
          <a href="">Investor relations</a>
          <a href="">Buy Gift Cards</a>
          <a href="">Cookie Preferences</a>
          <a href="">Legal Notices</a>
        </div>
        <div className=" flex flex-col gap-2">
          <a href="">Help Center</a>
          <a href="">Jobs</a>
          <a href="">Ways to Watch</a>
          <a href="">Corporate Information</a>
          <a href="">Only on Netflix</a>
        </div>
        <div className=" flex flex-col gap-2 w-[200px] ">
          <a href="">Account</a>
          <a href="">Netflix shop</a>
          <a href="">Terms of Use</a>
          <a href="">Contact Us</a>
          <a href="">Do not Sell or Share Personnal Information</a>
        </div>
        <div className=" flex flex-col gap-2">
          <a href="">Media Center</a>
          <a href="">Redeem Gift cCrds</a>
          <a href="">Privacy</a>
          <a href="">Speed Test</a>
          <a href="">Ad Choices</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
