import Button from "./Button/Button";
import Searchbar from "./Searchbar/Searchbar";
import Loader from "./Loader/Loader";
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";
import s from '../components/App.module.css';
import { Component } from "react";
import fetchImagesByQuery from '../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
    state = {
        searchData: '',
        images: [],
        page: 0,
        showModal: false,
        isLoading: false,
        error: null,
        largeImageURL: null,
    };

    componentDidUpdate(prevProps, prevState) {
        const prevPage = prevState.page;
        const prevSearchData = prevState.searchData;
        const { searchData, page, images } = this.state;

        if (prevPage !== page || prevSearchData !== searchData) {
            try {
                this.setState({ isLoading: true });
                const response = fetchImagesByQuery(searchData, page);
                response.then(data => {
                    data.data.hits.length === 0
                        ? toast.error('No hits')
                        : data.data.hits.forEach(({ id, webformatURL, largeImageURL }) => {
                            !images.some(image => image.id === id) &&
                                this.setState(({ images }) => ({
                                    images: [...images, { id, webformatURL, largeImageURL }]
                                }));
                        });
                    this.setState({ isLoading: false });
                });
            } catch (error) {
                this.setState({error, isLoading: false})
            }
        }
    }

    onSumbit = searchData => {
        if (searchData.trim() === '') {
            return toast.error('Enter the image request');
        } else if (searchData === this.state.searchData) {
            return;
        }
        this.setState({
            searchData: searchData,
            page: 1,
            images: [],
        });
    };

    nextPage = () => {
        let { page } = this.state;
        page += 1;
        this.setState({ page });
    };

    openModal = e => {
        this.setState({ showModal: true, largeImageURL: e.currentTarget.srcSet });
    };

    toggleModal = () => {
        this.setState({ showModal: false, largeImageURL: null });
    };

    render() {
        const { toggleModal, openModal, nextPage, onSumbit } = this;
        const { images, isLoading, largeImageURL, showModal } = this.state;
        return (
            <div className={s.App}>
                <Searchbar onSubmit={onSumbit} />
                {images.length !== 0 && (
                    <ImageGallery images={images} openModal={openModal} />
                )}
                {showModal && (
                    <Modal toggleModal={toggleModal} largeImage={largeImageURL} />
                )}
                {isLoading && <Loader />}
                <ToastContainer autoClose={2500} />
                {images.length >= 12 && <Button nextPage={nextPage} />}
            </div>
        );
    }

}
