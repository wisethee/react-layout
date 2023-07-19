import "./sidebar.css";

import SymLogo from "../logo/logo";
import SymNav from "../nav/nav";

const SymSidebar = ({ navItems, selectedItem, onMenuItemClick }) => {
  return (
    <div className="sym-navigation">
      <div className="sym-navigation-wrapper">
        <div className="sym-navigation-group">
          <div className="sym-navigation-header">
            <SymLogo />
            <h3>Symmetry Settings</h3>
          </div>

          <SymNav
            navItems={navItems}
            selectedItem={selectedItem}
            onItemClick={onMenuItemClick}
          />
        </div>

        <div className="sym-navigation-footer">
          <span>@2023 Symmetry.</span>
        </div>
      </div>
    </div>
  );
};

export default SymSidebar;
