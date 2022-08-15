import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images, openModal }) {
    return (
        <ul className={s.ImageGallery}>
            {images.map(({ id, webformatURL }, index) => (
                <ImageGalleryItem
                    key={id}
                    webFormatURL={webformatURL}
                    index={index}
                    openModal={openModal}
                />
            ))}
        </ul>
    );
};

ImageGallery.propTypes = {
    openModal: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webFormatURL: PropTypes.string.isRequired,
        })
    )
}