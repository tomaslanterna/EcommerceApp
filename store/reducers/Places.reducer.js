import Place from "../../dominio/Place";

const InitialState = {
    places: []
};

const PlacesReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            const place = new Place(
                action.payload.id,
                action.payload.title,
                action.payload.image,
                action.payload.lat,
                action.payload.lng,
                action.payload.address,
            );
            return {
                ...state,
                places: state.places.concat(place),

            };
        case LOAD_PLACES:
            return {
                ...state,
                places: action.places.map(item => new Place(
                    item.id,
                    item.title,
                    item.image,
                    item.lat,
                    item.lng,
                    item.address,
                ))
            }



        default:
            return state
    }
}

export default PlacesReducer;