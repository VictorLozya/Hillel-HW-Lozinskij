import { useNavigate } from "react-router-dom";
import "./BackPageButton.scss";
import { useContext } from "react";
import { LanguageContext } from "../../../App";
const BackPageButton = () => {
  const languageContext = useContext(LanguageContext);
  const language = languageContext.languageState === "eng";
  const navigate = useNavigate();
  return (
    <button className={"back-button"} onClick={() => navigate(-1)}>
      {language ? "Back" : "Назад"}
    </button>
  );
};
export default BackPageButton;
