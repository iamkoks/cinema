import React from 'react'
import { useSelector } from 'react-redux';

import Seat from '../Seat'

const RowSeats = ({ seat, currentSession }) => {

    const choisePlaces = useSelector(state => state.places.choisePlaces)
    const CheckPlaces = (row, place, session) => {

        if(session?.seats) {
            const occupied = session.seats.find(elem => +elem.place === +place && +elem.row === +row)
            return !!occupied
        }
        return false
    }

    const CheckChoisePlaces = (row, place, choisePlaces) => {

        if(choisePlaces) {
            const choise = choisePlaces.find(seat => +seat.seat === +place && +seat.row === +row)
            console.log(choise)
            return !!choise
        }
        return false
    }

    const setPlaces = () => {

        let seatNumbers = [];
        for (let i = 0; i < +seat.count; i++) {
            seatNumbers.push(
                <Seat
                    key={i}
                    seat={i+1}
                    row={seat.row}
                    choise ={CheckChoisePlaces(seat.row, i+1,choisePlaces)}
                    occupied={CheckPlaces(seat.row, i+1, currentSession)}
                ></Seat>)
        }
        return seatNumbers
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row'}}>
            {setPlaces()}
        </div>
    )
}

export default RowSeats
