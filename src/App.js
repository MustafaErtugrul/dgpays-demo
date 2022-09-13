// import Hello2, { cities as sehiler, countries } from "./cities";
import Footer from "./templateSample/Footer";
import Header from "./templateSample/Header";
import Navbar from "./templateSample/Navbar";
import PageContent from "./templateSample/PageContent";


//<> </> Fragment olarak geçiyor
function App() {


  // console.log('cities', sehiler.length);
  // console.log('countries', countries);

  return (
    <>
      <Navbar/>
      <Header/>
      <PageContent/>
      <Footer/>
    </>

  );
}

export default App;
