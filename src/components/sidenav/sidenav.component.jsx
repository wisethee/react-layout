import SymLogo from "../logo/logo.component";
import IconTypography from "../icons/typography";
import "./sidenav.component.css";
import IconColors from "../icons/colors";
import IconLayout from "../icons/layout";
import IconSpacing from "../icons/spacing";
import IconBorder from "../icons/border";

const SymSidenav = () => {
  return (
    <div className="sym-sidenav">
      <div className="sym-sidenav-wrapper">
        <div className="sym-sidenav-group">
          <div className="sym-sidenav-header">
            <SymLogo />
            <h3>Symmetry Settings</h3>
          </div>

          <nav className="sym-sidenav-body">
            <ul className="sym-sidenav-menu">
              <li className="sym-sidenav-item">
                <a href="#">
                  <IconTypography />
                  <span>Typography</span>
                </a>
              </li>

              <li className="sym-sidenav-item is-active">
                <a href="#">
                  <IconColors />
                  <span>Colors</span>
                </a>
              </li>

              <li className="sym-sidenav-item">
                <a href="#">
                  <IconLayout />
                  <span>Layout</span>
                </a>
              </li>

              <li className="sym-sidenav-item">
                <a href="#">
                  <IconSpacing />
                  <span>Spacing</span>
                </a>
              </li>

              <li className="sym-sidenav-item">
                <a href="#">
                  <IconBorder />
                  <span>Border</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="sym-sidenav-footer">
          <span>@2023 Symmetry.</span>
        </div>
      </div>
    </div>
  );
};

export default SymSidenav;
