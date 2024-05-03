import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { PolarArea } from 'react-chartjs-2';
import { Chart, Title as ChartTitle, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

import Title from '@/components/global/Title';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    Chart.register(RadialLinearScale, ArcElement, ChartTitle, Tooltip, Legend);
    setLoading(false);
  }, []);

  return (
    <div className={cx('container')}>
      <Title
        title="교통사고클리닉"
        desc="교통사고 환자는 침, 뜸, 부항, 한약 한방물리치료까지 모든 한방치료가 가능합니다."
      />
      <div className={cx('wrapper')}>
        <div>
          <strong>교통사고 한방치료 설문조사 결과</strong>
          <p>대한한의사협회, 2010년 191명을 대상</p>
          {!isLoading && (
            <div className={cx('charts')}>
              <div>
                <PolarArea
                  width={320}
                  height={320}
                  data={{
                    labels: ['우수', '호전', '약간호전', '불량'],
                    datasets: [
                      {
                        label: '%',
                        data: [43, 45, 12, 0],
                        backgroundColor: [
                          'rgba(255, 99, 132, 0.5)',
                          'rgba(54, 162, 235, 0.5)',
                          'rgba(255, 206, 86, 0.5)',
                          'rgba(75, 192, 192, 0.5)',
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    responsive: false,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                      title: {
                        display: true,
                        text: '증상 개선 정도',
                      },
                    },
                  }}
                />
              </div>
              <div>
                <PolarArea
                  width={320}
                  height={320}
                  data={{
                    labels: ['매우만족', '만족', '불만족'],
                    datasets: [
                      {
                        label: '%',
                        data: [37, 63, 0],
                        backgroundColor: [
                          'rgba(75, 192, 192, 0.5)',
                          'rgba(54, 162, 235, 0.5)',
                          'rgba(255, 99, 132, 0.5)',
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    responsive: false,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                      title: {
                        display: true,
                        text: '치료에 대한 만족도',
                      },
                    },
                  }}
                />
              </div>
            </div>
          )}
        </div>
        <div>
          <strong>교통사고 Q&A</strong>
          <ul className={cx('questions')}>
            <li>
              <p className={cx('question')}>접수할때 준비해야 할 서류가 있나요?</p>
              <p className={cx('answer')}>
                대인사고 접수번호나 상대보험사 담당자 연락처만 알고 계시면 바로 치료 가능합니다.
              </p>
            </li>
            <li>
              <p className={cx('question')}>치료기간은 얼마나 걸리나요? 합의를 빨리 하는 것이 좋을까요?</p>
              <p className={cx('answer')}>
                사고 정도나 환자분의 증상에 따라 치료기간과 후유증의 정도에는 차이가 있지만,교통사고로 인해 발생하는
                통증과 후유증은 보통 사고 직후보다 일정 시간이 흐른 후 심해지고 오래가는 경향이 있습니다.따라서 충분한
                시간을 가지고 치료를 받은 이후 합의를 하는 것이 좋습니다.
              </p>
            </li>
            <li>
              <p className={cx('question')}>다른 병원에 다니고 있는데 한의원 치료를 병행할 수 있나요?</p>
              <p className={cx('answer')}>
                네 가능합니다. 타의료기관에서 치료 중이시더라도 한의원에서 병행치료 가능하십니다.
              </p>
            </li>
            <li>
              <p className={cx('question')}>건강백세한의원에서는 어떤 치료를 받을 수 있나요?</p>
              <p className={cx('answer')}>
                교통사고 환자분들은 침구치료(침, 뜸, 약침, 봉약침, 전기침 등)와 부항, 한약, 추나요법, 한방물리요법등의
                모든 한방치료를 받으실 수 있습니다.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
