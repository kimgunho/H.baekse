import { Helmet } from 'react-helmet-async';

import Banner from './01_Banner';
import Clinic from './02_Clinic';
import Faq from './03_Faq';
import Customer from './04_Customer';

const Page = () => {
  return (
    <>
      <Helmet>
        <title>ssss</title>
      </Helmet>
      <Banner />
      <Clinic />
      <Faq />
      <Customer />
    </>
  );
};

export default Page;
