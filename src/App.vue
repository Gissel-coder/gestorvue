<template>
  <div id="app">
    
    <nav class="navbar navbar-expand-lg navbar-light custom-bg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Gestor de Tareas</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">
                <i class="bi bi-house-door"></i> Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/addtask">
                <i class="bi bi-plus-circle"></i> Agregar Tarea
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/tasklist">
                <i class="bi bi-list-task"></i> Lista de Tareas
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/combinedview">
                <i class="bi bi-view-list"></i> Lista Combinada
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 15px 0; 
}

.custom-bg {
  background-color: #007bff !important; 
}

.navbar-brand {
  font-weight: bold;
  color: #ffffff !important; 
}

.nav-link {
  font-weight: bold;
  color: #ffffff !important; 
}

.nav-link.router-link-exact-active {
  color: #ffeb3b !important; 
}

.navbar-nav.ms-auto {
  margin-left: auto !important; 
}
</style>
