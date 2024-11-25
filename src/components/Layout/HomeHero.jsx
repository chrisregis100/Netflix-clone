import home from "../../assets/home-image.png";
import Play from "../../components/icons/Play";
import Info from "../../components/icons/Info";
import brandImg from "../../assets/netbrand.png";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img src={home} alt="Hero" className="w-full h-[810px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      <div className="relative pt-[20vh] flex flex-col gap-6 px-4 md:px-16 ">
        <img
          src={brandImg}
          alt="brand-img"
          className="h-[210px] w-[520px] mx-10"
        />

        <p className="text-lg md:text-xl max-w-2xl mb-6">
          Years after retiring from their formidable ninja lives, a
          dysfunctional family must return to shadowy missions to counteract the
          threat of the mysterious and powerful Shadows string of looming
          threats.
        </p>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-primary text-primary-dark px-8 py-3 rounded font-semibold hover:bg-primary/80 transition">
            <Play className="w-6 h-6" /> Play
          </button>
          <button className="flex items-center gap-2 bg-primary/40 text-white px-8 py-3 rounded font-semibold hover:bg-primary/70 transition">
            <Info className="w-6 h-6" /> More Info
          </button>
        </div>
      </div>
    </div>
  );
}
