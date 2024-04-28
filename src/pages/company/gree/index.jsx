import classNames from 'classnames/bind';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('top')}>
        <div className={cx(['frame', 'left'])} />
        <div className={cx(['frame', 'right'])} />
        <strong className={cx('greeting')}>
          <span className={cx('point')}>건강백세 한의원</span>과 여러분이 함께하는 이야기들은 <br />
          환자분이 더 행복하고, 더욱 건강함을 만드는데 <br />
          소중한 자원이 될 것입니다.
        </strong>
      </div>
      <div className={cx('bottom')}>
        <div className={cx('wrapper')}>
          <strong className={cx('title')}>
            건강백세 한의원에
            <br />
            방문해주셔서 감사합니다.
          </strong>
          <div className={cx('box')}>
            <div className={cx('text')}>
              <p className={cx('desc')}>
                건강백세 한의원은 사상체질과 환자분들을 최우선으로 생각하는 의료서비스로
                <br /> 지난 시간동안 대한민국 사상의학 발전의 역사를 써내려 왔습니다.
                <br />
                그간 여러분이 보내주신 큰 관심과 사랑은 건강백세 한의원이
                <br /> 지금의 모습을 갖추는 중요한 밑거름이 되었다고 생각합니다.
              </p>
              <p className={cx('desc')}>
                홈페이지를 둘러보실 때 마다 유용하고 정확한 건강,진료정보 및 병원 이용안내를
                <br /> 확인하실 수 있도록 최선의 노력을 다하겠습니다. <br />
                한의원 이용 시 불편사항이나 개선점이 있다면 주저하지 마시고 의견을 전해주십시오.
                <br />
                건강백세 한의원이 내 집같이 편안한 병원이 될 수 있도록 여러분의 의견에 항상 귀를 기울이겠습니다.
              </p>
              <p className={cx('desc')}>
                건강백세 한의원은 앞으로도 한의원의 꿈과 미래,행복을
                <br /> 이곳을 방문하신 모든 분들과 함께 나누며보다
                <br /> 나은 서비스로 다가갈 것을 약속드립니다.감사합니다.
              </p>
            </div>
            <img src={'../../../../public/assets/images/sub/company/gree_01.jpg'} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
