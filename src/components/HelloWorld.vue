<template>
  <div class="mw mh">
    <div class="fd-top"></div>
    <div class="mw df-box">
      <div class="df-left mh">
        <div class="mw df-item-box" v-for="(menu, index) in factoryMenus" :key="index">
          <h5>{{menu.name}}</h5>
          <ul v-if="menu.children">
            <li v-for="(children, item) in menu.children" :key="item" :data-node="children.type"
                draggable="true" @dragstart="drag" class="drag-drawflow">
              {{children.name}}
            </li>
          </ul>
        </div>
      </div>
      <div class="mh" id="data-factory" @drop="drop" @dragover="allowDrop">
        <div class="df-save" @click="handleSave">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
import 'drawflow/dist/drawflow.min.css';
import draw_flow from "../minxins/draw_flow";
export default {
  name: 'HelloWorld',
  mixins:[draw_flow],
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
