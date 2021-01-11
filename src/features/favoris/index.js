import React from "react";
import { FavoriList } from "./components";
import Loading from "../../components/utils/loading";

// eslint-disable-next-line
export default (props) => {
  return (
    <div className="d-flex flex-rom flex-fill pt-4 p-2">
      {props.loaded ? (
        <div className="d-flex flex-rom flex-fill pt-4 p-2">
          <FavoriList
            favoris={props.favoris}
            removeFavori={props.removeFavori}
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
