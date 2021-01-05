import  React  from "react";
function User(props) {
    // console.warn(props.data.name)
    // console.warn(props.data.age)
    const {data}= props
    return(
    <div>
        <h1>User Components</h1>   
        <h1> {data.name} </h1>
        <h1> {data.age} </h1>
    </div>
    )
}

export default User;