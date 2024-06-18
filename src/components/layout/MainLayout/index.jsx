import { useEffect, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';

import PAGES from '@/define/pages';
import Nav from '@/components/global/Nav';

import styles from './index.module.scss';
import Header from '../Header';
import Footer from '../Footer';

const cx = classNames.bind(styles);

const Content = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  const wrap = useMemo(() => {
    if (pathname === '/') {
      return false;
    }

    const isWrap = Object.values(PAGES).find((page) => page.children.some((sub) => sub.link === pathname && sub.wrap));
    return !!isWrap;
  }, [pathname]);

  const pages = useMemo(() => {
    if (pathname === '/') {
      return [];
    }

    const page = Object.values(PAGES).find(
      (page) =>
        page.title.includes('클리닉') && page.children.some((sub) => sub.link === pathname && page.children.length > 1),
    );
    return page ? page.children : [];
  }, [pathname]);

  return (
    <>
      <Header />
      {pages.length !== 0 && <Nav pages={pages} />}
      <main className={cx('container', { wrap })}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Content;
