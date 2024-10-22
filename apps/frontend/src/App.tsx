import './App.css';
import CourseObjective from './components/CourseObjective/index.tsx';
import './components/Header/index.tsx';
import Header from './components/Header/index.tsx';
import Home from './components/Home/index.tsx';
import Information from './components/Information/index.tsx';
import Inscription from './components/Inscription/index.tsx';
import Registration from './components/Registration/index.tsx';

function App() {
  return (
    <>
      <Header />
      <Home />
      <CourseObjective />
      <Registration />
      <Information />
      <Inscription />
    </>
  );
}

export default App;
