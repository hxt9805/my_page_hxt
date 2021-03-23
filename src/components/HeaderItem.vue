<template>
  <div class="content">
    <ul class="content_list">
      <li 
        v-for="(item,index) in contentList" 
        :key="item.id"
        :title="item.conTitle"
        @mouseenter="isSeen(true,item.id)"
        @mouseleave="isSeen(false,item.id)"
        :style="{background: item.id !== tag ? 'transparent': '#ff6700' }"
        @click="aa(titleIndex,index)"
      > {{item.conTitle}} </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    props:['contentList','changeShowState','titleIndex'],
    data(){
      return {
        seen: false,
        bgc: 'transparent',
        tag: 0
      }
    },
    methods:{
      isSeen(seen,id){
        this.seen = seen
        this.tag = id
      },
      aa(titleIndex,index){
        console.log(11);
        this.changeShowState(titleIndex,index)
      }
    }
  }
</script>

<style scoped>

.item .content{
  position: absolute;
  top: 50px;
  width: 120px;
  /* border: 1px solid #000; */
  background-color: #fff;
}
.item .content li{
  width: 100%;
  height: 40px;
  margin: 0 auto;
  line-height: 40px;
  /* border: 1px solid #000; */
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
