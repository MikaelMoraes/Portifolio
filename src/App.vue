<template>
<router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  background-color: #303030;
  min-height: 100vh;
}
body::-webkit-scrollbar {
  width: 12px;             
}

body::-webkit-scrollbar-track {
  background: #282828;       
}

body::-webkit-scrollbar-thumb {
  background-color: #444444;   
  border-radius: 30px;      
  border: 3px solid #282828; 
}
</style>
