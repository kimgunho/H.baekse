import classNames from 'classnames/bind';
import { RiCheckDoubleFill } from 'react-icons/ri';

import Title from '@/components/global/Title';
import OTITIS from '../../../../public/assets/images/sub/sub03/9.jpg';
import OTITIS2 from '../../../../public/assets/images/sub/sub03/10.jpg';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <Title title="중이염" />
      <div className={cx(['part'])}>
        <strong className={cx('title')}>중이염이란?</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <p className={cx('desc')}>
              중이염은 이 이관의 열리고 닫히는 작용이 비정상적이어서 중이내에 삼출액이 고이거나,
              <br /> 이관을 통해서 세균이나 바이러스가 중이내로 침범하여서 염증이 생기는 것입니다.
              <br />
              <br />
              중이는 고막에서부터 이소골로 이어져 달팽이관까지 연결되어 소리를 전달하는 부위로 공기로 채워져있습니다.
              <br /> 이 중이와 코의 뒤쪽으로는 이관에 의해서 연결이 되어있는데,
              <br /> 이 이관을 통해서 중이로 공기가 들어오게 됩니다.
              <br />
              이관이 열리고 닫히는 작용이 원활하면 중이내는 대기와 같은 압력을 유지하고,
              <br /> 이 상태에서 고막과 이소골은 원활히 진동하여 소리를 잘 전달할 수 있습니다.
              <br /> 특히 소아의 경우는 성인에 비하여 상대적으로 이관의 길이가 짧고, 넓고, 각도가 수평에 가깝기 때문에
              쉽게 염증이 침범할 수 있습니다.
            </p>
          </div>
          <img src={OTITIS} alt="" />
        </div>
      </div>
      <div className={cx('flexContainer')}>
        <div className={cx('wrapper')}>
          <div className={cx('container')}>
            <strong className={cx('title')}>중이염 종류</strong>
            <div className={cx('box')}>
              <div className={cx('info')}>
                <ul className={cx('list')}>
                  <li>
                    <strong className={cx('title')}>급성 중이염</strong>중이강에 발생하는 모든 급성 염증으로 고막의
                    발적, 고막의 팽창, 중이내 화농액이 차는 등의 징후가 나타납니다.
                  </li>
                  <li>
                    <strong className={cx('title')}>삼출성중이염</strong>급성염증의 증상 없이 중이강내에 삼출액이 고이는
                    중이염입니다.
                  </li>
                  <li>
                    <strong className={cx('title')}>만성중이염</strong>급성중이염이나 삼출성중이염이 낫지않고 3개월 이상
                    진행되는 중이염으로 고막에 구멍이 생기기도 합니다.
                  </li>
                  <li>
                    <strong className={cx('title')}>진주종성중이염</strong>중이강 내의 점막에 피부조직(편평상피)이
                    침입하여 각질을 축척하면서 점차 주위 조직을 파괴시키는 중이염입니다. 하얗게 쌓인 각질이 진주처럼
                    보인다고 하여 붙여진 이름입니다.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={cx('container')}>
            <strong className={cx('title')}>중이염 증상</strong>
            <div className={cx('box')}>
              <div className={cx('info')}>
                <ul className={cx(['list', 'row'])}>
                  <li>
                    <RiCheckDoubleFill size={24} />귀 주위 통증
                  </li>
                  <li>
                    <RiCheckDoubleFill size={24} />
                    발열
                  </li>
                  <li>
                    <RiCheckDoubleFill size={24} />
                    어지러움
                  </li>
                  <li>
                    <RiCheckDoubleFill size={24} />귀 밖으로 농 배출
                  </li>
                  <li>
                    <RiCheckDoubleFill size={24} />
                    귀속의 압박감
                  </li>
                  <li>
                    <RiCheckDoubleFill size={24} />
                    일시적 청력감퇴
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx(['part'])}>
        <strong className={cx('title')}>중이염 치료</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <p className={cx('desc')}>
              중이염은 많은 경우가 비염과 병발하게 됩니다.
              <br />
              비강내 점막의 부종으로 이관의 열고 닫히는 기능(개폐작용)에 장애가 오거나,
              <br /> 비염이 중이까지 영향을 주게 되기 때문입니다.
              <br />
              대부분의 중이염은 이관의 개폐작용을 원활히 해주면 수술없이 치료가 가능합니다.
            </p>
            <ul className={cx('list')}>
              <li>01. 치료와 면역강화를 위한 한약</li>
              <li>02. 침치료</li>
              <li>03. 면봉치료</li>
              <li>04. 뜸치료</li>
              <li>05. TDP 온열치료</li>
              <li>06. 네블라이져 향기 치료</li>
              <li>07. 산소 치료</li>
              <li>08. 적외선 치료</li>
              <li>09. 광선 치료</li>
            </ul>
          </div>
          <img src={OTITIS2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Page;
