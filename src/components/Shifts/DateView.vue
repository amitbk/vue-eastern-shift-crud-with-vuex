<template>
  <div class="card date__view mb-1 bg-dark text-white">
      <div class="card-body p-1 d-flex">
          <div class="px-2">{{date.date}}</div>
          <div class="px-2">{{date.start_time}}</div>
          <div class="px-2">{{date.end_time}}</div>
          <div class="px-2">{{date.type}}</div>
          <div class="px-2 ms-auto">${{date.price}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DateView',
  props: {
      date: {
          required: true,
          type: Object
      }
  }
}
</script>

<style scoped>

</style>
