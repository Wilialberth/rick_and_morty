import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "src/components/Card/Card";



const Favorites = (props) => {

    const { myFavorites } = props;
    return(
        <div>
            <Link to='/home'><span>To Home</span></Link>
            {myFavorites.length && myFavorites.map((character) => {
                return <Card
                id={character.id}
                key={character.id}
                name={character.name}
                species={character.species}
                gender={character.gender}
                image={character.image}
                />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}



export default connect(mapStateToProps, null)(Favorites);