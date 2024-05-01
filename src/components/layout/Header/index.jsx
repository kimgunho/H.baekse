import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { RiMenuFill } from 'react-icons/ri';

import PAGES from '@/define/pages';

import styles from './index.module.scss';
import FullMenu from './FullMenu';

const cx = classNames.bind(styles);

const Header = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <>
      <header className={cx('container')}>
        <div className={cx('wrapper')}>
          <strong className={cx('title')}>
            <Link to={'/'}>건강백세한의원</Link>
          </strong>
          <ul className={cx('gnb')}>
            {Object.values(PAGES).map((page) => (
              <li key={page.title}>
                {page.title}
                <ul className={cx('sub')}>
                  {page.children.map((sub) => (
                    <li key={sub.title}>
                      <Link to={sub.link}>{sub.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <button onClick={toggle} type="button" aria-label="전체메뉴보기">
            <RiMenuFill size={32} color="#333" />
          </button>
        </div>
      </header>
      <FullMenu active={active} close={toggle} />
    </>
  );
};

export default Header;
