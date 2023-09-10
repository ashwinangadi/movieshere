const Cross = ({ ...props }) => {
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
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
    </>
  );
};

export default Cross;
