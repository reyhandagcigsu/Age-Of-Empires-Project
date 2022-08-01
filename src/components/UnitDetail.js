import React from "react";
import { useLocation } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";
import "../styles/styles.scss";

const UnitDetail = (props) => {
  const location = useLocation();

  const { state } = location;
  const item = state;
  console.log(item);

  return (
    <div className="container" style={{ marginTop: "30px" }}>
      <h1 className="text-center">{item.name}</h1>
      <MDBContainer style={{ marginTop: "50px" }}>
        <ul className="list-group unitDetail">
          <li className="list-group-item justify-content-between align-items-center">
            ID
            <span className="badge badge-light">{item.id}</span>
          </li>
          <li class="list-group-item  justify-content-between align-items-center">
            Name
            <span class="badge badge-light">{item.name}</span>
          </li>
          <li class="list-group-item  justify-content-between align-items-center">
            Description
            <span class="badge badge-light">{item.description}</span>
          </li>
          <li class="list-group-item  justify-content-between align-items-center">
            Min Required Age
            <span class="badge badge-light">{item.age}</span>
          </li>
          <li class="list-group-item  justify-content-between align-items-center">
            Wood Cost
            <span class="badge badge-light">
              {item.cost.hasOwnProperty("Wood") ? item.cost.Wood : "No Cost"}
            </span>
          </li>
          <li class="list-group-item  justify-content-between align-items-center">
            Food Cost
            <span class="badge badge-light">
              {item.cost.hasOwnProperty("Food") ? item.cost.Food : "No Cost"}
            </span>
          </li>
          <li class="list-group-item  justify-content-between align-items-center">
            Gold Cost
            <span class="badge badge-light">
              {item.cost.hasOwnProperty("Gold") ? item.cost.Gold : "No Cost"}
            </span>
          </li>
          <li class="list-group-item  justify-content-between align-items-center">
            Build Time
            <span class="badge badge-light">{item.build_time}</span>
          </li>
          <li class="list-group-item  justify-content-between align-items-center">
            Reload Time
            <span class="badge badge-light">{item.reload_time}</span>
          </li>
          <li class="list-group-item  justify-content-between align-items-center">
            Hit Points
            <span class="badge badge-light">{item.hit_points}</span>
          </li>
          <li class="list-group-item  justify-content-between align-items-center">
            Attack
            <span class="badge badge-light">{item.attack}</span>
          </li>
          <li class="list-group-item  justify-content-between align-items-center">
            Accuracy
            <span class="badge badge-light">{item.accuracy}</span>
          </li>
        </ul>
      </MDBContainer>
    </div>
  );
};

export default UnitDetail;
