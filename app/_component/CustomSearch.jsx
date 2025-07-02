"use client"
import React from 'react';
import { Select, Input } from 'antd';

const CustomSearch = ({ isDropDown, options = [], placeholder = 'Search' }) => {
    
  return (

    <div>
      {isDropDown ? (
        <Select defaultValue={placeholder} options={options} />
      ) : (
        <Input.Search placeholder={placeholder} />
      )}
    </div>
  );
};

export default CustomSearch;
