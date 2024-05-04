import classNames from 'classnames/bind';
import { RiCheckDoubleFill } from 'react-icons/ri';

import Title from '@/components/global/Title';
import FACE from '../../../../public/assets/images/sub/sub02/face.jpg';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <Title title="구안와사 클리닉" desc="구안와사는 조기에 치료, 관리를 잘 받아야 후유증을 최소화 할 수 있습니다." />
      <div className={cx('wrapper')}>
        <div className={cx('part')}>
          <div className={cx('box')}>
            <strong className={cx('title')}>구안와사란?</strong>
            <div className={cx('flex')}>
              <p className={cx('desc')}>
                안면신경(7뇌신경)에 문제가 생겨 안면근육 마비를 일으키는 질환을 말합니다.
                <br /> 안면신경은 주로 운동신경으로써 얼굴표정에 관련된 모든 근육을 지배하며
                <br />
                미각 및 침샘, 청각 및 눈물샘을 지배합니다.
                <br /> 따라서 안면신경마비가 발생하면 얼굴이 삐뚤어지고 표정을 지을 때 얼굴이
                <br /> 이상해지고 이외에도 음식을 씹거나 삼키기 어렵고,
                <br /> 미각이 손실되며 눈물분비가 줄고, 청각이 과민되는 증상이 함께 생길 수 있습니다.
                <br /> 심한 경우는 심한 어지러움도 동반될 수 있습니다.
              </p>
              <img src={FACE} alt="" />
            </div>
          </div>
        </div>
        <div className={cx('part')}>
          <div className={cx('box')}>
            <strong className={cx('title')}>구안와사 진단</strong>
            <ul className={cx('step')}>
              <li>
                <span>1단계</span> 정상
              </li>
              <li>
                <span>2단계</span> 살짝 힘주면
                <br /> 눈감기 가능
              </li>
              <li>
                <span>3단계</span> 최대한 힘을 줘야
                <br /> 눈감기 가능
              </li>
              <li>
                <span>4단계</span> 앞이마 운동불가
                <br /> 눈감기 불완전
              </li>
              <li>
                <span>5단계</span> 안정상태일때
                <br /> 안면 비대칭
              </li>
              <li>
                <span>6단계</span> 안면 운동 불가
              </li>
            </ul>
            <ul className={cx('possibilities')}>
              <li>
                <RiCheckDoubleFill size={24} />
                1~3단계 : 치료관리시 4~8주 이내 대부분 회복됩니다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                4~5단계 : 8주이상 치료관리가 필요합니다.
              </li>
              <li>
                <RiCheckDoubleFill size={24} />
                6단계 : 대부분 후유증을 동반합니다.
              </li>
            </ul>
          </div>
        </div>
        <div className={cx('part')}>
          <div className={cx('box')}>
            <strong className={cx('title')}>예후 경과</strong>
            <p className={cx('desc')}>
              <span className={cx('point')}>초기부터 관리해서 후유증을 최소화하는게 목표입니다.</span>
              초기발생 1~2주 정도는 증상이 더 심화될 수 있습니다.
              <br /> 환자의 70~80%는 4~8주에서 길게는 몇 개월 이내에 증상이 회복됩니다.
              <br /> 10%내외에서는 부분적으로만 회복되어 마비증상의 일부가 영구히 남게 되는 경우도 있습니다.
              <br /> 미각이 떨어지고 눈물 감소나 청각과민 증상이 동반되는 경우는 2단계나 3단계 이상의 마비로써 회복률이
              떨어진다고 볼 수 있습니다.
              <br /> 회복이 증상 발생 후 2~3주 이내에 나타나기 시작하면 완전히 회복될 가능성이 높습니다.
            </p>
          </div>
        </div>
        <div className={cx('part')}>
          <div className={cx('flex')}>
            <div className={cx(['box', 'half'])}>
              <strong className={cx('title')}>구안와사 후유증</strong>
              <ul className={cx('list')}>
                <li>
                  <p className={cx('title')}>01. 완고성 안면마비</p>
                  <p className={cx('desc')}>
                    6개월이 지난 안면마비 상태를 말하며 마비가 부분적으로 남아 있으며 때로는 반대편 입이 돌아가기도
                    합니다.
                  </p>
                </li>
                <li>
                  <p className={cx('title')}>02. 안면근 연축</p>
                  <p className={cx('desc')}>
                    안구 주위 근육이나 다른 안면근을 침범하여 수초에서 수분간의 수축 운동을 일으킵니다. 불수의적으로
                    일어나기 때문에 인위적으로 흉내를 내거나 중지시킬 수 없습니다. 피로나 스트레스에 의해서 심해지며
                    주로 성인, 특히 여성에서 더 많이 나타나는 경향이 있습니다.
                  </p>
                </li>
                <li>
                  <p className={cx('title')}>03. 안면근 구축</p>
                  <p className={cx('desc')}>
                    안면근의 경직 상태로서 입과 코 사이의 주름이 깊어지고 입 끝이 정상 쪽보다 더 말려 올라갑니다.
                  </p>
                </li>
                <li>
                  <p className={cx('title')}>04. 연합운동</p>
                  <p className={cx('desc')}>
                    정상적으로 같이 움직이지 않는 표정근이 동시에 움직이는 것으로 예를 들면 눈을 깜빡일 때 입이
                    움직이거나 웃을 때 눈이 감기는 경우를 말합니다.
                  </p>
                </li>
                <li>
                  <p className={cx('title')}>05. 악어의 눈물</p>
                  <p className={cx('desc')}>
                    음식을 먹을 때 눈물이 나오는 것으로 눈에서 코로 연결되어 있는 누완이 구안와사로 인해 좁아져 나타날
                    수 있습니다.
                  </p>
                </li>
              </ul>
            </div>
            <div className={cx(['box', 'half'])}>
              <strong className={cx('title')}>생활 수칙</strong>
              <ul className={cx('list')}>
                <li>
                  <p className={cx('desc')}>찬바람이나 찬물을 반드시 피해야한다.</p>
                </li>
                <li>
                  <p className={cx('desc')}>과로, 찬음식 및 소화에 부담을 주는 기름진 음식, 술 등을 피해야한다.</p>
                </li>
                <li>
                  <p className={cx('desc')}>갱년기 및 정서적 안정이 필요한 환자는 거울을 못보게한다.</p>
                </li>
                <li>
                  <p className={cx('desc')}>표정연습 및 안면운동을 해야한다.</p>
                </li>
                <li>
                  <p className={cx('desc')}>안정기(2주이상)에 접어들면 환부에 온찜질이나 마사지를 자주 해준다.</p>
                </li>
                <li>
                  <p className={cx('desc')}>
                    치료가 늦을수록 유착 가능성이 높고 후유증이 20~30%(심각한 후유증 10%내외)나 되므로 적극적인 치료에
                    집중한다.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={cx('part')}>
          <div className={cx('box')}>
            <strong className={cx('title')}>치료프로그램</strong>
            <p className={cx('desc')}>
              발병 원인과 정도에 따라 최적화 된 프로그램을 통하여 빠른 회복과 후유증의 최소화를 목표로 치료합니다.
            </p>
            <ul className={cx('program')}>
              <li>침뜸부항전침시술</li>
              <li>안면미소침</li>
              <li>매선요법</li>
              <li>약침요법</li>
              <li>한약</li>
              <li>추나경근요법</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
