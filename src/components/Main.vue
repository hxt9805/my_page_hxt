<template>
  <main class="body">
    <!-- <div class="one">
      
    </div>
    <div class="two" name="two">
      two的内容显示
    </div> -->
    <transition name='one'>
      <AppTodos v-if="todos[0].content[0].isShow" />
    </transition>
    <transition name="one">
      <AppSearch v-if="todos[0].content[1].isShow" />
    </transition>
    <transition name="one">
      <AppTwo v-if="todos[1].content[0].isShow" />
    </transition name='one'>
    <transition>
      <BigImg v-if="todos[1].content[1].isShow" />
    </transition>
    
  </main>
</template>

<script type="text/ecmascript-6">

  import AppTodos from "./ex1/AppTodos";
  import AppTwo from "./ex2/AppTwo";
  import BigImg from "./ex3/BigImg";
  import AppSearch from "./ex4/AppSearch";

  export default {
    components:{
      AppTodos,
      AppTwo,
      BigImg,
      AppSearch,
    },
    props:['todos'],
    
  }
</script>

<style scoped>
/* main */
.body{
  margin: 200px 0px 0px;
  background-color: #efefef;
  height: 80vh;
}
.one-enter-active,.one-leave-active{
  transition: 1s;
}
.one-enter,.one-leave-to{
  opacity: 0;
  transform: translateX(20px);
}
.one-enter-to,.one-leave{
  opacity: 1;
  transform: translateX(0px);
}
</style>
