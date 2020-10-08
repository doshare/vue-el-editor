<template>
  <el-popover
    ref="popover"
    placement="bottom"
    width="50"
    trigger="click"
    popper-class="headers-box"
    @show="popShow"
  >
    <el-scrollbar class="scroll-bar-box" style="height:130px;">
      <ul>
        <li @click="itemClick($event)">H1</li>
        <li @click="itemClick($event)">H2</li>
        <li @click="itemClick($event)">H3</li>
        <li @click="itemClick($event)">H4</li>
        <li @click="itemClick($event)">H5</li>
        <li @click="itemClick($event)">H6</li>
      </ul>
    </el-scrollbar>
    <button slot="reference" :title="title" class="editor-btn" @click="btnClick($event)">
      <svg viewBox="0 0 1024 1024" class="btn-svg-box">
       <path d="M128 170.666667 213.333333 170.666667 213.333333 426.666667 384 426.666667 384 170.666667 469.333333 170.666667 469.333333 768 384 768 384 512 213.333333 512 213.333333 768 128 768 128 170.666667M554.666667 341.333333 653.226667 341.333333 666.88 213.333333 752.213333 213.333333 738.56 341.333333 823.893333 341.333333 837.546667 213.333333 922.88 213.333333 909.226667 341.333333 981.333333 341.333333 981.333333 426.666667 900.266667 426.666667 891.733333 512 981.333333 512 981.333333 597.333333 882.773333 597.333333 869.12 725.333333 783.786667 725.333333 797.44 597.333333 712.106667 597.333333 698.453333 725.333333 613.12 725.333333 626.773333 597.333333 554.666667 597.333333 554.666667 512 635.733333 512 644.266667 426.666667 554.666667 426.666667 554.666667 341.333333M729.6 426.666667 721.066667 512 806.4 512 814.933333 426.666667 729.6 426.666667Z"></path>
      </svg>
    </button>
  </el-popover>

</template>

<script>
export default {
  name: 'BtnFontNameList',
  props: {
    title: {
      type: [String, Number],
      default: ''
    }
  },

  data() {
    return {
      rang: null
    }
  },

  methods: {

    popShow() {
      try {
        const selectionObj = window.getSelection()
        let selRang = selectionObj.getRangeAt(0)
        this.rang = selRang
      } catch (e) {
        console.warn(e)
        this.rang = null
      }
    },

    btnClick(e) {
      e.stopPropagation()
      e.preventDefault()
      return false
    },

    itemClick(e) {
      if (this.rang) {
        const selectionObj = window.getSelection()
        selectionObj.removeAllRanges()
        selectionObj.addRange(this.rang)
      }

      this.$emit('click', e)
      this.$refs.popover.showPopper = false

      return false
    }
  }
}
</script>
<style>
.headers-box{
    min-width: 50px !important;
}
.headers-box .scroll-bar-box .el-scrollbar__wrap {
  overflow-x: hidden !important;
}
.headers-box .scroll-bar-box ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.headers-box .scroll-bar-box ul li {
  box-sizing: border-box;
  padding:0 5px;
  line-height: 1.5em;
  cursor: pointer;
  -moz-user-select: none;
  user-select: none;
}
.headers-box .scroll-bar-box ul li:hover {
  background-color: #0066cc;
  color: #ffffff;
}
</style>
<style scoped lang='scss'>
.btn-h-box{
  display:inline-block;
  position: relative;
  left: 0;
  top:0;
  right: 0;
}

.editor-btn {
  margin: 0 5px;
  padding: 3px;
  cursor: pointer;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  font-size: 14px;
  border: transparent;
  border-radius: 4px;
  background-color: transparent;
  line-height: 24px;
  vertical-align: middle;
  text-align: center;
  outline: none;

  .btn-svg-box {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    vertical-align: -0.15em;
    text-align: center;
    fill: "#000000";
    overflow: hidden;
    stroke-width: 1px;
  }

  &:hover {
    fill: #0066cc;
    background-color: #ffffff;
  }
}
</style>
