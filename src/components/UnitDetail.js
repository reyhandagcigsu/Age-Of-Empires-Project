import React from "react";
import { useLocation } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";
import "../styles/styles.scss";

const UnitDetail = (props) => {
  const location = useLocation();

  const { state } = location;
  const item = state;
  // console.log(item);

  return (
    <div className="container unitDetail" >
      <h1 className="text-center">{item.name}</h1>
      <MDBContainer>
        <ul className="list-group unitDetail">
          <li className="list-group-item ">
            ID
            <span className="badge badge-light">{item.id}</span>
          </li>
          <li className="list-group-item  ">
            Name
            <span className="badge badge-light">{item.name}</span>
          </li>
          <li className="list-group-item  ">
            Description
            <span className="badge badge-light">{item.description}</span>
          </li>
          <li className="list-group-item  ">
            Min Required Age
            <span className="badge badge-light">{item.age}</span>
          </li>
          <li className="list-group-item  ">
            Wood Cost
            <span className="badge badge-light">
              {item.cost.hasOwnProperty("Wood") ? item.cost.Wood : "No Cost"}
            </span>
          </li>
          <li className="list-group-item  ">
            Food Cost
            <span className="badge badge-light">
              {item.cost.hasOwnProperty("Food") ? item.cost.Food : "No Cost"}
            </span>
          </li>
          <li className="list-group-item  ">
            Gold Cost
            <span className="badge badge-light">
              {item.cost.hasOwnProperty("Gold") ? item.cost.Gold : "No Cost"}
            </span>
          </li>
          <li className="list-group-item  ">
            Build Time
            <span className="badge badge-light">{item.build_time}</span>
          </li>
          <li className="list-group-item  ">
            Reload Time
            <span className="badge badge-light">{item.reload_time}</span>
          </li>
          <li className="list-group-item  ">
            Hit Points
            <span className="badge badge-light">{item.hit_points}</span>
          </li>
          <li className="list-group-item  ">
            Attack
            <span className="badge badge-light">{item.attack}</span>
          </li>
          <li className="list-group-item  ">
            Accuracy
            <span className="badge badge-light">{item.accuracy}</span>
          </li>
        </ul>
      </MDBContainer>
    </div>
  );
};

export default UnitDetail;
