export function updateAnswers (state = [], action) {
    switch ( action.type ) {
        case 'SELECTED_ANSWER':
            let isAvailable = false;
            debugger;
            state.forEach( (eachAnswer, index) => {
                if ( eachAnswer.questionName === action.answer.questionName ) {
                    state[index] = action.answer;
                    isAvailable = true;
                }
            });

            return ( isAvailable ) ? state : [...state, action.answer];
            break;
    }

    return state;
}