import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import PAGES from '@/define/pages';

import styles from './02_Clinic.module.scss';

const cx = classNames.bind(styles);

const Clinic = () => {
  const [title, setTitle] = useState();
  const clinics = Object.values(PAGES).filter((page) => {
    const isClinic = page.title.includes('클리닉');
    if (isClinic) return page.children;
  });

  const onClick = (e) => {
    const currentTitle = e.target.dataset.title;
    if (title === currentTitle) {
      setTitle();
    } else {
      setTitle(currentTitle);
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
        <div className={cx('clinics')}>
          {clinics.map((clinic) => {
            const active = title === clinic.title;

            return (
              <button
                onClick={onClick}
                data-title={clinic.title}
                key={clinic.title}
                type="button"
                className={cx('button', { active })}
                aria-label={`${clinic.title} 상세메뉴 ${active ? '닫기' : '열기'}`}
              >
                <img src={active ? clinic.icons.color : clinic.icons.black} alt="" />
                {clinic.title}
              </button>
            );
          })}
        </div>
      </div>
      <div className={cx('detail')}>
        <div className={cx('sub')}>
          {title &&
            clinics
              .find((clinic) => clinic.title === title)
              .children.map((sub) => (
                <Link to={sub.link} key={sub.title} className={cx('link')}>
                  {sub.title}
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Clinic;
