import React, { useEffect } from 'react'
import Aos from 'aos'

const History = () => {
    useEffect (() => {
        Aos.init({
            duration:2500,
            easing:"esse-in-cubic",
            anchorPlacement:'top-bottom'
        })
    })
    return (
        <section className="history" data-aos="fade">
        <div className="container">
            <div className="row row-history">
                <div className="col-xs-12">
                    <div className="section-header">
                        <div className="section-title ">
                            <h2>services</h2>
                        </div>
                        <p>Donec aliquet, ipsum ut lobortis facilisis, nisi ligula aliquam odio, ut vehicula odio lorem in erat. Quisque quam ipsum, commodo non condimentum a, fermentum id sapien. Pellentesque sit amet sem neque. </p>
                    </div>
                    <div className="derevo">
                        <div className="nachalo">
                            <p>2021</p>
                        </div>

                    </div>
                </div>
                <div className="col-xs-6 col-sm-12">
                    <div className="mess-list">
                        <div className="mess-item">
                            <h2>
                                Donec id lobortis tellus. Maecenas vel dignissim
                            </h2>
                            <span>07 February 2021</span>
                            <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Phasellus sed ipsum pulvinar,
                            nsequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. className aptent taciti sociosqu ad litora torquent
                            per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                        <div className="mess-item">
                            <h2>
                                Donec quis faucibus lorem
                            </h2>
                            <span>12 September 2020</span>
                            <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Phasellus sed ipsum pulvinar,
                            nsequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. className aptent taciti sociosqu ad litora torquent
                            per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                        <div className="mess-item">
                            <h2>
                                Donec id lobortis tellus. Maecenas vel dignissim
                            </h2>
                            <span>25 January 2020</span>
                            <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Phasellus sed ipsum pulvinar,
                            nsequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. className aptent taciti sociosqu ad litora torquent
                            per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-12">
                    <div className="mess-list mess-list-2">
                        <div className="mess-item mess-item-2">
                            <h2>
                                Donec quis faucibus lorem
                            </h2>
                            <span>17 November 2020</span>
                            <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Phasellus sed ipsum pulvinar,
                            nsequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. className aptent taciti sociosqu ad litora torquent
                            per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                        <div className="mess-item mess-item-2">
                            <h2>
                                Nunc efficitur laoreet turpis sed auctor.
                            </h2>
                            <span>01 April 2020</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

                                Praesent id augue in risus molestie euismod molestie id augue. Suspendisse a libero porttitor, lobortis eros ac, varius velit. Praesent sed eros at elit suscipit laoreet vitae condimentum risus.</p>
                        </div>
                        
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="derevo-end">
                        <div className="konec">
                            <img src="/image/idea.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default History