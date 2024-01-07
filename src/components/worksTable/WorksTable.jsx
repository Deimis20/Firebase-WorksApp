import Work from "../work/Work";
import React from "react";
const WorksTable = ({ works }) => {
  console.log({ works });
  function duration(from, to) {
    let [fromhours, fromminutes] = from.split(":");
    let [tohours, tominutes] = to.split(":");
    const resulthours = Math.abs(tohours - fromhours)
    const resultminutes = Math.abs(tominutes - fromminutes)
    console.log(resulthours);
    return `${String(resulthours).padStart(
      2,
      "0"
    )}:${String(resultminutes).padStart(2, "0")}`;
    
  }

  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Data</th>
          <th>Klientas</th>
          <th>Suteikta paslauga</th>
          <th>Aprasymas</th>
          {/* <th>Nuo</th> */}
          <th>Darbo trukme</th>
          <th>Keisti</th>
          <th>Salinti</th>
        </tr>
      </thead>
      <tbody>
        {works.map((work) => (
          <Work
            key={work.id}
            id={work.id}
            date={work.date}
            company={work.company}
            service={work.service}
            description={work.description}
            duration={duration(work.from, work.to)}
          />
        ))}
      </tbody>
    </table>
  );
};
export default WorksTable;
