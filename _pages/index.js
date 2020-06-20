import React from "react";
import useTranslation from "next-translate/useTranslation";
import NavigationBar from "../components/navigation-bar/NavigationBar";

const Homepage = (props) => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <NavigationBar />
      <div className="terminal-card">
        <header>{t("common:welcome_header")}</header>
        <div>{t("common:welcome_body")}</div>
      </div>
    </div>
  );
};

export default Homepage;

export async function getStaticProps({ lang }) {
  return { props: { getStaticPropsWorks: true, lang } };
}
