import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const login = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!login ? <Auth /> : <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
