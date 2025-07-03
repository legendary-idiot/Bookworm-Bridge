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
      <main className="min-h-[calc(100vh-20rem)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
