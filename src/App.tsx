import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import products from "./products";
import tags from "./tags";
const dataProvider = jsonServerProvider("http://localhost:6969");

const App = () => (
  
  <Admin dataProvider={dataProvider}>
  
    {/* title="Example Admin"
    layout={Layout}
    theme={theme}  */}
    <Resource name="products" {...products} />
    <Resource name="tags" {...tags} />
  </Admin>
);

export default App;
