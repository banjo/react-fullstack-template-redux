const getUsers = () => ([{ username: '1', password: '123' }]);

const usersReducer = (state = [], action) => {
    switch (action.type) {
    case 'INIT_USERS':
        return action.data;
    default:
        return state;
    }
};

export const initUsers = () => async (dispatch) => {
    const users = getUsers();
    dispatch({
        type: 'INIT_USERS',
        data: users
    });
};

export default usersReducer;
