import classNames from 'classnames/bind';
import { RiCheckDoubleFill } from 'react-icons/ri';

import Title from '@/components/global/Title';
import RHINITIS from '../../../../public/assets/images/sub/sub03/6.jpeg';
import RHINITIS2 from '../../../../public/assets/images/sub/sub03/7.jpg';
import RHINITIS3 from '../../../../public/assets/images/sub/sub03/8.jpeg';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <Title
        title="비염"
        desc={[
          '가장 큰 요인으로는 유전적인 영향이며 산업화로 인한 대기오염, 정신적 노동뿐만 아니라',
          '현대인들의 스트레스, 서구화된 식단과 편의위주의',
          '인스턴트 음식, 곰팡이, 먼지 , 진드기 등으로 호흡기의 부담이 점점 늘어나고 기능이 약해져서 생기게 됩니다.',
        ]}
      />
      <div className={cx(['part'])}>
        <strong className={cx('title')}>비염의 원인</strong>
        <ul className={cx('circleList')}>
          <li>
            <span className={cx('no')}>01</span> 유전적인 영향
          </li>
          <li>
            <span className={cx('no')}>02</span> 대기오염
          </li>
          <li>
            <span className={cx('no')}>03</span> 스트레스
          </li>
          <li>
            <span className={cx('no')}>04</span> 인스턴트 음식, 곰팡이, 먼지, 진드기
          </li>
          <li>
            <span className={cx('no')}>05</span> 감기후유증
          </li>
          <li>
            <span className={cx('no')}>06</span> 감기약이나 항생제와 같은 약물 남용으로 인한 면역저하
          </li>
        </ul>
      </div>
      <div className={cx(['part', 'bg'])}>
        <strong className={cx('title')}>비염 증상</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <p className={cx('desc')}>
              대표적인 증상으로는 코막힘, 지속적인 콧물, 콧물이 목으로 넘어가서 생기는 가래와 기침 등이 있습니다. 비염이
              오래되거나 증상이 심할 때는 두통과 머리의 무거움이 호소되고 잦은 미열이 발생하게 됩니다. 그리고 입맛도
              떨어져 자극적인 맛의 과자나 사탕종류만 찾거나 음식을 입속에 넣어두고 씹거나 삼키지를 않고 먹기 간편한
              음료류의 음식을 많이 찾게 됩니다. 또한 감기를 자주 반복하게 되는 현상이 나타납니다.
            </p>
            <ul className={cx('list')}>
              <li>
                <RiCheckDoubleFill size={24} />
                지속적인 콧물
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                코막힘
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                재채기
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                두통
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                가래와 기침
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                킁킁거림
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                수면코골이
              </li>
            </ul>
          </div>
          <img src={RHINITIS} alt="" />
        </div>
      </div>
      <div className={cx(['part'])}>
        <strong className={cx('title')}>비염 종류</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <p className={cx('desc')}>
              시기별로 볼 때는 감기 등의 합병증으로 생기는 급성 비염, 비염이 오래되어서 반복적으로 나타나는 만성비염이
              있으며, 증상으로 보면 알레르기 비염, 위축성 비염, 비후성 비염, 혈관운동성 비염등이 있습니다. 그리고
              비염으로 중이염이 잘 생기게 되고 비염이 오래 진행되면 축농증으로 진행되는 경우가 많습니다.
            </p>
            <ul className={cx('list')}>
              <li>
                <strong className={cx('title')}>급성비염</strong>감기등의 합병증으로 생기는 비염
              </li>
              <li>
                <strong className={cx('title')}>만성비염</strong>오랫동안 잘 낫지 않거나 자주 재발되는 비염
              </li>
              <li>
                <strong className={cx('title')}>알레르기성 비염</strong>알레르기 요인에 의한 비염
              </li>
              <li>
                <strong className={cx('title')}>비후성비염</strong>콧속의 비점막이 부어서 생기는 비염
              </li>
              <li>
                <strong className={cx('title')}>기타</strong>위축성비염, 약물성비염, 혈관운동성비염
              </li>
            </ul>
          </div>
          <img src={RHINITIS2} alt="" />
        </div>
      </div>
      <div className={cx(['part', 'bg'])}>
        <strong className={cx('title')}>검사와진단</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <p className={cx('desc')}>
              비염의 원인을 정확히 파악하기 위하여 몇 가지 검사를 거체게 됩니다.
              <br /> 장부의 기능을 파악하기 위해서 양도락, 경락기능검사, 맥진검사 등을
              <br /> 거치게 되고 체성분 검사를 통해 영양상태 및 근육과 지방의 발달정도를 파악하여
              <br /> 빠른 회복을 위한 생활 습관을 지도하게 됩니다.
              <br /> 기본적인 검사와 진료실에서의 진찰 및 내시경 검사를 통해 비염의 정도를 체크하고
              <br />
              필요에 따라서 축농증 검사로 축농증의 유무와 비강내 조직들의 비대 여부를 파악해서 개개인에 맞는 비염치료가
              들어가게 됩니다.
            </p>
            <ul className={cx('list')}>
              <li>01. 접수</li>
              <li>02. 설문지작성</li>
              <li>03. 키체중검사및 체성분검사(인바디검사)</li>
              <li>04. 양도락 맥진검사</li>
              <li>05. 비내시경검사 및 축농증 검사</li>
              <li>06. 진료상담 및 지도</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={cx(['part'])}>
        <strong className={cx('title')}>비염 치료</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <p className={cx('desc')}>
              근본치료를 위해 개개인의 몸상태에 맞추어 처방된 호흡기 면역을 증진시키는 한약을 복용하게 됩니다. 그리고
              천연한약으로 만든 각종 호흡기 치료제를 이용하여 비점막의 염증을 가라앉혀 부은 것은 진정시키고 위축된
              점막에 탄역을 주게 됩니다. 향기치료, 호흡기물리치료, 산소치료, 뜸치료 등을 이용해서 호흡기의 빠른 회복을
              도모하게 됩니다.
            </p>
            <ul className={cx('list')}>
              <li>01. 치료및 면역강화를 위한 한약</li>
              <li>02. 침치료</li>
              <li>03. 면봉치료</li>
              <li>04. 뜸치료</li>
              <li>05. TDP온열치료</li>
              <li>06. 네블라이저 향기치료</li>
              <li>07. 산소치료</li>
              <li>08. 적외선 치료</li>
              <li>09. 비염젤리치료</li>
              <li>10. 비염 스프레이 및 비염고 치료</li>
            </ul>
          </div>
          <img src={RHINITIS3} alt="" />
        </div>
      </div>
      <div className={cx('part')}>
        <strong className={cx('title')}>자주 묻는 질문</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <ul className={cx('questions')}>
              <li>
                <strong className={cx('question')}>비염은 한번 치료해서 나으면 다음에 다시 재발하지 않나요</strong>
                <p className={cx('answer')}>
                  비염은 감기와 같이 한번 나았다고 해도 면역력이 떨어지면 다시 나타나게 됩니다.
                  <br /> 비염의 증상이 있는 시기에는 적극적으로 치료를 해서 증상을 없애야 하구요
                  <br /> 증상이 없어진 이후에는 꾸준한 면역 증강 관리가 필요합니다.
                  <br /> 몸이 아프기 전에 면역력을 강화시키는 한약을 규칮거으로 복용하게 되면 비염증상 없이 편안한
                  생활이 가능합니다.
                  <br /> 내 몸이 건강하면 감기를 잘 안 하듯이 비염도 평소에 건강관리로 조절할 수 있습니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>탕약 복용없이 한방 치료만 받으면 안되나요?</strong>
                <p className={cx('answer')}>
                  치료만으로도 당장의 증상호전은 될 수 있으나 근본치료에 이르기 위해서는 탕약복용을 병행 해야합니다.
                  <br />
                  비염의 근본 원인은 내 몸의 면역력이 약해졌기 때문입니다.
                  <br /> 개개인마다 생김생김이 다르듯이 같은 비염 증상이라고 해도 사람마다 치료법이 달라집니다.
                  <br /> 개개인의 몸 상태에 맞춘 면역 증강 한약 복욕으로 병을 이길 수 있는 근원의 힘을 키워주면 치료가
                  더 잘 진행될 수 있습니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>치료기간이 얼마나 걸리나요?</strong>
                <p className={cx('answer')}>
                  비염의 상태에 따라 다르지만 간단한 증상은 며칠이내 치료될 수 있으며 만성이거나 증상이 심한 경우에는
                  <br />
                  보통 1개월~ 3개월 정도 치료기간이 소요됩니다.
                  <br /> 면역력이 많이 딸어져 있고 생활 습관이 안 좋거나 한의사의 지시를 잘 지키지 못하는 환경에서는
                  3개월 이상 걸릴수도 있습니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>비염을 있을 때 수영을 해도 되나요?</strong>
                <p className={cx('answer')}>
                  수영은 폐활량을 늘여주고 전신지구력을 강화시켜주는 운동이므로 수영이 비염에 나쁜 운동은 아닙니다.
                  <br />
                  하지만 수온이 차갑거나 물이 청결하지 못할 셩우에는 비염을 악화시킬 수 있으니 주의해야 합니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>비염도 유전되나요?</strong>
                <p className={cx('answer')}>
                  네 유전될수 있습니다.
                  <br /> 부모가 비염 천식 아토피와 같은 알러지 질환이 있다면 자녀 역시 알러지 질환이 발병할 확률이 더
                  높습니다.
                  <br /> 자녀의 타고난 면역력에 따라 발현되는 시기는 달라질 수 있습니다.
                  <br /> 체력을 기르고 면역을 증강시키기 위해 지속적인 관심과 예방적 차원에서 관리가 필요합니다.
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
