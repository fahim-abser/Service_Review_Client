import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';

function App() {


  return (
    <div className='max-w-screen-xl mx-auto mx-20'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
