import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import GNB from '@/define/gnb';

import styles from './02_Clinic.module.scss';

const menus = GNB.filter((data) => data.title.includes('클리닉'));
const cx = classNames.bind(styles);

const Clinic = () => {
  const [activeLink, setActiveLink] = useState();

  const onClick = (e) => {
    const link = e.target.dataset.link;
    if (activeLink === link) {
      setActiveLink();
    } else {
      setActiveLink(link);
    }
  };

  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <strong className={cx('title')}>
          클리닉
          <br />
          바로가기
        </strong>
        <div className={cx('menus')}>
          {menus.map((menu) => {
            const active = activeLink === menu.link;

            return (
              <button
                onClick={onClick}
                data-link={menu.link}
                key={menu.link}
                type="button"
                className={cx('button', { active })}
                aria-label={`${menu.title} 상세메뉴 ${active ? '닫기' : '열기'}`}
              >
                <img src={active ? menu.icons.color : menu.icons.black} alt="" />
                {menu.title}
              </button>
            );
          })}
        </div>
      </div>
      <div className={cx('detail')}>
        <div className={cx('subMenu')}>
          {activeLink &&
            menus
              .find(({ link }) => link === activeLink)
              ?.sub?.map((subMenu) => (
                <Link to={subMenu.link} key={subMenu.link} className={cx('link')}>
                  {subMenu.title}
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Clinic;
