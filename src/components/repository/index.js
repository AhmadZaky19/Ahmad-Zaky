import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRepository } from "../../stores/actions/repository";
import "./index.css";

function Repository() {
  const dispatch = useDispatch();
  
  const [repositories, setRepositories] = useState([]);

  const getAllRepository = async () => {
    const res = await dispatch(getRepository())
    setRepositories(res.value.data);
  };
  
  useEffect(() => {
    getAllRepository();
  }, []);

  return (
    <div className="repository">
      {repositories.map((item) => {
        return (
          <>  
            <div className="repository-list">
              <div className="repository-list-link">
                <a href={item.svn_url}>{item.name}</a>
                <span className="visibility">{item.visibility}</span>
              </div>
              <span className="language">{item.language}</span>
            </div>
            <hr className="line-break" />
          </>
        );
      })}
    </div>
  );
}

export default Repository;
