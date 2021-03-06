import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import moment from 'moment'
import 'moment/locale/ru'

import { Image, List, Typography, Divider, Button } from 'antd'
import { getSessionsByIdFilmAsync } from '../../store/actions/sessions'
import { getFilmByIdAsync } from '../../store/actions/films';
import Loader from '../Loader'
import './index.scss'

const { Title, Paragraph } = Typography;

const AboutFilm = (props) => {

    const getTime = (time) => {
        var ticketTime = moment(time);
        ticketTime.local('ru');
        return ticketTime.format('LLLL')
    }

    const dispatch = useDispatch()
    const film = useSelector(state => state.films.filmById)
    const session = useSelector(state => state.sessions.sessionByIdFilm)
    const isLoading = useSelector(state => state.loading.isLoading)
    useEffect(() => {
        dispatch(getFilmByIdAsync(props.match.params.id))
        dispatch(getSessionsByIdFilmAsync(props.match.params.id))
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className="about">
            {isLoading ? <Loader/> :
                <div className="about__film">
                    <div className="about__film-image">
                        <Image
                            width={270}
                            src={ film?.cover }
                        />
                    </div>
                    <div className="about__film-text">
                        <Typography>
                            <Title>
                                { film?.name }
                            </Title>
                            <Paragraph>
                                { film?.about }
                            </Paragraph>
                        </Typography>
                    </div>
                </div>
            }
            {isLoading ?<Loader/> :
                <div className="about__table">
                    <Divider orientation="left">Время и дата фильма</Divider>
                        <List
                        bordered
                        dataSource={ (session?.length && session) || [] }
                        renderItem={item => (
                            <List.Item>
                                <Title level={3}>{+item.hall === 1 ? 'Большой зал' : 'Малый зал'}</Title>
                                {getTime(+item.date)}
                                <Link to={`/session/${item.id}`}>
                                    <Button className='about__table-ticket-button'>Заказать</Button>
                                </Link>
                            </List.Item>
                        )}
                    />
                </div>
            }
        </div>
    )
}

export default AboutFilm
