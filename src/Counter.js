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
