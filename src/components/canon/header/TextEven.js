import { Menu } from './Menu.js';
import React, { Component } from 'react';

const textvl = [
    {
        valua1 : 'Xin Chao Cac Ban Da Den Voi ReactPlus',
        valua2 : 'Xin Chao Cac Ban Da Den Voi ReactPlus',
        valua3 : 'Xin Chao Cac Ban Da Den Voi ReactPlus',
    }
]

export class TextEven extends Component {
    render() {
        return (
            <div>
                <Menu cc={textvl}/>
            </div>
        )
    }
}

export default TextEven
