<template>
<router-view/>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
body{
  background-color: #303030;
}
body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: #282828;        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: #444444;    /* color of the scroll thumb */
  border-radius: 30px;       /* roundness of the scroll thumb */
  border: 3px solid #282828;  /* creates padding around scroll thumb */
}
</style>
