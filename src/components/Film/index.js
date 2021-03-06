import React from 'react'
import { Link } from "react-router-dom";

import { Card, Button } from 'antd';

const { Meta } = Card;

const Film = ({ film }) => {
    return(
        <div className='film' style={{marginTop: '10px'}}>
            <Card
                hoverable
                style={{
                    width: 280,
                    border: '3px solid #f0f0f0'
                }}
                cover={<img alt="example" src={film.cover}/>}
            >
                <Meta title={film.name}/>
                <Link to={`/aboutfilm/${film.id}`}>
                    <Button
                        type="primary"
                        style={{marginTop: '10px'}}
                    >
                        Заказать билет
                    </Button>
                </Link>
            </Card>
        </div>
    )
}

export default Film
