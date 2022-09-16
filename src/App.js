// import Hello2, { cities as sehiler, countries } from "./cities";

import CategoryPage from "./propSample/CategoryPage";
import CountryList from "./propSample/CountryList";
import ProductDetail from "./propSample/ProductDetail";
import WebUserDetail from "./propSample/WebUserDetail";
import SupplierPage from "./propState/SupplierPage";
import ProductPage from "./stateSample/ProductPage";
import StateExample from "./stateSample/StateExample";
import StateInput from "./stateSample/StateInput";
import StateSampleTooMany from "./stateSample/StateSampleTooMany";

//<> </> Fragment olarak geçiyor
function App() {

  const ulkeler = ['Türkiye', 'Rusya', 'Almanya', 'Azerbaycan'];

  return (
    <>
      <SupplierPage />
      {/* <ProductPage/> */}
      {/* <StateInput /> */}
      {/* <ProductDetail name="IPhone" price={40} /> */}
      {/* <CategoryPage /> */}
      {/* <CountryList title='Suppliers country list' countries={ulkeler} /> */}
      {/* <WebUserDetail name='Çağatay' surname='Yıldız' age={18} /> */}
    </>
  );
}

export default App;
