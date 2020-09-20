<template>
  <div id="app">
    <el-form
      ref="createForm"
      :model="createForm"
      :rules="createRules"
      label-position="left"
      :inline="true"
    >
      <el-row>
        <el-col :span="24">
          <el-form-item :label="`Editor Label`" prop="templateContent">
            <editor
              v-model="createForm.templateContent"
              class="form-wd"
              :init-content="initContent"
              :config="config"
              size="medium"
            ></editor>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <div>
      <el-button type="primary" @click="saveHandler">Save</el-button>
    </div>
  </div>
</template>

<script>
import editor from "@/components/editor/editor.vue";

export default {
  name: "App",
  components: {
    editor
  },
  data() {
    return {
      createForm: {},
      createRules: {
        templateContent:{
          required:true,
          trigger:['change','blur']
        }
      },
      initContent: "",
      config: {
        width: 850, // px
        height: 400, // px
        contentReadOnly: false,
        isShowToolBar: true,
        disabled: false,
        buttonsOption: [
          {
            componentName: "BtnServTpl",
            isShow: true
          }
        ]
      }
    };
  },
  methods: {
    saveHandler() {
      if (this.$refs.createForm) {
        this.$refs.createForm.validate();
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
