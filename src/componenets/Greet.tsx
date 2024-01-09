type GreetProps={
    name:string
}
export const Greet=(props:GreetProps)=>{
    return (
        <div>
            <h2>Wel come {props.name}</h2>
        </div>
    )
}