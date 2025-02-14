function Props (prop){

    return(
        <>
        <h1>{prop.name} Componemt</h1>

        <button onClick={prop.data}>Function Call</button>
        </>
    )
}

export default Props