import "./App.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Header/Navigation";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="min-h-[calc(100vh-44rem)] px-4 sm:px-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
