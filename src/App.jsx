import "./App.css";
import Dashbord from "./components/Dashbord";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ThemContextProvaider from "./context/ThemContextProvaider";

function App() {
  return (

    <ThemContextProvaider>
     <div className="flex">
       <Sidebar/>
       <div className="grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900
       dark:bg-gray-900 dark:text-white">
        <Navbar/>
        <div>
          <Dashbord/>
        </div>
       </div>
     </div>
     </ThemContextProvaider>
  );
}

export default App;
