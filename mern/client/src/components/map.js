import React, { useState, useEffect, useRef } from "react";

import Button from "./button";
import SearchForm from "./searchForm";


function Map() {

  return (
    <div className="search-location-input form-group">
      <SearchForm />
      <Button 
        text="Search"
      />
    </div>
  );
}

export default Map;