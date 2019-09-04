<template>
  <div class="smooth-dnd-draggable-wrapper">
      <section class="sc-htpNat dJewwL" label="3/3" title="待处理" draggable="false">
        <header class="sc-bxivhb bPacrc sc-bwzfXH jEyiOT">
            <span class="sc-bZQynM iTzKeC">待处理</span>
            <span class="sc-gzVnrw dZkyH"><span>3/3</span></span>
        </header>
        <div class="sc-EHOje bsakmj">
            <div class="smooth-dnd-container vertical">
                <div class="smooth-dnd-draggable-wrapper">
                    <article class="sc-dnqmqq dRwmhN sc-htoDjs jHtXmx" data-id="Card1" title="拖动排序" label="30 mins">
                        <span>
                            <header class="sc-iwsKbI kNNWUF sc-bwzfXH jEyiOT">
                                <span class="sc-gZMcBi eZMfVk sc-bZQynM iTzKeC">拖动排序</span>
                                <span class="sc-gqjmRU ejFyfB sc-gzVnrw dZkyH">30 mins</span>
                            </header>
                            <div class="sc-VigVT ddzuTg">任务列表也可以拖动排序，拖动一个任务列表试试看</div>
                        </span>
                    </article>
                </div>
                <div class="smooth-dnd-draggable-wrapper">
                    <article class="sc-dnqmqq dRwmhN sc-htoDjs jHtXmx" data-id="Card2" title="新建任务" label="5 mins">
                        <span>
                            <header class="sc-iwsKbI kNNWUF sc-bwzfXH jEyiOT">
                                <span class="sc-gZMcBi eZMfVk sc-bZQynM iTzKeC">新建任务</span>
                                <span class="sc-gqjmRU ejFyfB sc-gzVnrw dZkyH">5 mins</span>
                            </header>
                            <div class="sc-VigVT ddzuTg">点击【Add Card】，试试创建一条新的任务</div>
                        </span>
                    </article>
                </div>
                <div class="smooth-dnd-draggable-wrapper">
                    <article class="sc-dnqmqq dRwmhN sc-htoDjs jHtXmx" data-id="Card3" title="任务时间" label="5 mins">
                        <span>
                            <header class="sc-iwsKbI kNNWUF sc-bwzfXH jEyiOT">
                                <span class="sc-gZMcBi eZMfVk sc-bZQynM iTzKeC">任务时间</span>
                                <span class="sc-gqjmRU ejFyfB sc-gzVnrw dZkyH">5 mins</span>
                            </header>
                            <div class="sc-VigVT ddzuTg">设置了截止时间的任务，会在任务日历中显示</div>
                        </span>
                    </article>
                </div>
            </div>
        </div>
    <div class="sc-ifAKCX eMTVnF"><span class="sc-kpOJdX kGWxRe sc-kGXeez jShfsJ"></span></div></section>
  </div>
</template>
<script>

export default {
  name: 'index',
  data() {
    return {
      index: 1,
      testData:[],
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less">
// info 引入全局less变量
@import '~static/css/var';

.container {
  border: 1px solid #999;
  width: 200px;
  height: 200px;
  .scroll-wrap {
    height: 200px;
  }
  .item {
    height: 40px;
    margin: 5px;
    border: 1px solid red;
  }
}
</style>

<style scoped>
.smooth-dnd-draggable-wrapper {
    height: 100%;
    display: inline-block;
    vertical-align: top;
    white-space: normal;
}
</style>