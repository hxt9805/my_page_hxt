<template>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
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
        // 分发自定义事件(searchUsersInfo)
        const searchName = this.searchName.trim()
        if (searchName) {
          this.$eventBus.$emit('searchUsersInfo',searchName)
        }else{
          alert('请输入正确的搜索内容')
        }
        this.searchName = ''
      }
    },
    
  }
</script>

<style scoped>

 
</style>
