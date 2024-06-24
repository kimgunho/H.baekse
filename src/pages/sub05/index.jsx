import classNames from 'classnames/bind';

import Title from '@/components/global/Title';
import Desc from '@/components/global/Desc';
import SubTitle from '@/components/global/SubTitle';
import DIET01 from '../../../public/assets/images/sub/sub05/04.jpeg';
import DIET02 from '../../../public/assets/images/sub/sub05/02.jpeg';
import DIET03 from '../../../public/assets/images/sub/sub05/03.jpeg';
import DIET04 from '../../../public/assets/images/sub/sub05/01.jpeg';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('wrap')}>
        <Title
          title="다이어트 클리닉"
          desc={['물만 마셔도 살이 찐다?', '건강백세 한의원에서 건강한 다이어트를 통해숨겨진 S라인을 되찾으세요!!']}
        />
        <Desc>
          요즘과 같이 음식이 풍성한 시기에는 식욕을 억제하기란 쉬운 일이 아닙니다. 또한 현대사회는 점차 몸을 움직여서
          하는 활동은 줄고, 정신적인 업무가 늘어나면서 그 스트레스가 식욕으로 해소되는 경우가 많습니다. 이러한 생활
          패턴에서 벗어나기 위해서는 스스로 즐겁고 자신감 넘치는 건강한 생활습관을 유지하려고 노력해야 합니다.
        </Desc>
      </div>
      <div className={cx(['part', 'part01'])}>
        <div className={cx('wrap')}>
          <div className={cx('bg')}>
            <div className={cx('lines')}>
              <div className={cx('line')} />
              <div className={cx('line')} />
              <div className={cx('line')} />
            </div>
            <strong className={cx(['title', 'bg'])}>
              다이어트 클리닉
              <br />
              중요 포인트
            </strong>
            <div className={cx('items')}>
              <div className={cx('item')}>
                <img src={DIET01} alt="" />
                <p className={cx('title')}>1:1 맞춤 다이어트</p>
                <p className={cx('desc')}>
                  개개인의 건강상태, 체질을 진단하고 비만의 원인을 복석하여 가장 적절한 처방을 합니다.
                </p>
              </div>
              <div className={cx('item')}>
                <img src={DIET02} alt="" />
                <p className={cx('title')}>굶지 않고 건강하게!</p>
                <p className={cx('desc')}>
                  건강백세 다이어트 탕약은 신진대사를 활성화시켜 지방을 연소, 분해시키고 공복감을 최소화 하기 때문에
                  무리한 금식과 식이조절을 하지 않고도 체중감량이 가능합니다.
                </p>
              </div>
            </div>
            <div className={cx('items')}>
              <div className={cx('item')}>
                <img src={DIET03} alt="" />
                <p className={cx('title')}>라인이 살아납니다.</p>
                <p className={cx('desc')}>
                  건강백세 다이어트 프로그램은 지방은 분해하고 근육량의 손실은 최소화하도록 구성되어 체중도 줄어들고
                  사이즈도 감소합니다.
                </p>
              </div>
              <div className={cx('item')}>
                <img src={DIET04} alt="" />
                <p className={cx('title')}>요요현상이 적습니다</p>
                <p className={cx('desc')}>
                  건강백세 다이어트 탕약이 체내의 기초대사량을 증사시키기 때문에 치료 후에도 요요현상이 쉽게 생기지
                  않습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx(['part', 'part02'])}>
        <div className={cx('wrap')}>
          <div className={cx('bg')}>
            <strong className={cx('title')}>
              건강백세 다이어트
              <br /> 치료 시스템
            </strong>
            <SubTitle title="1:1 맞춤 해독 한약" />
            <Desc>
              해독 한약은 화자의 비만도, 체지방량, 부종지수, 소화상태 기타 증상을 고려하여 개별 처방하는 1:1 맞춤
              한약입니다.
            </Desc>
            <SubTitle title="건강백세 해독 한약의 특징" />
            <div className={cx('flex')}>
              <div className={cx('list')}>
                <div className={cx('item')}>
                  <strong className={cx('title')}>기초 대사량 증사 및 노폐물 제거</strong>
                  <p className={cx('desc')}>
                    기혈의 흐름을 원활히 하고, 체내 에너지 대사가 활발해져 같은 칼로리를 섭취하더라도 더 많은 에너지를
                    소비하게 됩니다.
                  </p>
                </div>
                <div className={cx('item')}>
                  <strong className={cx('title')}>식욕억제와 포만감</strong>
                  <p className={cx('desc')}>
                    식욕을 억제하여 식이 조절이 용이해지며, 적은양의 식사를 하여도 포만감을 느끼게 해줍니다.
                  </p>
                </div>
                <div className={cx('item')}>
                  <strong className={cx('title')}>체지방제거</strong>
                  <p className={cx('desc')}>
                    체내 에너지 대사가 활발해져 체지방이 분해되어 소변으로 배출됩니다. 분해되지 않은 지방 세포는 쉽게
                    연소될 수 있는 형태로 바꾸어 줍니다.
                  </p>
                </div>
                <div className={cx('item')}>
                  <strong className={cx('title')}>부작용 최소화</strong>
                  <p className={cx('desc')}>
                    근육량의 감소, 미네랄 요소의 감소(골밀도 감소, 영양부족성 탈모, 빈혈 등), 체수분량의 손실 등
                    다이어트 과정 중에 생길 수 있는 부작용을 최소화 합니다.
                  </p>
                </div>
                <div className={cx('item')}>
                  <strong className={cx('title')}>요요방지</strong>
                  <p className={cx('desc')}>
                    해독 한약이 체내의 기초대사량을 증가시키기 때문에 치료 후에도 요요현상이 쉽게 생기지 않습니다. 또한
                    꾸준한 사후 관리로 요요현상을 최소화 합니다.
                  </p>
                </div>
              </div>
              {/*  */}
              <div className={cx('list')}>
                <div className={cx('item')}>
                  <strong className={cx('title')}>전기지방분해침</strong>
                  <p className={cx('desc')}>
                    전극과 전극 사이에 지방분해에 효과가 있는 주파수를 반복하여 흘려주어 지방분해효과를 얻는
                    치료방법입니다. 시술기간은 약 20분이며 매 주 1호 4~6번 복부와 팔에 치료됩니다.
                  </p>
                </div>
                <div className={cx('item')}>
                  <strong className={cx('title')}>지방분해 약침요법</strong>
                  <p className={cx('desc')}>
                    하루 15분 바쁜 나를 위한 효과적인 비만치료입니다. 짧은 치료시간과 적은 횟수로 숨겨진 S라인을
                    찾으세요
                  </p>
                  <p className={cx('desc')}>
                    체중감량보다는 짧은 기간 동안에 사이즈감소를 원하시거나 (복부, 허벅지, 팔, 옆구리, 얼굴과 같은 부분
                    비만치료에 특화된 약침) 바빠서 치료시간을 많이 내기가 어려우신분께 아주 좋은 요법이며 한방비만학외와
                    대한면역약침학회에서 엄격한 동물실험과 임상시험을 거쳐 간과 신장에 부담을 주지 않으며 치료 후에는
                    나쁜 콜레스테롤이 감소하고 오히려 기초대사량은 증가하는 건강한 비만치료약침입니다.
                  </p>
                  <strong className={cx('point')}>
                    매선요법과 함께 시술시 시너지 효과로 지방감소 + 탄력강화가 극대화됩니다.
                  </strong>
                </div>
                <div className={cx('item')}>
                  <strong className={cx('title')}>매선요법</strong>
                  <p className={cx('desc')}>
                    매선요법은 경락과 경혈을 지속적으로 자극하여 기혈순환을 촉진하고, 지방층을 자극함으로써 처진 살에는
                    콜라겐 생성을 촉진하고, 늘어진 근육에는 탄력을 부여하는 치료법입니다. 부작용이 거의 없고, 시술 후
                    일상생활이 바로가능합니다.
                  </p>
                  <p className={cx('desc')}>
                    내가 원하는 부위를 선택적으로 빼는 신기술 체중은 줄었는 데 살을 그대로라고 느끼시나요? 급격한 체중
                    감량으로 축 처져버린 살 때문에 고민이신가요? 원하는 부위를 선택하여 일주일에 1회 약 10분 시술하는
                    것만으로도 눈에 띄는 체형변화를 보실 수 있습니다. 건강백세 매선요법으로 숨은 라인을 되찾으세요
                  </p>
                  <strong className={cx('point')}>
                    지방 분해 약침과 함께 시술 시 시너지 효과로 지방감소 + 탄력강화가 극대화 됩니다
                  </strong>
                </div>
                <div className={cx('item')}>
                  <strong className={cx('title')}>고주파 치료</strong>
                  <p className={cx('desc')}>
                    고주파를 이용하여 인체의 심부열을 발생시켜 체지방 분해를 촉진 시키는 시술입니다. 고주파는 두 가지
                    종류가 있습니다.
                  </p>
                  <p className={cx('desc')}>
                    고주파 치료는 샐룰라이트를 연소합니다. 림프순환 촉진, 경락마사지와 같은 효과가 있습니다. 통증 완화
                    세포 재생, 신진대사 활성화, 혈액순환 촉진 효과가 있습니다.
                  </p>
                  <strong className={cx('point')}>CET방식 : 혈액순환, 림프순환을 촉진합니다.</strong>
                  <strong className={cx('point')}>
                    RET방식 : CET보다 3배 높은 고주파로 보다 깊은 내장지방을 분해합니다.
                  </strong>
                </div>
                <div className={cx('item')}>
                  <strong className={cx('title')}>카복시 테라피</strong>
                  <p className={cx('desc')}>
                    카복시테라피는 인체에 무해한 의료용 이산화탄소 가스를 주입하여 피하지방을 제거하는 방법으로
                    날씬해지고 싶은 부위를 선택하여 비교적 지방이많고 순환이 원활하지 않는 곳에 시술합니다.
                  </p>
                  <strong className={cx('point')}>
                    시술시간은 약 10분으로 주 2회 복부, 허벅지, 팔, 종아리등을 시술합니다.
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
