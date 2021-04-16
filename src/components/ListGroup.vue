<template>
  <div class="list-group mx-3">
    <router-link
      v-for="a in algorithms"
      :key="a.link"
      :to="a.link"
      class="list-group-item list-group-item-action"
    >
      {{ a.name }}
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        algorithms: [
          { name: 'Linear Search', link: '/linear-search' },
          { name: 'Binary Search', link: '/binary-search' },
          { name: 'Insertion Sort', link: '/insertion-sort' },
        ],
      }
    },
  }
</script>

<style></style>
