import classNames from 'classnames/bind';

import styles from './SubTitle.module.scss';

const cx = classNames.bind(styles);

const SubTitle = ({ title, level = 1 }) => {
  return <strong className={cx('title', { level: level === 1 })}>{title}</strong>;
};

export default SubTitle;
