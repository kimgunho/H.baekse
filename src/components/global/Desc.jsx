import classNames from 'classnames/bind';

import styles from './Desc.module.scss';

const cx = classNames.bind(styles);

const Desc = ({ children, bg }) => {
  return <div className={cx('container', { bg })}>{children}</div>;
};

export default Desc;
