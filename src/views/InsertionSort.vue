<template>
  <div class="container">
    <!-- Title -->
    <div class="row mt-4">
      <div class="col">
        <h3 class="fw-light ml-1">Insertion Sort</h3>
      </div>
      <div class="col-auto">
        <button class="btn btn-secondary" @click="$router.push('/')">
          Back
        </button>
      </div>
    </div>
    <hr />
    <!-- Definition -->
    <div class="row mb-3">
      <div class="col p-md-3">
        Insertion sort is a simple sorting algorithm that builds the final
        sorted array one item at a time. It is much less efficient on large
        lists than more advanced algorithms such as quicksort, heapsort, or
        merge sort.
      </div>
    </div>
    <!-- Input field -->
    <div class="row g-2">
      <div class="col-md-6">
        <label for="input" class="form-label">Input Array</label>
        <input v-model="input" typee="text" name="input" class="form-control" />
      </div>
      <div class="col-md-3 d-flex align-items-end">
        <button class="btn btn-success" @click="insertionSort">
          Start
        </button>
      </div>
    </div>
    <!-- Message -->
    <div class="row">
      <div class="col-sm-4 p-3">
        <div v-if="message != null" :class="['text-' + message.type]">
          {{ message.body }}
        </div>
      </div>
    </div>
    <!-- Array -->
    <div class="row py-5">
      <div class="col text-center">
        <ul class="list-unstyled">
          <li
            v-for="(element, ind) in inputArray"
            :key="ind"
            class="d-inline lead p-2"
            :class="[{ 'text-success': current == ind }]"
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
        inputArray: [],
        message: {
          type: 'info',
          body: 'Expects comma seperated integers as input',
        },
        current: null,
      }
    },

    computed: {
      arr() {
        return this.input.split(',').map((x) => Number(x))
      },
    },

    methods: {
      async insertionSort() {
        this.reset()
        this.inputArray = this.arr
        for (let i = 1; i < this.inputArray.length; i++) {
          let key = this.inputArray[i]
          let j = i - 1
          while (j >= 0 && this.inputArray[j] > key) {
            await this.sleep(1000)
            this.current = j
            let temp = this.inputArray[j + 1]
            this.$set(this.inputArray, j + 1, this.inputArray[j])
            this.$set(this.inputArray, j, temp)
            j--
          }
        }
        this.message = {
          body: 'Done',
          type: 'success',
        }
      },

      reset() {
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
