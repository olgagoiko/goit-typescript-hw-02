import { Image, IPicture } from "../App/App.types.js";

export interface ImageGalleryProps {
  images: IPicture[];
  onImageClick: (imageData: Image) => void;
}
