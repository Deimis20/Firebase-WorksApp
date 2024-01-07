import { Link } from "react-router-dom";
import WorksTable from "../worksTable/WorksTable";
import { useState, useEffect } from "react";
import * as service from "../../services/services";
import React from "react";

const Works = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    service.getAllWorks((works) => {
      setWorks(works);
    });
  }, []);

  return (
    <div className="container">
      <button>
        <Link to="/addWork">Prideti darba</Link>
      </button>
      <h2>Works</h2>
      <WorksTable works={works}></WorksTable>
    </div>
  );
};
export default Works;
