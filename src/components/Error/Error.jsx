import PropTypes from "prop-types";
import css from "./Error.module.css";

export function Notification(error) {
  return (
    <div className={css.wrap}>
      <h1 className={css.title}>
        {error ? error : "Please, enter the correct name for your search"}
      </h1>
    </div>
  );
}

Notification.propTypes = {
  error: PropTypes.string,
};
