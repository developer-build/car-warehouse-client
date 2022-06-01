import React, { Fragment } from "react";
import './OurTeam.css'

const OurTeam = () => {
  const teams = [
    {
      name: "Rob Spancer",
      img: "https://vosha.b-cdn.net/wp-content/uploads/2021/12/man-car-wash-specialist-713x1024.png",
    },
    {
      name: "Kate Russell",
      img: "https://vosha.b-cdn.net/wp-content/uploads/2021/12/team-woman-car-wash-713x1024.png",
    },
    {
      name: "Mike Jones",
      img: "https://vosha.b-cdn.net/wp-content/uploads/2021/12/car-washing-ceo-and-founde-713x1024.png",
    },
  ];

  return (
    <Fragment>
      <div className="text-center mt-5"  >
      <h3 className="fw-bold" >OUR TEAM</h3>
      <h1>
        Meet our team{" "}
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo iste
        adipisci recusandae ex molestiae ab, <br /> nihil repellendus maxime facere
        aliquid.
      </p>
      </div>

      <div className="row mx-auto card-container row-cols-1 py-4 row-cols-lg-3">
        {teams.map((team) => (
          <div className="col">
            <div className="img-style">
              <img src={team.img} className="" alt="team" />
              </div>
          </div>
        ))}
      </div>

    </Fragment>
  );
};

export default OurTeam;
