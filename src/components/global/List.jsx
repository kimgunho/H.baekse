import classNames from 'classnames/bind';
import { RiCheckDoubleFill } from 'react-icons/ri';

import styles from './List.module.scss';

const cx = classNames.bind(styles);

const List = ({ list, titles }) => {
  return (
    <ul className={cx('container', { column: titles })}>
      {list.map((line, index) => (
        <li key={line}>
          {!titles && <RiCheckDoubleFill size={24} />}
          {titles?.[index] && <span className={cx('title')}>{titles[index]}</span>}
          {line}
        </li>
      ))}
    </ul>
  );
};

export default List;
