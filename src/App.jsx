import { useState, useEffect } from "react";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImgGallery/ImgGallery";
import { fetchApi } from "./components/API/fetchAPI";
import { Button } from "./components/Button/Button";
import { Spinner } from "./components/Loader/Loader";
import { Modal } from "./components/Modal/Modal";
// import { showError } from "./components/Error/Error";

export default function App() {
  const [input, setInput] = useState("");
  const [images, setImages] = useState([]);
  const [largeImageURL, setLargeImageURL] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!input) return;
    const fetchImages = async () => {
      try {
        const request = await fetchApi(input, page);
        if (request.length === 0) {
          return setError(`No results were found for ${input}!`);
        }
        setImages((prevImages) => [...prevImages, ...request]);
      } catch (error) {
        setError("Something went wrong. Try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [page, input]);

  const searchImages = (newSearch) => {
    setInput(newSearch);
    setImages([]);
    setPage(1);
    setError(null);
    setLoading(true);
  };

  const onLoadMore = () => {
    setLoading(true);
    setPage((prevPage) => prevPage + 1);
    scrollPage();
  };

  const onOpenModal = (e) => {
    setLargeImageURL(e.target.dataset.source);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const scrollPage = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight - 160,
        behavior: "smooth",
      });
    }, 800);
  };

  return (
    <div>
      <Searchbar onHandleSubmit={searchImages} />

      {images.length > 0 && !error && (
        <ImageGallery images={images} onOpenModal={onOpenModal} />
      )}

      {Loading && <Spinner />}

      {!Loading && images.length >= 12 && !error && (
        <Button onLoadMore={onLoadMore} />
      )}

      {showModal && (
        <Modal onToggleModal={toggleModal} largeImageURL={largeImageURL} />
      )}
    </div>
  );
}
