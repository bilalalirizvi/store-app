import React, { useEffect } from "react";
import Routers from "./config/Routers";
import { useSelector } from "react-redux";
import { light, dark } from "./config/theme";

import { App as AntApp } from "antd";

const App = () => {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    if (theme === "light") {
      Object.keys(light).forEach((key) => {
        document.body.style.setProperty(`--${key}`, light[key]);
      });
    } else {
      Object.keys(dark).forEach((key) => {
        document.body.style.setProperty(`--${key}`, dark[key]);
      });
    }
  }, [theme]);

  return (
    <AntApp>
      <Routers />;
    </AntApp>
  );
};

export default App;
