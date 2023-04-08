import Header from '../ui/Header';
import About from '../pages/About';
import Animals from '../pages/Animals';
import Birds from '../pages/Birds';
import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<About />} />
      <Route path='/animals' element={<Animals />} />
      <Route path='/birds' element={<Birds />} />
    </Route>
  )
);
