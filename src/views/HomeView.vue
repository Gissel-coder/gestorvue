<template>
  <div class="home">
    
    <h1>{{ welcomeMessage }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      
      welcomeMessage: this.getWelcomeMessage()
    };
  },
  methods: {
    
    getWelcomeMessage() {
      const hour = new Date().getHours();
      if (hour < 12) {
        return "¡Buenos días! Bienvenido a la aplicación Vue.js";
      } else if (hour < 18) {
        return "¡Buenas tardes! Bienvenido a la aplicación Vue.js";
      } else {
        return "¡Buenas noches! Bienvenido a la aplicación Vue.js";
      }
    }
  }
}
</script>

<style scoped>

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  background-color: #f9f9f9;
}

h1 {
  font-size: 32px;
  text-align: center;
  color: #42b983;
  margin: 0;
}
</style>
