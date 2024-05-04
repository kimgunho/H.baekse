import classNames from 'classnames/bind';
import { RiCheckDoubleFill } from 'react-icons/ri';

import Title from '@/components/global/Title';
import BENEFIT01 from '../../../../public/assets/images/sub/sub01/healImg01.jpg';
import BENEFIT02 from '../../../../public/assets/images/sub/sub01/healImg02.jpg';
import BENEFIT03 from '../../../../public/assets/images/sub/sub01/healImg03.jpg';
import BENEFIT04 from '../../../../public/assets/images/sub/sub01/healImg04.jpg';
import BENEFIT05 from '../../../../public/assets/images/sub/sub01/healImg05.jpg';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <Title title="치료진행" />
      <div className={cx('wrapper')}>
        <div className={cx('cure')}>
          <strong>치료진행 과정</strong>
          <ul className={cx('list')}>
            <li>
              <img src={BENEFIT01} alt="한약치료" />
              <strong>한약치료</strong>
              <p>
                물리적인 치료만으로는 제거할 수 없는 어혈을 신속하게 풀어주고 틀어진 척추, 관절, 근육을 강화하는
                한약재들로 구성된 탕약을 처방하여 통증을 없애고 몸을 건강한 상태로 회복시킵니다.
              </p>
            </li>
            <li>
              <img src={BENEFIT02} alt="" />
              <strong>침&전기침</strong>
              <p>
                침은 사고로 인해 손상을 받은 인대, 근육의 재생을 촉진시키면서 통증을 다스리는데 효과적입니다. 골절의
                후유증으로 부종과 통증, 감각이상이 지속될 때에도 뛰어난 효과를 보입니다. 전기침치료는 침 치료를 한
                부위에 전기자극을 가해주어 긴장된 근육을 풀어주고 통증을 감소시키는 치료법입니다.
              </p>
            </li>
            <li>
              <img src={BENEFIT03} alt="부항" />
              <strong>부항</strong>
              <p>
                부항은 한의학의 대표적인 어혈제거 치료법으로써 피부와 경혈에 음압자극을 주어 어혈과 노폐물, 독소를
                없애주는 효능이 있습니다. 교통사고로 인한 통증이 쉽게 사라지지 않을 때 부항으로 혈이 뭉친 곳을 풀어주면
                효과가 좋습니다.
              </p>
            </li>
            <li>
              <img src={BENEFIT04} alt="추나" />
              <strong>추나</strong>
              <p>
                교통사고의 충격으로 인해 틀어진 목, 허리, 척추, 골반등에 직접 힘을 가하여 바로 잡아주는 치료법입니다.
                틀어진 척추를 바로잡아 근육, 인대 및 몸 전체의 상태를 정상으로 회복시켜 줍니다.
              </p>
            </li>
            <li>
              <img src={BENEFIT05} alt="어혈약침&봉약침" />
              <strong>어혈약침&봉약침</strong>
              <p>
                어혈약침은 어혈제거에 뛰어난 효능을 보이는 약재들로 구성되어 통증부위의 어혈을 효과적으로 제거합니다.
                봉약침은 꿀벌의 독침에서 약효성분을 추출하여 정제한 것으로 강력한 소염작용과 통증완화 작용이 있습니다.
              </p>
            </li>
          </ul>
        </div>
        <div className={cx('benefits')}>
          <strong>교통사고 치료의 장점</strong>
          <ul className={cx('list')}>
            <li>
              <RiCheckDoubleFill size={24} />
              교통사고 주범의 원인인 어혈을 빠르게 제거하는 치료
            </li>
            <li>
              <RiCheckDoubleFill size={24} />
              비틀어진 척추와 뼈를 원래대로 회복시키고 장기까지 다스리는 근본치료
            </li>
            <li>
              <RiCheckDoubleFill size={24} />
              후유증의 재발을 방지하는 치료
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
