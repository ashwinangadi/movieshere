const Cross = ({ ...props }) => {
  return (
    <>
      {/* <div className="bg-gray-100 rounded-full"> */}
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        //   fill="#000000"
          strokeWidth={1}
          stroke="#fff"
          {...props}
        >
          <path
            fill="none"
            stroke="#000"
            strokeWidth="2"
            d="M7,7 L17,17 M7,17 L17,7"
          ></path>
        </svg>
      {/* </div> */}
    </>
  );
};

export default Cross;
