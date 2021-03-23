<template>
  <div id="app-1" @mouseenter="stopAuto" @mouseleave='startAuto'>
    
    <ul class="list" :style="{left: leftDis}" >
      <li v-for='item in images'> <img :src="item"> </li>
    </ul>

    <div class="left same" @click='next_page(true)'> < </div>
    <div class="right same" @click='next_page(false)'> > </div>

    <ul class="pointList">
      <li @click='changePoint(index)' v-for='(item,index) in (images.length-2)' :class='{on: count === index ? true : false}' :key='index'></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        leftDis: '-1200px',
        images: [
          require('./images/e.jpg'),
          require('./images/a.jpg'),
          require('./images/b.jpg'),
          require('./images/c.jpg'),
          require('./images/d.jpg'),
          require('./images/e.jpg'),
          require('./images/a.jpg'),
        ],
        image_width: 1200,
        time: 1000,
        stepTime: 5,
        timer: null,
        is_move: false, 
        count: 0,
        timerAuto: null
      }
    },
    methods: {
      next_page: function (whichWay,stepCount=1) {
        if (this.is_move) return
        this.is_move = true;
        if (!whichWay && this.count === this.images.length-3) {
          this.count = -1
        }else if (whichWay && this.count === 0) {
          this.count = 3;
        }
        var which = whichWay ? 1 : -1;
        this.count = this.count -which*stepCount;
        var distance = whichWay ? this.image_width*stepCount : -this.image_width*stepCount;
        var a = parseInt(this.leftDis)
        this.timer = setInterval(() => {
          var stepDis = this.image_width / (this.time / this.stepTime);
          this.leftDis = parseInt(this.leftDis) + stepDis*which + 'px';
          if (a + distance === parseInt(this.leftDis)) {
            clearInterval(this.timer);
            if (parseInt(this.leftDis) === -this.image_width*(this.images.length-1)) {
              this.leftDis = -this.image_width + 'px';
            }else if (parseInt(this.leftDis) === 0) {
              this.leftDis = -this.image_width*(this.images.length-2) + 'px';
            }
            this.is_move = false;
          }
        }, this.stepTime);
      },
      changePoint: function (currentIndex) {
        var poor = currentIndex - this.count;
        // var which = poor>0 ? false : true;
        if (poor > 0) {
          var which = false
        }else if (poor < 0) {
          var which = true
        }else{
          return
        }
        this.next_page(which,Math.abs(poor));
      },
      stopAuto: function () {
        clearInterval(this.timerAuto)
      },
      startAuto: function () {
        this.timerAuto = setInterval(() => {
          this.next_page(false)
        },3000);
      },
      auto: function () {
        if (this.is_move) return
        // this.is_move = false
        this.timerAuto = setInterval(() => {
          this.next_page(false)
        },3000);
      }
    },
  }
</script>

<style scoped>
  ul>li{
      list-style: none;
    }
    #app-1{
      width: 1200px;
      height: 500px;
      margin: 30px auto;
      border: 1px solid skyblue;
      border-radius: 20px;
      overflow: hidden;
      position: relative;
    }
    #app-1>.list{
      width: 8400px;
      height: 600px;
      position: absolute;
      top: 0;
    }
    #app-1>.list>li{
      float: left;
      width: 1200px;
      height: 500px;
      font-size: 50px;
      text-align: center;
      line-height: 500px;
    }
    #app-1>.list>li>img{
      width: 1200px;
    }
    #app-1>.same{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 30px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      border: 1px solid skyblue;
      border-radius: 5px;
      background-color: grey;
      opacity: 0.5;
      cursor: pointer;
    }
    #app-1>.left{
      left: 0;
    }
    #app-1>.right{
      right: 0;
    }
    #app-1>.pointList{
      position: absolute;
      top: 450px;
      right: 50px;
    }
    #app-1>.pointList>li{
      float: left;
      width: 20px;
      height: 20px;
      border: 1px solid #000;
      border-radius: 50%;
      background-color: #fff;
      margin-right: 10px;
    }
    #app-1>.pointList>.on{
      background-color: red;
    }
 
</style>
