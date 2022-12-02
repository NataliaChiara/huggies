import './App.css';
import Page1 from './Components/page1/page1';
import Page2 from './Components/Page2/Page2';
import Page3 from './Components/Page3/Page3';
import Start from './Components/Start/Start';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Start />
      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/quiz' element={<Page2 />} />
      </Routes>
      {/* <Page3 /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
