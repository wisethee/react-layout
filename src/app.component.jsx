import { Fragment } from "react";
import SymContainer from "./components/container/container.component";
import SymSidenav from "./components/sidenav/sidenav.component";
import SymContent from "./components/content/content.component";

const App = () => {
  return (
    <Fragment>
      <SymContainer>
        <SymSidenav />
        <SymContent />
      </SymContainer>
    </Fragment>
  );
};

export default App;
