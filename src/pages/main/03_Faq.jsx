import { useRef } from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import { RiArrowDropRightLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

import QUESTIONS from '@/define/questions';

import styles from './03_Faq.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
};

const Faq = () => {
  const slick = useRef(null);

  const gotoPrev = () => {
    slick.current.slickPrev();
  };

  const gotoNext = () => {
    slick.current.slickNext();
  };

  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <strong className={cx('title')}>자주묻는질문</strong>
        <div className={cx('faq')}>
          <Slider ref={slick} {...settings}>
            {QUESTIONS.map((question, index) => (
              <div key={index} className={cx('card')}>
                <strong className={cx('title')}>{question.q}</strong>
                <p className={cx('content')}>{question.a}</p>
                <Link to={'/faq'}>
                  자세히보기 <RiArrowDropRightLine size={24} />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
        <div className={cx('control')}>
          <button onClick={gotoPrev} type="button" aria-label="이전 질문">
            <RiArrowLeftSLine size={48} />
          </button>
          <button onClick={gotoNext} type="button" aria-label="다음 질문">
            <RiArrowRightSLine size={48} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
