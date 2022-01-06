import logo from './logo.svg';
import './App.css';
import PageHeader from './components/pageHeader/PageHeader';
import TopProfile from './components/TopProfile/TopProfile';
import SideMenu from './components/SideMenu/SideMenu';
import Investment from './components/Investment/Investment';
import ExploreCoins from './components/ExploreCoins/ExploreCoins';

function App() {
  return (
    <div className="App">
      <div className='fullPageLayout'>
        <div className='mainSidebar'>
          <SideMenu />
        </div>
        <div className='mainContentContainer'>
        <PageHeader />
        <div className='mainContentBody'>
          <TopProfile />
          <Investment />
          <ExploreCoins />
        </div>
        </div>
      </div>
    
    </div>
  );
}

export default App;
