<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <h3 class="fw-light ml-1">Binary Search</h3>
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
        Binary search, also known as half-interval search, logarithmic search,
        or binary chop, is a search algorithm that finds the position of a
        target value within a sorted array. Binary search compares the target
        value to the middle element of the array.
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
        <button class="btn btn-success" @click="binarySearch">
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
            class="d-inline lead p-2 position-relative"
            :class="{ 'text-success fw-bold': index == ind }"
          >
            {{ element }}
            <div
              class="position-absolute dot"
              :class="[
                { 'bg-danger': (start == ind || end == ind) && index != ind },
                { 'bg-primary': mid == ind && index != ind },
              ]"
            ></div>
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
        key: 0,
        index: -1,
        start: -1,
        end: -1,
        mid: -1,
        message: null,
        arr: [],
      }
    },

    // computed: {
    //   arr() {
    //     try {
    //       let arr = []
    //       let temp = this.input.split(',')
    //       for (let i = 0; i < temp.length; i++) {
    //         arr.push(Number(temp[i].trim()))
    //       }
    //       return arr
    //     } catch (err) {
    //       return []
    //     }
    //   },
    // },

    watch: {
      input(newValue) {
        try {
          let arr = []
          let temp = newValue.split(',')
          for (let i = 0; i < temp.length; i++) {
            arr.push(Number(temp[i].trim()))
          }
          this.arr = arr
        } catch (err) {
          this.arr = []
          this.message = {
            type: 'err',
            body: 'Bad input',
          }
        }
      },
    },

    methods: {
      async binarySearch() {
        try {
          this.reset()
          let arr = this.arr
          let key = Number(this.key)
          this.start = 0
          this.end = arr.length - 1

          while (this.start <= this.end) {
            this.mid = Math.floor((this.start + this.end) / 2)
            await this.sleep(1000)
            if (arr[this.mid] == key) {
              this.index = this.mid
              this.message = {
                type: 'yes',
                body: `${key} found at index ${this.mid}.`,
              }
              return
            } else if (arr[this.mid] < key) {
              this.start = this.mid + 1
            } else {
              this.end = this.mid - 1
            }
          }

          this.message = {
            type: 'nop',
            body: `${key} not found in the input.`,
          }
        } catch (err) {
          console.log(err)
          this.message = {
            type: 'err',
            body: 'Some error has occured',
          }
        }
      },

      reset() {
        this.index = -1
        this.start = -1
        this.end = -1
        this.message = null
      },

      sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms))
      },
    },
  }
</script>

<style>
  .dot {
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    height: 7px;
    width: 7px;
    border-radius: 200px;
  }
</style>
