import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import "./App.scss";
import { Layout } from "./layout";
import { Path } from "./path";
import { Home } from "../../pages/home/home";
import { Friends } from "../../pages/friends/friends";
import { Messages } from "../../pages/messages/messages";
import { Clubs } from "../../pages/clubs/clubs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: Path.friends, element: <Friends /> },
      { path: Path.messages, element: <Messages /> },
      { path: Path.clubs, element: <Clubs /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

{
  /* <Routes>
<Route path={Path.home} element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="friends" element={<Friends />} />
  <Route path="messages" element={<Messages />} />
  <Route path="clubs" element={<Clubs />} />
</Route>
</Routes> */
}
