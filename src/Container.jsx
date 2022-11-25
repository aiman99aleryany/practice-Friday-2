import React from 'react';
import Cont1 from './Cont1';
import Cont2 from './cont2';

class Container extends React.Component {
    render() {
        return (
            <div>
                <Cont1></Cont1>
                <Cont2></Cont2>
            </div>
        );
    }
}

export default Container;
