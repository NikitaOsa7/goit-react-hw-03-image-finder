import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images, openModal }) {
    return (
        <ul className={s.ImageGallery}>
            {images.map(({ webformatURL, id }, index) => (
                <ImageGalleryItem
                    webFormatURL={webformatURL}
                    key={id}
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
        })
    )
}