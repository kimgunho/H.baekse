import classNames from 'classnames/bind';
import { RiBus2Fill, RiMapPinLine, RiWalkFill } from 'react-icons/ri';

import Title from '@/components/global/Title';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <Title title="오시는길" desc={['대중교통, 도보등 편한 교통수단을 확인해주세요.']} />
      <div className={cx('box')}>
        <div>
          <strong className={cx('title')}>울산 본점</strong>
          <iframe
            className={cx('map')}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d595.8607772311743!2d129.3665214073986!3d35.587898269347036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3567cb812c5e5daf%3A0x6e69edf525b97781!2z7Jq47IKw6rSR7Jet7IucIOu2geq1rCDtmZTrtInroZwgNzQ!5e0!3m2!1sko!2skr!4v1714121700117!5m2!1sko!2skr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <ul className={cx('info')}>
            <li>
              <span className={cx('title')}>
                <RiMapPinLine size={24} color="#00a098" />
                주소
              </span>
              <ul className={cx('list')}>
                <li>울산 북구 화봉로 74 건강백세한의원</li>
              </ul>
            </li>
            <li>
              <span className={cx('title')}>
                <RiWalkFill size={24} color="#00a098" /> 도보
              </span>
              <ul className={cx('list')}>
                <li>화봉시장 앞 도보2분, 동아청구아파트 앞 도보2분</li>
              </ul>
            </li>
            <li>
              <span className={cx('title')}>
                <RiBus2Fill size={24} color="orange" /> 버스
              </span>
              <ul className={cx('list')}>
                <li>일반 102</li>
                <li>일반 112</li>
                <li>일반 122</li>
                <li>일반 205</li>
                <li>일반 216</li>
                <li>일반 947</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <strong className={cx('title')}>양산점</strong>
          <iframe
            className={cx('map')}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.3714159380634!2d129.03689802647682!3d35.34642774829199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356899d083e50f15%3A0x1fcc780f3ba9db71!2z6rG06rCV67Cx7IS47ZWc7J2Y7JuQ!5e0!3m2!1sko!2skr!4v1714121743821!5m2!1sko!2skr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <ul className={cx('info')}>
            <li>
              <span className={cx('title')}>
                <RiMapPinLine size={24} color="#00a098" />
                주소
              </span>
              <ul className={cx('list')}>
                <li>경남 양산시 중앙로 178 1층 건강백세한의원</li>
              </ul>
            </li>
            <li>
              <span className={cx('title')}>
                <RiWalkFill size={24} color="#00a098" />
                도보
              </span>
              <ul className={cx('list')}>
                <li>신한은행.양산시2청사 도보 3분거리</li>
              </ul>
            </li>
            <li>
              <span className={cx('title')}>
                <RiBus2Fill size={24} color="green" /> 버스
              </span>
              <ul className={cx('list')}>
                <li>일반 10</li>
                <li>일반 11</li>
                <li>일반 12</li>
                <li>일반 13</li>
                <li>일반 21</li>
                <li>일반 23</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
