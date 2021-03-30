export const reducerMain = (state, { type, payload }) => {
    switch (type) {
        case 'SEARCH_MOVIES':
            return {
                ...state,
                loading: true,
                name: payload.nameIn,
                type: payload.typeIn,
                pages: 1,
            };
        case 'CHANGE_PAGES':
            return {
                ...state,
                loading: true,
                pages: payload.page,
            };
        case 'LOAD_MOVIES':
            return {
                ...state,
                movies: payload.movies,
                total: payload.total,
                loading: false,
            };
        case 'ERROR':
                return {
                    ...state,
                    loading: false,
                };
        case 'SET_SEARCH':
                return {
                    ...state,
                    search: payload.search,
                };
        case 'SET_TYPE':
                return {
                    ...state,
                    type: payload.type,
                };
        default:
            return {};
    }
};
