const store = new Vuex.Store({
    state: {
        isLoading: false,
        todos: []
    },
    mutations: {
        SET_LOADING_STATUS(state) {
            state.isLoading = !state.isLoading
        },
        SET_TODOS(state, todos) {
            state.todos = todos
        }
    },
    actions: {
        fetchTodos(context) {
            context.commit('SET_LOADING_STATUS')
            axios.get('/api/todos').then(response => {
                context.commit('SET_LOADING_STATUS')
                context.commit('SET_TODOS, response.data.todos')
            })
        }
    }
})

const store = new Vuex.store({
    state: {
        isLoading: false,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false },
            { id: 3, text: '...', done: true },
        ]
    },
    getters: {
        doneTodos(state) {
            return state.todos.filter(todo => todo.done)
        }
    }
})

