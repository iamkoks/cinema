import React from 'react'

import { Typography } from 'antd';

import './index.scss'

const { Text } = Typography;

const Seat = (props) => {

    return (
        <span className='seat'><Text strong>{props.seat}</Text></span>
    )
}

export default Seat
