import React, { useState } from "react";
import { MDBRow, MDBCol, MDBBtnGroup, MDBBtn } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { filterStart } from "../redux/actions/units";
import Slider from '@mui/material/Slider';



const Filter = () => {

  const dispatch = useDispatch();
  const { oldUnits, units } = useSelector((state) => state.data);

  const [ageFilter, setAgeFilter] = useState("All");

  const [costFilter, setCostFilter] = useState({
    Wood: {
      checked: false,
      values:[null,null]
    },
    Gold: {
      checked: false,
      values:[null,null]
    },
    Food: {
      checked: false,
      values:[null,null]
    },
  });

  const filter = (costFilter_, ageFilter_) => {
    dispatch(filterStart(oldUnits, ageFilter_, costFilter_));
  };


  const filterByAgesHandler = (age) => {
    let newAge = age;
    setAgeFilter(newAge);
    filter(costFilter, newAge);
  };

  const filterByCostHandlerToggle = (cost) => {
    let costFilter_ = JSON.parse(JSON.stringify(costFilter));
    costFilter_[cost]["checked"] = !costFilter_[cost]["checked"];
    setCostFilter(costFilter_);
    filter(costFilter_, ageFilter);
  };


  const triggerFilter = () => {
    filter(costFilter, ageFilter);
  };

  const setValuesOnChange = (costType, value) => {
    let costFilter_ = JSON.parse(JSON.stringify(costFilter));
    costFilter_[costType]["values"] = value
    setCostFilter(costFilter_);
  }

  return (
    <div className="filter">  
      <MDBRow>
        <MDBCol size="4">
          <h5> Ages</h5>
          <MDBBtnGroup>
            <MDBBtn onClick={() => filterByAgesHandler("All")}>All </MDBBtn>
            <MDBBtn onClick={() => filterByAgesHandler("Dark")}>Dark </MDBBtn>
            <MDBBtn onClick={() => filterByAgesHandler("Feudal")}>
              Feudal
            </MDBBtn>
            <MDBBtn onClick={() => filterByAgesHandler("Castle")}>
              Castle
            </MDBBtn>
            <MDBBtn onClick={() => filterByAgesHandler("Imperial")}>
              Imperial
            </MDBBtn>
          </MDBBtnGroup>
        </MDBCol>
      </MDBRow>
      <h5> Costs</h5>
      <MDBRow>
        <MDBCol md="2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              onClick={() => filterByCostHandlerToggle("Wood")}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Wood
            </label>
          </div>
        </MDBCol>
        <MDBCol md="2">
        <Slider
        getAriaLabel={() => 'Temperature range'}
        value={[costFilter["Wood"]["values"][0],costFilter["Wood"]["values"][1]]}
        onChange={(e) => setValuesOnChange("Wood",e.target.value)}
        onChangeCommitted={(e) => triggerFilter()}
        valueLabelDisplay="auto"
        disabled={!costFilter["Wood"]["checked"]}
      />
      
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              onClick={() => filterByCostHandlerToggle("Food")}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Food
            </label>
          </div>
        </MDBCol>
        <MDBCol md="2">
        <Slider
        getAriaLabel={() => 'Temperature range'}
        value={[costFilter["Food"]["values"][0],costFilter["Food"]["values"][1]]}
        onChange={(e) => setValuesOnChange("Food",e.target.value)}
        onChangeCommitted={(e) => triggerFilter()}
        valueLabelDisplay="auto"
        disabled={!costFilter["Food"]["checked"]}
      />
        </MDBCol>
      </MDBRow>

      <MDBRow>
      
        <MDBCol md="2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              onClick={() => filterByCostHandlerToggle("Gold")}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Gold
            </label>
          </div>
        </MDBCol>
        

        <MDBCol md="2">
        <Slider
        
        getAriaLabel={() => 'Temperature range'}
        value={[costFilter["Gold"]["values"][0],costFilter["Gold"]["values"][1]]}
        onChange={(e) => setValuesOnChange("Gold",e.target.value)}
        onChangeCommitted={(e) => triggerFilter()}
        valueLabelDisplay="auto"
        disabled={!costFilter["Gold"]["checked"]}
      />
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Filter;
