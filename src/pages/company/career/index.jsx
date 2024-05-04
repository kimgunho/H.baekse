import classNames from 'classnames/bind';

import Title from '@/components/global/Title';

import styles from './index.module.scss';
import SRC from '../../../../public/assets/images/sub/company/career.jpg';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <Title title="의료진소개" />
      <div className={cx('box')}>
        <div className={cx('info')}>
          <strong>대표원장 프로필</strong>
          <p className={cx('bold')}>임정권 : 現)건강백세한의원 대표원장</p>
          <p>논문 1) 우루시올을 제거한 칠피를 이용한 폐암에서 항암효능</p>
          <p>논문 2) 칠피 물추출물의 면역관련 세포주 및 마우스비장세포에서의 면역조절 효과</p>
          <br />
          <br />
          <br />
          <br />
          <strong>주요 약력</strong>
          <ul>
            <li>대구한의대학교 졸업</li>
            <li>대구한의대학교 한의과대학 졸업</li>
            <li>경희대학교 한의과대학원 석사 졸업</li>
            <li>경희대학교 한의과대학원 박사 졸업</li>
            <li>前)울산 울주군보건소 진료과장</li>
            <li>前)홍제한의원 진료원장</li>
            <li>척추신경 추나의학회 회원</li>
            <li>대한 침구학회 회원</li>
            <li>대한 약침학회 회원 </li>
          </ul>
        </div>
        <img src={SRC} alt="" />
      </div>
    </div>
  );
};

export default Page;
