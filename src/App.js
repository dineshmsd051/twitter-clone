import './App.css';
import Feed from './feed/Feed';
import SideBar from './sidebar/SideBar';
import Widgets from "./widgets/Widgets";

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
