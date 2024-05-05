import classNames from 'classnames/bind';
import { RiCheckDoubleFill } from 'react-icons/ri';

import Title from '@/components/global/Title';
import COLD from '../../../../public/assets/images/sub/sub03/4.jpeg';
import COLD2 from '../../../../public/assets/images/sub/sub03/5.jpg';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <Title
        title="감기"
        desc={[
          '내 몸이 허약한 틈을 타서 병원균이나 바이러스 등이 내 몸에 침범하여 염증을 일으킨 것입니다.',
          '또한 감기를 상한이라고 하여 내 몸이 차가워지거나',
          '내몸이 차가운 자극에 노출되어 감기를 하게 된다고 인식하고 있습니다.',
        ]}
      />
      <div className={cx('part')}>
        <strong className={cx('title')}>감기의 증상</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <p className={cx('desc')}>
              감기의 증상은 아주 다양합니다. 대표적으로 열이나고 춥기도 하고 여기 저기 아프고 콧물 기침 가래 등이
              있습니다. 감기가 걸리면 우리 몸의 생리적 기능도 떨어져 입맛이 없고 소화가 잘 안 되고 기운이 없어서
              어지럽기도 합니다.
              <br />
              <br />
              감기는 7~10일 이내에 치료가 됩니다. 하지만 감기가 효과적으로 치료되지 않고 오래 하거나 재발을 반복하는
              경우에는 비염, 축농증, 기관지염, 폐렴, 천식 등으로 이행할 수 있으며 이러한 만성 질환으로 허약, 식욕부진,
              성장장애, 집중력장애 등의 또 다른 문제들이 발생하게 됩니다.
            </p>
            <ul className={cx('list')}>
              <li>
                <RiCheckDoubleFill size={24} />
                발열 오한
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                통증 / 머리, 목, 전신 근육과 관절의 통증
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                기침, 가래
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                콧물, 코막힘
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                소화불량, 설사
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                어지럼
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                피로감
              </li>
            </ul>
          </div>
          <img src={COLD} alt="" />
        </div>
      </div>
      <div className={cx(['part', 'bg'])}>
        <strong className={cx('title')}>감기의 치료</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <p className={cx('desc')}>
              감기는 내몸이 약해져서 생기는 질환이므로 감기를 치료하는 것과 함께 비염, 축농증, 천식 등의 질환을 살펴서
              치료를 같이 해주는 것이 필수 입니다. 그와 함께 인체의 면역력을 높여주는 근본치료도 같이 해야지만, 치료 및
              예방까지 할 수 없습니다.
            </p>
            <ul className={cx('list')}>
              <li>01. 감기 한약 및 면역 강화 한약</li>
              <li>02. 침치료</li>
              <li>03. 면봉치료</li>
              <li>04. 뜸치료</li>
              <li>05. TDP 온열치료</li>
              <li>06. 네블라이져 향기치료</li>
              <li>07. 산소치료</li>
              <li>08. 적외선 치료</li>
              <li>09. 코, 목 스프레이 및 비염고 치료</li>
            </ul>
          </div>
          <img src={COLD2} alt="" />
        </div>
      </div>
      <div className={cx('part')}>
        <strong className={cx('title')}>자주 묻는 질문</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <ul className={cx('questions')}>
              <li>
                <strong className={cx('question')}>감기로 열이 나면 시원하게 해 줘야 한다?</strong>
                <p className={cx('answer')}>
                  감기를 할 떄 열을 내는 것은 우리 인체의 면역력을 강하게 해서 효과적으로 감기를 낫게 하기 위함입니다.
                  <br />
                  이럴 때 우리 몸을 시원하게 만들면 면역력이 약해져서 감기가 잘 낫지 않고 오래가는 원인이 됩니다.
                  <br /> 머리는 시원하게 해주셔도 괜찮지만 몸의 다른곳은 보온을 해주는 것이 좋습니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>기침과 콧물, 열은 빨리 없애야 될 증상이다?</strong>
                <p className={cx('answer')}>
                  기침과 콧물이나 열은 우리 몸에서 효과적으로 이물질이나 병원균, 바리어스 등을 내쫓기 위함입니다.
                  <br />
                  따라서, 단순히 기침과 콧물, 열을 없애기 위한 치료보다는
                  <br /> 우리 인체의 면역력을 강하게 해서 인체 스스로가 낫게 하는것이 더욱 좋습니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>아플때는 많이 먹는 게 좋다?</strong>
                <p className={cx('answer')}>
                  아플때 많이 먹으면 잘 낫는다고 무리해서 많이 먹게되면 먹은 음식을 소화시키기 위해서 우리 몸에서 많은
                  <br />
                  에너지를 소모하게 되어 오히려 감기를 낫게 하는데 더욱 시간이 걸리고 또한 감기로 인해 약해진 소화기에
                  질병이 생길수 있습니다.
                  <br /> 감기를 하는 동안은 충분한 수분을 공급하고 위장에 부담이 되지 않도록 드시는 것 이 좋습니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>감기를 할때 목욕이나 사우나를 하면 좋다?</strong>
                <p className={cx('answer')}>
                  감기를 할 때 목욕이나 사우나 등으로 따뜻하게 있거나 땀을 많이 빼면 일시적으로 몸이 가벼운 느낌이
                  <br />
                  들지만 젖은 몸이 빨리 식고 땀으로 인한 기운 소모로 인해 몸의 에너지가 많이 소모되어 감기가 심해지는
                  요인이 됩니다.
                  <br /> 옷을 입고 에너지 소모가 적은 족욕을 하면 감기를 낫게 하는데 도움이 됩니다.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
