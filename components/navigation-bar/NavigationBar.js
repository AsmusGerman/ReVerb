import React from "react";
import { SunIcon, MoonIcon, MentionIcon } from "@primer/octicons-react";
import { useTranslation } from "next-translate";
const NavigationBar = () => {
  const { t } = useTranslation();

  const [darkTheme, setDarkTheme] = React.useState(false);
  const toogleTheme = () => setDarkTheme(!darkTheme);

  React.useEffect(() => {
    document.documentElement.setAttribute(
      "theme",
      darkTheme ? "dark" : "light"
    );
  }, [darkTheme]);

  return (
    <div className="terminal-nav">
      <div className="terminal-logo">
        <div className="logo">{t("common:name")}</div>
      </div>
      <nav className="terminal-menu">
        <ul>
          <li>
            <a onClick={toogleTheme}>
              {darkTheme ? <SunIcon /> : <MoonIcon />}
            </a>
          </li>
          <li>
            <a href="https://twitter.com/AsmusGerman" target="_blank">
              <MentionIcon size="small" verticalAlign="middle" />
              AsmusGerman
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
