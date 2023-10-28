import React from "react";
import "./Table.css";

function Table(props) {
  const { items } = props;

  return (
    <table className="table">
      <thead className="table-light">
        <tr>
          <th scope="col">ITEM NAME</th>
          <th scope="col">ITEM CODE</th>
          <th scope="col">CATEGORY NAME</th>
          <th scope="col">LANDING COST</th>
          <th scope="col">SELLING RATE</th>
          <th scope="col">STOCK</th>
          <th scope="col">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {items.map((items) => {
          return;
          <tr>
            <td>{items.itemName}</td>
            <td>{items.itemCode}</td>
            <td>{items.categoryId}</td>
            <td>{items.landingCost}</td>
            <td>{items.sellingRate}</td>
            <td>{items.stock}</td>
            <td>
              <button className="btn btn-primary">edit</button>
              <button className="btn btn-danger ms-3">delete</button>
            </td>
          </tr>;
        })}
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>
            <button className="btn btn-primary">edit</button>
            <button className="btn btn-danger ms-3">delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
