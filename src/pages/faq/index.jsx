import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import Title from '@/components/global/Title';
import QUESTIONS from '@/define/questions';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  const { hash } = useLocation();
  const [visibleCount, setVisibleCount] = useState();
  const [filter, setFilter] = useState('');

  const questions = useMemo(() => QUESTIONS.filter((question) => question.q.includes(filter)), [filter]);

  useEffect(() => {
    if (hash) {
      const id = hash.split('#')[1];
      const target = document.getElementById(id);
      const scrollY = target.offsetTop;
      window.scrollTo(0, scrollY - 100);
      setVisibleCount(Number(id));
    }
  }, [hash]);

  const onChange = (e) => {
    setFilter(e.target.value);
  };

  const select = (e) => {
    const index = Number(e.target.closest('[data-index]')?.dataset.index);
    visibleCount === index ? setVisibleCount() : setVisibleCount(index);
  };

  return (
    <div className={cx('container')}>
      <Title title="자주묻는 질문" desc={['환자분들께서 자주궁금해 하시는 사항에 대하여 안내드리겠습니다.']} />
      <div className={cx('field')}>
        <p>검색어</p>
        <input onChange={onChange} type="text" />
      </div>
      <div className={cx('list')}>
        {questions.map((question, index) => {
          const count = index + 1;
          const no = count < 10 ? `0${count}` : count;

          return (
            <div className={cx('item')} key={index} id={index} data-index={index}>
              <div className={cx('top')} onClick={select}>
                <div className={cx('button')}>
                  <p className={cx('no')}>{no}</p>
                  <strong className={cx('question')}>{question.q}</strong>
                </div>
                {visibleCount === index ? <RiArrowUpSLine size={32} /> : <RiArrowDownSLine size={32} />}
              </div>
              <p className={cx('answer', { visible: visibleCount === index })}>{question.a}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
