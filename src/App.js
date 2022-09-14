// import Hello2, { cities as sehiler, countries } from "./cities";

import CategoryPage from "./propSample/CategoryPage";
import CountryList from "./propSample/CountryList";
import ProductDetail from "./propSample/ProductDetail";
import WebUserDetail from "./propSample/WebUserDetail";

//<> </> Fragment olarak geçiyor
function App() {

  const ulkeler = ['Türkiye', 'Rusya', 'Almanya', 'Azerbaycan'];

  return (
    <>
    <ProductDetail name="IPhone" price={40} />
      {/* <CategoryPage /> */}
      {/* <CountryList title='Suppliers country list' countries={ulkeler} /> */}
      {/* <WebUserDetail name='Çağatay' surname='Yıldız' age={18} /> */}
    </>
  );
}

export default App;
