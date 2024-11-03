import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { ImageGalleryProps } from './ImageGallery.types';
import { FC } from 'react';

const ImageGallery: FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={css.container}>
      {images &&
        images.map(
          (
            {
              id,
              urls: { regular, small },
              alt_description,
              description,
              likes,
              user: { instagram_username, name },
            },
            i
          ) => {
            return (
              <li key={id} className={css.wrap}>
                <ImageCard
                  src={small}
                  alt={alt_description}
                  onClick={() =>
                    onImageClick({
                      regular,
                      alt_description,
                      description,
                      likes,
                      name,
                      instagram_username: '',
                    })
                  }
                />
              </li>
            );
          }
        )}
    </ul>
  );
};

export default ImageGallery;
