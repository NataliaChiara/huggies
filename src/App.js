import './App.css';
import Page1 from './Components/page1/page1';
import Page2 from './Components/Page2/Page2';
import Start from './Components/Start/Start';

function App() {
  return (
    <div className="app">
      <Start />
      {/* <Page1 /> */}
      <Page2 />
    </div>
  );
}

export default App;
