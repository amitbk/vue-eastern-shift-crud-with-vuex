<template>
  <div class="shift-create">
    
    <div class="mb-3 mt-3">
      <label for="title" class="form-label">Title:</label>
      <input v-model="shift.title" type="title" class="form-control" id="title" placeholder="Enter title" name="title">
    </div>

    <div class="mb-3 mt-3">
      <label for="desc">Description:</label>
      <textarea v-model="shift.desc" class="form-control" rows="5" id="desc" name="text" placeholder="Enter Description"></textarea>
    </div>

    <div class="mb-3 mt-3">
      <label for="dates" class="form-label">Dates:</label>
      <input type="dates" class="form-control" id="dates" placeholder="(HARDCODED)" name="dates">
    </div>


    <div class="row pt-5">
      <div class="col-6">
        <button class="btn btn-outline-dark w-100" @click="onDeleteClick">Delete</button>
      </div>
      <div class="col-6">
        <button class="btn bg-dark text-white w-100" @click="onSaveClick">Save</button>
      </div>
    </div>

  </div>
</template>

<script>
import DateView from './DateView.vue'
import { mapState, mapActions } from "vuex";
import { bus } from '@/main';

export default {
  components: { DateView },
  name: 'ShiftCreate',

  computed: {
      ...mapState(["shift"])
  },

  methods: {
    ...mapActions([
      'shiftAdd', 
      'shiftDelete', 
    ]),
    onDeleteClick() {
      this.shiftDelete(this.shift);
      this.$swal({
          icon: 'success',
          title: 'Deleted',
          html: "Shift has been deleted",
        })
      bus.$emit('close-drawer');
      
    },
    onSaveClick() {
      // validations
      const TITLE_MAX_LENGTH = 100;
      const DESC_MAX_LENGTH = 500;
      let errors = "";
      if(!!this.shift.title.length == false)
        errors += "Title is required.<br>";
      if(this.shift.title.length > TITLE_MAX_LENGTH)
        errors += `Title's length should be less than ${TITLE_MAX_LENGTH}.<br>`;
      if(this.shift.desc.length > DESC_MAX_LENGTH)
        errors += `Description's length should be less than ${DESC_MAX_LENGTH}.<br>`;

      if(!!errors) {
        this.$swal({
          icon: 'error',
          title: 'Failed to save',
          html: errors,
        })
      }
      else {
      // save
        this.shiftAdd();
        bus.$emit('close-drawer');
      }
    }
  }
}
</script>

<style scoped>

</style>
