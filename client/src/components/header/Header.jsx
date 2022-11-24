import Lookist from "../../assets/lookist.png"

export default function Header() {
  return (
    <div className="mt-1">
      <div className="mx-auto ">
        <img src={Lookist} alt="" className="mx-auto object-contain scale-75" />
      </div>
      <img
        className="mx-auto w-11/12 rounded-xl h-[450px] mt-2 object-cover"
        src="https://source.unsplash.com/1000x650?book"
        alt=""
      />
    </div>
  );
}
