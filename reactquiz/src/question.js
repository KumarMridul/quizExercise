'use strict';

import React, { Component } from 'react';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: ''
        };
    }

    renderOptions = (options) => {
        return options.map( ( obj, i ) => (
                <div>
                <input type='radio' name={  obj.name } value={  obj.option } id={obj.id}
                checked={obj.id === this.state.checked}
                onChange={this.handleOptionChange}
                />
                <label htmlFor={obj.id} data-linktext={obj.option}><span className="option-text">{ obj.option }</span></label>
                </div>
               ))
            
    }
    handleOptionChange = (event) => {
    let { value, id } = event.target;
     this.setState({
        checked: id
     }, function() {
        this.props.updateResponse(this.props.id, this.state.checked);
      });
    }
    render() {
        const { question, id, options, index, key  } = this.props;
        return (
            <div className='question' >
                {question}
                { this.renderOptions(options) }
            </div>
        );
    }
}

export default Question;