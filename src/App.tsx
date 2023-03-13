import Header from "./layouts/Header";
import Main from "./layouts/Main";

import useThemeControls from "./redux/control/themControl";

// import "./App.css";

function App() {
  const { theme } = useThemeControls();

  return (
    <div className={theme}>
      <div className="relative flex bg-app-white-1 dark:bg-app-black-1 dark:text-app-white-1.2 ">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
