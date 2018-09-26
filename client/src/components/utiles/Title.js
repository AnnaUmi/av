import React from 'react';

const Title = (props) => {
    return (
        <section>
            <h2 className="section-title">
                {props.title}
            </h2>
        </section>

    );
};

export default Title;