import React from 'react';
import { useEffect, useState } from 'react';
import { getPhotos } from '../../services/api.js';
import SearchBar from '../SearchBar/SearchBar.js';
import Loader from '../Loader/Loader.js';
import ImageGallery from '../ImageGallery/ImageGallery.js';
import ErrorMessage from '../ErrorMessage/ErrorMessage.js';
import ImageModal from '../ImageModal/ImageModal.js';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.js';
import './App.css';
import { Image, IPicture } from './App.types.js';

const App = () => {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<IPicture[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const { results, total_pages } = await getPhotos(query, page);
        if (!results.length) {
          return setIsEmpty(true);
        }
        setImages(prevImages => [...prevImages, ...results]);
        setIsVisible(page < total_pages);
      } catch (error) {
        setError(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page, query]);

  const onHandleSubmit = (value: string) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(false);
    setIsEmpty(false);
    setIsVisible(false);
  };

  const openModal = (imageData: Image) => {
    setSelectedImage(imageData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSubmit={onHandleSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imageData={selectedImage}
      />
      {isEmpty && <h2>No images found for your query!</h2>}

      {isVisible && images.length > 0 && <LoadMoreBtn onClick={onLoadMore} />}

      {isLoading && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
};
export default App;
