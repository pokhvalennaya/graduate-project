import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  return (
    <div className="App bg-color">
      <Navbar />
      <AuthPage />
      {/* <h1>Project</h1> */}
      {/* <UserProfileForm /> */}
    </div>
  );
}

export default App;
