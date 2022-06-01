import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import useItems from "../../../hooks/useItems/useItems";
import Item from "../Item/Item";
import "./Items.css";

const Items = () => {
  const [items] = useItems();

  return (
    <Fragment>
      <section className="mt-5">
        <div className="text-center our-style">
          <h1>OUR STOCK</h1>
          <div className="align-items-center justify-content-center d-flex">
            <div className="line"></div>
          </div>
        </div>

        <div className="container pb-5 pt-5">
          <div className="g-4 row row-cols-md-3">
            {items.slice(0, 6).map((item) => (
              <Item key={item?._id} item={item} />
            ))}
          </div>
        </div>

        <div className="b-5 pt-5  justify-content-center align-self-center d-flex">
          <Link to="manageItems">
            <button className="btn_style  mb-5">Manage All Inventory</button>
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default Items;
