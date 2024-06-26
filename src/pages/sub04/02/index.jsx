import classNames from 'classnames/bind';

import Title from '@/components/global/Title';
import Desc from '@/components/global/Desc';
import SubTitle from '@/components/global/SubTitle';
import List from '@/components/global/List';
import CRAMPS from '../../../../public/assets/images/sub/sub04/2.jpeg';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const index = () => {
  return (
    <div className={cx('container')}>
      <Title
        title="생리통 클리닉"
        desc={[
          '생리통은 여성 60% 이상이 경험하는 가장 흔한 질환이지만 약 10%정도는',
          '매달 하루 이상씩 정상적인 사회생활이 어려울 정도로',
          '어려움을 겪고 생리주기가 다가오는 것을 두려워 하기도 합니다.',
          '생리통은 개개인의 체질에 따라 다르고 병력에 따라 다르고 나이와 경험에 따라 다릅니다.',
        ]}
      />
      <Desc bg>
        생리통은 골반에 기질적인 병이 없는 원발성인 경우와 기질적인 병이 있는 속발성의 경우로 나눌 수 있습니다. 대부분의
        생리통은 이 원발성이 경우인데 이 통증은 보통 월경이 시작되기 몇 시간 전에 발생합니다.
        <br />
        <br />
        통증은 주로 경련성이나 진통과 같은 성격인데 하복부에 치골에 통증이 오며 경우에 따라서는 아랫배와 다리까지
        아프기도 합니다. 주로 월경량이 많아지면 통증이 없어지기도 하지만, 통증이 심할 때에는 요통 오심 구토 피곤
        어지럼증 설사 식욕부진 두통 신경과민 등을 동반합니다.
        <img src={CRAMPS} alt="" />
      </Desc>
      <div className={cx('box')}>
        <div className={cx('flex')}>
          <div>
            <SubTitle title="생리통의 원인" />
            <List
              titles={['기체혈어', '한습응체', '기혈양허']}
              list={[
                '생리 시작 하루나 이틀 전에 배 유방 옆구리에 팽창하는 듯한 생리통증을 느끼는 것이 특징입니다. 또한 대부분 검붉은 사혈덩어리나 막같이 생긴 덩어리가 나오기도 하는데 그 덩어리들이 배퉁되면 통증이 줄어들기도 합니다. 평소 꽉끼이는 옷을 자주 입거나 심한 운동이나 극심한 스트레스 등으로 인해 기운이 정체되어 월경 배출이 곤란해져서 통증이 나타나게 됩니다.',
                '생리 시작 전이나 생리 중 통증이 특히 심한 경우입니다. 주요증상은 생리시작과 동시에 아랫배가 차갑고 송곳으로 찌르는 것같은 통증이 오며 창자가 꼬이는 것 같고 허리나 등까지도 저리고 아픕니다. 손발이 차고 얼굴색이 창백해지며 생리전에는 몸살을 동반합니다. 생리전이나 생리기간중 추운데 오래 걸어 다니거나, 물속에서 오래 수영을 하거나 또는 습하고 찬 바닥에 장시간 앚아 있거나 아이스크림이나 찬음료 등을 많이 먹어서 생기는 증상입니다.',
                '아랫배를 밑으로 끌어내리는 듯한 느낌이 들면서 아프고 어지럼증을 동반하며 생리 후까지 아랫배가 은근하게 아픈 통증이 지속되면서 피로감을 나타냅니다. 평상시에 소화가 잘 안되거나 식곤증이 많은 사람이 주로 해당합니다. 원래 체질이 약해서 기운이 부족하거나 출산과 유산 후 충분히 조리하지 못하여 피가 부족할 경우 생리가 정상적으로 이루어지기 어렵습니다.',
              ]}
            />
          </div>
          <div>
            <SubTitle title="치료 방법" />
            <Desc>
              흔히 생리통을 진통제 한 알로 그냥 해결하려는 분들이 많습니다. 하지만 생리통을 방치하게 되면 더 심한
              질환으로 발전될 가능성이 높기에 초기에 심한 생리통은 치료를 하는 것이 좋습니다. 생리통은 충분히 한방으로
              치료가 가능한 질환입니다. 생리통을 치료하기 위해서 뜸요법과 한방처방으로도 치료는 가능하며 치료기간은 보통
              1~3개월입니다.
            </Desc>
            <List
              titles={['한방요법', '침요법', '뜸요법', '약침요법', '추나요법']}
              list={[
                '생리통의 원인에 따라 다르게 처방합니다. 원인에 따라 처방을 달라하기에 생리통은 반드시 치료가 될 수 있습니다. 원인에 따라 약재를 다르게 하여 맞춤별 처방이 가능합니다.',
                '자궁의 기운이 원활히 흐르도록 도와주는 것입니다. 증상에 따라 혈자리를 다르게 하여 시술을 하게 되며 한약의 효과를 높여줍니다.',
                '약한 생리 생리통의 경우 뜸 요법만으로도 충분히 치료가 가능합니다. 하복부에 온기를 전해주고 나쁜 기운을 제거해주기에 충분히 좋아질수있습니다.',
                '약물을 침에 의해 몸 속까지 전달되도록 하여 전체적인 몸의 기를 보호하고 혈액 순환이 잘 될 수 있도록 만들어 자궁의 뭉친 어혈을 풀어줍니다.',
                '척추와 골반을 바르게 세워 체내 신경계의 흐름을 원활하게 하여 골반강과 자궁의 기혈을 소통시켜 통증을 해소시켜 줍니다.',
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
