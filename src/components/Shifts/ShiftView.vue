<template>
  <div class="card shadow-lg shift__view mb-2">
      <div class="card-body">
         <div class="d-flex">
            <h5 class="fw-bold">{{shift.title}}</h5>
            <!-- <div class="ms-auto"><i class="bi bi-pencil-fill"></i></div> -->
            <div class="ms-auto cursor-pointer" @click="onEditClick" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                Edit</div>
         </div>

        <div>{{shift.desc}}</div>

        <div class="mt-2">
           <h5 class="fw-bold">Dates</h5>
          <date-view v-for="(date,i) in shift.dates" :date="date" :key="i"/>
        </div>
      </div>
  </div>
</template>

<script>
import DateView from './DateView.vue'
import { mapActions } from "vuex";

export default {
  components: { DateView },
  name: 'ShiftView',
  props: {
      shift: {
          required: true,
          type: Object
      }
  },

  methods: {
      ...mapActions([
        'shiftEdit', // map `this.increment()` to `this.$store.dispatch('increment')`
       ]),
      onEditClick() {
          this.shiftEdit(this.shift);
      }
  }
}
</script>

<style scoped>

</style>
