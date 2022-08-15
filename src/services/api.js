import PropTypes from 'prop-types';
import axios from 'axios';

export default function fetchImagesByQuery(searchQuery, page) {
    const response = axios.get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=26121476-a97ee3888781a95bbdf240963&image_type=photo&orientation=horizontal&per_page=15`
    );
    return response;
}

fetchImagesByQuery.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
}
