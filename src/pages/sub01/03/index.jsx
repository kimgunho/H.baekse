import classNames from 'classnames/bind';
import { RiCheckDoubleFill } from 'react-icons/ri';

import Title from '@/components/global/Title';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <Title title="교통사고 휴유증" />
      <div className={cx('wrapper')}>
        <div className={cx('part')}>
          <strong>
            교통사고가 났는데도
            <br /> 나는 별로 아프지 않다고요?
          </strong>
          <p>
            당장은 아프지 않더라도 시간이 지나면서 여러 증상이 나타날수 있습니다.
            <br /> 꼭 진찰을 받고 적절한 치료를 받으셔야 후유증이 남지 않습니다. 절대 방치하면 안됩니다.
          </p>
        </div>
        <div className={cx('part')}>
          <strong>교통사고 후유증이란?</strong>
          <p>
            교통사고를 당하고 일정한 시간이 흐른 후 근골격계 통증(목, 허리, 어깨, 무릎, 팔다리 등) 어지러움, 불안, 불면,
            손발저림 들의 이상증상들을 느끼게 되는 경우를 말합니다. 교통사고로 인해 충격을 받으면 우리 몸에 어혈이
            발생하여 원활하던 혈액순환에 장애가 일어나고, 시간이 지나면 목 허리 어깨 등의 근육과 관절이 뻣뻣해지고
            아프거나 저리기 시작합니다. 겉에선 보이지 않는 몸 속의 뇌와 장기들이 자극을 받을 경우 두통, 어지러움,
            구역감, 가슴두근거림, 불면 등의 증상이 나타납니다.
          </p>
        </div>
        <div className={cx('part')}>
          <strong>
            교통사고 후유증 증상을
            <br /> 체크해보세요.
          </strong>
          <ul className={cx('list')}>
            <li>
              <RiCheckDoubleFill size={24} />
              엑스레이나 MRI, CT, 혈액검사 등에는 이상이 없으나 통증과 불편감이 있다.
            </li>
            <li>
              <RiCheckDoubleFill size={24} />
              통증이 낮보다는 밤에, 추운 날씨의 경우 더 심해진다.
            </li>
            <li>
              <RiCheckDoubleFill size={24} />
              몸이 계속 피곤하고 우울한 기분이 든다.
            </li>
            <li>
              <RiCheckDoubleFill size={24} />
              두통, 어지러움, 구역감 등의 증상이 있다.
            </li>
            <li>
              <RiCheckDoubleFill size={24} />
              가슴이 두근거리는등 불안감이 들고 잠도 잘 오지 않는다.
            </li>
            <li>
              <RiCheckDoubleFill size={24} />
              목, 어깨, 허리가 쑤시고 지속적인 통증이 있다.
            </li>
            <li>
              <RiCheckDoubleFill size={24} />
              팔다리가 자주 저리는 증상이 있다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
