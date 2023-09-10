function Shimmer() {
  return (
    <div className="flex flex-wrap items-center justify-center my-5">
      {Array(20)
        .fill()
        .map((item, index) => {
          return (
            <div key={index} className=" flex p-2 m-3 rounded-xl shadow-lg w-[316px] h-[400px] bg-slate-50"></div>
          );
        })}
    </div>
  );
}

export default Shimmer;
