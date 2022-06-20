import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Base } from '../templates/Base';

const Index = () => <Base />;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'footer'])),
  },
});

export default Index;
