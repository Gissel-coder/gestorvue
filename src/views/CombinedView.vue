<template>
    <div class="task-container">
        <h1>Lista de Tareas</h1>

        
        <div class="input-group">
            <input 
                v-model="newTask" 
                @keyup.enter="addTask" 
                placeholder="Añadir nueva tarea" 
                class="task-input"
            />
            <button @click="addTask" class="add-button">Añadir</button>
        </div>

    
        <div v-if="tasks.length > 0" class="task-list">
            <div v-for="task in tasks" :key="task.id" class="task-item">
                <div class="task-text">
                    <h5 :class="{ completed: task.completed }">{{ task.todo }}</h5>
                    <span>{{ task.completed ? 'Completada' : 'Pendiente' }}</span>
                </div>

                <div class="task-actions">
                    <button @click="toggleTaskCompletion(task)" class="btn btn-outline-success" aria-label="Marcar como completada">
                        <i class="bi bi-check-circle-fill"></i>
                    </button>
                    <button @click="deleteTask(task)" class="btn btn-outline-danger" aria-label="Eliminar tarea">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>
        <p v-else>No hay tareas disponibles.</p>
    </div>
</template>

<script>
export default {
    name: "TaskList",
    data() {
        return {
            newTask: "", 
            tasks: [],   
        };
    },
    mounted() {
        this.fetchTasks(); 
    },
    methods: {
        
        fetchTasks() {
            fetch("https://dummyjson.com/todos")
                .then(response => response.json())
                .then(data => {
                    this.tasks = data.todos;
                })
                .catch(error => {
                    console.error("Error al cargar las tareas:", error);
                });
        },

        
        addTask() {
            if (this.newTask.trim() === "") return;

            const newTask = {
                todo: this.newTask,
                completed: false,
                id: Date.now(),
            };

            
            this.tasks.unshift(newTask);
            this.newTask = ""; 
        },

        
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },

        
        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },
    },
};
</script>

<style scoped>
.task-container {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

.input-group {
    display: flex;
    margin-bottom: 20px;
}

.task-input {
    flex-grow: 1;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.add-button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.add-button:hover {
    background-color: #0056b3;
}

.task-list {
    margin-top: 20px;
}

.task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.task-item:hover {
    background-color: #f1f1f1;
}

.completed {
    text-decoration: line-through;
    color: gray;
}

.task-text {
    flex-grow: 1;
    text-align: left;
}

.task-actions {
    display: flex;
    gap: 10px;
    align-items: center;
}

.btn {
    width: 40px;  
    height: 40px; 
    font-size: 20px; 
    padding: 0;   
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.btn:hover {
    opacity: 0.8;
}

.btn-outline-success {
    color: #28a745;
    border: 1px solid #28a745;
}

.btn-outline-success:hover {
    background-color: #28a745;
    color: white;
}

.btn-outline-danger {
    color: #dc3545;
    border: 1px solid #dc3545;
}

.btn-outline-danger:hover {
    background-color: #dc3545;
    color: white;
}

.bi {
    font-size: 20px; 
}
</style>
