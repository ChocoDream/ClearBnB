import React, { useContext } from 'react';

import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CityContext } from '../contexts/CityContextProvider'

export default function CityList() {
  const { cities } = useContext(CityContext)

  const CitiesSelect = () => {
    return (
      <div className="container">
        <div className="mb-2" >
          <div className="col-md-4"></div>
            <div className="col-md-4">
              <Select options={ cities } />
            </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      )
  }

return (
  <>
    {CitiesSelect()}
  </>
)
}