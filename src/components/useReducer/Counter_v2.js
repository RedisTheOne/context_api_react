import React, { useReducer } from 'react'

function init(initialCount) {
    return { count: initialCount }
}

function reducer(state, action) {
    switch(action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, 2, init)

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </>
    )
}