import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('container')}>
      <div className={cx('wrapper')}>
        <div>
          <p>
            <span>울산본점 : 울산 북구 화봉로 74 건강백세 한의원</span>
            <span>양산점 : 양산시 중앙로 178번지 1층 건강백세 한의원</span>
          </p>
          <p>
            <span>사업자 등록번호 : 620-91-06937</span>
            <span>대표원장 : 임정권</span>
            <span>고객센터 : 052-289-4878</span>
          </p>
        </div>
        <p>COPYRIGHT 2018 건강백세 한의원 ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
