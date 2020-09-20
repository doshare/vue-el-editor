<template>
  <el-popover
    ref="popover"
    placement="bottom"
    width="200"
    trigger="click"
    popper-class="createlink-box"
    @show="popShow"
  >
    <el-scrollbar class="scroll-bar-box" style="height:70px;">
      <div class="el-input el-input--mini" style="height:30px;">
        <input v-model="urlTxt" type="text" class="el-input__inner" />
      </div>
      <div style="margin-top:3px; height:30px;line-height:30px;">
        <button
          class="el-button el-button--default el-button--mini is-round"
          @click="btnSave($event)"
        >Save</button>
        <button
          class="el-button el-button--default el-button--mini is-round"
          @click="btnClear"
        >Clear</button>
      </div>
    </el-scrollbar>

    <button slot="reference" :title="title" class="editor-btn" @click="btnClick($event)">
      <svg viewBox="0 0 1025 1024" class="btn-svg-box">
        <path
          d="M831.5 864 192 864c-53 0-96-43.1-96-96L96 128.1c0-53 43.1-96 96-96L832 32.1c53 0 96 43.1 96 96l-0.1 639.5C927.9 820.8 884.7 864 831.5 864zM192 96c-17.7 0-32 14.4-32 32L160 768c0 17.7 14.4 32 32 32l639.5 0c17.9 0 32.4-14.5 32.4-32.4l0.1-639.5c0-17.7-14.4-32-32-32L192 96.1z"
        />
        <path
          d="M128 672c-8.2 0-16.4-3.1-22.6-9.4-12.5-12.5-12.5-32.8 0-45.3L264.8 458c29.2-29.2 73.7-36.5 110.7-18l173.6 86.8c12.3 6.2 27.1 3.8 36.8-6l287.4-287.4c12.5-12.5 32.8-12.5 45.3 0 12.5 12.5 12.5 32.8 0 45.3L631.2 566.1c-29.2 29.2-73.7 36.5-110.7 18l-173.6-86.8c-12.3-6.2-27.1-3.8-36.8 6L150.6 662.6C144.4 668.9 136.2 672 128 672z"
        />
        <path
          d="M384 352c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96S436.9 352 384 352zM384 224c-17.6 0-32 14.4-32 32s14.4 32 32 32 32-14.4 32-32S401.6 224 384 224z"
        />
      </svg>
    </button>
  </el-popover>
</template>

<script>
export default {
  name: "BtnInsertImg",
  props: {
    title: {
      type: [String, Number],
      default: ""
    }
  },
  data() {
    return {
      urlTxt: "",
      rang: null
    };
  },
  methods: {
    btnClick(e) {
      if(!e){
        return
      }
      e.stopPropagation();
      e.preventDefault();
      return false;
    },

    fontItemClick(e) {
      this.$emit("click", e);
      this.$refs.popover.showPopper = false;
    },

    popShow() {
      let vm = this;

      try {
        const selectionObj = window.getSelection();
        let selRang = selectionObj.getRangeAt(0);
        vm.rang = selRang;
        vm.urlTxt = "http://";
      } catch (error) {
        vm.rang = null;
      }
    },

    btnSave(e) {
      let vm = this;
      if (vm.rang) {
        const selectionObj = window.getSelection();
        selectionObj.removeAllRanges();
        selectionObj.addRange(this.rang);
      }
      
      vm.$emit("click", { event: e, urlTxt: vm.urlTxt || "" });
      vm.$refs.popover.showPopper = false;
    },

    btnClear() {
      let vm = this;
      vm.urlTxt = "";
    }
  }
};
</script>
<style>
.createlink-box .scroll-bar-box .el-scrollbar__wrap {
  overflow-x: hidden !important;
}
.createlink-box .scroll-bar-box ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.createlink-box .scroll-bar-box ul li {
  box-sizing: border-box;
  padding: 0 5px;
  line-height: 1.5em;
  cursor: pointer;
  -moz-user-select: none;
  user-select: none;
}
.createlink-box .scroll-bar-box ul li:hover {
  background-color: #0066cc;
  color: #ffffff;
}
</style>
<style scoped lang='scss'>
.createLink-input .scroll-bar-box .el-scrollbar__wrap input.link-input {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6 !important;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}

.editor-btn {
  margin: 0 1px;
  padding: 0;
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

