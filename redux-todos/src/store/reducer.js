export default function reducer(state = [
    {
        id: 0,
        title: "今天晚上升颗星",
        done: true
    }, {
        id: 1,
        title: "本周上王者",
        done: false
    }
], action) {
    switch (action.type) {
        case "ADD_TODO": //添加一条todo
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.title,
                    done: false
                }
            ]
        case "CHANGE_DONE":
            state.forEach(item => {
                if (item.id === action.id) {
                    item.done = action.done;
                }
            });
            return [...state]
        case "REMOVE_TODO":
            return state.filter(item => (item.id !== action.id));
        case "EDIT_TODO":
            state.forEach(item => {
                if (item.id === action.id) {
                    item.title = action.title;
                }
            });
            return [...state];
        case "ClEAR_DONE_TODO":
            return state.filter(item => (!item.done));
    }
    return state;
}