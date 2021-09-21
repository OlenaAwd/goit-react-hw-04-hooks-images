import Loader from "react-loader-spinner";
import css from "./Loader.module.css";

export function Spinner() {
  return (
    <div className={css.wrap}>
      <Loader
        type="Circles"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000}
      />
    </div>
  );
}
