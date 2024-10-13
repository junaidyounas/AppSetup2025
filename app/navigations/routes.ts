import DashboardScreen from 'screens/dashboard';
import { screens } from './screens';
import IntroScreen from 'screens/introScreen';

export const mainRoutes = {
  [screens.introScreen]: {
    component: IntroScreen,
  },
  [screens.dashboard]: {
    component: DashboardScreen,
  },
};
