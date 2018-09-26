import React from 'react';
import Title from './utiles/Title';
import Mikiz_img from '../img/portfolio/mikiz.png';
import Yogi_img from '../img/portfolio/yogi.png';
import Barberstreet_img from '../img/portfolio/barberstreet.png';
import Awd_img from '../img/portfolio/awd.png';
import Asa_img from '../img/portfolio/asa.png';
import Annavlasenko_img from '../img/portfolio/annavlasenko.png'

const Portfolio = () => {
    return (
            <div>
                <Title title={"{ Portfolio }"} />
                <section className="cv">
                    <ul className="portfolio__list">
                        <li className="portfolio__item">
                            <div className="portfolio__content">
                                <h2 className="portfolio__title">Website developed for Mikiz</h2>
                                <div className="portfolio__img" style={{ background: `url(${Mikiz_img}) center center / cover no-repeat` }} />
                                <div className="portfolio__descr">Adaptive web design. The customer provided an example of the site. High page load speed.</div>
                                <h3 className="portfolio__subtitle">Code technologies and skills I got involved while working on this project</h3>
                                <ul className="portfolio__sublist">
                                    <li className="portfolio__subitem">Gulp (SASS, PUG)</li>
                                    <li className="portfolio__subitem">JavaScript</li>
                                    <li className="portfolio__subitem">PHP</li>
                                    <li className="portfolio__subitem">HTML5</li>
                                </ul>
                                <a className="portfolio__link" target='_blank' rel="noopener noreferrer" href="http://mikiz.eu/">
                                    <span className="portfolio__innerlink">www.mikiz.eu</span></a>
                            </div>
                        </li>
                        <li className="portfolio__item">
                            <div className="portfolio__content">
                                <h2 className="portfolio__title">Website for yoga event</h2>
                                <div className="portfolio__img" style={{ background: `url(${Yogi_img}) center center / cover no-repeat` }} />
                                <div className="portfolio__descr">Single page app with ReactJS</div>
                                <h3 className="portfolio__subtitle">Code technologies and skills I got involved while working on this project</h3>
                                <ul className="portfolio__sublist">
                                    <li className="portfolio__subitem">React, React router, React slick</li>
                                    <li className="portfolio__subitem">React animation, React scroll</li>
                                    <li className="portfolio__subitem">JavaScript</li>
                                    <li className="portfolio__subitem">HTML5</li>
                                </ul>
                                <a className="portfolio__link" target='_blank' rel="noopener noreferrer"  href="https://ukryogi.herokuapp.com/">
                                    <span className="portfolio__innerlink">www.ukryogi.herokuapp.com</span></a>
                            </div>
                        </li>
                        <li className="portfolio__item">
                            <div className="portfolio__content">
                                <h2 className="portfolio__title">Website for barbershop</h2>
                                <div className="portfolio__img" style={{ background: `url(${Barberstreet_img}) center center / cover no-repeat` }} />
                                <div className="portfolio__descr">Website layout + wordpress</div>
                                <h3 className="portfolio__subtitle">Code technologies and skills I got involved while working on this project</h3>
                                <ul className="portfolio__sublist">
                                    <li className="portfolio__subitem">Gulp (SASS, PUG)</li>
                                    <li className="portfolio__subitem">PHP, wordpress</li>
                                    <li className="portfolio__subitem">JavaScript</li>
                                    <li className="portfolio__subitem">HTML to WordPress </li>
                                    <li className="portfolio__subitem">HTML5</li>
                                </ul>
                                <a className="portfolio__link"  target='_blank' rel="noopener noreferrer" href="https://barberstreet.cz/">
                                    <span className="portfolio__innerlink">www.barberstreet.cz</span></a>
                            </div>
                        </li>
                        <li className="portfolio__item">
                            <div className="portfolio__content">
                                <h2 className="portfolio__title">Website for awd</h2>
                                <div className="portfolio__img" style={{ background: `url(${Awd_img}) center center / cover no-repeat` }} />
                                <div className="portfolio__descr">Website layout + wordpress</div>
                                <h3 className="portfolio__subtitle">Code technologies and skills I got involved while working on this project</h3>
                                <ul className="portfolio__sublist">
                                    <li className="portfolio__subitem">Gulp (SASS, PUG)</li>
                                    <li className="portfolio__subitem">PHP, wordpress</li>
                                    <li className="portfolio__subitem">JavaScript</li>
                                    <li className="portfolio__subitem">HTML to WordPress </li>
                                    <li className="portfolio__subitem">HTML5</li>
                                </ul>
                                <a className="portfolio__link"  target='_blank' rel="noopener noreferrer" href="http://awdplus.kz/">
                                    <span className="portfolio__innerlink">www.awdplus.kz</span></a>
                            </div>
                        </li>

                        <li className="portfolio__item">
                            <div className="portfolio__content">
                                <h2 className="portfolio__title">Website developed for web-studio</h2>
                                <div className="portfolio__img" style={{ background: `url(${Asa_img}) center center / cover no-repeat` }} />
                                <div className="portfolio__descr">Website layout + wordpress</div>
                                <h3 className="portfolio__subtitle">Code technologies and skills I got involved while working on this project</h3>
                                <ul className="portfolio__sublist">
                                    <li className="portfolio__subitem">Gulp (SASS, PUG)</li>
                                    <li className="portfolio__subitem">PHP, wordpress</li>
                                    <li className="portfolio__subitem">JavaScript</li>
                                    <li className="portfolio__subitem">HTML to WordPress </li>
                                    <li className="portfolio__subitem">HTML5</li>
                                </ul>
                                <a className="portfolio__link"  target='_blank' rel="noopener noreferrer" href="http://asa-buhuchet.kz/">
                                    <span className="portfolio__innerlink">www.asa-buhuchet.kz</span></a>
                            </div>
                        </li>
                        <li className="portfolio__item">
                            <div className="portfolio__content">
                                <h2 className="portfolio__title">My Blog</h2>
                                <div className="portfolio__img" style={{ background: `url(${Annavlasenko_img}) center center / cover no-repeat` }} />
                                <div className="portfolio__descr">Single page app with ReactJS</div>
                                <h3 className="portfolio__subtitle">Code technologies and skills I got involved while working on this project</h3>
                                <ul className="portfolio__sublist">
                                    <li className="portfolio__subitem">React, React router, React Apollo, GraphQL</li>
                                    <li className="portfolio__subitem">Node JS, Mongoose, Express</li>
                                    <li className="portfolio__subitem">JavaScript, HTML, CSS</li>
                                    <li className="portfolio__subitem">Heroku</li>
                                </ul>
                                <a className="portfolio__link" target='_blank' rel="noopener noreferrer"  href="https://annavlasenko.herokuapp.com/">
                                    <span className="portfolio__innerlink">www.annavlasenko.herokuapp.com</span></a>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
    );
};

export default Portfolio;