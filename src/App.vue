<template>
  <div id="wrap">
    <!-- <mt-button type="primary" >plain</mt-button> -->
    <Header
      :todos="todos"
      :changeShowState="changeShowState"
    />
    <Main
      :todos="todos"
    />
  </div>
</template>

<script type="text/ecmascript-6">

  import Header from "./components/Header";
  import Main from "./components/Main";

  export default {
    components:{
      Header,
      Main,
    },
    data(){
      return {
        todos:[
          {
            id:1,
            title:"video_ex",
            content:[
              {id:11, conTitle:"todos_ex", isShow:false},
              {id:12, conTitle:"search_github_user", isShow:true},
            ]
          },
          {
            id:2,
            title:"self",
            content:[
              {id:21, conTitle:"轮播图", isShow:false},
              {id:22, conTitle:"放大镜", isShow:false},
            ]
          },
        ],
        lastShowMainIndex:[0,1]
      }
    },
    methods:{
      changeShowState(index,contentIndex){
        const index1 = this.lastShowMainIndex[0]
        const contentIndex1 = this.lastShowMainIndex[1]
        this.todos[index1].content[contentIndex1].isShow = false
        this.lastShowMainIndex.splice(0,this.lastShowMainIndex.length,index,contentIndex);
        this.todos[index].content[contentIndex].isShow = true;
        
      }
    },
  }
</script>

<style scoped>

 
</style>
