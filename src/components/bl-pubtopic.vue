<template>
  <div class="topic">
   <div id="bigTopic"><p>发布话题</p></div>
    <div id="topicContent">
      <div id="topicTitle">
      <p>标题</p>
        <el-input id="inputTitle"
        type="textarea"
        autosize
        placeholder="请输入要讨论话题的标题"
        v-model="textarea2">
      </el-input>
        <div style="display:inline-block;text-align: left;width: 87%">
          <p>话题类别</p>
          <el-select v-model="value" placeholder="请选择类别">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div id="topicStuff">
        <p>内容</p>
        <el-input id="inputContent"
          type="textarea"
          :autosize="{ minRows: 7, maxRows: 9}"
          placeholder="请输入要讨论话题的内容"
          v-model="textarea3">
        </el-input>
      </div>
      <el-button type="info">发布</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        options: [{
          value: '选项1',
          label: '前端'
        }, {
          value: '选项2',
          label: '数据库'
        }, {
          value: '选项3',
          label: '计算机基础'
        }, {
          value: '选项4',
          label: '移动开发'
        }, {
          value: '选项5',
          label: '网络安全'
        }],
        value: ''
      }
    }
  }
</script>
<style lang="scss">
  .topic{
    text-align: center;
    margin-top: 40px;
  }
  #bigTopic{
    display: inline-block;
    width: 50%;
    border-bottom: 2px solid #333333;
    margin-bottom: 40px;
  }
  #topicContent p{
    display: inline-block;
  }
  .el-textarea{
    width: 80%;
    padding: 10px 10px;
  }
  #inputTitle, #inputContent {
      display: inline-block;
  }
  .el-button--info{
    margin-top: 20px;
    background-color: #333333;
    padding: 15px 30px;
    font-size: 18px;
  }
</style>
