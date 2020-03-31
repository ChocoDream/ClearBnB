import React, { useContext } from 'react';

import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CityContext } from '../contexts/CityContextProvider'

export default function CityList() {
  const { cities } = useContext(CityContext)

  const CitiesSelect = () => {
    return (
      <div class="reactSelectDd">
        <Select options={cities} placeholder="Vart vill du åka?" isSearchable required />
      </div>
      )
  }

return (
  <>
    {CitiesSelect()}
  </>
)
}