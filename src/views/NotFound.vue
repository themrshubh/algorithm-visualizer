<template>
  <div class="container p-md-5">
    <div class="row">
      <div class="col text-center">
        <h1 class="display-1 text-danger">404</h1>
        <h3 class="fw-light">Couldn't find the requested page.</h3>
        <button class="btn btn-primary my-4" @click="$router.push('/')">
          Take me Home
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style></style>
