import classNames from 'classnames/bind';

import styles from './04_Customer.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Customer = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <strong className={cx('title')}>고객상담센터</strong>
        <div className={cx('maps')}>
          <div className={cx('info')}>
            <iframe
              className={cx('map')}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d595.8607772311743!2d129.3665214073986!3d35.587898269347036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3567cb812c5e5daf%3A0x6e69edf525b97781!2z7Jq47IKw6rSR7Jet7IucIOu2geq1rCDtmZTrtInroZwgNzQ!5e0!3m2!1sko!2skr!4v1714121700117!5m2!1sko!2skr"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className={cx('top')}>
              <a className={cx('tel')} href="tel:0522894878">
                울산본점 : 052-289-4878
              </a>
              <Link className={cx('button')} to={'/direction'}>
                오시는길
              </Link>
            </div>
            <p className={cx('addr')}>울산 북구 화봉로 74 건강백세한의원</p>
            <p className={cx('desc')}>
              <span>평일 : 09:30 ~ 19:00 / 토요일 : 09:30 ~ 14:00</span>
              <span>점심시간 : 13:00 ~ 14:00</span>
              <span>일요일 및 공휴일은 휴무입니다.</span>
            </p>
          </div>
          <div className={cx('info')}>
            <iframe
              className={cx('map')}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.3714159380634!2d129.03689802647682!3d35.34642774829199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356899d083e50f15%3A0x1fcc780f3ba9db71!2z6rG06rCV67Cx7IS47ZWc7J2Y7JuQ!5e0!3m2!1sko!2skr!4v1714121743821!5m2!1sko!2skr"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className={cx('top')}>
              <a className={cx('tel')} href="tel:0553886789">
                양산점 : 055-388-6789
              </a>
              <Link className={cx('button')} to={'/direction'}>
                오시는길
              </Link>
            </div>
            <p className={cx('addr')}>경남 양산시 중앙로 178 1층 건강백세한의원</p>
            <p className={cx('desc')}>
              <span>평일 : 09:30 ~ 19:00 / 토요일 : 09:30 ~ 14:00</span>
              <span>점심시간 : 13:00 ~ 14:00</span>
              <span>일요일 및 공휴일은 휴무입니다.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
