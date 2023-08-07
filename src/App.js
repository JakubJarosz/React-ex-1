import { Profile } from './components/Profile/Profile';
import user from "./json-data/user.json"
import './App.css';

function App() {
  
  return (
    <div className="App">
      <h1>heegh</h1>
   
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        stats={user.stats} 
      />
    </div>
  );
}

export default App;
