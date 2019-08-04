import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default function PageContent(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode
      ? "rgba(0, 0, 0, 0.75)"
      : "rgba(255, 255, 255, 0.5)",
    height: "100vh",
    width: "100vw"
  };
  return <div style={styles}>{props.children}</div>;
}
