import { Link } from "react-router-dom";
import * as service from "../../services/services";
import { useNavigate } from "react-router-dom";
import React from "react";
const Work = (props) => {
  const navigate = useNavigate();

  const deleteHandler = () => {
    console.log("deletina")
    service.deleteWork(props.id);
    navigate('/');

  };

  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.company}</td>
      <td>{props.service}</td>
      <td>{props.description}</td>
      <td>{props.duration}</td>
      <td>
        <Link className="btn btn-success" to={`/update-work/${props.id}`}>
          Keisti
        </Link>
      </td>
      <td>
        <a className="btn btn-danger" href="#" onClick={deleteHandler}>
          Salinti
        </a>
      </td>
    </tr>
  );
};
export default Work;
