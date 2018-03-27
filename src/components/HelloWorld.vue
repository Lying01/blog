<template>
  <div>
    <el-button type="primary" v-on:click="click()">主要按钮</el-button>
    <span v-if="obj.judge" class="size" v-bind:class="{change: judge}" v-bind:key="obj.id">{{ this.msg }}</span>
    <span v-if="obj.judge" class="size" v-bind:class="{change: judge}" v-bind:key="obj2.id">{{ this.msg }}</span>
    <p>{{ message }}</p>

    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" v-bind:key="3" value="12">
    </template>

    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" v-bind:key="3" value="12">
    </template>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 1,
      judge: false,
      obj: [{
          judge: false,
          text: 'hey',
          id: 1
      }, {
        judge: false,
        id: 2
    }
      ],
      loginType: 'username'
    }
  },
  computed: {
      message: {
          get: function () {
            return this.msg * 19
          },
          set: function (newVal) {
            console.log(newVal)
          }
      }
  },
  methods: {
      click () {
          this.judge = !this.judge
          this.msg += 1
        this.message = 12
        if (this.loginType === 'username') {
              this.loginType = 'a'
        } else {
              this.loginType = 'username'
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .change {
    background-color: #3a8ee6;
  }
  .size {
    font-size: 32px;
  }
</style>
