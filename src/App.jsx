import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-full  dark:grandient-dark grandient-light text-neutral-900 dark:text-neutral-0">
      <div className="pt-[3rem] flex justify-center items-center w-full">
        <Header />
      </div>
      <main className="min-h-[100vh]">
        <Home />
      </main>
    </div>
  );
}

export default App;
