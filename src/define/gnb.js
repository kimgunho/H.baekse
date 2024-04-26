import Icon01Black from '../../public/assets/images/icons/main_01_black.png';
import Icon02Black from '../../public/assets/images/icons/main_02_black.png';
import Icon03Black from '../../public/assets/images/icons/main_03_black.png';
import Icon04Black from '../../public/assets/images/icons/main_04_black.png';
import Icon05Black from '../../public/assets/images/icons/main_05_black.png';
import Icon01Color from '../../public/assets/images/icons/main_01_color.png';
import Icon02Color from '../../public/assets/images/icons/main_02_color.png';
import Icon03Color from '../../public/assets/images/icons/main_03_color.png';
import Icon04Color from '../../public/assets/images/icons/main_04_color.png';
import Icon05Color from '../../public/assets/images/icons/main_05_color.png';

const GNB = [
  {
    title: '한의원 소개',
    link: '/gree',
    sub: [
      { title: '한의원 소개', link: '/gree' },
      { title: '의료진 소개', link: '/career' },
      { title: '오시는 길', link: '/direction' },
    ],
  },
  {
    title: '교통사고 클리닉',
    link: '/sub01-01',
    icons: {
      color: Icon01Color,
      black: Icon01Black,
    },
    sub: [
      { title: '교통사고 클리닉', link: '/sub01-01' },
      { title: '진료&접수 절차', link: '/sub01-02' },
      { title: '교통사고 후유증', link: '/sub01-03' },
      { title: '치료 진행', link: '/sub01-04' },
    ],
  },
  {
    title: '통증 클리닉',
    link: '/sub02-01',
    icons: {
      color: Icon02Color,
      black: Icon02Black,
    },
    sub: [
      { title: '구안와사 클리닉', link: '/sub02-01' },
      { title: '통증 클리닉', link: '/sub02-02' },
    ],
  },
  {
    title: '어린이 클리닉',
    link: '/sub03-01',
    icons: {
      color: Icon03Color,
      black: Icon03Black,
    },
    sub: [
      { title: '성장', link: '/sub03-01' },
      { title: '감기', link: '/sub03-02' },
      { title: '비염', link: '/sub03-03' },
      { title: '중이염', link: '/sub03-04' },
      { title: '아토피', link: '/sub03-05' },
      { title: '총명&수험생 보약', link: '/sub03-06' },
      { title: '허약', link: '/sub03-07' },
      { title: '돌보약', link: '/sub03-08' },
      { title: '시력저하', link: '/sub03-09' },
    ],
  },
  {
    title: '여성 클리닉',
    link: '/sub04-01',
    icons: {
      color: Icon04Color,
      black: Icon04Black,
    },
    sub: [
      { title: '난임', link: '/sub04-01' },
      { title: '생리통', link: '/sub04-02' },
      { title: '산후조리&피부', link: '/sub04-03' },
      { title: '갱년기', link: '/sub04-04' },
      { title: '담적병(위장병)', link: '/sub04-05' },
      { title: '여드름', link: '/sub04-06' },
    ],
  },
  {
    title: '비만 클리닉',
    link: '/sub05',
    icons: {
      color: Icon05Color,
      black: Icon05Black,
    },
  },
  {
    title: '자주묻는 질문',
    link: '/faq',
  },
];

export default GNB;
