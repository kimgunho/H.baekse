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

const PAGES = {
  '한의원 소개': {
    title: '한의원 소개',
    children: [
      {
        title: '한의원 소개',
        link: '/gree',
      },
      {
        title: '의료진 소개',
        link: '/career',
        wrap: true,
      },
      {
        title: '오시는 길',
        link: '/direction',
        wrap: true,
      },
    ],
  },
  '교통사고 클리닉': {
    title: '교통사고 클리닉',
    icons: {
      color: Icon01Color,
      black: Icon01Black,
    },
    children: [
      {
        title: '교통사고 클리닉',
        link: '/sub01-01',
        wrap: true,
      },
      {
        title: '진료&접수 절차',
        link: '/sub01-02',
        wrap: true,
      },
      {
        title: '교통사고 후유증',
        link: '/sub01-03',
        wrap: true,
      },
      {
        title: '치료 진행',
        link: '/sub01-04',
        wrap: true,
      },
    ],
  },
  '통증 클리닉': {
    title: '통증 클리닉',
    icons: {
      color: Icon02Color,
      black: Icon02Black,
    },
    children: [
      {
        title: '구안와사 클리닉',
        link: '/sub02-01',
        wrap: true,
      },
      {
        title: '통증 클리닉',
        link: '/sub02-02',
        wrap: true,
      },
    ],
  },
  '어린이 클리닉': {
    title: '어린이 클리닉',
    icons: {
      color: Icon03Color,
      black: Icon03Black,
    },
    children: [
      {
        title: '성장',
        link: '/sub03-01',
        wrap: true,
      },
      {
        title: '감기',
        link: '/sub03-02',
        wrap: true,
      },
      {
        title: '비염',
        link: '/sub03-03',
        wrap: true,
      },
      {
        title: '중이염',
        link: '/sub03-04',
        wrap: true,
      },
      {
        title: '아토피',
        link: '/sub03-05',
        wrap: true,
      },
      {
        title: '총명&수험생 보약',
        link: '/sub03-06',
        wrap: true,
      },
      {
        title: '허약',
        link: '/sub03-07',
        wrap: true,
      },
      {
        title: '돌보약',
        link: '/sub03-08',
        wrap: true,
      },
      {
        title: '시력저하',
        link: '/sub03-09',
        wrap: true,
      },
    ],
  },
  '여성 클리닉': {
    title: '여성 클리닉',
    icons: {
      color: Icon04Color,
      black: Icon04Black,
    },
    children: [
      {
        title: '난임',
        link: '/sub04-01',
        wrap: true,
      },
      {
        title: '생리통',
        link: '/sub04-02',
        wrap: true,
      },
      {
        title: '산후조리&피부',
        link: '/sub04-03',
        wrap: true,
      },
      {
        title: '갱년기',
        link: '/sub04-04',
        wrap: true,
      },
      {
        title: '담적병(위장병)',
        link: '/sub04-05',
        wrap: true,
      },
      {
        title: '여드름',
        link: '/sub04-06',
        wrap: true,
      },
    ],
  },
  '비만 클리닉': {
    title: '비만 클리닉',
    icons: {
      color: Icon05Color,
      black: Icon05Black,
    },
    children: [
      {
        title: '비만 클리닉',
        link: '/sub05',
        wrap: false,
      },
    ],
  },
  '의학 정보': {
    title: '의학 정보',
    children: [
      {
        title: '자주묻는질문',
        link: '/faq',
        wrap: true,
      },
    ],
  },
};

export default PAGES;
