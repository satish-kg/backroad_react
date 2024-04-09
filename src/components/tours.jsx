import React from 'react';
import Title from './title';
import {tourData} from '../data';
// import tour6img from '../images/tour-6.jpeg';

const tours = () => {
    return(
        <>
            <section className="section" id="tours">
                <Title title="featured" subtitle="tours" />

                <div className="section-center featured-center">
                    {tourData.map((data)=>{
                        const {id, image, date, title, about, location, duration, cost} = data
                        return(
                            <article className="tour-card" key={id}>
                                <div className="tour-img-container">
                                    <img src={image} className="tour-img" alt="" />
                                    <p className="tour-date">{date}</p>
                                </div>
                                <div className="tour-info">
                                    <h4>{title}</h4>
                                    <p>
                                        {about}
                                    </p>
                                    <div className="tour-footer">
                                    <p>
                                        <span><i className="fas fa-map"></i></span> {location}
                                    </p>
                                    <p>{duration} days</p>
                                    <p>from ${cost}</p>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default tours;