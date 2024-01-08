import './App.css';
import About from './components/About'; // Import the About component
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile/> {/* Use the About component */}
    </div>
    
  );
}

export default App;