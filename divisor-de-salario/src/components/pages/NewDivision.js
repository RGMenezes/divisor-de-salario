import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/db";

import styles from "./NewDivision.module.css";

import Button from "../form/Button";
import LinkText from "../layout/LinkText";
import Range from "../form/Range";
import Textarea from "../form/Textarea";

function NewDivision({onAlert}){

  const navigate = useNavigate();
    
  const [user, setUser] = useState({});
  const [division, setDivision] = useState([
    ["Divisão 1", 50, 1],
    ["Divisão 2", 50, 2]
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

  // function addNewDivision(){
  //   api.put("/new/division", ).then((res) => {

  //   }).catch((err) => {
  //     console.log(`Erro: ${err}`);
  //   });
  // };

  function submit(e){
    e.preventDefault();
  };

  const addCategory = () => {
    setCategory(category + 1);
    let copyDivision = division;
    copyDivision.push(["Nova Divisão", 50, division.length+1]);
    setDivision(copyDivision);
  };
  const remCategory = () => {
    if(category > 2){
      setCategory(category - 1)
      let copyDivision = division;
      copyDivision.pop();
      setDivision(copyDivision);
    };
  };

  function valueCategory(event, key){
    let copyDivision = division;
    if(event.target.type === "textarea"){
      copyDivision[key-1][0] = event.target.value;
    }else if(event.target.type === "range") {
      copyDivision[key-1][1] = Number(event.target.value);
    }else{
      onAlert("error", "Houve um erro ao identificar o campo alterado!");
      navigate("/home");
    };
    setDivision(copyDivision);
  };

  return(
    <main className={styles.new_division} >

      <h1>Crie uma nova divisão</h1>

      <form onSubmit={submit} autoComplete="on">

        <h2>Define a quantidade de categorias</h2>

        <section className={styles.action_container} >
          <Button 
            text="<"
            type="button"
            handleOnClick={remCategory}
          />
          <p>{category}</p> 
          <Button 
            text=">"
            type="button"
            handleOnClick={addCategory}
          /> 
        </section>

        <section className={styles.category_container} >
          {division.map((element) => (
            <div 
              onChange={function(e){valueCategory(e, element[2])}} 
              key={element[2]} 
              className={styles.category
            }>
              <Textarea 
                cols={20}
                rows={1}
                text={element[0]}
                recize={false}
              />
              <Range 
                min={0}
                max={100}
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