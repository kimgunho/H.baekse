import classNames from 'classnames/bind';

import Title from '@/components/global/Title';
import DISK from '../../../../public/assets/images/sub/sub02/disk.jpeg';
import STENOSIS from '../../../../public/assets/images/sub/sub02/pc004006798.jpg';
import SHOULDER from '../../../../public/assets/images/sub/sub02/tica114m19030329.jpg';
import KNEE from '../../../../public/assets/images/sub/sub02/yaytg740408.jpg';
import LIST01 from '../../../../public/assets/images/sub/sub02/healImg01.jpg';
import LIST02 from '../../../../public/assets/images/sub/sub02/healImg02.jpg';
import LIST03 from '../../../../public/assets/images/sub/sub02/healImg03.jpg';
import LIST04 from '../../../../public/assets/images/sub/sub02/healImg04.jpg';
import LIST05 from '../../../../public/assets/images/sub/sub02/healImg05.jpg';
import LIST06 from '../../../../public/assets/images/sub/sub02/healImg06.jpg';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <Title title="통증 클리닉" desc="통증은 우리 몸의 이상 신호입니다. 참으면 더 큰 병이 될 수도 있습니다." />
      <div className={cx('wrapper')}>
        <div className={cx('flex')}>
          <div className={cx('box')}>
            <strong className={cx('title')}>디스크</strong>
            <div className={cx('info')}>
              <img src={DISK} alt="" />
              <p>
                4~5,5~6,6~7번 경추 및 4~5번 요추에서 호발되며 수핵의 팽륜이나 탈출로 인해 신경근이나 척수가 압박되어
                생기는 연성 디스크와 퇴행성 변화로 인해 골극이 신경근이나 척수를 눌러 생기는 경성 디스크로 나뉩니다.
                팔다리의 신경근성 증상(저림, 당김 등의 이상감각)을 일으키며 심할때는 근위축을 동반합니다. 잘못된 자세나
                척추주변 근육의 약화로 인해 관절 및 추가판에 지속적인 압박 및 부하로 인해 발생합니다.
              </p>
            </div>
          </div>
          <div className={cx('box')}>
            <strong className={cx('title')}>협착증</strong>
            <div className={cx('info')}>
              <img src={STENOSIS} alt="" />
              <p>
                선천성 혹은 후천성으로 척추관이 좁아지며 나이가 들수록 심해지며 신경학적 파행증상 및 연관성 하지통증이
                나타납니다. 연령변화에 따라 추간판이 좁아지고 비틀려서 발생합니다. 앉거나 웅크릴때 호전되는 특징을
                보입니다.
              </p>
            </div>
          </div>
          <div className={cx('box')}>
            <strong className={cx('title')}>오십견</strong>
            <div className={cx('info')}>
              <img src={SHOULDER} alt="" />
              <p>
                흔히 40~60대 주로 50대에 특별한 원인 없이 발병한다 해서 오십견이라 합니다. 정확한 의학용어는 동결견,
                유착성관절낭염이라 합니다. 오십견은 어깨통증으로 인해 어깨 관절 움직임의 제한을 가져옵니다.
                <br />
                <br />
                2~4개월 사이기간에는 통증이 가장 심하며 어깨운동의 제한이 발생되며 이후 4~12개월 사이에는 통증은
                감소하나 운동범위가 심하게 제한됩니다. 이후 1년에서 수년이 지나면 자연히 해결되거나 증상이 완화합니다.
              </p>
            </div>
          </div>
          <div className={cx('box')}>
            <strong className={cx('title')}>슬관절염</strong>
            <div className={cx('info')}>
              <img src={KNEE} alt="" />
              <p>
                퇴행성, 파괴성(류마티스, 자가면역질환),이차성관절염(외상,감염)이 있으며 이중 퇴행성 골관절염이 가장
                흔합니다.
                <br />
                <br />
                관절 내측에 호발되며 내반슬 변형이 오게됩니다. 55세 이상에 오며 비만과 가족력과 관련이 있습니다.
                초기에는 활동시에 오지만 나중에는 휴식시에도 통증이 발생합니다. 원인이 무엇이든지 간에 말기가 되면
                체중부하시 통증, 갑작스런 휘청거림, 강직, 관절의 종창이 와서 무릎을 완전히 구부리거나 펴지 못하게
                됩니다.
              </p>
            </div>
          </div>
        </div>
        <div className={cx('box')}>
          <strong className={cx('title')}>통증 치료과정</strong>
          <ul className={cx('list')}>
            <li>
              <img src={LIST01} alt="" />
              <strong>한약치료</strong>
              <p>
                증상에 맞게 제조된 탕약 및 환약으로 통증의 원인인 담, 어혈을 제거하는 동시에 근육 및 관전을
                강화시켜줍니다.
              </p>
            </li>
            <li>
              <img src={LIST02} alt="" />
              <strong>침치료</strong>
              <p>기혈 순환을 촉진하여 통증을 일으키는 뭉친 근육을 풀어주며 관절 운동을 원활하게 해줍니다.</p>
            </li>
            <li>
              <img src={LIST03} alt="" />
              <strong>뜸부항치료</strong>
              <p>근육 및 관절의 어혈을 제거하고 강화시켜줍니다.</p>
            </li>
            <li>
              <img src={LIST04} alt="" />
              <strong>추나치료</strong>
              <p>추나요법을 통해 척추 및 사지 관절의 아탈구 및 부정렬을 잡아주어 통증부위의 빠른 회복을 유도합니다.</p>
            </li>
            <li>
              <img src={LIST05} alt="" />
              <strong>약침치료</strong>
              <p>국소적 염증 및 어혈을 효과적으로 없애줍니다.</p>
            </li>
            <li>
              <img src={LIST06} alt="" />
              <strong>전침치료</strong>
              <p>침치료의 기혈순환 효과를 배가시켜줍니다</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
