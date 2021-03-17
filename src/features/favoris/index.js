import React from "react";
import { FavoriList } from "./components";
import Loading from "../../components/utils/loading";
import { connect } from "react-redux";
import {
  favorisListSelector,
  favorisIsLoadingSelector,
} from "../../store/selectors";
import { tryRemoveFavori } from "../../store/actions";

// eslint-disable-next-line
const Favoris = (props) => {
  return (
    <div className="d-flex flex-rom flex-fill pt-4 p-2">
      {props.isLoading ? (
        <Loading />
      ) : (
        <div className="d-flex flex-rom flex-fill pt-4 p-2">
          <FavoriList
            favoris={props.favoris}
            removeFavori={props.tryRemoveFavori}
          />
        </div>
      )}
    </div>
  );
};
export default connect(
  (state) => ({
    favoris: favorisListSelector(state),
    isLoading: favorisIsLoadingSelector(state),
  }),
  {
    tryRemoveFavori,
  }
)(Favoris);
