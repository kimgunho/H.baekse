import classNames from 'classnames/bind';
import { RiCheckDoubleFill } from 'react-icons/ri';

import Title from '@/components/global/Title';
import WEAK from '../../../../public/assets/images/sub/sub03/15.jpeg';
import WEAK2 from '../../../../public/assets/images/sub/sub03/16.jpeg';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <Title title="허약" />
      <div className={cx('part', 'bg')}>
        <strong className={cx('title')}>어린이 허약아</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <p className={cx('desc')}>
              허약아 시스템의 대상자는 조금만 움직여도 쉽게 피로를 호소하며 병에 잘 걸립니다. 가장 대표적인 증상으로는
              아래 증상들이 있습니다.
            </p>
            <ul className={cx('list')}>
              <li>
                <RiCheckDoubleFill size={24} />
                조금만 움직여도 쉽게 피로를 호소한다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                병에 잘 걸리며 특히 감기에 자주 걸리고 걸리면 잘 낫지 않는다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                두통 복통 식욕부진 등과 비슷한 증상이 자주 발생한다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                겁이 많고 잘 놀라며 불안해하며 짜증을 잘 낸다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                성장 발육이 늦고 빈혈도 생긴다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                대소변을 못 가리거나 잠을 잘 못 잔다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                눈밑이 어둡거나 붉다
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                식은 땀이 난다.
              </li>
            </ul>
          </div>
          <img src={WEAK} alt="" />
        </div>
      </div>
      <div className={cx('part')}>
        <strong className={cx('title')}>허약아의 분류 및 검사와 진단</strong>
        <div className={cx('listBox')}>
          <div className={cx('info')}>
            <strong className={cx('title')}>간계허약아 - 간기능 및 대사 운동기계 허약아</strong>
            <ul className={cx('list')}>
              <li>
                <RiCheckDoubleFill size={24} />
                근육통을 자주 호소한다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                손발톱의 발육상태가 나쁘다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                시력이 나쁘고 눈이 쉬 피로해진다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                화를 잘 냅니다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                코피를 잘 흘린다.
              </li>
            </ul>
          </div>
          <div className={cx('info')}>
            <strong className={cx('title')}>심계허약아 - 순환기 및 정신 신경계 허약아</strong>
            <ul className={cx('list')}>
              <li>
                <RiCheckDoubleFill size={24} /> 안색이 창백하며 입술이 푸른색을 띄기도 한다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 자주 불안 해 하거나 낯 가림이 심하다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 신경질을 잘 내며 몹시 예민하다
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 총명하나 지구력이 떨어진다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 경기를 자주하고 자다가 이유없이 갑자기 심하게 울기도 합니다.{' '}
              </li>
            </ul>
          </div>
          <div className={cx('info')}>
            <strong className={cx('title')}>비계허약아 - 소화기계 허약아</strong>
            <ul className={cx('list')}>
              <li>
                <RiCheckDoubleFill size={24} /> 밥을 잘 안먹고 입에 물고 있다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 자주 배가 아프다고 한다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 헛구역질 구토 설사가 잦다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 구치가 심하거나 대변에 냄새가 심하게 난다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 손발이 차고 편식이 심하다.{' '}
              </li>
            </ul>
          </div>
        </div>
        <div className={cx('listBox')}>
          <div className={cx('info')}>
            <strong className={cx('title')}>폐계 허약아 - 호흡기계 허약아</strong>
            <ul className={cx('list')}>
              <li>
                <RiCheckDoubleFill size={24} />
                감기를 달고 살며 양약을 먹어도 그때 뿐이다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                온도변화에 민감하여 환절기에 자주 아프다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                편도염 기관지염 폐렴 천식등 호흡기 질환을 자주 앓는다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                알레르기비염이나 아토피를 앓았거나 앓고 있다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                냄새를 잘 못 맏고 자주 킁킁 거린다.{' '}
              </li>
            </ul>
          </div>
          <div className={cx('info')}>
            <strong className={cx('title')}>신계 허약아 - 비뇨생식기 및 골격계</strong>
            <ul className={cx('list')}>
              <li>
                <RiCheckDoubleFill size={24} /> 뼈대가 약하며 성장발육이 느리다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 아뇨증이 있으며 대소변을 늦게 가린다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 머리카락에 윤기가 없고 가늘고 약하다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 무릎과 발목통증 성장통이 자주있다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 밤에 식은땀을 많이 흘린다.{' '}
              </li>
            </ul>
          </div>
          <div className={cx('info')}>
            <strong className={cx('title')}>허약아 검사와 진단 순서</strong>
            <ul className={cx('list')}>
              <li>01. 접수</li>
              <li>02. 기초설문지 작성</li>
              <li>03. 키 몸무게 측정</li>
              <li>04. 양도락 검사</li>
              <li>05. 체성분 검사</li>
              <li>06. 진찰상담</li>
              <li>07. 치료</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={cx('part')}>
        <strong className={cx('title')}>단체생활 증후군</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <p className={cx('desc')}>
              요즘 아이들의 어린이집 입학연력이 점점 당겨지다 보니 단체 생활을 시작하면서 자주 앓는 친구들이 많습니다.
              어머니들이 가장 많이 하시는 말씀이 ‘어린이 집 다니기 시작하면서 감기를 달고 살아요’ 입니다.
            </p>
            <br />
            <br />
            <ul className={cx('questions')}>
              <li>
                <strong className={cx('question')}>우리아이의 면연력?</strong>
                <p className={cx('answer')}>
                  아이들은 출생 후 6개월까지는 엄마에게 물려받은 면역력으로 병을 이겨내고 그 이후부터는 엄마에게
                  물려받은 면역력이 약해지면서 스스로의 면역력이 점점 강해집니다. 보통 만 7세 이전에는 면역력이 약하기
                  마련입니다. 이른 시기의 단체생활을 시작하게 되면 아직 면역체계가 완전히 갖추어 지기 전에 바이러스나
                  병원균에 대한 감염기회가 높아지면서 병치레도 자주 하게됩니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>유치원에 가면서 왜 감기를 달고 사나요?</strong>
                <p className={cx('answer')}>
                  단체생활 증후군의 아직 면역력이 갖추어지지 않은 아이들이 이른 시기에 단체 생활을 하면서 친구들 간에
                  병을 서로 옮기고, 활동량이 늘어나면서 육체적인 피로가 증가하며 친구들간의 관계나 경쟁으로 심리적인
                  스트레스도 늘어나게 되면서 감염성 질환을 자주 앓거나 정서적으로 짜증과 불안을 많이 느끼게 됩니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>단체 생활 증후군에서 벗어나려면?</strong>
                <p className={cx('answer')}>
                  단체생활은 만 3세 이후부터 시작하는 것이 좋으나 어쩔수 없이 일찍 단체 생활을 시작하는 경우에는 아이가
                  충분히 적응 할 수 있게 몸을 튼튼하도록 도와주는 것이 좋습니다. 보통 단체 생활을 시작하면서 1년~2년
                  정도의 적응 기간 동안 병을 자주 앓게 됩니다. 그 기간 동안 체력과 면역력이 좀더 충실한 아이들은 일찍
                  적응하고, 체력과 면역력이 약한 친구들은 오랫동안 병과의 싸움이 진행됩니다. 병을 할 때마다 증상만을
                  다급히 치료하기보다는 장기적이고 정기적인 체력과 면역력 관리를 해주는 것이 바람직합니다. 좋은 보약으로
                  아이들의 몸을 좀 더 충실히 해서 병을 적게 하도록 해주고 피로감도 개선해 주면 우리 아이들이 단체생활에
                  잘 적응하는데 도움을 줄 수 있습니다.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={cx('part', 'bg')}>
        <strong className={cx('title')}>생활관리법</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <ul className={cx('list')}>
              <li>
                <RiCheckDoubleFill size={24} /> 적당하게 운동을 시켜야합니다.(과도한 운동은 역효과)
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 가벼운 목욕이나 샤워를 자주 하여 혈액 순환을 도와주세요
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 갑작스러운 자극(큰소리, 이상한 물체)을 피합니다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 지나친 TV 시청등을 제한하고 음악 독서 등으로 정서적 분위기를 주도하고
                화목한 가정을 만들도록 노력하여 불안 요소를 제거해주세요
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 밥을 잘 먹지 않는 경우는 그 요인을 제거해본다(예를 들면 청량음료, 사탕,
                과자, 간식을 제한)
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 소화에 지장을 주는 음식을 피하고 소화가 잘되는 음식물을 주로 먹이며 밥을
                적당량 일정한 시간에 따뜻하게 먹인다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 너무 덥게 키우지 말며 감기에 자주 걸리면 일광욕, 마른 수건 마찰 등으로
                피부를 단련시켜 주세요
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 환기를 자주하고 적정 실내습도를 유지해주세요
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 성장발육에 도움이 되는 음식 습관 및 운동 습관을 기르도록 도와주세요
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 성장통이 있는 발목과 무릎은 주물러 주거나 따뜻하게 찜질해 주세요
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 야뇨증이 있는 경우 너무 예민하게 반응하지 마시고 잠자기 3시간 전 수분
                섭취를 줄여 주시고 소변을 잘 가린 경우 칭찬을 잊지 마세요{' '}
              </li>
            </ul>
          </div>
          <img src={WEAK2} alt="" />
        </div>
      </div>
      <div className={cx('part')}>
        <strong className={cx('title')}>자주 묻는 질문</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <ul className={cx('questions')}>
              <li>
                <strong className={cx('question')}>한약 먹고 난 위에 비만이 되지는 않나요?</strong>
                <p className={cx('answer')}>
                  한약은 그 자체로 비만을 유도하지는 않습니다. 다만 한약의 도움으로 소화력이 회복됨에 따라 음식 섭취량이
                  늘어나 살이 찔 수 있으므로 본인 스스로의 음식량을 조절해야합니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>보강약 복욕 중인데 아이가 열이 납니다. 약을 먹여도 될까요?</strong>
                <p className={cx('answer')}>
                  열이 38도 이상 올라갈 경우 약 복용을 중단하고 감기나 체기가 아닌지 본원에 내원하시거나 전화로 원장님과
                  상의 하시면 됩니다. 열이 다 내린 후 약을 다시 복용시키면 됩니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>보강약은 얼마나 자주 먹여야 하나요?</strong>
                <p className={cx('answer')}>
                  일반적인 보약은 계절과 관계없이 일년에 2회가량 복용시키시면 좋습니다. 허약아일 경우 3~4개월에 한번씩
                  복용시켜 주세요
                </p>
              </li>
              <li>
                <strong className={cx('question')}>돌 이전에도 한약을 먹을 수 있나요?</strong>
                <p className={cx('answer')}>
                  네 먹을 수 있습니다. 백일보약 돌 보약이라고 하여 어린아이들이 먹을 수 있는 한약이 있습니다. 식성에
                  따라 증류한약이나 시럽 한약등을 처방받아서 복용시키시면 됩니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>한약 복용 중에 양약을 같이 복용해도 되나요?</strong>
                <p className={cx('answer')}>
                  먼저 원장님과 상의 후 복용이 가능합니다. 일부의 약들은 같이 복용 시 부작용이 날수 있으므로 상의 후에
                  복용하시면 됩니다. 그리고 한약과 양약을 같이 복용하게 될 경우 1시간 이상의 간격을 두고 복용하시면
                  됩니다.
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
