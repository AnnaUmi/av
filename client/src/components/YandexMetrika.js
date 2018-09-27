import React from 'react';
import { YMInitializer } from 'react-yandex-metrika';

const YandexMetrika = () => {
    return (
        <div>
             <YMInitializer accounts={[50503681]} />
        </div>
    );
};

export default YandexMetrika;