import { useState } from "react";
import PropTypes from "prop-types";
import css from "./Searchbar.module.css";
import toast, { Toaster } from "react-hot-toast";

export function Searchbar({ onHandleSubmit }) {
  const [query, setQuery] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      return toast.error(`Please enter a value for search images!`);
    }
    onHandleSubmit(query);
    setQuery("");
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
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={({ target }) => setQuery(target.value)}
        />
      </form>
      <Toaster />
    </header>
  );
}

Searchbar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};
