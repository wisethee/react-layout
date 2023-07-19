import Icon from "../icon/icon";

const SymNavigationItem = (props) => {
  const { path, label, link } = props;

  return (
    <li className="sym-navigation-item">
      <a href="#">
        <Icon path={path} />
        <span>{label}</span>
      </a>
    </li>
  );
};

export default SymNavigationItem;
