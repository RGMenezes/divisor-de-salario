import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/db";

import styles from "./Divisions.module.css";
import CardGraphic from "../layout/CardGraphic";

function Divisions({onAlert}){

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
  }, [navigate, onAlert]);

  return(
    <main className={styles.main_division} >

      <h1>Divisões</h1>

      <section className={styles.division_container}>
        {user.division && (
          <>{
            user.division.map(element => <CardGraphic
              key={element.name}
              name={element.name}
              division={element.division}
              amount={element.amount}
              onAlert={onAlert}
              />)
          }</>
        )}
      </section>
    </main>
  );
};

export default Divisions;