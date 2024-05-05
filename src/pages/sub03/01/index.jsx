import classNames from 'classnames/bind';
import { RiCheckDoubleFill } from 'react-icons/ri';

import Title from '@/components/global/Title';
import KIDS from '../../../../public/assets/images/sub/sub03/1_1.jpeg';
import KID from '../../../../public/assets/images/sub/sub03/2.jpg';
import GROW from '../../../../public/assets/images/sub/sub03/3.jpeg';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <Title
        title="성장"
        desc={[
          '어린이 성장 부진의 원인부터 반드시 찾아야합니다. ',
          '가장 흔한 원인으로는 소화기가 약하거나 아파서 잘 못먹거나 영양소의 흡수기능이 떨어지는 것입니다.',
        ]}
      />
      <div className={cx('part')}>
        <strong className={cx('title')}>성장부진 원인</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <p className={cx('desc')}>
              성장장애의 반 정도의 경우가 이에 해당하고 그 다음이 감기나 비염. 천식 등의 호흡기 질환을 자주 하는
              경우입니다. 그리고 아토피성 피부염이나 알러지성 질환을 앓거나 야뇨증과 같은 비뇨기계 질환이 있는 경우에 잘
              안 크게 됩니다. 즉 우리 아이 몸에서 어디라도 약하거나 조화가 흐트러진 장부가 있으면 다른 장부의 기능에
              영향을 끼쳐 건강이나 자라는 힘이 약해지게 됩니다. 또 비만은 조기성숙을 유발하고 키성장에 나쁜 영향을
              미칩니다.
            </p>
            <ul className={cx('list')}>
              <li>
                <RiCheckDoubleFill size={24} />
                식욕부진과 편식
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                감기 복통 설사등 잦은 병치례
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                아토피 천식 비염등 알레르기질환
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                운동부족이나 일찍 잠자기에 못드는 경우등 잘못된 생활습관
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                선천적 허약
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                심한 스트레스와 피로
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                비만
              </li>
            </ul>
          </div>
          <img src={KIDS} alt="" />
        </div>
      </div>
      <div className={cx(['part', 'bg'])}>
        <strong className={cx('title')}>동반증상</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <ul className={cx('list')}>
              <li>
                <RiCheckDoubleFill size={24} />
                몸이 허약하여 쉽게 지치고 병치례를 자주 합니다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                소화기가 약해서 먹는 양이 적고, 쉽게 체하고 복통이나 변비, 설사 등이 생깁니다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                호흡기가 약해서 땀을 많이 흘리고, 감기를 자주하며, 비염이나 축농증, 중이염 등으로 고생합니다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                심기가 약해서 심리적으로 예민하고, 겁이 많으며 짜증을 잘 내고, 잠을 깊이 못냅니다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                비뇨기가 약해서 소변을 늦게까지 못 가립니다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                이가 너무 빨리 나오거나(조기성장), 늦게 나옵니다.(성장지연)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={cx(['part'])}>
        <strong className={cx('title')}>검사와진단</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <p className={cx('desc')}>
              성장장애의 원인을 정확하게 파악하기 위하여 몇 가지 검사를 거치게 됩니다. 성장판 검사로 성장판의 개폐여부와
              뼈나이를 파악하고 앞으로 어느정도 자랄 수 있을 지 확인해봅니다. 그리고 장부의 기능을 파악하기 위해서
              양도락, 경락기능검사, 맥진 검사 등을 거치게 되고, 체성분 검사를 통해 근육의 발달과 체지방량을 체크하여
              적잘한 운동과 식사습관을 처방하게 됩니다. 기본적인 검사와 진료실에서의 진찰을 통해 조화가 흐트러지고
              기능이 떨어진 장부를 찾아서 개개인에 맞는 성장장애치료가 들어가게 됩니다.
            </p>
            <ul className={cx('list')}>
              <li>01. 접수</li>
              <li>02. 설문지작성</li>
              <li>03. 키체중검사및 체성분검사(인바디검사)</li>
              <li>04. 성장판검사의뢰(근처 외부 병.의원에 의뢰)</li>
              <li>05. 양도락검사</li>
              <li>06. 진료상담</li>
            </ul>
          </div>
          <img src={KID} alt="" />
        </div>
      </div>
      <div className={cx(['part', 'bg'])}>
        <strong className={cx('title')}>성장치료</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <p className={cx('desc')}>
              약해지거나 흐트러진 몸의 기능을 바로잡기 위해 개개인에 맞추어 성장탕을 복용하게 되고 성장전기침으로 근골이
              튼튼해지는 혈을 자극하여 성장판의 뼈성장을 활성화합니다. 성장추나로 골반과 척추를 교정하게 되고,
              성장스트레칭과 마사지, 성장 물리치료를 통하여 근골을 부드럽게 이완시키고, 혈액순환을 개선하여 성장의 기본
              조건을 개선시킵니다. 더불어 비만이 동반된 경우는 체지방을 분해하는 유산소운동을 병행하여 성장과 건강을
              동시에 달성하게 됩니다.
            </p>
            <ul className={cx('list')}>
              <li>01 성장한약(성장탕, 성장경옥고 발효한약 성장젤리 성장환)</li>
              <li>02 성장 전자침</li>
              <li>03 성장 향기패치</li>
              <li>04 성장 경혈압봉</li>
              <li>05 성장 한방 물리치료-롤링베드, 추나테이블 견인치료, 그로쓰 트랙, 성장판진동치료기</li>
              <li>06 성장경락맛사지</li>
              <li>07 다리림프순환맛사지</li>
              <li>08 성장 스트레칭, 체조</li>
              <li>09 성장 유산소 운동 - 런닝머신, 사이클</li>
              <li>10 성장에 유익한 생활습관 지도 </li>
            </ul>
          </div>
          <img src={GROW} alt="" />
        </div>
      </div>
      <div className={cx('part')}>
        <strong className={cx('title')}>자주 묻는 질문</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <ul className={cx('questions')}>
              <li>
                <strong className={cx('question')}>성장치료를 언제 하는 것이 가장좋나요?</strong>
                <p className={cx('answer')}>
                  가장 많은 효과를 볼 수 있는 시기는 여자아이는 초등학교 3~4학년이전, 남자아이는 초등학교 5~6학년이전이
                  좋습니다.
                  <br />즉 젖몽우리나 초경 수염이나 변성기와 같은 2차성징이 나타나기 전에 치료를 시작하는 것이 좋은데요
                  <br />
                  키가 많이 작은 아이라면 초등학교 입학전부터 일찍 치료를 시작해 주는 것이 좋습니다.
                  <br /> 성장치료를 1년이라도 더 해주면 1~2cm라도 더 키울 수 있기 때문입니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>성장판 검사를 언제해야 하나요</strong>
                <p className={cx('answer')}>
                  생후 언제라도 검사는 가능합니다.
                  <br /> 진단을 위해서는 만 4세 이상부터 하며 만 7세쯤이면 더욱 정확하게 볼 수 있습니다.
                  <br /> 대략 초등학교 입락 전후에는 성장판검사를 받아보는 것이 좋습니다.
                  <br />
                  그리고 또래에 비해 너무 키가 큰 경우에도 조기성장일 수 있으니
                  <br /> 성장판 검사를 해서 뼈나이가 비정상적으로 빨리 자란 것이 아닌지 확인해 볼 필요가 있습니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>살이 키로 가나요?</strong>
                <p className={cx('answer')}>
                  그렇지 않습니다.
                  <br /> 살찐 아이가 나중에 그 살이 다 키로 간다는 것은 예전에 먹을 것 없을때 좀 통통한 아이들이
                  보기좋고
                  <br /> 또 잘 먹다 보니 못먹어서 영양부족으로 성장이 안되는 아이들보다 성장이 조금더 나았기 때문에 나온
                  속설입니다
                  <br />
                  체지방에 있는 지방세포에서 분비되는 랩틴이라는 물질이 성호르몬 분비를 자극시키고(높은 혈중
                  콜레스테롤과 중성지방)도
                  <br /> 성호르몬의 분비를 촉진시켜 사춘기를 앞당기고 그 결과 성장판이 빨리 닫히게 되어 키 성장이 일찍
                  멈추게 됩니다.
                  <br /> 실제 이에 대한 연구결과를 보면 비만인 남자 어린이의 사춘기 시작이 1년 이상 빨라진 것으로
                  나타났으며
                  <br /> 비만인 여자 아이의 37.5%가 초경을 11세 이전에 한 것으로 조사되었습니다.
                  <br /> 이는 정상 체중 어린이보다 4배이상 높은 비율이라 할 수 있습니다.
                  <br /> 따라서 아이의 키가 정상적으로 자라길 바란다면
                  <br /> 음식 조절과 운동을 통한 체중조절이 필수적이라 할 수 있으며
                  <br />
                  조절이 어려울 땐 한의원을 찾아 치료를 받는 것이 좋겠습니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>부모님이 늦게 컸으니 우리 아이들도 늦게 클 것 같은데요?</strong>
                <p className={cx('answer')}>
                  반드시 그렇지는 않습니다.
                  <br /> 부모님이 늦게까지 자라셨다고 아이들도 늦게 자랄 것이라고 마냥 기다리고 있는것은 너무
                  위험합니다.
                  <br /> 쌍둥이라고 해도 성장력의 차이가 있기 마련입니다.
                  <br /> 부모님이 자랄 때의 환경과 지금 우리 아이들의 환경은 많이 달라졌습니다.
                  <br /> 내원하셔서 성장판 검사만 해봐도 우리 아이들이 늦게 자라고 있는지 <br />
                  정상적인 속도로 자라고 있는지 빠르게 자라고 있는지 알 수 있습니다.
                  <br /> 마냥 기다리시다가 성장판이 닫혀 버리면 정상적인 성장치료로는 키를 키우기가 불가능합니다.
                  <br /> 반드시 확인해 보시기 바랍니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>성장치료를 하면 얼마나 클 수 있나요?</strong>
                <p className={cx('answer')}>
                  개인의 체질과 여러 환경적 요인에 따라 성장의 효과는 각기 다르게 나타나게 되는데요
                  <br /> 지금까지 잘 크고 있었다면 더 잘 크게 해주고
                  <br /> 성장속도가 더디다면 성장장애의 원인을 찾아서 효과적인 치료를 해서 정상성장치를 회복할 수
                  있습니다.
                  <br /> 의료진이 지시하는대로 잘 따라와 준다면 평균성장치보다 높은 성장력을 이끌어 낼 수 있습니다.
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
