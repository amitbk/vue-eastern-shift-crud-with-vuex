<template>
  <div class="container shifts__wrapper">
      <div class="row py-5">
          <div class="col-md-12 d-flex">
              <h3 class="fw-bold">Shifts</h3>
              <div class="ms-auto">

                <button class="btn bg-dark text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> Add Shift</button>
              </div>
          </div>

          <div class="shifts pt-4">
              <shift-view v-for="(shift,i) in shifts" :shift="shift" :key="i"/>
          </div>
      </div>
  </div>
</template>

<script>
import ShiftView from './ShiftView.vue'
import { mapState } from "vuex";
export default {
  components: { ShiftView },
  name: 'ShiftsWrapper',

  computed: {
      ...mapState(["shifts"])
  }
}
</script>

<style scoped>

</style>
