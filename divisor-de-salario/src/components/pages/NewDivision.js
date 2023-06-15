import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/db";

import styles from "./NewDivision.module.css";

import Button from "../form/Button";
import LinkText from "../layout/LinkText";
import Input from "../form/Input";
import Range from "../form/Range";

function NewDivision({onAlert}){

  const navigate = useNavigate();
    
  const [user, setUser] = useState({});
  const [division, setDivision] = useState([
    ["Divisão 1", 50],
    ["Divisão 2", 50]
  ]);
  const [category, setCategory] = useState(2);

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

  useEffect(() => {
    if(category < division.length){
      division.pop();
    }else{
      division.push(["Nova Divisão", 0]);
    };
  }, [category, division]);

  function addNewDivision(){
    api.put("/new/division", ).then((res) => {

    }).catch((err) => {
      console.log(`Erro: ${err}`);
    });
  };

  function submit(e){
    e.preventDefault();
  };

  const addCategory = () => setCategory(category + 1);
  const remCategory = () => {if(category > 2){setCategory(category - 1)}};

  return(
    <main className={styles.new_division} >
      <h1>Crie uma nova divisão</h1>
      <form onSubmit={submit} autoComplete="on">
        <h2>Define a quantidade de categorias</h2>
        <section className={styles.action_container} >
          <Button 
            text="Diminuir"
            type="button"
            handleOnClick={remCategory}
          />
          <p>{category}</p> 
          <Button 
            text="Aumentar"
            type="button"
            handleOnClick={addCategory}
          /> 
        </section>
        <section className={styles.category_container} >
          {division.map((element) => (
            <div key={element[0]} className={styles.category}>
            <Input 
              id={element[0]}
              type="text"
              placeholder="Nome da categoria"
              required={true}
              minLength={2}
              handleOnChange={(e) => division[element][0] = e.target.value}
            />
            <Range 
              min={0}
              max={100}
              handleOnChange={(e) => division[element][1] = e.target.value}
            />
          </div>
          ))}
        </section>
        <section className={styles.action_container}>
          <LinkText 
            to="/Home"
            text="Cancelar"
          />
          <Button 
            text="Criar"
            type="submit"
            detach={true}
          />
        </section>
      </form>
    </main>
  );
};

export default NewDivision;