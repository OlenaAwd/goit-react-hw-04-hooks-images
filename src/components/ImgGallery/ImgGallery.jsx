import PropTypes from "prop-types";
import { ImageGalleryItem } from "../ImgGalleryItem/ImgGalleryItem";
import css from "./ImgGallery.module.css";

export function ImageGallery({ images, onOpenModal }) {
  return (
    <ul className={css.list}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onOpenModal={onOpenModal}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
