import { createStore } from 'redux';

const incrementBy = ( {incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy 
});

const decrementBy = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const reset = () => ({
    type: 'RESET'
});

const set = ({count = 0}={}) => ({
    type: 'SET',
    count
});

const store = createStore((state = {count : 0}, action) => {
    switch(action.type){
        case 'INCREMENT':
            return{
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return{
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return{
                count: 0
            };
        case 'SET':
            return{
                count: action.count
            }
        default: 
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementBy({incrementBy: 5}))

store.dispatch(incrementBy());

//unsubscribe();

store.dispatch(reset());

store.dispatch(decrementBy({decrementBy: 100}));

store.dispatch(decrementBy());

store.dispatch(set({count: 30000}));

