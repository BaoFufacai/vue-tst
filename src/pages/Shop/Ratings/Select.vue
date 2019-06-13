<template>
  <div class="ratings-filter">
    <div class="rating-type border-1px">
      <span class="block" :class="{active:selectType===2}"
      @click="setSelectType(2,$event)"
      >
        <!-- 全部<span class="count">{{ratings.length}}</span> -->
        全部<span class="count">{{totalRatingCount}}</span>
      </span>
      <span class="block " :class="{active:selectType===0}"
       @click="setSelectType(0,$event)"
      >
        <!-- 推荐<span class="count">{{positiveLength}}</span> -->
        推荐<span class="count">{{totalupCount}}</span>
      </span>
      <span class="block" :class="{active:selectType===1}"
      @click="setSelectType(1,$event)"
      >
        <!-- 吐槽<span class="count">{{ratings.length - positiveLength}}</span> -->
        吐槽<span class="count">{{totalRatingCount-totalupCount}}</span>

      </span>
    </div>
    <div class="switch "  @click="toggleOnlyContent" :class="{on: onlyContent}">
      <span class="iconfont icon-check_circle"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  props:{
    onlyContent:Boolean,
    selectType: Number,
    ratings: Array,
  },
  methods:{
    setSelectType(type){
      this.$emit('setSelectType',type)
    },
    //触发事件
    toggleOnlyContent(){
      this.$emit('toggleOnlyContent')
    }
  },
  computed:{
    // positiveLength(){
    //   return this.ratings.reduce((pre,rating)=>{
    //     return pre+(rating.rateType===0?1:0)
    //   },0)
    // }
    ...mapGetters(['totalRatingCount','totalupCount'])

  }
    
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .ratings-filter
    .rating-type
      padding: 18px 0
      margin: 0 18px
      border: 1px rgba(7, 17, 27, 0.1)
      font-size: 0
      .block
        display: inline-block
        padding: 8px 12px
        margin-right: 8px
        line-height: 16px
        border-radius: 1px
        font-size: 12px
        color: rgb(77, 85, 93)
        background: rgba(77, 85, 93, 0.2)
        &.active
          background: $green
          color: #fff
        .count
          margin-left: 2px
          font-size: 8px
    .switch
      padding: 12px 18px
      line-height: 24px
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      color: rgb(147, 153, 159)
      font-size: 0
      &.on
        .icon-check_circle
          color: $green
      .icon-check_circle
        display: inline-block
        vertical-align: top
        margin-right: 4px
        font-size: 24px
      .text
        display: inline-block
        vertical-align: top
        font-size: 12px
</style>


