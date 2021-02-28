<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <h3 class="fw-light ml-1">Linear Search</h3>
      </div>
      <div class="col-auto">
        <button class="btn btn-secondary" @click="$router.push('/')">
          Back
        </button>
      </div>
    </div>
    <hr />
    <div class="row mb-3">
      <div class="col p-md-3">
        In computer science, a linear search or sequential search is a method
        for finding an element within a list. It sequentially checks each
        element of the list until a match is found or the whole list has been
        searched. Below, the input array elements must be comma seperated. All
        values are interpreted as strings.
      </div>
    </div>
    <div class="row g-2">
      <div class="col-md-6">
        <label for="input" class="form-label">Input Array</label>
        <input v-model="input" type="text" name="input" class="form-control" />
      </div>
      <div class="col-md-3">
        <label for="key" class="form-label">Key</label>
        <input v-model="key" type="text" name="key" class="form-control" />
      </div>
      <div class="col-md-3 d-flex align-items-end">
        <button class="btn btn-success" @click="linearSearch">
          Start
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4 p-3">
        <div
          v-if="message != null"
          :class="[
            { 'text-warning': message.type == 'err' },
            { 'text-success': message.type == 'yes' },
            { 'text-danger': message.type == 'nop' },
          ]"
        >
          {{ message.body }}
        </div>
      </div>
    </div>
    <div class="row py-5">
      <div class="col text-center">
        <ul class="list-unstyled">
          <li
            v-for="(element, ind) in arr"
            :key="ind"
            class="d-inline lead p-2"
            :class="[
              { 'text-danger': ind < current },
              { 'text-primary': ind == current },
              { 'text-success fw-bold': ind == index },
            ]"
          >
            {{ element }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: '',
        key: '',
        index: -1,
        current: -1,
        message: null,
      }
    },

    computed: {
      arr() {
        return this.input.split(',')
      },
    },

    methods: {
      async linearSearch() {
        this.reset()
        let arr = this.arr

        try {
          for (let i = 0; i < arr.length; i++) {
            this.current = i
            await this.sleep(1000)
            if (this.key.trim() === arr[i].trim()) {
              this.index = i
              this.message = {
                type: 'yes',
                body: `${this.key.trim()} found at index ${this.index}`,
              }
              return
            }
          }
          this.message = {
            type: 'nop',
            body: `${this.key} not found`,
          }
        } catch (err) {
          this.message = {
            type: 'err',
            body: 'Please check your input.',
          }
        }
      },

      reset() {
        this.index = -1
        this.current = -1
        this.message = null
      },

      sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms))
      },
    },
  }
</script>

<style></style>
