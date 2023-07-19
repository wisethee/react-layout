const Icon = (props) => {
  const { path } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 -960 960 960"
    >
      <path d={path} fill="currentColor" />
    </svg>
  );
};

export default Icon;
