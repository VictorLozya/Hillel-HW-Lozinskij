import "./ErrorPage.scss";
import BackPageButton from "../../Buttons/BackPageButton/BackPageButton";
const ErrorPage = () => {
  return (
    <div className={"error__wrapper"}>
      <h1 className={"error__title"}>
        Ooooops... Something went wrong. Try again later :C
      </h1>
      <BackPageButton />
    </div>
  );
};
export default ErrorPage;
