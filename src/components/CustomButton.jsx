
const CustomButton = ({ title, containerStyles, type }) => {
  return (
    <button
      type={"button"}
      className={`inline-flex items-center ${containerStyles}`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
