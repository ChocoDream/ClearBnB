import React from 'react';

import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

//'/api/clearbnb/cities';
const cities = [{"value":16,"label":"Donghoufang"},
                {"value":12,"label":"Guiyang"},
                {"value":7,"label":"Gävle"},
                {"value":18,"label":"Jidong"},
                {"value":19,"label":"Lastoursville"},
                {"value":11,"label":"Mahe"},
                {"value":5,"label":"Monastir"},
                {"value":8,"label":"Pasauran"},
                {"value":6,"label":"Paso de Indios"},
                {"value":14,"label":"Reguenga"},
                {"value":9,"label":"Saqqez"},
                {"value":4,"label":"Tanahmerah"},
                {"value":1,"label":"Tbêng Méanchey"},
                {"value":15,"label":"Wau"},
                {"value":2,"label":"Yelkhovka"}];

const CitiesSelect = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <Select options={ cities } />
      </div>
      <div className="col-md-4"></div>
    </div>
  </div>
);

export default CitiesSelect;