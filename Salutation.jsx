export default function Salutaion(){
    let isLogged=true;
    let nom='Youssef';
    let content=isLogged ? <h1>Hellow {nom}</h1> : <h1>you are a guest</h1>

    return (
      <>
        {/* {isLogged?<h1>Hellow {nom}</h1>:<h1>
            you are a guest
            </h1>} */}
        {/* {if(isLogged){
            <h1></h1>
        }} */}
        {content}
        {isLogged && <h1>Hellow {nom}</h1>}
      </>
    );
}