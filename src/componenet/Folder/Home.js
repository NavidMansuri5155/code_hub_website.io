import React, { Component } from 'react';
import "./Home.css"


export class Home extends Component {
    render() {
        return (
            <div>
                <div id="carousel-example-2" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-2" data-slide-to="1"></li>
                        <li data-target="#carousel-example-2" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="view">
                                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(69).jpg"
                                    alt="First slide" />
                                <div className="mask rgba-black-light"></div>
                            </div>
                            <div className="carousel-caption">
                                <h3 className="h3-responsive">Light mask</h3>
                                <p>First text</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="view">
                                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(72).jpg"
                                    alt="Second slide" />
                                <div className="mask rgba-black-strong"></div>
                            </div>
                            <div className="carousel-caption">
                                <h3 className="h3-responsive">Strong mask</h3>
                                <p>Secondary text</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="view">
                                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(79).jpg"
                                    alt="Third slide" />
                                <div className="mask rgba-black-slight"></div>
                            </div>
                            <div className="carousel-caption">
                                <h3 className="h3-responsive">Slight mask</h3>
                                <p>Third text</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div> <br /> <br />


                 {/* card */}
                <div className="main">
                    <h1>Responsive Card Grid Layout</h1>
                    <ul className="cards">
                        <li className="cards_item">
                            <div className="card">
                                <div className="card_image"><img src="https://picsum.photos/500/300/?image=9" alt="cardpic" /></div>
                                <div className="card_content">
                                    <h2 className="card_title">Web Enterprise Applications  </h2>
                                    <p className="card_text">Building user-friendly and intuitive web applications comes naturally to us. As a web development company, we deliver complex backend solutions and beautiful frontend experiences.</p><br />
                                    <button className="btn card_btn">Read More</button>
                                </div>
                            </div>
                        </li>
                        <li className="cards_item">
                            <div className="card">
                                <div className="card_image"><img src="https://picsum.photos/500/300/?image=5" alt="cardpic"/></div>
                                <div className="card_content">
                                    <h2 className="card_title">Data Analytics/Big Data</h2>
                                    <p className="card_text">Analytics gives you the insight you need to mitigate risks and forge ahead. Extract insights from data and empower decision-making across the business value chain with Empowers analytics services.</p><br />
                                    <button className="btn card_btn">Read More</button>
                                </div>
                            </div>
                        </li>
                        <li className="cards_item">
                            <div className="card">
                                <div className="card_image"><img src="https://picsum.photos/500/300/?image=4" alt="cardpic"/></div>
                                <div className="card_content">
                                    <h2 className="card_title">Cloud Solutions</h2>
                                    <p className="card_text">Empower has gained expertise in cloud based solutions, leveraging the  cutting edge features of AWS even catering to  Serverless architecture. We provide end-to-end services for migrating existing applications or  new cloud ideas.</p>
                                    <button className="btn card_btn">Read More</button>
                                </div>
                            </div>
                        </li>
                        <li className="cards_item">
                            <div className="card">
                                <div className="card_image"><img src="https://picsum.photos/500/300/?image=7" alt="cardpic"/></div>
                                <div className="card_content">
                                    <h2 className="card_title">Enterprise Mobility/IOT</h2>
                                    <p className="card_text">Empower your product with invaluable insights from connected devices in the physical world and stay ahead of the competition. Internet of Things has brought a change in the tech industry connecting the informational technology together.</p>
                                    <button className="btn card_btn">Read More</button>
                                </div>
                            </div>
                        </li>
                        <li className="cards_item">
                            <div className="card">
                                <div className="card_image"><img src="https://picsum.photos/500/300/?image=8" alt="cardpic"/></div>
                                <div className="card_content">
                                    <h2 className="card_title">Onshore Technology Consulting</h2>
                                    <p className="card_text">Empower assists clients in discovering and implementing best practice solutions to address business challenges. At Empower, we help select the most appropriate solutions to match specific business goals, optimize operations, and provide better cost and resource efficiency.</p>
                                    <button className="btn card_btn">Read More</button>
                                </div>
                            </div>
                        </li>
                        <li className="cards_item">
                            <div className="card">
                                <div className="card_image"><img src="https://picsum.photos/500/300/?image=3" alt="cardpic"/></div>
                                <div className="card_content">
                                    <h2 className="card_title">UI/UX Design</h2>
                                    <p className="card_text">Building intuitive interfaces is a complex problem, yet essential to product success. Guiding users through the journey’s your product supports requires a thoughtful approach to both user experience (UX) and user interface design (UI).</p>
                                    <button className="btn card_btn">Read More</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            <p style={{ textAlign: "center", margin: "1%" }}>©2021. All Rights Reserved. <a href="https://www.codehub.gr/">Code_Hub®</a></p>
            </div>
        )
    }
}
export default Home
