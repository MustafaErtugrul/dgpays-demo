// import Hello2, { cities as sehiler, countries } from "./cities";

import CategoryPage from "./propSample/CategoryPage";
import CountryList from "./propSample/CountryList";
import ProductDetail from "./propSample/ProductDetail";
import WebUserDetail from "./propSample/WebUserDetail";
import StateSample from "./stateSample/StateSample";
import StateSample2 from "./stateSample/StateSample2";
import StateSample3 from "./stateSample/StateSample3";
import StateSample4 from "./stateSample/StateSample4";

//<> </> Fragment olarak geçiyor
function App() {

  const ulkeler = ['Türkiye', 'Rusya', 'Almanya', 'Azerbaycan'];

  return (
    <>
      <StateSample4 />
      {/* <StateSample3 /> */}
      {/* <StateSample2 /> */}
      {/* <StateSample /> */}
      {/* <ProductDetail name="IPhone" price={40} /> */}
      {/* <CategoryPage /> */}
      {/* <CountryList title='Suppliers country list' countries={ulkeler} /> */}
      {/* <WebUserDetail name='Çağatay' surname='Yıldız' age={18} /> */}
    </>
  );
}

export default App;
