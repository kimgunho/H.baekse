import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  return <header className={cx('container')}>header</header>;
};

export default Header;
