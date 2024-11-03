// import css from './LoadMoreBtn.module.css';
// import { FC } from 'react';
// import { ILoadMoreBtnProps } from './LoadMoreBtn.types.js';

// const LoadMoreBtn: FC<ILoadMoreBtnProps> = ({ onClick }) => {
//   return (
//     <div className={css.container}>
//       <button type="button" className={css.loadMoreBtn} onClick={onClick}>
//         Load more
//       </button>
//     </div>
//   );
// };
// export default LoadMoreBtn;
import React from 'react';
import css from './LoadMoreBtn.module.css';
import { ILoadMoreBtnProps } from './LoadMoreBtn.types.js';

const LoadMoreBtn = ({ onClick }: ILoadMoreBtnProps): React.ReactElement => {
  return (
    <div className={css.container}>
      <button type="button" className={css.loadMoreBtn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
