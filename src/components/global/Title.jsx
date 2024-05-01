import classNames from 'classnames/bind';

import styles from './Title.module.scss';

const cx = classNames.bind(styles);

const Title = ({ title, desc }) => {
  return (
    <div className={cx('container')}>
      <strong className={cx('title')}>{title}</strong>
      {desc && <p className={cx('desc')}>{desc}</p>}
    </div>
  );
};

export default Title;
