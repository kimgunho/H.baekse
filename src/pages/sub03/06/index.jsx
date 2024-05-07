import classNames from 'classnames/bind';
import { RiCheckDoubleFill } from 'react-icons/ri';

import Title from '@/components/global/Title';
import GENIUS from '../../../../public/assets/images/sub/sub03/13.jpeg';
import GENIUS2 from '../../../../public/assets/images/sub/sub03/14.jpg';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <Title title="총명&수험생 보약" />
      <div className={cx(['part'])}>
        <strong className={cx('title')}>총명 클리닉</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <p className={cx('desc')}>
              <span>
                총명시스템은 뇌신경을 안정시키고 마음을 편안하게 하고
                <br />
                집중력과 지구력을 키우고 머리를 맑게 하여
                <br />
                기억력을 향상 시키는 효과가 있습니다.
                <br />
                옛날에 비해 우리 아이들의 체격은 크게 향상 되었지만,
                <br />
                체력은 오히려 많이 저하 되었습니다.
              </span>
              <br />
              <br />
              <span>
                어려서부터 많은것들은 배우고 익혀야 하는 우리 아이들,
                <br />
                해야할 많은 과제들과 씨름하다 보니 늘휴식과 운동은 부족하고 항상 긴장 상태를 유지하고 있습니다.
                <br />
                건강한 신체에 건강한 정신이 깃들수 있듯이 ,힘든몸으로 책상앞을 지키고 있어도 머리는 오히려
                더무거워질뿐입니다.
                <br />
                총명시스템은 뇌신경을 안정시키고 마음을 편안하게 하고 집중력과 지구력을 키우고
                <br /> 머리를 맑게하여 기억력을 향상시키는 효과가 있습니다 .
              </span>
            </p>
          </div>
          <img src={GENIUS} alt="" />
        </div>
      </div>
      <div className={cx(['part', 'bg'])}>
        <strong className={cx('title')}>치료대상과 증상</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <p className={cx('desc')}>
              초등생, 중등생, 수험생, 지친직장인 및 고시 준비생들에게 탁월한 효과가 있습니다.
            </p>
            <ul className={cx('list')}>
              <li>
                <RiCheckDoubleFill size={24} />
                체력저하로 집중력 사고력 기억력이 떨어질 때
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                시험에 대한 스트레스로 심리상태가 불안 할때
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                아침에 일어나기 힘들고 책상에 앉으며 쉽게 지칠때
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                비염, 축농증, 두통, 잦은 감기, 과민성대장 증후군, 생리통 등의 만성 질환이 있을때
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                불면증 만성피로가 있을때
              </li>
            </ul>
          </div>
          <img src={GENIUS2} alt="" />
        </div>
      </div>
      <div className={cx(['part', 'bg', 'flex'])}>
        <div className={cx('box', 'flex')}>
          <strong className={cx('title')}>검사와진단</strong>
          <div className={cx('info')}>
            <ul className={cx('list')}>
              <li>01. 접수</li>
              <li>02. 기초설문지 작성</li>
              <li>03. 오행학습체질검사(학생과 보호자)</li>
              <li>04. 스트레스 검사</li>
              <li>05. 자율신경검사</li>
              <li>06. 양도락 검사</li>
              <li>07. 두뇌 활성도검사</li>
              <li>08. 진료 및 상담</li>
              <li>09. 처방</li>
            </ul>
          </div>
        </div>
        <div className={cx('box', 'flex')}>
          <strong className={cx('title')}>생활관리 수험생</strong>
          <div className={cx('info')}>
            <ul className={cx('list')}>
              <li>
                <RiCheckDoubleFill size={24} />
                아침식사를 거르지 않습니다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                과식을 금합니다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                일정한 식사시간, 수면시간을 유지합니다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                두뇌와 신체의 피로를 풀고 적절한 긴장감을 유지합니다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                휴식을 취할 때에는 적당한 운동이나 스트레칭을 합니다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                매사에 긍정적으로 생각하며 생활합니다.{' '}
              </li>
            </ul>
          </div>
        </div>
        <div className={cx('box', 'flex')}>
          <strong className={cx('title')}>생활관리 부모님</strong>
          <div className={cx('info')}>
            <ul className={cx('list')}>
              <li>
                <RiCheckDoubleFill size={24} /> 꾸중보다는 격려와 칭찬을 해 주세요
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 항상 눈을 마주치고 대화해주세요
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 스킨쉽을 자주 해 주세요
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 주변 환경을 정리해 주세요
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 아침식사를 꼭 챙겨 주세요
              </li>
              <li>
                <RiCheckDoubleFill size={24} /> 반드시 부부가 사전에 대화하여 일관성 있게 지도해 주세요{' '}
              </li>
            </ul>
          </div>
        </div>
        <div className={cx('box', 'flex')}>
          <strong className={cx('title')}>총명 치료방법</strong>
          <div className={cx('info')}>
            <ul className={cx('list')}>
              <li>전기침 치료 및 배수혈경락 맛사지</li>
              <li>머리를 맑게 해주는 혈자리에 이침치료를 합니다.</li>
              <li>향기 패치</li>
              <li>산소 치료</li>
              <li>운동 지압법및 요가운동지도</li>
              <li>뉴로피드 백훈련 : CAN </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={cx('part')}>
        <strong className={cx('title')}>자주 묻는 질문</strong>
        <div className={cx('box')}>
          <div className={cx('info')}>
            <ul className={cx('questions')}>
              <li>
                <strong className={cx('question')}>치료 시기는 언제가 적당한가요?</strong>
                <p className={cx('answer')}>
                  언제라도 가능합니다. 학습량이 늘어나고 시험이 잦아지면서 체력이 저하되어 집중력이 떨어지고, 스트레스로
                  인해 긴장이 심해지고 의욕이 상실되거나 학습에 능률이 오르지 않는다면 언제든지 치료가 가능합니다. 다만
                  총명환이나 총명대보환은 알약으로 있어있으므로, 유소아나 알약 복용이 쉽지 않는 초등학생의 경우
                  총명탕으로 치료를 대신 할 수 있습니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>얼마동안 치료를 받아야 하나요?</strong>
                <p className={cx('answer')}>
                  1달 3달 6달 과정이 있습니다. 그러나 따로 정해져 있는 기간은 없으며 필요한 만큼 치료 받는 것이
                  좋습니다.평상시 학습이 양호하다면 집중적으로 학습량이 늘어나게 되는 시험 직전에만 치료하는 것도
                  가능합니다. 그러나 개인마다 체력정도나 집중력, 학습 능률등이 다르므로 상담 후 자신에게 맞게 복용하시면
                  됩니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>검사만 받아 볼수는 없나요?</strong>
                <p className={cx('answer')}>
                  가능합니다. 각종검사를 받은 후 정밀 상담만 받을 수도 있으며 상담 후 치료여부는 원장님과 진료하면서
                  결정하셔도 됩니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>총명 클리닉 치료를 받으면 지능지수가 높아지는 건가요?</strong>
                <p className={cx('answer')}>
                  학업 성적을 향상 시키는 데는 도움이 될 것이지만 총명 클리닉은 모두가 다 1등을 하게 하거나, 지능지수를
                  높여주고자 하는 치료는 아닙니다. 총명 클리닉은 지친 체력보강과 두뇌의 활성화를 통해서 각 개인이 가지고
                  있는 능력과 소질을 최대화시키고자 하는 치료방법입니다. 체력과 두뇌의 강화를 바탕으로 자신감을 가지고
                  작은 것부터 계획하고 실천해나간다면 학습능률을 향상시킬 수 있습니다.
                </p>
              </li>
              <li>
                <strong className={cx('question')}>비염, 축농증이 있을 때도 총명 클리닉 치료를 할 수 있나요?</strong>
                <p className={cx('answer')}>
                  가능합니다. 비염과 축농증이 있는 경우 지속적인 코막힘이나 콧물, 재채기, 얕은 수면 등으로 학습장애를
                  초래할 수 있습니다. 그러므로 비염과 충농증 등의 질환이 있다면 치료를 통하여 미리 개선시켜주는 것이
                  좋습니다. 다만, 현재 학업으로 인해서 이러한 치료를 받기가 곤란하다면 총명클리닉과 증상을 완화시키는
                  탕약을 함께 복욕하면서 치료받는 것이 가능합니다.
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
