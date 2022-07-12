<template>
  <Calculation />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Calculation from './components/Calculation.vue';

export default defineComponent({
  name: 'App',
  components: {
    Calculation,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input {
  display: block;
  width: 300px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
button {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color
    .15s ease-in-out,box-shadow .15s ease-in-out;
}
button:hover {
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34;
}
button:focus {
  box-shadow: 0 0 0.2rem rgb(40 167 69 / 50%);
}
</style>
