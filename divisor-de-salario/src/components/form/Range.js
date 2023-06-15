import style from "./Range.module.css";

function Range({min, max, handleOnChange}){
    return(
        <div>
            <input type="range" min={min} max={max} onChange={handleOnChange}/>
        </div>
    );
};

export default Range;