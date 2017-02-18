import React, { Component } from 'react';
import Map from './map_';

export default class Page extends Component{
    render() {
        return(
            <div>
                React Page component
                <Map coordinate={{lat: 41.913307, lng: 12.494767, city: 'Roma', country: 'Italy', description: 'Il ristorante Da Pancrazio sorge sui resti del Teatro di Pompeo, cioè il più importante teatro di Roma Antica, ed è noto dal 1922 non solo per le sue sale uniche, ma anche per il sapore della tipica cucina romana che propone in un ambiente familiare con ricette che sono patrimonio di quattro generazioni.'}} />
            </div>
        );
    }
}