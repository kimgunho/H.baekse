import classNames from 'classnames/bind';
import { RiCheckDoubleFill } from 'react-icons/ri';

import Title from '@/components/global/Title';
import KID from '../../../../public/assets/images/sub/sub03/19.jpeg';
import KID2 from '../../../../public/assets/images/sub/sub03/20.jpeg';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <Title title="시력저하" />
      <div className={cx('part')}>
        <strong className={cx('title')}>책을 많이 읽는 어린이의 경우에 눈이 빨리 나빠지는 경우가 많습니다.</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <p className={cx('desc')}>
              너무 가까운 거리에서 책을 읽게 되면 수정체가 굵어져서 가까이 있는 사물은 잘 보이고 멀리 있는 사물은 잘
              보이지않게 되는 근시의 발생율이 높아집니다. 또한 컴퓨터와 게임기, 스마트폰의 사용량이 늘어나면서 시력이
              빨리 떨어지는 요인이 되며 눈의 피로 또한 증가하게 되었습니다. 그리고 실외활동이 줄어들고 실내생활이
              늘어나면서 먼 거리를 보는 경우가 줄어들고 가까운 사물만 많이 보게 되는 것도 시력저하의 큰 요인이 됩니다.
              시력저하의 원인으로는 아래 요인들이 있습니다.
            </p>
            <ul className={cx('list')}>
              <li>
                <RiCheckDoubleFill size={24} /> 잘못된 독서 습관
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 컴퓨터 게임기 스마트폰 등의 잦은 이용
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 실내생활을 늘어나고 실회활동이 줄어듬
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 눈 피로 증가
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 너무 이른 안경 착용
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 대형 TV 시청{' '}
              </li>
            </ul>
          </div>
          <img src={KID} alt="" />
        </div>
      </div>
      <div className={cx('part', 'bg')}>
        <strong className={cx('title')}>종류 및 증상</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <ul className={cx('list')}>
              <li>
                <strong className={cx('title')}>근시</strong>
                안구내의 초점거리가 짧아져서 망막 앞에 초점이 맺혀 사잉 흐려집니다. 가까운 거리의 사물은 보이고 멀리
                있는 사물이 흐리게 보입니다.
              </li>
              <li>
                <strong className={cx('title')}>원시</strong>
                안구내의 초점거리가 길어져서 망막보다 뒤쪽에 초점이 맺혀서 사잉 흐려집니다. 멀리 있는 사물은 보이고,
                가까이 있는 사물이 흐리게 됩니다.
              </li>
              <li>
                <strong className={cx('title')}>난시</strong>
                각막이나 수정체의 굴절률이 고르지 못해서 초점이 망막에 여러개가 맺혀져서 사물이 겹쳐져서 흐리게
                보입니다.
              </li>
              <li>
                <strong className={cx('title')}>약시</strong>
                한쪽 눈 또는 양쪽 눈의 교정 시력이 정상 시력인 1.0이 안될 떄를 약시라고 하며 시각장애의 분류상 약시는
                양쪽 눈의 교정 시력이 0.04~0.3미만인 경우를 말합니다. 참고로 0.02~0.04미만은 준맹, 0~0.02미만은 맹이라고
                합니다.
              </li>
              <li>
                <strong className={cx('title')}>부동시</strong>
                양동 눈의 굴절률이 2디옵터 이상 차이가 나는 경우로 흔히 짝눈이라고 이야기 합니다. 2디옵터 이상 차이가
                나면 양쪽 눈의 시력 차이가 커서 복시현상이 나타나거나 한 쪽 눈으로만 보게 될 수있습니다.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={cx('part')}>
        <strong className={cx('title')}>검사와진단</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <p className={cx('desc')}>
              성장장애의 원인을 정확하게 파악하기 위하여 몇 가지 검사를 거치게 됩니다. 성장판 검사로 성장판의 개폐여부와
              뼈나이를 파악하고 앞으로 어느정도 자랄 수 있을 지 확인해봅니다. 그리고 장부의 기능을 파악하기 위해서
              양도락, 경락기능검사, 맥진 검사 등을 거치게 되고, 체성분 검사를 통해 근육의 발달과 체지방량을 체크하여
              적잘한 운동과 식사습관을 처방하게 됩니다.
            </p>
            <p className={cx('desc')}>
              기본적인 검사와 진료실에서의 진찰을 통해 조화가 흐트러지고 기능이 떨어진 장부를 찾아서 개개인에 맞는
              성장장애치료가 들어가게 됩니다.
            </p>
            <ul className={cx('list')}>
              <li>01. 접수</li>
              <li>02. 기초 설문지 작성</li>
              <li>03. 키 몸무게 측정</li>
              <li>04. 양도락 검사</li>
              <li>05. 시력 측정</li>
              <li>06. 진찰상담</li>
              <li>07. 치료</li>
            </ul>
          </div>
          <img src={KID2} alt="" />
        </div>
      </div>
      <div className={cx('part')}>
        <strong className={cx('title')}>시력치료</strong>
        <ul className={cx('circleList')}>
          <li>
            <span className={cx('no')}>01</span> 한약 치료
          </li>
          <li>
            <span className={cx('no')}>02</span> 침.뜸 치료
          </li>
          <li>
            <span className={cx('no')}>03</span> 추나 치료
          </li>
          <li>
            <span className={cx('no')}>04</span> 경혈 및 경락 마사지
          </li>
          <li>
            <span className={cx('no')}>05</span> 안구 운동 훈련
          </li>
          <li>
            <span className={cx('no')}>06</span> 원근 초점 훈련
          </li>
          <li>
            <span className={cx('no')}>07</span> 한방 눈 영양제
          </li>
        </ul>
      </div>
      <div className={cx('part')}>
        <strong className={cx('title')}>자주 묻는 질문</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <ul className={cx('questions')}>
              <li>
                <strong className={cx('question')}>수술이나 안경 없이도 시력이 좋아지나요?</strong>
                <p className={cx('answer')}>
                  건강백세 한의원 소아시력 클리닉은 우리 눈의 수정체의 조절력을 향상시켜 눈의 보는 능력을 향상시키기
                  때문에 수술이나 안경 없이도 시력이 좋아질 수 있습니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>한번 좋아진 시력은 유지가 되나요?</strong>
                <p className={cx('answer')}>
                  잘못된 생활습관이 교정되지 않으면 시력 클리닉을 통하여 향상된 시력은 다시 나빠질 수 있습니다. 우리
                  인체는 안 쓰게 되면 기능이 약해집니다. 열심히 훈련하고 치료해서 좋아진 눈의 기능을 꾸준히 잘 유지하기
                  위해서는 생활습관을 바로 잡아야 합니다
                </p>
              </li>
              <li>
                <strong className={cx('question')}>치료기간이 얼마나 걸리나요?</strong>
                <p className={cx('answer')}>
                  보통 3개월 정도 치료를 예상하시면 됩니다. 한의사의 지시를 잘 지키지 못하거나 시력이 많이 낮은 경우나,
                  보다 높은 시력을 원할 경우 더 오래 치료하게 됩니다. 1주일에 2회 치료를 받고 한번 치료할 때 30~40분
                  정도 시간이 소요됩니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>시력이 어느 정도 까지 좋아질수 있을까요?</strong>
                <p className={cx('answer')}>
                  정상시력인 1.0까지 시력이 좋아질수 있습니다. 치료를 시작 할 때의 시력에 따라서 1.0까지 회복하기까지의
                  치료기간은 차이가 있습니다. 한의사의 지시를 잘 따르고 치료에 성실히 임한다면 1.0이상의 시력도 충분히
                  가능합니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>시력 치료 시기는 언제가 좋을까요?</strong>
                <p className={cx('answer')}>
                  시력이 나쁜 것을 확인했을 때부터 바로 시력 치료를 시작하는것이 가장 좋습니다. 하지만 시력 치료를 하기
                  위해서는 한의사의 지시를 잘 따르고 시력 훈련도 집중력있게 해야하므로 대화가 통하여 집중이 가능한
                  시기에 치료를 하는 것이 좀 더 원활한 치료를 할 수 있습니다. 보통 초등학생 때부터 치료가 원활하다고
                  하겠습니다.
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
