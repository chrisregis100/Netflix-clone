import logo from "../../assets/logo.png";
import idiome from "../../assets/idiome.png";

function Header() {
  return (
    <div className=" sticky top-0 flex bg-primary/0 w-[1400px] justify-between h-[92px] mx-auto items-center ">
      <a href="/" className="h-[40px] w-[148px] ">
        <img src={logo} alt="netflix-logo" />
      </a>
      <div className="flex items-center gap-4">
        <select className="bg-primary-dark text-white  px-4 py-2 text-lg rounded-md border text-primary  border-primary/45 ">
          <img src={idiome} alt="langue-icon" className="text-primary" />
          <option value="anglais">anglais</option>
          <option value="espagnol">espagnol</option>
          <option value="francais">francais</option>
        </select>
        <button
          className="bg-secondary-red-300 hover:bg-secondary-red-200   text-lg px-4 py-2 rounded-md  text-primary"
          onClick={() => {
            window.location.href = "/authentification";
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Header;
