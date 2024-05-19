import classNames from 'classnames/bind';

import SubTitle from './SubTitle';

import styles from './Faq.module.scss';

const cx = classNames.bind(styles);

const Faq = ({ questions }) => {
  return (
    <ul className={cx('container')}>
      <SubTitle title="자주묻는질문" />
      {questions.map(({ question, answer }) => (
        <li key={question}>
          <strong className={cx('question')}>{question}</strong>
          <p className={cx('answer')}>{answer}</p>
        </li>
      ))}
    </ul>
  );
};

export default Faq;
