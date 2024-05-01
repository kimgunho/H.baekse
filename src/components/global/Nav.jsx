import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';

import styles from './Nav.module.scss';

const cx = classNames.bind(styles);

const Nav = ({ pages }) => {
  const { pathname } = useLocation();
  return (
    <div className={cx('container')}>
      {pages.map((page) => {
        const active = page.link === pathname;

        return (
          <Link
            key={page.title}
            to={page.link}
            style={{ width: `${100 / pages.length}%` }}
            className={cx('link', { active })}
          >
            {page.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
