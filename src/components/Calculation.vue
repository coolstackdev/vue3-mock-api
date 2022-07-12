<template>
  <div class="container">
    <div class="form">
      <input type="number" v-model="number" @blur="handleBlur" data-number-input />
      <button type="button" class="submit" @click="handleSubmit">Submit</button>
    </div>
    <div class="response">
      <pre>
        <code>{{response}}</code>
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Calculation',
  setup: () => {
    const store = useStore();
    const number = ref(0);
    const response = ref('');

    function handleBlur() {
      const correctedValue = Math.abs(Math.round(Number(number.value)));

      if (correctedValue > 100) {
        number.value = 100;
      } else {
        number.value = correctedValue;
      }
    }

    async function handleSubmit() {
      await store.dispatch('fetchResult', number.value);
      response.value = JSON.stringify(store.state.result, undefined, 2);
    }

    return {
      store,
      number,
      response,
      handleBlur,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form {
  display: flex;
  justify-content: center;
}

.submit {
  margin-left: 1rem;
}

.response {
  width: 520px;
}

pre {
  display: block;
  padding: 30px;
  background: #f4f5f7;
  margin: 20px 0;
  white-space: pre-wrap;
  font-size: .9em;
  font-family: Courier,monospace;
  border-radius: 5px;
}

pre code {
  text-align: left;
  display: block;
  font-family: inherit;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  padding: 0 3px;
  color: #333;
}
</style>
