import "../../components/favorite/favorite.css";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Button from "@mui/material/Button";
import {
  useFavorite,
  /* useFavoriteActions, */
} from "../../providers/favoriteProvider";

const Favorite = () => {
  const favoriteState = useFavorite();
  console.log(favoriteState);
  /* const favoriteDispatch = useFavoriteActions(); */

  return (
    <div className="container flex-wrap d-flex justify-content-between marginMainCart mb-5">
      {favoriteState.favoriteItems.length ? (
        favoriteState.favoriteItems.map((item) => {
          console.log(favoriteState);
          return (
            <section className="col-sm-6 mb-2 ">
              <div key={item.id} className="cartItem mt-4">
                <div className="cartItemDesAndImg">
                  <img
                    src={item.image}
                    className="cartItemImage"
                    alt={item.name}
                  />
                  <div className="cartItemDescription">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <div>$ {item.price}</div>
                  </div>
                </div>
              </div>
            </section>
          );
        })
      ) : (
        <div className="m-auto">
          <MdOutlineFavoriteBorder className="cartEmptyIcon mt-4" />
          <h4 className="mt-4">Favorites is empty</h4>
          <Link to="/shop" className="text-decoration-none">
            <Button variant="outlined" className="my-5">
              Go to products
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorite;
