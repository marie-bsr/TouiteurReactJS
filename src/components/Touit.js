import React from 'react';


class Touit extends React.Component {

    render() {

        const { name, message } = this.props;

        return (
            <div className="touit">
                <span>{message}</span>
                <p>{name}</p>

            </div>
        );
    }

}









export default Touit;