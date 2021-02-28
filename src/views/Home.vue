<template>
  <div>
    <div class="container">
      <h2 class="text-center mt-4 fw-light">Algorithms Visualizer</h2>
      <hr />
      <div class="row justify-content-center">
        <div class="col-md-4">
          <ListGroup />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ListGroup from '../components/ListGroup'

  export default {
    components: {
      ListGroup,
    },
  }
</script>

<style></style>
