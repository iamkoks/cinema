import { GET_PLACES, GET_PLACES_FAILURE, SET_CHOISE_PLACES, SET_PLACES } from "../types/places"

const initState = {
    places: [],
    choisePlaces: [],
    error: ''
}

export const placesReducer = (state = initState, action) => {
    switch(action.type){
        case GET_PLACES:
            return { ...state, places: action.payload }

        case SET_CHOISE_PLACES:
            const checkCurrentSeat = state.choisePlaces.find(place =>
                action.payload.row === place.row &&
                action.payload.place === place.place
            )
            const selectedSeats = checkCurrentSeat ?
                state.choisePlaces.filter(place =>
                    place.id !== checkCurrentSeat.id) :
                [...state.choisePlaces, action.payload]
            return { ...state, choisePlaces: selectedSeats}

        case SET_PLACES:
            const newPlaces = [ ...state.places, action.payload ]
            return { ...state.places, places: newPlaces}

        case GET_PLACES_FAILURE:
            return { ...state, error: action.payload }
        default: return state
    }
}
