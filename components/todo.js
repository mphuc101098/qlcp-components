(function () {
// on khong ne may oi
// TodoForm
Vue.component('todo-form', {
  template: `
    <div class="todo-input">
      <input
        v-model="newTodo"
        @keyup.enter="submitTodo"
        type="text"
        placeholder="Nhập công việc..."
      />
      <button @click="submitTodo">Thêm</button>
    </div>
  `,
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    submitTodo() {
      const text = this.newTodo.trim()
      if (!text) return

      this.$emit('add-todo', text)
      this.newTodo = ''
    }
  }
})


// TodoItem
Vue.component('todo-item', {
  props: ['todo'],
  template: `
    <li :class="{completed: todo.completed}" class="todo-item">
      <label>
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="$emit('toggle-todo', todo.id)"
        />
        {{ todo.text }}
      </label>

      <button @click="$emit('remove-todo', todo.id)">
        Xóa
      </button>
    </li>
  `
})


// TodoList
Vue.component('todo-list', {
  props: ['todos'],
  template: `
    <div>
      <ul v-if="todos.length">
        <todo-item
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @toggle-todo="$emit('toggle-todo', $event)"
          @remove-todo="$emit('remove-todo', $event)"
        ></todo-item>
      </ul>

      <p v-else>Chưa có công việc nào</p>
    </div>
  `
})


// TodoApp
Vue.component('todo-app', {
  template: `
    <div class="todo-container">
      <h1>This is a Todo App Demo</h1>
      <h2>Todo List</h2>

      <todo-form @add-todo="addTodo"></todo-form>

      <todo-list
        :todos="todos"
        @toggle-todo="toggleTodo"
        @remove-todo="removeTodo"
      ></todo-list>
    </div>
  `,
  data() {
    return {
      todos: [
        { id: 1, text: 'Học Vue', completed: false },
        { id: 2, text: 'Tách component', completed: true },
        { id: 3, text: 'Sử dụng Vue.component', completed: false }
      ]
    }
  },
  methods: {
    addTodo(text) {
      this.todos.push({
        id: Date.now(),
        text,
        completed: false
      })
    },
    toggleTodo(id) {
      const todo = this.todos.find(t => t.id === id)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    }
  }
})

 })()
