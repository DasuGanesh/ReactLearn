// Use Effect() hook
// function TestEffect(props)
function TestEffect({title,price,image,rating})
{

    return(
        // <>
        // <h1>{props.name}</h1>
        // <h1>{props.price}</h1>
        // </>

        // <div>
        //     <h1>{name}</h1>
        //     <h1>{price}</h1>
        // </div>

        <div className="card">
            <img src={image}/>
            <p>{title}</p>
            <p>${price}</p>
        </div>
    )
}

export default TestEffect;