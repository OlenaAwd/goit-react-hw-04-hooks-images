import { useState } from "react";
import PropTypes from "prop-types";
import css from "./Searchbar.module.css";
import toast, { Toaster } from "react-hot-toast";

export function Searchbar({ onHandleSubmit }) {
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      return toast.error(`Please, enter your request for search images!`);
    }
    onHandleSubmit(input);
    setInput("");
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={onSubmit}>
        <button type="submit" className={css.btn}>
          <span className={css.label}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          value={input}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={({ target }) => setInput(target.value)}
        />
      </form>
      <Toaster />
    </header>
  );
}

Searchbar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};
