import React from 'react'



class Counter extends React.Component {

    state = {
        number: 0
    }

    increaseNumberHandler = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    decreaseNumberHandler = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    resetNumberHandler = () => {
        this.setState({
            number: 0
        })
    }

    componentDidMount() {

        fetch('https://simple-react-app-with-login.firebaseio.com/users.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    number: data
                })
            })
    }

    componentDidUpdate() {
        const request = {
            method: 'PUT',
            body: JSON.stringify(this.state.number)
        }

        fetch('https://simple-react-app-with-login.firebaseio.com/users/.json', request)
            .then(response => {

                this.setState({
                    number: this.state.number
                })
            })
    }


    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <button
                    onClick={this.increaseNumberHandler}
                >
                    +
                </button>
                <button
                    onClick={this.decreaseNumberHandler}
                >
                    -
                </button>

                <button
                    onClick={this.resetNumberHandler}
                >
                    RESET
                </button>
            </div>
        )
    }
}

export default Counter
