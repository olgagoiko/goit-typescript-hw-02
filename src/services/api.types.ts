import { IPicture } from '../components/App/App.types.js';

export interface IFetchResponse {
  results: IPicture[];
  total_pages: number;
}
