<template>
  <div class="footer">
    <p>广科IT技术交流社区为广科计算机编程爱好者交流平台，致力于为广科校内外编程爱好者提供一个方便快捷、安全实用的交流平台。</p>
    <p>广科IT技术交流社区前端设计者：15软件2班 林颖</p>
  </div>
</template>

<script>

</script>

<style lang="scss">
  $BgColor : linear-gradient(#26292C, #2b2b2b);
  $space : 15px;
  $fsize : 14px;

  .footer {
    text-align: center;
    height: 100%;
    background: $BgColor;
    p {
      color: #f0f0f0;
      font-size: $fsize;
      text-align: center;
      padding: 0px $space;
      &:first-child {
        padding-top: $space;
      }
    }
  }
</style>
