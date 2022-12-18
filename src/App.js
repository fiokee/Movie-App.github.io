import React, { Fragment } from "react";
import ActionMovie from "./components/action movies/actionMovie";
import Header from "./components/header/header";
import SearchBar from "./components/searchbar/searchBar";
function App() {
  return (
   <Fragment>

     <Header/>
     <SearchBar/>
     <ActionMovie/>
   </Fragment>
    
  );
}

export default App;
