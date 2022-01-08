<template>
    <div ref="drawer" class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel" class="fw-bold">{{title}}</h5>
        <button ref="close" type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <slot/>
      </div>
    </div>
</template>

<script>
import { bus } from '@/main';
export default {
  name: 'Drawer',
  props: {
      title: {
          required: true,
          type: String
      }
  },
  methods: {

  },
  created (){
    bus.$on('close-drawer', (data) => {
         this.$refs.close.click()
    })
  }
}
</script>

<style scoped>
</style>
