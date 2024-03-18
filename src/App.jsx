import { Outlet } from "react-router-dom";
import useModal from "./hooks/useModal";
import {
  HomeLayout,
  LoginModal,
  MenuBar,
  Navbar,
  RegisterModal,
  Logo,
} from "./components";

const App = () => {
  const showLogin = useModal((state) => state.showLogin);
  const showRegister = useModal((state) => state.showRegister);

  return (
    <div className="body">
      <Logo />
      <MenuBar />
      <LoginModal visible={showLogin} />
      <RegisterModal visible={showRegister} />
      <HomeLayout>
        <div className="p-5 centerize">
          <Navbar />
        </div>
        <div className="centerize w-full h-full">
          <Outlet />
        </div>
      </HomeLayout>
    </div>
  );
};

export default App;
