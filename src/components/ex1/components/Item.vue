<template>
  <li :style="{background: bgColor}" @mouseenter="handelEnter" @mouseleave="handelEnter">
    <label>
      <input type="checkbox" v-model="isCompleted" />
      <span> {{todo.title}} </span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{ // 声明属性名和属性值的类型
      todo: Object,
      deleteTodo: Function,
      index: Number,
      updateTodo: Function,
    },
    data(){
      return {
        bgColor: 'white',
        isShow: false,
      }
    },
    methods:{
      handelEnter:function () {
        this.bgColor = !this.isShow ? '#efefef' : 'white'
        this.isShow = !this.isShow
      },
      deleteItem(){
        if (confirm('确定删除吗?')) {
          this.deleteTodo(this.index)
        }
      }
    },
    computed:{
      isCompleted:{
        get(){
          return this.todo.completed
        },
        set(value){
          this.updateTodo(this.todo, value)
        }
      }
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
  .btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}
</style>
