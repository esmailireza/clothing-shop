import React, { useContext, useReducer } from "react";

const FavoriteContext = React.createContext();
const FavoriteContextDispatcher = React.createContext();

const intialState = {
  favoriteItems: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE": {
      const updatedFavorite = [...state.favoriteItems];
      console.log(updatedFavorite);
      updatedFavorite.push({ ...action.payload });

      return {
        ...state,
        favoriteItems: updatedFavorite,
      };
    }

    case "REMOVE_FROM_FAVORITE": {
      const updatedFavorite = state.favoriteItems;
      updatedFavorite.splice(
        state.favoriteItems.findIndex((product) => product === action.payload),
        1
      );
      return {
        ...state,
        favoriteItems: updatedFavorite,
      };
    }

    default:
      return state;
  }
};

const FavoriteProvider = ({ children }) => {
  const [favorite, dispatch] = useReducer(favoriteReducer, intialState);
  return (
    <FavoriteContext.Provider value={favorite}>
      <FavoriteContextDispatcher.Provider value={dispatch}>
        {children}
      </FavoriteContextDispatcher.Provider>
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;

//custom hook
export const useFavorite = () => useContext(FavoriteContext);
export const useFavoriteActions = () => useContext(FavoriteContextDispatcher);
