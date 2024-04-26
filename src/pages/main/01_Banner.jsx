import classNames from 'classnames/bind';

import styles from './01_Banner.module.scss';
import SRC from '../../../public/assets/images/main/main_bg.jpg';

const cx = classNames.bind(styles);

const Banner = () => {
  return (
    <div className={cx('container')}>
      <img src={SRC} alt="" draggable={false} />
      <strong>
        항상 환자분의 건강을
        <br />
        최우선으로 생각하겠습니다.
      </strong>
    </div>
  );
};

export default Banner;
