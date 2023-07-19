import "./nav.css";

import Icon from "../icon/icon";

const SymNav = ({ navItems, selectedItem, onItemClick }) => {
  return (
    <nav className="sym-navigation-body">
      <ul className="sym-navigation-menu">
        {navItems.map((item) => {
          const { id, label, path, link } = item;
          return (
            <li
              key={id}
              className={`sym-navigation-item ${
                id === selectedItem ? "is-active" : ""
              }`}
            >
              <a href="#" onClick={() => onItemClick(id)}>
                <Icon path={path} />
                <span>{label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SymNav;
