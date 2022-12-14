import { Card, Button } from "react-bootstrap"
import useFetch from "./useFetch";
const CardComponents = () => {
    const { data, loading, error, refetch } = useFetch(
        // "https://v2.jokeapi.dev/joke/Any"
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass"
    );

    if (loading) return <h1> LOADING...</h1>;

    if (error) console.log(error);
    console.log(typeof (data));
    return (
        <div className="Card container">

            {
                data.map((item) => [
                    <>
                        <Card >
                            <Card.Img variant="top" src={item.strDrinkThumb} />
                            <Card.Body>
                                <Card.Title>{item.strDrink}</Card.Title>
                            </Card.Body>
                        </Card>
                        {/* <h4>{item.strDrink}</h4>
                        <img src={item.strDrinkThumb} alt="" />
                        <h3>{item.idDrink}</h3> */}
                    </>
                ])
            }

            <button onClick={refetch}> Refetch</button>
        </div>
    );
}
export default CardComponents