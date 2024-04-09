import React from 'react';
import {tourData} from '../data';

const tours = () => {
    return(
        <>
            <section className="section" id="tours">
                <div className="section-title">
                    <h2>featured <span>tours</span></h2>
                    <img src='../images/tour-6.jpeg' alt="added tour image" className='tour-img' />
                </div>

                <div className="section-center featured-center">
                    {tourData.map((data)=>{
                        const {id, img, date, title, about, location, duration, cost} = data
                        return(
                            <article className="tour-card" key={id}>
                                <div className="tour-img-container">
                                    <img src={img} className="tour-img" alt="" />
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