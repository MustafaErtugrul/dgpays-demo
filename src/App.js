// import Hello2, { cities as sehiler, countries } from "./cities";

import AddCategory from "./APIOperationsWithAxios/AddCategory";
import SupplierList from "./APIOperationsWithAxios/SupplierList";
import TodoPage from "./APIOperationsWithAxios/TodoPage";
import AddProduct from "./APIOperationswithFetch/AddProduct";
import ProductListPage from "./APIOperationswithFetch/ProductListPage";
import Counter from "./effect/Counter";
import EffectInterval from "./effect/EffectInterval";
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


      <AddCategory />
      {/* <SupplierList /> */}
      {/* <AddCategory /> */}
      {/* <TodoPage/> */}
      {/* <AddProduct /> */}
      {/* <EffectInterval />
      <ProductListPage /> */}
      {/* <StateInput /> */}
      {/* <ProductDetail name="IPhone" price={40} /> */}
      {/* <CategoryPage /> */}
      {/* <CountryList title='Suppliers country list' countries={ulkeler} /> */}
      {/* <WebUserDetail name='Çağatay' surname='Yıldız' age={18} /> */}
    </>
  );
}

export default App;
