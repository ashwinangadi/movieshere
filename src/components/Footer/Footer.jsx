import Heart from "../Icons/Heart";

function Footer() {
  return (
    <div className="h-[80px] bg-slate-200 w-screen flex items-center justify-center">
      <p className="text-2xl">Designed and Built with</p>
      <Heart className="fill-red-600 h-8 w-8" />
    </div>
  );
}

export default Footer;
