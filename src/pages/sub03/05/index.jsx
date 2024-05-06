import { useState } from 'react';
import classNames from 'classnames/bind';
import { RiCheckDoubleFill } from 'react-icons/ri';

import Title from '@/components/global/Title';
import ATOPY from '../../../../public/assets/images/sub/sub03/11.jpeg';
import ATOPY2 from '../../../../public/assets/images/sub/sub03/12.jpg';

import styles from './index.module.scss';
import atopicSymptomsByAge from './data';

const cx = classNames.bind(styles);

const Page = () => {
  const [symptom, setSymptom] = useState('infants');

  const select = (e) => {
    const value = e.target.dataset.value;
    setSymptom(value);
  };

  return (
    <div className={cx('container')}>
      <Title title="아토피" />
      <div className={cx(['part'])}>
        <strong className={cx('title')}>아토피란?</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <p className={cx('desc')}>
              아토피성 피부염이란 아토피성 체질을 기반으로 하여 생기는
              <br />
              특징적인 임상 증상과 만성의 경과를 보이는 습진성 피부염을 말합니다.
              <br />
              이는 유전적으로 영향을 받으며 피부 소양증에 대한 역치가 낮아져 있는 상태로
              <br />
              심한 소양감을 유발하여 이로 인한 이차적인 습진이 형성되는 질환입니다.
              <br />
              <br />
              일반적으로 알러지성 체질을 가진 사람의 피부에 호발하며,
              <br />
              주로 신생아기 때부터 나타나기 시작하지만 성인이 된 후에 나타나기도 합니다.
            </p>
          </div>
          <img src={ATOPY} alt="" />
        </div>
      </div>
      <div className={cx(['part', 'bg'])}>
        <strong className={cx('title')}>아토피 원인</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <p className={cx('desc')}>
              아토피성 피부염은 풍열, 습열, 음허, 혈어, 어혈 등 한마디로 몸 속에 쌓인 열독으로 인한 것입니다.
              <br />
              선천적으로 열의 발산에 민감앟게 반응하는 체질이거나, 열의 발생을 촉진시키는
              <br />
              고칼로리 음식, 스트레스, 수면 부족 등에 의한 원인이거나 영유아기에 생리적으로 열이 많아 발생하는
              경우입니다. 또 다른 원인으로 유소아기 때 자주 감기를 앓아 항생제 치료를 많이 받은 경우,
              <br />
              폐기능이 약해져 피부로 산소공급이 원활하지 않으며, 간기능 및 소화기능까지 손상되어 면역력이 떨어지게 되고,
              외부 음식물이나 감염균에 대한 해독 기능이 약해지면서
              <br />
              독성이 피부에 전달되어 과민반응과 함께 염증을 일으켜 아토피성 피부염을 유발합니다.
            </p>
            <ul className={cx('list')}>
              <li>
                <RiCheckDoubleFill size={24} /> 한방적 네가지 원인
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 품부불내 타고난 체질의 허약
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 태열치성 심한 태열이 있는 경우
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 외사풍습 잦은 병치례로 인한 면역저하
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 음식부절 잘못된 식습관
              </li>
            </ul>
          </div>
          <img src={ATOPY2} alt="" />
        </div>
      </div>
      <div className={cx('flexContainer')}>
        <div className={cx('wrapper')}>
          <div className={cx('container')}>
            <strong className={cx('title')}>영향을 주는 주요 요인</strong>
            <div className={cx('box')}>
              <div className={cx('info')}>
                <ul className={cx('list')}>
                  <li>
                    <strong className={cx('title')}>음식물</strong>
                    음식물 속에 든 알레르기성 유발항원으로 인해 질환이 더 심각해질수 있습니다. 많이 알려진 것으로 우유,
                    달걀, 밀가루 등이 있으며 영유아때 많이 발생하는 것으로 나타나 있습니다.
                  </li>
                  <li>
                    <strong className={cx('title')}>환경요인</strong>
                    도시 생활 등 좋지 않은 주변 환경으로 인해 오염된 대기 등의 나쁜 물질에 노출이 많을 경우 증상이
                    심각해질 수 있으며 이는 다른 알레르기 질환의 양상과 비슷합니다.
                  </li>
                  <li>
                    <strong className={cx('title')}>유전요인</strong>
                    근래에 심각해진 증상이므로 유전적 요인을 단정지을 수는 없지만 임상적으로 알레르기성 질환(아토피
                    피부염, 천식, 비염)가족력이 있을 경우 더 자주 발생하는 것으로 나타나 있습니다.
                  </li>
                  <li>
                    <strong className={cx('title')}>심리요인</strong>
                    모든 병의 근원이라 불리는 스트레스를 포함한 정신적, 심리적 요인도 원인이 되는데 이는 정신적
                    스트레스로 인한 체력, 면역력 약화와도 무관하지 않으며 또한 여타 다른 질환도 심각해 질 수 있습니다.
                  </li>
                  <li>
                    <strong className={cx('title')}>계절과 기상</strong>
                    계절이 바뀔 때 알레르기성 질환이 나타나기 쉬우며, 기상변화는 생체내 균형을 깨고 쉽게 질병을
                    일으킵니다.
                  </li>
                  <li>
                    <strong className={cx('title')}>피로</strong>
                    피로는 저항력을 약화시키므로 앞에서 설명한 원인들과 복잡적으로 알레르기 반응의 강약이나 발생 여부에
                    관계합니다.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={cx('container')}>
            <strong className={cx('title')}>아토피의 증상</strong>
            <div className={cx('box')}>
              <div className={cx('info')}>
                <ul className={cx('list')}>
                  <li>
                    <strong className={cx('title')}>홍반</strong>
                    피부에 붉게 나타는 반점
                  </li>
                  <li>
                    <strong className={cx('title')}>암화</strong>
                    붉게 나타나는 부위가 검게 변하는 것
                  </li>
                  <li>
                    <strong className={cx('title')}>부종</strong>
                    피부가 붉게 부어 있는 상태
                  </li>
                  <li>
                    <strong className={cx('title')}>구진화</strong>
                    붉게 부어 있는 부위가 언덕처럼 연결되어 나타남
                  </li>
                  <li>
                    <strong className={cx('title')}>진물</strong>
                    피부표면 고인 조직액, 혈액, 고름 등 피부독성물질 배출과정 또는 감염
                  </li>
                  <li>
                    <strong className={cx('title')}>가피</strong>
                    속칭 딱지, 진물이 말라 굳은 것
                  </li>
                  <li>
                    <strong className={cx('title')}>찰상</strong>
                    가려워서 긁은 상처
                  </li>
                  <li>
                    <strong className={cx('title')}>태선화</strong>
                    피부가 나무껍질처럼 거칠어지고 코끼리피부를 연상캐되는것
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx(['part'])}>
        <strong className={cx('title')}>연령에 따른 아토피 증상</strong>
        <div className={cx('buttons')}>
          <button
            onClick={select}
            type="button"
            data-value="infants"
            className={cx('button', { active: symptom === 'infants' })}
          >
            유아기
          </button>
          <button
            onClick={select}
            type="button"
            data-value="pediatric"
            className={cx('button', { active: symptom === 'pediatric' })}
          >
            소아기
          </button>
          <button
            onClick={select}
            type="button"
            data-value="adult"
            className={cx('button', { active: symptom === 'adult' })}
          >
            사춘기 및 성인
          </button>
        </div>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <ul className={cx('list')}>
              {Object.entries(atopicSymptomsByAge).map((atopic) => {
                const type = atopic[0];
                const symptoms = atopic[1];
                if (type === symptom) {
                  return symptoms.map((d) => (
                    <li key={d}>
                      <RiCheckDoubleFill size={24} /> {d}
                    </li>
                  ));
                }
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className={cx('flexContainer')}>
        <div className={cx('wrapper')}>
          <div className={cx('container')}>
            <strong className={cx('title')}>검사와진단</strong>
            <div className={cx('box')}>
              <div className={cx('info')}>
                <ul className={cx('list')}>
                  <li>01. 접수</li>
                  <li>02. 설문지작성</li>
                  <li>03. 양도락 검사</li>
                  <li>04. 스트레스 검사</li>
                  <li>05. 확대경을 통한 시진</li>
                  <li>06. 진료 및 상담</li>
                  <li>07. 처방</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={cx('container')}>
            <strong className={cx('title')}>아토피의 치료</strong>
            <div className={cx('box')}>
              <div className={cx('info')}>
                <ul className={cx('list')}>
                  <li>01. 한약</li>
                  <li>02. 침</li>
                  <li>03. 약침/봉침, 자하거약침</li>
                  <li>04. 외용제(연고, 로션, 오일, 보습제)</li>
                  <li>05. 훈증</li>
                  <li>06. 입욕제</li>
                  <li>07. 한약차</li>
                  <li>08. 아토피섬유유연제</li>
                  <li>09. 정기적 상담 및 생활지도</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('part')}>
        <strong className={cx('title')}>자주 묻는 질문</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <ul className={cx('questions')}>
              <li>
                <strong className={cx('question')}>아토피는 유전력이 없다?</strong>
                <p className={cx('answer')}>
                  아토피 발병 원인중 유전적 소인이 영향이 큰 것으로 밝혀졌다. 실제로 부모 중 한 사람이 아토피를 앓은
                  경우 자녀의 아토피 발병률은 40%, 부모 모두 아토피 소인을 가진 경우는 70~80%의 발병률이 있다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>아토피는 자라면서 저절로 낫는다.</strong>
                <p className={cx('answer')}>
                  성장하면서 면역체계가 안정되면서 아토피가 나아지는 경우도 있다. 하지만 유아 아토피 환자 모두가 그런
                  것은 아니므로 막연한 기대만으로 치료를 미루는 것은 바람직하지 않다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>땀은 물기라서 피부 보습에 좋다.</strong>
                <p className={cx('answer')}>
                  땀은 증상 악화 요인의 하나다. 땀이 마르게 되면 수분은 날아가지만 노폐물이 남기 때문이다. 전체적으로
                  아토피 피부염이 심한 사람은 딸이 날 경우 미지근한 물로 샤워를 해 땀을 씻어낸다. 부분적으로 질환이 있는
                  사람은 물티슈로 땀이 난 부분을 딲아내면 좋다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>바닷물(소금물)에 담그면 낫는다.</strong>
                <p className={cx('answer')}>
                  소금기를 포함하고 있는 바닷물은 환자의 피부를 더욱 건조하게 만들며 예민한 피부를 자극한다. 특히
                  염증이나 상처가 있는 환자의 경우 2차 감염의 위험이 있으므로 주의해야한다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>식이요법만으로 아토피가 나을 수 있다.</strong>
                <p className={cx('answer')}>
                  음식 알레르기 영향을 받는 환자라면 어느 정도 효과가 있으나 다른 환자들의 경우 어떤 음식을 먹으면
                  낫는다거나 안먹으면 낫는다는 식의 소문은 믿을수 없다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>유제품 콩 생선 달걀 등은 무조건 피해야한다.</strong>
                <p className={cx('answer')}>
                  병원에서의 알레르기 검사를 통해 악화요인으로 판단되면 피하되, 그 영양분에 맞는 대체식품을 꼭 챙겨
                  먹어야한다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>아토피는 치료가 안 된다.</strong>
                <p className={cx('answer')}>
                  단기간에 극적인 효과를 기대하는 환자들의 섣부른 판단이다. 개인마다 그 원인과 치료법이 다르므로 의사의
                  지속적인 진료와 치료가 필요하다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>아토피는 환절기나 겨울철 등 건조한 시기에만 조심하면 된다.</strong>
                <p className={cx('answer')}>
                  건조한 기후에 아토피가 악화기디 쉬운 것은 사실이다. 하지만 그렇다고 다른 계절에 증상이 아주 없어지는
                  것은 아니다. 따라서 어느 계절에나 방심하지 말고 꾸준히 주의를 기울여야 한다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>아토피는 옮는다.</strong>
                <p className={cx('answer')}>
                  아토피는 전염성 피부염이 아니므로 옮지 않는다. 우리 몸의 면역체계가 불안해서 피부에 생기는
                  과민반응으로 전염성은 전혀 없다.
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
