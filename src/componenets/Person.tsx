type PersonProps={
    name:{
        first:string,
        last:string
    }
}
export const Person=(props:PersonProps)=>{
    return (
        <div>
            <h2>Wel come {props.name.first}</h2>
            <h2>Wel come {props.name.last}</h2>
        </div>
    )
}