import { Image } from "../App/App.types.js";

export interface IModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageData: Image | null;
}
