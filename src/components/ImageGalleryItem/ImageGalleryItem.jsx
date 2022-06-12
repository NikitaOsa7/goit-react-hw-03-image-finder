import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ index, webFormatURL, openModal }) {
    return (
        <li class="gallery-item">
            <img
                className={s.ImageGalleryItem__image}
                src={webFormatURL}
                alt=""
                onClick={() => openModal(index)} />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    webFormatURL: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
}