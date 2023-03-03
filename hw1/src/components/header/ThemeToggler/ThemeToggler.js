import { Switch } from "@mui/material";
import { useContext } from "react";
// import { ThemeContext } from "@emotion/react";
import { GlobalTheme } from "../../../App";

const ThemeToggler = () => {
  const context = useContext(GlobalTheme);
  const theme = context.themeLight;

  return (
    <>
      <span>Theme</span>
      <Switch
        value={context.themeLight}
        onChange={() => {
          console.log(context);
          context.useThemeLight(!theme);
        }}
        color={context.themeLight ? "default" : "secondary"}
      />
    </>
  );
};
export default ThemeToggler;
