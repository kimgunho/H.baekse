import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import PAGES from '@/define/pages';

import styles from './FullMenu.module.scss';

const cx = classNames.bind(styles);

const FullMenu = ({ active, close: closeModal }) => {
  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  const close = () => {
    if (active) closeModal();
  };

  return (
    <div className={cx('container', { active })}>
      <div className={cx('menus')}>
        <button type="button" onClick={close} aria-label="전체메뉴 닫기" className={cx('close')}>
          <RiCloseFill size={32} />
        </button>
        <ul className={cx('gnb')}>
          {Object.values(PAGES).map((page) => (
            <li key={page.title}>
              <strong className={cx('title')}>{page.title}</strong>
              <ul className={cx('sub')}>
                {page.children.map((sub) => (
                  <li key={sub.title}>
                    <Link onClick={close} to={sub.link}>
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FullMenu;
