import React from 'react';
import Title from './utiles/Title'

const Cv = () => {
    return (
        <div >
            <Title title={"{ CV }"} />
            <section className="cv">

                <div className="skills">
                    <h2 className="subtitle">Skills</h2>
                    <h3 className="smalltitle">Web skills</h3>
                    <ul className="skills__list">
                        <li className="skills__item">HTML: HTML4/5, Pug, BEM, Twitter Bootstrap, Material UI</li>
                        <li className="skills__item">CSS: CSS2/3, SASS</li>
                        <li className="skills__item">JavaScript: OOP, Patterns, JS (ES5/6), jQuery, NodeJs, Express, React, React Apollo, GraphQL, Ajax</li>
                        <li className="skills__item">Adaptive Web Design, Cross-Browser Layout, Wordpress</li>
                        <li className="skills__item">MySQL, MongoDB</li>
                    </ul>
                    <h3 className="smalltitle">Graphic editor</h3>

                    <ul className="skills__list">
                        <li className="skills__item">Photoshop</li>
                        <li className="skills__item">Inkscape</li>
                    </ul>
                    <h3 className="smalltitle">Task runners</h3>
                    <ul className="skills__list">
                        <li className="skills__item">Gulp</li>
                        <li className="skills__item">Webpack</li>
                    </ul>
                    <h3 className="smalltitle">Operating Systems</h3>
                    <ul className="skills__list">
                        <li className="skills__item">Windows</li>
                        <li className="skills__item">Linux (Ubuntu user)</li>
                        <li className="skills__item">iOS</li>
                    </ul>
                    <h3 className="smalltitle">VCS:</h3>
                    <ul className="skills__list">
                        <li className="skills__item">Git</li>
                    </ul>
                    <h3 className="smalltitle">Software development:</h3>
                    <ul className="skills__list">
                        <li className="skills__item">Agile Scrum</li>
                        <li className="skills__item">Waterfall</li>
                    </ul>
                    <h3 className="smalltitle">Cloud Application Platform:</h3>
                    <ul className="skills__list">
                        <li className="skills__item">Heroku</li>
                        <li className="skills__item">Amazon</li>
                    </ul>
                    
                    
                </div>
                <div className="educucation">
                    <h2 className="subtitle">Education</h2>
                    <h3 className="smalltitle"> Education</h3>
                    <ul className="skills__list">
                        <li className="skills__item">Bachelor degree of Software Developer Kharkov National University of Radioelectronics Kharkov, Ukraine 2001-2006 (Diploma nostrify in the Czech Republic)</li>
                        <li className="skills__item">Specialist of Software Developer Kharkov National University of Radioelectronics Kharkov, Ukraine 2001-2006</li>
                        <li className="skills__item">Master of Software Developer Kharkov National University of Radioelectronics Kharkov, Ukraine 2011-2012</li>
                    </ul>
                    <h3 className="smalltitle">Languages</h3>
                    <ul className="skills__list">
                        <li className="skills__item">English: Upper-Intermediate</li>
                        <li className="skills__item">Italian: Pre-Intermediate</li>
                        <li className="skills__item">Czech: Intermediate</li>
                        <li className="skills__item">Russian, Ukrainian: Native speaker</li>
                    </ul>
                    <h3 className="smalltitle">Courses and certificates</h3>
                    <ul className="skills__list">
                        <li className="skills__item">edX Honor Code Certificate for Learn HTML5 from W3C 2016</li>
                        <li className="skills__item">Web advanced course Loftschool</li>
                        <li className="skills__item">JavaScript course Loftschool</li>
                        <li className="skills__item">JavaScript HTML Academy</li>
                        <li className="skills__item">JavaScript course Udemy</li>
                        <li className="skills__item">React course Udemy</li>
                        <li className="skills__item">Trainee Epam</li>
                    </ul>
                    <h3 className="smalltitle">Experience</h3>
                    <ul className="skills__list">
                        <li className="skills__item">Web studio "Umi", frontend developer, 2016-2017</li>
                        <li className="skills__item">Trainee Epam, frontend developer (react, javascript), 2017-2018</li>
                    </ul>
                </div>

            </section>
        </div>
    );
};

export default Cv;