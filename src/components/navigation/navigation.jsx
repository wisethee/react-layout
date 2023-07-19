import "./navigation.css";

import SymLogo from "../logo/logo";

const SymNavigation = ({ children }) => {
  return (
    <div className="sym-navigation">
      <div className="sym-navigation-wrapper">
        <div className="sym-navigation-group">
          <div className="sym-navigation-header">
            <SymLogo />
            <h3>Symmetry Settings</h3>
          </div>

          <nav className="sym-navigation-body">
            <ul className="sym-navigation-menu">{children}</ul>
          </nav>
        </div>

        <div className="sym-navigation-footer">
          <span>@2023 Symmetry.</span>
        </div>
      </div>
    </div>
  );
};

export default SymNavigation;
