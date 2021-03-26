<template>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users Vuex</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="searchName"/>
        <button @click="search">Search</button>
      </div>
    </section>
</template>

<script type="text/ecmascript-6">


  export default {
    data(){
      return {
        searchName: ''
      }
    },
    methods:{
      search(){
        // 触发异步search调用
        const searchName = this.searchName.trim()
        if (searchName) {
          this.$store.dispatch('search',this.searchName)
          this.searchName = ''
        }
      }
    },
    
  }
</script>

<style scoped>

 
</style>
