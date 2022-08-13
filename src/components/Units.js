import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUnitsStart } from "../redux/actions/units";
import Filter from "./Filter";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { units } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUnitsStart());
  }, []);

  const formatCost = (item) => {
    let str = "";
    if (item === null) {
      return "No cost";
    }
    Object.entries(item).map(([key, value]) => {
      str += `${key} : ${value} `;
    });
    return str;
  };

  function handleRowClick(id, item) {
    navigate(`/UnitDetail/${id}`, {state:item});
  };

  return (
    <MDBContainer className="units">
      <h1 className=" text-center "> Units Page</h1>
      <div className="container" >
        <br /> 
        <Filter />
        <br />

        <MDBTable className="table table-hover">
          <MDBTableHead>
            <tr className='table-primary'>
              <th scope="col"> Id</th>
              <th scope="col"> Name</th>
              <th scope="col"> Age</th>
              <th scope="col"> Costs</th>
            </tr>
          </MDBTableHead>

          {units &&
            units.map((item, index) => (
              <MDBTableBody key={index}>
                <tr onClick={()=> handleRowClick(item.id, item)}>
                  <th scope="row"> {item.id} </th>
                  <td>{item.name} </td>
                  <td>{item.age} </td>
                  <td>{formatCost(item.cost)} </td>
                </tr>
              </MDBTableBody>
            ))}
        </MDBTable>
      </div>
    </MDBContainer>
  );
};

export default Home;
