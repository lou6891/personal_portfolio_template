import React from 'react';
import { languageSymbols } from '../../parameters/languageSymbols';
import classes from './card.module.css';

export default function GitRepoCard({ rep, index, deviceType }) {
    const [isHovered, setIsHovered] = React.useState(false);
    const ref = React.useRef();
    const [minHeight, setMinHeight] = React.useState('auto');

    React.useEffect(() => {
    const fullGridHeight = getComputedStyle(ref.current).getPropertyValue('height');
    setMinHeight(fullGridHeight);
    }, [deviceType]);

    return (
        <button
            className={classes.card_sections}
            onClick={() => window.open(rep['html_url'], '_blank', 'noreferrer')}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            key={index}
            ref={ref}
            style={{ height: isHovered ? minHeight : '100%' }}
            >
            {!isHovered ? (
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <img
                        src={rep['Social_Preview']}
                        alt={`${rep['name']} image`}
                        className={classes.card_sections_image}
                    />

                    <h3 style={{ color: 'var(--primaryColor)', margin: '3% 0 2% 0', textAlign: 'left' }}>
                        {rep['name']}
                    </h3>

                    <hr className={classes.card_sections_hr} />

                    <h4 style={{ margin: '10px 0' }}>
                        {rep['description'] ? rep['description'] : 'No Description Available'}
                    </h4>

                    <p style={{ color: 'var(--terziaryColor)', margin: '5px 0' }}>
                        Created on {rep['created_at'].toString().slice(0, 10)}
                    </p>

                    <div className={classes.icon_div}>
                        {rep['languages']
                        ? Object.keys(rep['languages']).map((language, index) => (
                            <span key={index}>{languageSymbols[language]}</span>
                            ))
                        : ''}
                    </div>
                </div>
            ) : (
            <div className={classes.hover_arrow}>
                <h3
                style={{
                    color: 'var(--primaryColor)',
                    margin: '0',
                    transform: 'translate(0px , 10px)',
                }}>

                {rep['name']}

                </h3>
                &#8611;
            </div>
            )}
        </button>
    );
}