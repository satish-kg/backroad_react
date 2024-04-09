import React from "react"
import Title from './title'
import {serviceData} from '../data';

const services = () => {
    return (
        <>
            <section className="section services" id="services">
                <Title title="our" subtitle="services" />
                <div className="section-center services-center">

                    {serviceData.map((data)=>{
                        const {id, icon, title, text} = data;
                        return(
                            <article className="service" key={id}>
                                <span className="service-icon"><i className={icon}></i></span>
                                <div className="service-info">
                                    <h4 className="service-title">{title}</h4>
                                    <p className="service-text">
                                    {text}
                                    </p>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default services;