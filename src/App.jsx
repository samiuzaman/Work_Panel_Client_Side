import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="h-screen gap-10 flex flex-col justify-center items-center">
        <h1 className="text-green-700 font-semibold text-5xl">
          This is Work Panel Project
        </h1>
        <p className="text-red-600 font-medium text-2xl">
          Complete Web Development Assigment 12 Project
        </p>
        <Button variant="destructive">Click me</Button>
      </div>
    </>
  );
}

export default App;
