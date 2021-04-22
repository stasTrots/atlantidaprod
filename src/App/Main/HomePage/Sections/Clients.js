import React, { useEffect } from 'react'
import Aos from 'aos'

const Clients = () => {
    useEffect (() => {
        Aos.init({
            duration:2500,
            easing:"esse-in-cubic",
            anchorPlacement:'top-bottom'
        })
    })
    return (
        <section className="clients" data-aos="fade">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="section-header">
                        <div className="section-title ">
                            <h2>clients</h2>
                        </div>
                        <p>Donec aliquet, ipsum ut lobortis facilisis, nisi ligula aliquam odio, ut vehicula odio lorem in erat. Quisque quam ipsum, commodo non condimentum a, fermentum id sapien. Pellentesque sit amet sem neque. </p>
                    </div>
                    <div className="clients-list">
                        <div className="clients-item">
                            <img src="/image/clients/1.png" alt=""/>
                        </div>
                        <div className="clients-item">
                            <img src="/image/clients/2.png" alt=""/>
                        </div>
                        <div className="clients-item">
                            <img src="/image/clients/3.png" alt=""/>
                        </div>
                        <div className="clients-item">
                            <img src="/image/clients/4.png" alt=""/>
                        </div>
                        <div className="clients-item">
                            <img src="/image/clients/5.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Clients