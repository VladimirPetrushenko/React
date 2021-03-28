const lighting = (value) =>(value < 0 ? 0 : (value > 255 ? 255 : value));

export const FuncForReducer = (state, props) =>{
    const {type, payload=50} = props;
    switch(type){
        case 'Increment_R':
            return {
                ...state,
                r: lighting(state.r + payload)
            };
        case 'Decrement_R':
            return {
                ...state,
                r: lighting(state.r - payload)
            };
        case 'Increment_G':
            return {
                ...state,
                g: lighting(state.g + payload)
            };
        case 'Decrement_G':
            return {
                ...state,
                g: lighting(state.g - payload)
            };
        case 'Increment_B':
            return {
                ...state,
                b: lighting(state.b + payload)
            };
        case 'Decrement_B':
            return {
                ...state,
                b: lighting(state.b - payload)
            };
        default:
            return state;
    }
}