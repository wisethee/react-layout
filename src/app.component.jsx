import { Fragment, useState } from "react";
import SymContainer from "./components/container/container";
import SymContent from "./components/content/content";
import SymSidebar from "./components/sidebar/sidebar";

import { typography, colors, layout, spacing } from "./components/icons/icons";

const navItems = [
  { id: 1, label: "Typography", path: typography, link: "/" },
  { id: 2, label: "Colors", path: colors, link: "/" },
  { id: 3, label: "Layout", path: layout, link: "/" },
  { id: 4, label: "Spacing", path: spacing, link: "/" },
];

const App = () => {
  const [selectedItem, setSelectedItem] = useState("1");

  const handleMenuItemClick = (itemId) => {
    setSelectedItem(itemId);
  };

  return (
    <Fragment>
      <SymContainer>
        <SymSidebar
          navItems={navItems}
          selectedItem={selectedItem}
          onMenuItemClick={handleMenuItemClick}
        ></SymSidebar>
        <SymContent selectedItem={selectedItem} />
      </SymContainer>
    </Fragment>
  );
};

export default App;
