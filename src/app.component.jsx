import { Fragment } from "react";
import SymContainer from "./components/container/container";
import SymContent from "./components/content/content";
import SymNavigation from "./components/navigation/navigation";

import { typography, colors, layout, spacing } from "./components/icons/icons";
import SymNavigationItem from "./components/navigation-item/navigation-item";

const navigationItems = [
  { id: 1, label: "Typography", path: typography, link: "/" },
  { id: 2, label: "Colors", path: colors, link: "/" },
  { id: 3, label: "Layout", path: layout, link: "/" },
  { id: 4, label: "Spacing", path: spacing, link: "/" },
];

const App = () => {
  return (
    <Fragment>
      <SymContainer>
        <SymNavigation>
          {navigationItems.map((item) => {
            const { id, label, path, link } = item;
            return (
              <SymNavigationItem
                key={id}
                label={label}
                path={path}
                link={link}
              />
            );
          })}
        </SymNavigation>
        <SymContent />
      </SymContainer>
    </Fragment>
  );
};

export default App;
