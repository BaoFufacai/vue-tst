<template>
  <div class="star" :class="'star-' + size">
    <span class="star-item on" v-for="(sc,index) in starClasses" :key="index" :class="sc"></span>
  </div>
</template>

<script>
import { write } from 'fs';
export default {
    props:{
      score: Number, // 分数
      size: Number, // 尺寸  24/36/48

    },
 //星星分类数组
 computed:{
   starClasses(){
     const classes = []
     const {score} = this
     const scoreInteger = Math.floor(score)
       // 向数组添加n个on
       for(let i=0;i<scoreInteger;i++){
         classes.push('on')
       }
       // 向数组添加0/1个half
       if(score*10 - scoreInteger*10 >= 5){
         classes.push('half')
       }
       // 向数组添加m个off
       // 向数组添加m个off
        while(classes.length < 5) {
          classes.push('off')
        }
      
         return classes

  }
 }

}

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/stars/star48_on')
        &.half
          bg-image('./images/stars/star48_half')
        &.off
          bg-image('./images/stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star36_on')
        &.half
          bg-image('./images/stars/star36_half')
        &.off
          bg-image('./images/stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star24_on')
        &.half
          bg-image('./images/stars/star24_half')
        &.off
          bg-image('./images/stars/star24_off')
                  
</style>