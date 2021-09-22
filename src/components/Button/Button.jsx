import PropTypes from "prop-types";
import css from "./Button.module.css";

export function Button({ onLoadMore }) {
  return (
    <button type="button" className={css.Button} onClick={onLoadMore}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
