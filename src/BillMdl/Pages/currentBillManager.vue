<template>
  <div>
    currentBillManager 当前账单{{test}}
  </div>
</template>

<script>
  // import { store } from '../../store'

  export default {
    name: 'currentBillManager',
    computed: {
      test () {
        // console.log(this.$store.state.UserMdl.test1)
        return this.$store.state.UserMdl.test1

        // return store.state.UserMdl.test1
      }
    }
  }
</script>

<style scoped>

</style>
