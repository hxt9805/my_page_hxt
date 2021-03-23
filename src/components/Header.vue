<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav_list">
        <li class="item" 
          v-for="(todo,index) in todos" 
          :key="todo.id" 
          :title="todo.title"
          @mouseenter="isSeen(true,todo.id)"
          @mouseleave="isSeen(false,todo.id)"
          :style="{background: todo.id !== tag ? 'transparent': '#ff6700' }"
        >
          <div class="title">
            {{todo.title}}
          </div>
          <transition name="fade">
            <HeaderItem 
              :contentList="todo.content" 
              :titleIndex="index"
              v-show="todo.id !== tag ? false: true"
              :changeShowState="changeShowState"
            />
          </transition>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script type="text/ecmascript-6">
  import HeaderItem from "./HeaderItem";

  export default {
    components:{
      HeaderItem
    },
    props:['todos','changeShowState'],
    data(){
      return {
        seen: false,
        bgc: 'transparent',
        tag:''
      }
    },
    methods:{
      isSeen(seen,id){
        if (!seen) {
          this.tag = ''
        }else{
          this.tag = id
        }
        this.seen = seen
      }
    }
  }
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* header */
.nav{
  width: 100%;
  height: 50px;
  background-color: skyblue;
}
.nav>.nav_list{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  animation: show 500ms ease-out;
  /* overflow: hidden; */
}
@keyframes show{
  0%{
    transform: scaleX(0);
  }
  100%{
    transform: scaleX(1);
  }
}
.item{
  position: relative;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  
}
.item .title{
  width: 60px;
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
