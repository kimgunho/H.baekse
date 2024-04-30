import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import GNB from '@/define/gnb';

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
          {GNB.map((data) => (
            <li key={data.link}>
              {data.sub ? (
                <ul className={cx('subMenu')}>
                  {data.sub.map((subData) => (
                    <li key={subData.link}>
                      <Link onClick={close} to={subData.link}>
                        {subData.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <Link onClick={close} to={data.link} className={cx('menu')}>
                  {data.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FullMenu;
