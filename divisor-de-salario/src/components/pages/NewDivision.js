import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/db";

import styles from "./NewDivision.module.css";

function NewDivision({onAlert}){

  const navigate = useNavigate();
    
  const [user, setUser] = useState({});

  useEffect(() => {
    api.get("/find/user").then((res) => {
      if(res.data.type === "success"){
          setUser(res.data.value);
      }else{
          onAlert(res.data.type, res.data.value.message);
          navigate(res.data.redirect);
      };
  }).catch((err) => {
      onAlert("error", "Não foi possível se conectar com o servidor, tente novamente!");
      navigate("/");
  });
  }, []);

  function addNewDivision(){
    api.put("/new/division", ).then((res) => {

    }).catch((err) => {
      console.log(`Erro: ${err}`);
    });
  };

  return(
    <main>
        <p>Nova disisão</p>
    </main>
  );
};

export default NewDivision;