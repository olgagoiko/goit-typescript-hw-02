import css from './ImageCard.module.css';
import { FC } from 'react';
import { IImageCardProps } from './ImageCard.types.js';

const ImageCard: FC<IImageCardProps> = ({ alt, src, onClick }) => {
  return (
    <div className={css.imageCard}>
      <img src={src} alt={alt} onClick={onClick} />
    </div>
  );
};

export default ImageCard;
