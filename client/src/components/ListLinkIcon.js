import React from 'react';
import FacebookIcon from './utiles/icons/FacebookIcon';
import YoutubeIcon from './utiles/icons/YoutubeIcon';
import GithubIcon from './utiles/icons/GithubIcon';
import LinkedInIcon from './utiles/icons/LinkedInIcon'

const ListLinkIcon = () => {
    return (
        <ul className="social__list">
            <li className="social__item">
                <a className="social__link" target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/annna.umi/'><FacebookIcon /></a>
            </li>
            <li className="social__item">
                <a className="social__link" target='_blank' rel="noopener noreferrer" href='https://www.youtube.com/channel/UCYWc0rcfRw6aVadM6nIJiWQ'><YoutubeIcon /></a>
            </li>
            <li className="social__item">
                <a className="social__link" target='_blank' rel="noopener noreferrer" href='https://github.com/AnnaUmi'><GithubIcon /></a>
            </li>
            <li className="social__item">
                <a className="social__link" target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/anna-vlasenko-4351a47a/'><LinkedInIcon /></a>
            </li>
        </ul>
    );
};

export default ListLinkIcon;