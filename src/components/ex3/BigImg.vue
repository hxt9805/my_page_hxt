<template>
  <div class="wrap">
    <!-- 左边显示正常图片的外元素 -->
    <div class="left"> 
      <!-- 图片 -->
      <img class="leftImg" src="./img/1.png" alt="">
      <!-- 鼠标层罩 -->
      <div v-show="topShow" class="top" :style="topStyle"></div>
      <!-- 最顶层覆盖了整个原图空间的透明层罩 -->
      <div class="maskTop"
      @mouseenter="isEnterHandler(true)"
      @mousemove="moveHandler"
      @mouseout="isEnterHandler(false)"></div>
    </div>
    <!-- 显示放大效果的外元素 -->
    <div v-show="rShow" class="right">
      <!-- 放大图片 -->
      <img :style="r_img" class="rightImg" src="./img/1.png" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        topStyle:{transform:''},
        r_img: {},
        topShow:false,
        rShow:false
      }
    },
    methods : {
      // 鼠标进入原图空间函数
      isEnterHandler(isEnter) {
        // 层罩及放大空间的显示
        this.topShow = isEnter
        this.rShow = isEnter
      },
      // // 鼠标移出函数
      // outHandler() {
      //   // 控制层罩与放大空间的隐藏
      //   this.topShow = false
      //   this.rShow = false
      // },
      // 鼠标移动函数
      moveHandler(event) {
        // 鼠标的坐标位置(鼠标距离绑定事件的元素的top和left的距离)
        let x = event.offsetX
        let y = event.offsetY
        // 层罩的左上角坐标位置，并对其进行限制：无法超出原图区域左上角
        let topX = (x-50) < 0 ? 0:(x-50)
        let topY = (y-50) < 0 ? 0:(y-50)
        // 对层罩位置再一次限制，保证层罩只能在原图区域空间内
        if(topX>500) {
          topX = 500
        }
        if(topY>300) {
          topY = 300
        }
        // 通过 transform 进行移动控制
        this.topStyle.transform = `translate(${topX}px,${topY}px)`
        this.r_img.transform = `translate(-${2400*(topX/600)}px,-${1600*(topY/400)}px)`
      }
    }
  }
</script>

<style scoped>

.wrap{
  width: 1200px;
  height: 600px;
  margin: 0 auto;
}

/* 放大的图片，通过定位将左上角定位到(0,0) */
.rightImg {
  display: inline-block;
  width: 2400px;
  height: 1600px;
  position: absolute;
  top: 0;
  left: 0;
}
/* 右边的区域图片放大空间 */
.right {
  margin-left: 612px;
  width: 400px;
  height: 400px;
  border: 1px solid red;
  position: relative;
  overflow: hidden;
}
/* 一个最高层层罩 */
.maskTop {
  width: 600px;
  height: 400px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
}
/* 层罩，通过定位将左上角定位到(0,0) */
.top {
  width: 100px;
  height: 100px;
  background-color: lightcoral;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
}
/* 原图的显示 */
.leftImg {
  width: 600px;
  height: 400px;
  display: inline-block;
}
/* 原图的容器 */
.left {
  width: 600px;
  height: 400px;
  border: 1px solid teal;
  float: left;
  position: relative;
}
 
</style>
