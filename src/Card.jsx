const Card=({reciper:{recipe:{image,label}}})=>{

    return (
        <div className="reciper" >
            <h3>{label}</h3>

<img src={image} alt="" />

        </div>
    )
}
export default Card