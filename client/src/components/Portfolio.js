import React from 'react';
import Title from './utiles/Title';
import Mikiz_img from '../img/portfolio/mikiz.png';

const Portfolio = () => {
    return (
        <React.Fragment>
            <Title title={"{Portfolio}"} />
            <section className="cv">
                <ul className="portfolio__list">
                    <li className="portfolio__item">
                        <div className="portfolio__content">
                            <h2 className="portfolio__title">Website developed for French start-up Mikiz</h2>
                            <div className="portfolio__img" style={{background: `url(${Mikiz_img}) center center / cover no-repeat`}}/>
                            <div className="portfolio__descr">Adaptive web design. The customer provided an example of the site. High page load speed.</div>
                            <h3 className="portfolio__subtitle">Code technologies and skills I got involved while working on this project</h3>
                            <ul className="portfolio__sublist">
                                <li className="portfolio__subitem">Gulp (SASS, PUG)</li>
                                <li className="portfolio__subitem">JavaScript</li>
                                <li className="portfolio__subitem">PHP</li>
                                <li className="portfolio__subitem">HTML5</li>
                            </ul>
                            <a className="portfolio__link" href="http://mikiz.eu/">
                                <span className="portfolio__innerlink">www.mikiz.eu</span></a>
                        </div>
                    </li>
                </ul>
            </section>
        </React.Fragment>
    );
};

export default Portfolio;