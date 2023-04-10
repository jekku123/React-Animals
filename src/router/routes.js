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

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<About />} />
      <Route path='/animals' element={<Animals />} />
      <Route path='/birds' element={<Birds />} />
    </Route>
  )
);

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

/* <RouterProvider router={router} /> */

// USING OBJECTS

// export const router2 = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [
//       {
//         path: '/',
//         element: <About />,
//       },
//       {
//         path: '/animals',
//         element: <Animals />,
//       },
//       {
//         path: '/birds',
//         element: <Birds />,
//       },
//     ],
//   },
// ]);
