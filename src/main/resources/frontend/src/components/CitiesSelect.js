import React, { useEffect, useState } from 'react';

import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { CityContext } from '../contexts/CityContextProvider'

export default function CityList() {
  const [citiesByRegion, setCitiesByRegion] = useState('')
  const [city_id, setCityId] = useState('');

  useEffect(() => {
    const getRegions = async () => {
        let regions = await fetch('/api/clearbnb/allregions')
        regions = await regions.json()            
        console.log(regions)
        let citiesArray = [];

        let citiesRegions = Array.from(Array(regions.length).keys())
        .map(x => {       
            fetch('/api/clearbnb/citiesbyregion/'+regions[x]).then(
                function(response) {
                if (response.status !== 200) {
                    console.log('Problem in fetching');
                    return;
                }
                response.json().then(function(data) {
                    citiesArray[citiesArray.length] = {
                        label: regions[x], options: data                          
                    }     
                });                    
            }) 
            
        });  
        //console.log(citiesArray);
        setCitiesByRegion(citiesArray);
    }
    getRegions()        
  }, []);

  const groupStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    };

    const formatGroupLabel = data => (
        <div style={groupStyles}>
        <span>{data.label}</span>
        </div>
    );

    const CitiesSelect = () => {
        return (
            <div>
            <Select options={citiesByRegion} formatGroupLabel={formatGroupLabel} onChange = {opt => setCityId(opt.value)} 
            placeholder="Vilken ort?" isSearchable required />
            </div>
            )
    }

return (
  <>
    {CitiesSelect()}
  </>
)
}