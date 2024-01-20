import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import { Layout } from './layout';
import { Path } from './path';
import { Home } from '../../pages/home/home';
import { Friends } from '../../pages/friends/friends';
import { Messages } from '../../pages/messages/messages';
import { Clubs } from '../../pages/clubs/clubs';
import { RegisterForm } from '../../features/registerForm/registerForm';
import { LoginForm } from '../../features/loginForm';
import { Search } from '../../pages/search/search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: Path.friends, element: <Friends /> },
      { path: Path.messages, element: <Messages /> },
      { path: Path.clubs, element: <Clubs /> },
      { path: Path.search, element: <Search /> },
    ],
  },
  { path: Path.register, element: <RegisterForm /> },
  { path: Path.login, element: <LoginForm /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
