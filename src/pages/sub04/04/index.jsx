import classNames from 'classnames/bind';

import Title from '@/components/global/Title';
import Desc from '@/components/global/Desc';
import SubTitle from '@/components/global/SubTitle';
import List from '@/components/global/List';
import Faq from '@/components/global/Faq';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <Title
        title="갱년기 클리닉"
        desc={[
          '여성에 있어서 갱년기란 폐경을 전후한 10년 정도의 기간을 이르는 말로,',
          '대부분이 여성들이 대략 45세에서 55세 사이에 폐경을 맞게 됩니다.',
        ]}
      />
      <Desc>
        폐경이란 나이가 들면서 난소의 기능이 저하되어 여성 호르몬의 분비가 체내필요량(요구량)에 미치지 못하여 어러 가지
        신체 변화가 일어나는 것을 말합니다. 이때 나타나는 일련의 정신적, 신체적 무력감을 갱년기 증상이라고 합니다.
        <br />
        <br />
        세계보건기구(WHO)에서는 난소의 기능이 상실되어 여성호르몬의 분비가 없어지는 시기, 즉 더 이상 임신할 수 없는
        시기, 성년기가 끝나고 노년기로 가는 과도기로 정의하고 있습니다. 의학적으로 폐경이란 월경이 영구히 정지되어
        임신능력을 상실 했을 때를 말하고 이는 난소에서 생성되는 호르몬이 감소되기 때문에 일어난다고 봅니다. 마지막
        월경이 전후시기를 갱년기라고 하며, 평균 50세 전후에 많이 나타납니다.
      </Desc>
      <div className={cx('box', 'bg')}>
        <SubTitle title="객년기의 증상" />
        <Desc>
          흔히 &quot;갱년기 장애를 겪고 있는 분의 남편은 감기에 걸리기 쉽다&quot; 라고 이야기를 합니다. 얼굴, 목, 머리
          등에서 화끈거리고 열이 퍼지고 가슴이 뛰면서 땀이 나는 증상이 심해 창문을 열어 놓고 자다보니 그러한 결과가
          나타난다는 것입니다. 특히 얼굴의 열감과 홍조가 심해집니다. 자꾸 기억력이 가물가물해지고 가끔은 가스도 켜놓고
          나오기도 하고 이러한 건망증 또한 갱년기 장애의 한 증상입니다. 정서가 불안해져서 자꾸 우울하고 피곤하고 짜증이
          나면서 의욕이 상실됩니다. 신경과민도 나타나고 긴장을 많이 하게 되면서 공격성을 띄게 되기도 합니다. 여성분에게
          이러한 증상은 신체적인 변화지만 요실금까지 나타나면 심리적으로 영향을 미치게 되어 대인관계시나 외출 시
          자신감이 많이 떨어지게 됩니다.
        </Desc>
        <Desc>
          피부는 탄력성을 잃어 거칠어지며, 외상에 약하게 되며, 주름살이 점점 늘어 가고 건조해집니다. 또 머리카락이
          가늘고 얇아지고 얼굴에 털이 많아지며 피부에 흰 색, 붉은 색 또는 갈 색 반점이 많이 나타납니다. 피부 관리를 위해
          영양을 적절히 섭취하고 적당한 운동 및 비타민, 칼슘의 섭취와 정기적으로 일광욕을 해줄 필요가 있습니다. 뼈의
          생성이 저하되면서 쉽게 골절이 일어나기도 합니다.
        </Desc>
        <Desc>
          폐경기 이전의 여성은 동일 연령의 남성에 비해 심혈관계 질환(고혈압, 동맥 경화, 협심증, 심근 경색증, 중풍 등)의
          빈도가 월등히 낮으나 폐경 후엔 남녀의 비가 비슷해지는 것으로 보아서 에스트로겐이 심혈관계 질환의 방어 인자로
          작용하는 것으로 생각되어 왔습니다. 그러나 이 점에 대해선 아직 논란이 계속되고 있지만, 난소 기능을 잃어버린
          여자들은 관상 동맥 질환(협심증, 심근 경색증)이 발생할 위험이 높다는 사실은 확실합니다.
        </Desc>
        <List
          list={[
            '얼굴이 확확 달아오르거나 가슴이 자주 두근두근거린다.',
            '땀을 많이 흘린다.',
            '머리가 자주 아프다',
            '잠을 잘 이루지 못한다.',
            '앞가슴에 불편감이나 통증을 경험한다.',
            '호흡을 길게 하지 못하고 짧은 숨을 몰아쉰다.',
            '손발이 저리거나 쑤시고 쉽게 피로하고 전신에 힘이 없다.',
            '관절마디에 통증이 있다.',
            '건망증이 심해지고 괜히 불안해진다.',
            '우울한 느낌이 들 때가 많으며, 여러 사람 속에서 혼자 있는 것을 두려워한다.',
            '소변을 자주 보게 되며 웃거나 뛰거나 할 때 소변이 저절로 나온 적이 있다.',
            '성욕이 거의 없어졌다.',
            '아래의 분비물이 없어지며 부부 관계 시 통증을 경험하였다.',
            '피부나 모발이 건조하다.',
          ]}
        />
      </div>
      <div className={cx('box')}>
        <SubTitle title="갱년기의 원인" />
        <div className={cx('flex')}>
          <div className={cx('left')}>
            <SubTitle level={2} title="한방적 원인" />
            <Desc>
              여성의 생리와 임신을 주관하는 경락인 임맥과 태충맥의 기능이 쇠약해져 여성 호르몬이 나오지 않아서 폐경이
              되는것 신허, 간기울결, 황제내경 등등이 있습니다.
            </Desc>
          </div>
          <div className={cx('right')}>
            <SubTitle level={2} title="양방적 원인" />
            <Desc>
              50세 전후로 갱년기를 맞으면 난소 기능의 실조로 월경의 양이나 주기가 불규칙하게 되고 수개월에서 3년에 걸친
              에스트로겐의 분비 저하로 월경은 마침내 폐지되게 되며 간뇌의 자율신경중추에 작용하여 자율신경계의 실조를
              일으켜 안면홍조, 소변 빈삭, 건망증 등과 같은 갱년기 증상이 나타나게 됩니다.
            </Desc>
          </div>
        </div>
      </div>
      <div className={cx('box')}>
        <SubTitle title="갱년기 치료 클리닉" />
        <Desc>
          갱년기 치료 클리닉은 중년 여성의 건강을 위해 갱년기 및 폐경후의 심신 상태를 종합적으로 진단하고 관리하는 전문
          진료 체계를 말합니다. 인간의 몸도 봄, 여름, 가을, 겨울이라는 사계절의 변화처럼 갱년기도 노화의 한 과정으로
          가을에 떨어지는 낙엽처럼 몸에 나타나는 자연적인 섭리입니다. 인간의 몸이 변화의 시점에 있을 때 몸에 나타나는
          증상을 느끼는 사람도 있고 느끼지 않고 지나가는 사람도 있습니다. 일반적으로 몸과 마음의 균형이 조화로운 사람은
          증상을 잘 느끼지 못할 것이고 조화롭지 않는 사람은 불편한 증상이 몸에 나타납니다. 특히 스트레스가 오랫동안
          쌓여서 나타나는 화병이 된 사람은 더욱 증상을 확실히 느낍니다. 건강백세 한의원에서는 몸과 마음의 조화를
          우선적으로 잡고, 이러한 관점으로 각각의 증상들에 대하여 하나하나 제거해 나가는 치료법으로 갱년기 장애의
          여성분들이 극복할도록 도와주고 있습니다.
        </Desc>
        <Desc>
          한방의 갱년기 치료 시스템은 이른 폐경이나 양방 호르몬제 복용으로 인한 부작용 문제에 대해 한의학적 방법을
          통하여 치료를 함으로써 여성의 삶의 질을 높이는 치료 방법을 추구합니다. 그래서 육체의 문제게서 정신의 문제까지
          그 제반 증상들을 하나하나 치료해 나가면서 갱년기를 극복해 나가실 수 있도록 만들어 드립니다.
        </Desc>
        <Desc>갱년기 치료의 시작 시기는 보통 폐경기 직후이지만 이미 폐경이 온 경우에는 빠르면 빠를수록 좋습니다.</Desc>
        <List
          titles={['침술 요법', '약침 요법', '부항 요법', '한약 요법', '뜸 요법', '식생활 및 운동 요법 지도']}
          list={[
            '장부의 균형을 찾게 하며 국소적인 통증이나 문제점을 해결해 줍니다.',
            '부족한 호르몬으로 유발되는 증상을 개선하며 몸의 면역력을 증강시켜줍니다.',
            '담음이나 어혈을 제거하고 신체의 순환을 원활하게 해줍니다.',
            '환자의 증상과 체질에 따라 처방해 드립니다.',
            '몸의 기운을 돋우고 생식기 비뇨기계의 혈액 순환을 원활히 해 줍니다.',
            '병이란 모든 것이 과도한 방사와 섭생에서 기인하는 것이 많습니다. 상태에 따라 진단하고 치료를 하여 이러한 병이 재발하지 않고 좋아지도록 만들어 드립니다.',
          ]}
        />
      </div>
      <div className={cx('box', 'bg')}>
        <SubTitle title="생활관리" />
        <Desc>
          갱년기를 잘 극복하기 위해서는 섭생을 주의하는 것도 중요한데 갱년기에 좋은 음식으로는 시금치, 콩, 두부, 청국장,
          비타민E 식품, 매실, 조청, 석류, 현미, 과일, 야채, 다시마, 생선, 곡류 등을 많이 드셔야합니다. 피해야 할
          음식으로는 콜레스테롤이 함유된 육류를 되도록 피하고, 탄산음료나 라면, 피자 등의 인스턴트 음식을 되도록 피하는
          것이 좋습니다.
        </Desc>
      </div>
      <div className={cx('box')}>
        <SubTitle title="갱년기 식이요법" />
        <List
          list={[
            '유산소 운동을 통하여 심폐기능을 강화하는 것이 좋습니다.',
            '근력, 탄력성, 유연성을 길러 골다공증을 예방합니다.',
            '지속적이고 규칙적 운동은 불안, 초조, 우울, 불면증의 해소에도 도움이 됩니다.',
            '운동을 시작하기 전에 반드시 전문의의 건강진단을 받는 것이 좋습니다.',
            '가장 보편적인 운동으로는 빨리 걷기, 수영 등이 있습니다.',
          ]}
        />
      </div>
      <div className={cx('box')}>
        <SubTitle title="갱년기 운동요법" />
        <List
          list={[
            '노년에는 갑상선기능이 저하되어 비만을 초래하기 쉬움으로 과식 및 편식을 금하여 표준 체중을 유지하도록 노력하는것이 중요합니다.',
            '폐경후에 Ca 필요량은 1500mg입니다. 우유 한 잔에는 200mg의 Ca이 함유되어 있으므로 매일 충분한 우유를 마시는것이 도움이 됩니다.',
            '우유, 유제품, 해산물, 야채 등 Ca함유 식품을 섭취하는 것이 좋습니다.',
            '비타민D 함유식품(난황, 버섯, 간 등)을 섭취하도록 합니다.',
            '어패류, 작은 생선, 콩 종류, 우유 등을 매일 1회 이상 섭취하도록 합니다.',
            '채소류룰 1일 300g이상 섭취하시길 바랍니다.',
            '과일은 충분히 섭취하시길 바랍니다.',
            '동물성 지방의 섭취를 최소화하는 것이 좋습니다.',
            '식염, 설탕, 술, 담배, 카페인, 이뇨제, 갑상선호르몬제 등의 골 손실을 유말하므로 과다한 섭취를 억제하는 것이 좋습니다.',
          ]}
        />
      </div>
      <div className={cx('box')}>
        <Faq
          questions={[
            {
              question: '갱년기를 극복하기 위해서는 한약을 얼마나 복용해야 하나요?',
              answer: '질병의 여부나 건강상태 등에 따라 1~3개월간 꾸준한 치료가 필요합니다.',
            },
            {
              question: '갱년기 치료제인 호르몬제는 오래 복용하면 부작용이 있다던데, 한약은 부작용이 없나요?',
              answer:
                "미국에서는 Women's Health Intiativ(WHI)라는 연구모임(2002년 미국정부 주관)에서 대규모 갱년기 호르몬 요법을 받는 수만 몇의 여성들을 추적검사 한 결과 일부 환자에서 심혈관 질환이나 뇌졸증 같은 치명적인 부작용을 발생한다는 결과를 발표한 적이 있습니다. 이런 결과물로 인해 양방에서는 호르몬제 처방 시 조심하게 됩니다. 하지만 한방에서는 한약과 침구요법을 통해 심신의 조화를 이루게 하여 안면홍조나 불면증, 소변 빈삭등의 갱년기 증상들을 치료하므로 부작용없이 안전하게 치료할수있습니다.",
            },
            {
              question: '남자도 갱년기가 있나요?',
              answer:
                '여성만큼 빠르게 진행되지는 않으나, 남자도 갱년기가 있습니다. 50대는 물론 각종 스트레스와 공해에 오염된 요즘에는 40대 초반에 이미 안면홍조나 불면, 정력감퇴, 식은땀, 집중력 감소 및 탈모나 수염의 감소 등 갱년기 증상을 호소하는 이들이 늘고 있으며 40대 중반을 넘기면서 정력이 예전같지 않은 느낌때문에 정력제를 찾는 남성들의 대부분이 실은 남성갱년기를 자각하지 못하였기 때문입니다. 남성 갱년기에 더욱 주의를 해야 하는 이유는 여성갱년기에 비해, 남성 갱년기는 스스로 의식하지 못하는 사이에 천천히 진행되기 때문입니다.',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Page;
