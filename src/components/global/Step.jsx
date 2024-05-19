import classNames from 'classnames/bind';

import CHECK_IMG from '../../../public/assets/images/global/check.jpeg';

import styles from './Step.module.scss';

const cx = classNames.bind(styles);

const Step = ({ list, desc }) => {
  return (
    <div className={cx('container')}>
      <div className={cx('contents')}>
        {desc && <p className={cx('desc')}>{desc}</p>}
        <ul className={cx('step')}>
          {list.map((step, index) => {
            const no = index < 9 ? `0${index + 1}` : index;
            return (
              <li key={step}>
                <span className={cx('no')}>{no}.</span> {step}
              </li>
            );
          })}
        </ul>
      </div>
      <img src={CHECK_IMG} alt="" />
    </div>
  );
};

export default Step;
