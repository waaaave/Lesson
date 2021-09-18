const Movie = (props) => {
    console.log(props.movie, '--+++++--------')
    return (
        <>
            {props.movie.Title}
        </>
    )
}

export default Movie;