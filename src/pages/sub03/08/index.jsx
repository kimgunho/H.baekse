import classNames from 'classnames/bind';
import { RiCheckDoubleFill } from 'react-icons/ri';

import Title from '@/components/global/Title';
import BABY from '../../../../public/assets/images/sub/sub03/17.jpeg';
import BABY2 from '../../../../public/assets/images/sub/sub03/18.jpeg';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <Title title="돌보약" />
      <div className={cx('part', 'bg')}>
        <strong className={cx('title')}>돌보약에 대하여</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <p className={cx('desc')}>
              아기들은 출생하면서 엄마로부터 면역력을 받고 나옵니다. 물려받은 면역력으로 생후 6개월까지 비교적 건강하게
              보내게 됩니다. 6개월 이후 부터는 이 면역력이 점점 약해지기 시작해서 돌 무렵에는 많이 약해지게 됩니다. 돌
              무렵에는 걸음마로 인해 활동반경이 넓어지고 신체 활동도 늘어나게 됩니다. 또한 인지능력과 어휘능력 등의
              뇌기능도 많이 발당하게 되는데 이에 대한 궁금증으로 손과 입 등으로 여러 가지 사물들을 접하게 됩니다.
              두뇌발달에는 아주 좋은 행동이지만 병원균에 대한 접촉을 늘어나게 되는 위험성도 가지고 있죠
            </p>
            <p className={cx('desc')}>
              또한 만 2~3세까지는 1차 급성장 시기이므로 이때의 성장력이 최종키에 아주 큰 영향을 줍니다.
            </p>
            <p className={cx('desc')}>
              이러한 돌 무렵의 인체의 발달과 변화에 따라서 약해진 면역력을 높여주고, 왕성한 뇌기능을 더욱 발달 시켜주며
              건강하게 잘 자라도록 도와주는 것이 바로 돌보약입니다. 돌 보약은 돌 무렵의 면연력을 키워 평생의 건강에 큰
              밑거름이 됩니다.
            </p>
          </div>
          <img src={BABY} alt="" />
        </div>
      </div>
      <div className={cx('part')}>
        <strong className={cx('title')}>첫 보약 시기와 필요한 친구들</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <p className={cx('desc')}>
              돌 전후까지 모유수유를 충분히 하고 이유식도 잘 해서 영양상태가 양호하고 건강상태도 좋아서 병치레를 잘 안
              한다면 첫돌부터 보약을 시작하는 것이 좋습니다. 하지만 출생 후 6개월 이내에 많이 아팠거나 반복해서 아팠다면
              돌 이전이라도 빨리 보약을 먹여서 면역력을 키워주어야 합니다. 건강은 아프기 전에 미리미리 관리하는것이
              최선입니다.
            </p>
            <ul className={cx('list')}>
              <li>
                <RiCheckDoubleFill size={24} /> 밥을 잘 안먹고 음식을 입에만 물고있다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 복통이나 구토가 자주있다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 편식이 심하다
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 코피를 잘 흘린다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 손발이 차다
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 감기를 오래하거나 자주 반복한다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 환절기에 자주 아프다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 기괸자염, 폐렴, 알레르기 비염등의 호흡기 질환을 자주 앓는다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 뼈대가 약하고 성장 발육이 느리다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 활동량이 적고 쉽게 지친다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 자다가 이유없이 운다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 안색이 창백하다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 예민하고 자주 불안해한다.
              </li>
            </ul>
          </div>
          <img src={BABY2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Page;
