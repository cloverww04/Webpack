import htmlStructure from '../components/htmlStructure';
import header from '../components/header';
import startSortingBtn from './startSortingBtn';
import events from './events';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};
startApp();

export default startApp;
