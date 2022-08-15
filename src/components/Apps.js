import React from 'react';

class Apps extends React.Component {
    state = { color: 'green' };
    render() {
        setTimeout(() => {
            this.setState({ color: 'wheat' });
        }, 4000);
        return (
            <div>
                <h1>Tutorialspoint</h1>
                <ChangeName color={this.state.color} />
            </div>
        );
    }
}
class ChangeName extends React.Component {
    componentWillReceiveProps(nextProps) {
        console.log('Component received new props', nextProps);
    }
    render() {
        console.log('ChangeName component is called');
        return (
            <div>
                <h1 style={{ color: this.props.color }}>Simply Easy Learning</h1>
            </div>
        );
    }
}
export default Apps;