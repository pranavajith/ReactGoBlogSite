import { ScrollableComponent, FixedComponent } from "./components/bodyComponents";
import BlogContainer from "./components/BlogContainer";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import './styles/bodyComponents.css';

function App() {

  const scrollContent = {
    data: "Hello!"
  }

  const fixedContent = {
    data: "Hello2!"
  } 

  return (
    <>
    <Header userData={null}/>
    <div className = "container">
      <ScrollableComponent content = {scrollContent}/>
      <FixedComponent content = {fixedContent}/>
    </div>
    <Footer />
    </>
  );
}

export default App;
