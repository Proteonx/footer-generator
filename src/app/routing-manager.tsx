import loadable from '@loadable/component';
import { ROUTES } from '@utils/routes';
import { Route, Routes } from 'react-router-dom';

const FooterGenerator = loadable(() => import('@screens/footer-generator/footer-generator'), {
  resolveComponent: (components) => components.FooterGenerator,
});

const Footer = loadable(() => import('@components/footer/footer'), {
  resolveComponent: (components) => components.Footer,
});

const RoutingManager = () => {
  return (
    <Routes>
      <Route index element={<FooterGenerator />} />
      <Route path={ROUTES.FooterGenerator.path} element={<FooterGenerator />} />
      <Route path={ROUTES.Footer.path} element={<Footer />} />
    </Routes>
  );
};
export default RoutingManager;
