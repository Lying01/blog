<template>
  <div class="head">
    <img src='../assets/cnodejs.svg' title='cnodejs.svg'>
  </div>
</template>

<script>
export default{
  name: 'bl-header',
  data () {
      return {}
  }
}
</script>
<style lang="scss">
  $BgColor : linear-gradient(#26292C, #2b2b2b);
  $IconW : 70px;
  $IconH : 50px;
  $HeadHeight : 50px;
  $IconPd : 20px;

  .head {
    padding-left: $IconPd;
    height: $HeadHeight;
    background: $BgColor;
    img {
      width: $IconW;
      height: $IconH;
    }
  }

</style>
