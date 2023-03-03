import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { LanguageContext } from "../../../App";
import { useContext } from "react";
const LanguageToggler = () => {
  const languageContext = useContext(LanguageContext);

  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel id="demo-simple-select-label">Language</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={languageContext.languageState}
        label="Language"
        onChange={(e) => languageContext.setLanguageState(e.target.value)}
      >
        <MenuItem value={"eng"}>English</MenuItem>
        <MenuItem value={"ukr"}>Українська</MenuItem>
      </Select>
    </FormControl>
  );
};
export default LanguageToggler;
