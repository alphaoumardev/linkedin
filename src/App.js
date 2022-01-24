import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './App.css'
import Feed from "./components/Feed";
function App()
{
  return (
    <div className="app">
      <Header/>
      <div className="appBody">
          <Sidebar/>
          <Feed/>
      </div>
    </div>
  );
}

export default App;
