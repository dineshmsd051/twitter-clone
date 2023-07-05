import './App.css';
import Feed from './Feed';
import SideBar from './SideBar';
import Widgets from "./Widgets"

function App() {
  return (
    <div className="app">
     <SideBar />

    <Feed/>

    <Widgets />
    </div>
  );
}

export default App;
