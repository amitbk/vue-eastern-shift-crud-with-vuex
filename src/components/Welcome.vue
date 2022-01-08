<template>
  <div class="welcome">

    <shifts-wrapper/>
    

    <drawer title="Create/Edit">
      <shift-create/>
    </drawer>


  </div>
</template>

<script>
import Drawer from './Drawer.vue'
import ShiftCreate from './Shifts/ShiftCreate.vue'
import ShiftsWrapper from "./Shifts/ShiftsWrapper.vue"
export default {
  name: 'Welcome',
  components: {
    ShiftsWrapper,
    Drawer,
    ShiftCreate
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
