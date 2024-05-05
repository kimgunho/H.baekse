import classNames from 'classnames/bind';

import Title from '@/components/global/Title';
import SRC from '../../../../public/assets/images/sub/sub01/2.jpg';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx('container')}>
      <Title title="진료&접수 절차" desc={['교통사고 후유증과 관련된 모든 치료가 가능합니다.']} />
      <div className={cx('wrapper')}>
        <div>
          <p>
            침, 뜸, 부항, 탕약, 추나 한방물리치료 등 모든 치료는 자동차보험 적용 대상입니다. 따라서 교통사고 발생시
            한의원에 내원하셔서 자동차보험으로 치료받는다고 말씀하시면 됩니다.
          </p>
          <img src={SRC} alt="" />
        </div>
        <div>
          <strong>교통사고 발생시 절차</strong>
          <ul className={cx('list')}>
            <li>
              <p className={cx('title')}>01. 접수</p>
              <p className={cx('desc')}>
                한의원에 내원하셔서 교통사고 접수번호 혹은 상대보험사 담당자 연락처만 알려주시면 보험사 담당자와
                연락하여 확인 후 진료에 들어갑니다.
              </p>
            </li>
            <li>
              <p className={cx('title')}>02. 진단&상담</p>
              <p className={cx('desc')}>
                진료실에서 교통사고 후유증과 몸 상태를 진찰받고 증상 및 앞으로의 치료 절차에 관한 자세한 설명을 들으신
                후 치료를 시작하게 됩니다.
              </p>
            </li>
            <li>
              <p className={cx('title')}>03. 치료</p>
              <p className={cx('desc')}>
                건강백세 한의원의 침, 뜸, 부항, 탕약, 약침, 추나, 한방물리치료 등 모든 치료를 받으실 수 있습니다.
              </p>
            </li>
            <li>
              <p className={cx('title')}>04. 치료기간</p>
              <p className={cx('desc')}>
                보통 4~8주 정도 소요되지만 환자분들의 증상에 따라 치료기간이 달라질수 있습니다. 교통사고 후유증이 완전히
                회복되지 않은 경우에는 보험회사 담당자와 협의 후 치료연장이 가능합니다.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
