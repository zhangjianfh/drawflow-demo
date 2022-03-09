import Vue from 'vue';
import Drawflow from 'drawflow';
import factoryMenus from "../config/factory_menus";
import Inputs from "../components/config/Inputs";
import Outputs from "../components/config/Outputs";
import Handles from "../components/config/Handles";
export default {
  data(){
    return{
      editor:null,
      factoryMenus,
      mobile_item_selec:'',
      mobile_last_move:null
    }
  },
  mounted() {
    let $id = document.getElementById('data-factory');
    this.editor = new Drawflow($id, Vue, this);
    this.editor.reroute = true;
    this.editor.reroute_fix_curvature = true;
    this.editor.force_first_input = false;
    this.editor.start();

    /*const dataToImport =  {"drawflow":{"Home":{"data":{"1":{"id":1,"name":"welcome","data":{},"class":"welcome","html":"\n    <div>\n      <div class=\"title-box\">👏 Welcome!!</div>\n      <div class=\"box\">\n        <p>Simple flow library <b>demo</b>\n        <a href=\"https://github.com/jerosoler/Drawflow\" target=\"_blank\">Drawflow</a> by <b>Jero Soler</b></p><br>\n\n        <p>Multiple input / outputs<br>\n           Data sync nodes<br>\n           Import / export<br>\n           Modules support<br>\n           Simple use<br>\n           Type: Fixed or Edit<br>\n           Events: view console<br>\n           Pure Javascript<br>\n        </p>\n        <br>\n        <p><b><u>Shortkeys:</u></b></p>\n        <p>🎹 <b>Delete</b> for remove selected<br>\n        💠 Mouse Left Click == Move<br>\n        ❌ Mouse Right == Delete Option<br>\n        🔍 Ctrl + Wheel == Zoom<br>\n        📱 Mobile support<br>\n        ...</p>\n      </div>\n    </div>\n    ", "typenode": false, "inputs":{},"outputs":{},"pos_x":50,"pos_y":50},"2":{"id":2,"name":"slack","data":{},"class":"slack","html":"\n          <div>\n            <div class=\"title-box\"><i class=\"fab fa-slack\"></i> Slack chat message</div>\n          </div>\n          ", "typenode": false, "inputs":{"input_1":{"connections":[{"node":"7","input":"output_1"}]}},"outputs":{},"pos_x":1028,"pos_y":87},"3":{"id":3,"name":"telegram","data":{"channel":"channel_2"},"class":"telegram","html":"\n          <div>\n            <div class=\"title-box\"><i class=\"fab fa-telegram-plane\"></i> Telegram bot</div>\n            <div class=\"box\">\n              <p>Send to telegram</p>\n              <p>select channel</p>\n              <select df-channel>\n                <option value=\"channel_1\">Channel 1</option>\n                <option value=\"channel_2\">Channel 2</option>\n                <option value=\"channel_3\">Channel 3</option>\n                <option value=\"channel_4\">Channel 4</option>\n              </select>\n            </div>\n          </div>\n          ", "typenode": false, "inputs":{"input_1":{"connections":[{"node":"7","input":"output_1"}]}},"outputs":{},"pos_x":1032,"pos_y":184},"4":{"id":4,"name":"email","data":{},"class":"email","html":"\n            <div>\n              <div class=\"title-box\"><i class=\"fas fa-at\"></i> Send Email </div>\n            </div>\n            ", "typenode": false, "inputs":{"input_1":{"connections":[{"node":"5","input":"output_1"}]}},"outputs":{},"pos_x":1033,"pos_y":439},"5":{"id":5,"name":"template","data":{"template":"Write your template"},"class":"template","html":"\n            <div>\n              <div class=\"title-box\"><i class=\"fas fa-code\"></i> Template</div>\n              <div class=\"box\">\n                Ger Vars\n                <textarea df-template></textarea>\n                Output template with vars\n              </div>\n            </div>\n            ", "typenode": false, "inputs":{"input_1":{"connections":[{"node":"6","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"4","output":"input_1"},{"node":"11","output":"input_1"}]}},"pos_x":607,"pos_y":304},"6":{"id":6,"name":"github","data":{"name":"https://github.com/jerosoler/Drawflow"},"class":"github","html":"\n          <div>\n            <div class=\"title-box\"><i class=\"fab fa-github \"></i> Github Stars</div>\n            <div class=\"box\">\n              <p>Enter repository url</p>\n            <input type=\"text\" df-name>\n            </div>\n          </div>\n          ", "typenode": false, "inputs":{},"outputs":{"output_1":{"connections":[{"node":"5","output":"input_1"}]}},"pos_x":341,"pos_y":191},"7":{"id":7,"name":"facebook","data":{},"class":"facebook","html":"\n        <div>\n          <div class=\"title-box\"><i class=\"fab fa-facebook\"></i> Facebook Message</div>\n        </div>\n        ", "typenode": false, "inputs":{},"outputs":{"output_1":{"connections":[{"node":"2","output":"input_1"},{"node":"3","output":"input_1"},{"node":"11","output":"input_1"}]}},"pos_x":347,"pos_y":87},"11":{"id":11,"name":"log","data":{},"class":"log","html":"\n            <div>\n              <div class=\"title-box\"><i class=\"fas fa-file-signature\"></i> Save log file </div>\n            </div>\n            ", "typenode": false, "inputs":{"input_1":{"connections":[{"node":"5","input":"output_1"},{"node":"7","input":"output_1"}]}},"outputs":{},"pos_x":1031,"pos_y":363}}},"Other":{"data":{"8":{"id":8,"name":"personalized","data":{},"class":"personalized","html":"\n            <div>\n              Personalized\n            </div>\n            ", "typenode": false, "inputs":{"input_1":{"connections":[{"node":"12","input":"output_1"},{"node":"12","input":"output_2"},{"node":"12","input":"output_3"},{"node":"12","input":"output_4"}]}},"outputs":{"output_1":{"connections":[{"node":"9","output":"input_1"}]}},"pos_x":764,"pos_y":227},"9":{"id":9,"name":"dbclick","data":{"name":"Hello World!!"},"class":"dbclick","html":"\n            <div>\n            <div class=\"title-box\"><i class=\"fas fa-mouse\"></i> Db Click</div>\n              <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n                Db Click here\n                <div class=\"modal\" style=\"display:none\">\n                  <div class=\"modal-content\">\n                    <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>\n                    Change your variable {name} !\n                    <input type=\"text\" df-name>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n            ", "typenode": false, "inputs":{"input_1":{"connections":[{"node":"8","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"12","output":"input_2"}]}},"pos_x":209,"pos_y":38},"12":{"id":12,"name":"multiple","data":{},"class":"multiple","html":"\n            <div>\n              <div class=\"box\">\n                Multiple!\n              </div>\n            </div>\n            ", "typenode": false, "inputs":{"input_1":{"connections":[]},"input_2":{"connections":[{"node":"9","input":"output_1"}]},"input_3":{"connections":[]}},"outputs":{"output_1":{"connections":[{"node":"8","output":"input_1"}]},"output_2":{"connections":[{"node":"8","output":"input_1"}]},"output_3":{"connections":[{"node":"8","output":"input_1"}]},"output_4":{"connections":[{"node":"8","output":"input_1"}]}},"pos_x":179,"pos_y":272}}}}}
    this.editor.start();
    this.editor.import(dataToImport);*/

    this.editorEvent();

    var elements = document.getElementsByClassName('drag-drawflow');
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('touchend', this.drop, false);
      elements[i].addEventListener('touchmove', this.positionMobile, false);
      elements[i].addEventListener('touchstart', this.drag, false );
    }
  },
  methods:{
    /**
     * 相关事件处理
     * zoom_in()	增量缩放 +0.1
     * zoom_out()	递减缩放 -0.1
     * getNodeFromId(id)	获取节点信息。例如：身份证：5
     * getNodesFromName(name)	返回节点 id 的数组。例如：姓名：telegram
     * removeNodeId(id)	删除节点。前身份证：node-x
     * updateNodeDataFromId	更新数据元素。前任：5, { name: 'Drawflow' }
     * addNodeInput(id)	向节点添加输入。前身份证：5
     * addNodeOutput(id)	将输出添加到节点。前身份证：5
     * removeNodeInput(id, input_class)	删除节点的输入。前 id: 5,input_2
     * removeNodeOutput(id, output_class)	删除节点的输出。前 id: 5,output_2
     * addConnection(id_output, id_input, output_class, input_class)	添加连接。前任：15,16,'output_1','input_1'
     * removeSingleConnection(id_output, id_input, output_class, input_class)	删除连接。前任：15,16,'output_1','input_1'
     * updateConnectionNodes(id)	从节点 Ex id 更新连接位置：node-x
     * removeConnectionNodeId(id)	删除节点连接。前身份证：node-x
     * getModuleFromNodeId(id)	获取模块的名称，id 在哪里。前身份证：5
     * clearModuleSelected()	清除所选模块的数据
     * clear()	清除所有模块的所有数据并移除模块。
     *
     */
    editorEvent(){
      let $this = this;
      if(!this.editor){
        return
      }
      let editor = this.editor;
      editor.on('nodeCreated', function(id) {
        console.log("创建节点：" + id);
      })

      editor.on('nodeRemoved', function(id) {
        console.log("删除节点：" + id);
      })

      editor.on('nodeSelected', function(id) {
        console.log("节点选中：" + id);
        $this.editor.updateNodeDataFromId(id,{formId:'68746312531'})
      })

      editor.on('moduleCreated', function(name) {
        console.log("创建模块：" + name);
      })

      editor.on('moduleChanged', function(name) {
        console.log("模块变更：" + name);
      })

      editor.on('connectionCreated', function(connection) {
        console.log('创建链接：');
        console.log(connection);
      })

      editor.on('connectionRemoved', function(connection) {
        console.log('删除链接：');
        console.log(connection);
      })
      editor.on('nodeMoved', function(id) {
        console.log("移动节点" + id);
      })

      editor.on('zoom', function(zoom) {
        console.log('缩放：' + zoom);
      })

      editor.on('translate', function(position) {
        console.log('Translate x:' + position.x + ' y:'+ position.y);
      })

      editor.on('addReroute', function(id) {
        console.log("Reroute added " + id);
      })

      editor.on('removeReroute', function(id) {
        console.log("Reroute removed " + id);
      })
    },
    positionMobile(ev) {
      this.mobile_last_move = ev;
    },

    drag(e){
      console.log(e)
      if (e.type === "touchstart") {
        this.mobile_item_selec = e.target.closest(".drag-drawflow").getAttribute('data-node');
      } else {
        e.dataTransfer.setData("node", e.target.getAttribute('data-node'));
      }
    },
    drop(e){
      console.log('drop: ', e)
      if(e.type === 'touchend'){
        console.log(e.type)
        var parentdrawflow = document.elementFromPoint(this.mobile_last_move.touches[0].clientX, this.mobile_last_move.touches[0].clientY).closest("#drawflow");
        if(parentdrawflow != null) {
          this.addNodeToDrawFlow(this.mobile_item_selec, this.mobile_last_move.touches[0].clientX, this.mobile_last_move.touches[0].clientY);
        }
        this.mobile_item_selec = '';
      }else{
        e.preventDefault();
        let data = e.dataTransfer.getData("node");
        this.addNodeToDrawFlow(data, e.clientX, e.clientY);
      }
    },
    allowDrop(e){
      e.preventDefault();
    },
    handleSave(){
      console.log(JSON.stringify(this.editor.export()))
    },
    addNodeToDrawFlow(name, pos_x, pos_y){
      if(this.editor.editor_mode === 'fixed') {
        return false;
      }
      let editor = this.editor
      pos_x = pos_x * ( editor.precanvas.clientWidth / (editor.precanvas.clientWidth * editor.zoom)) - (editor.precanvas.getBoundingClientRect().x * ( editor.precanvas.clientWidth / (editor.precanvas.clientWidth * editor.zoom)));
      pos_y = pos_y * ( editor.precanvas.clientHeight / (editor.precanvas.clientHeight * editor.zoom)) - (editor.precanvas.getBoundingClientRect().y * ( editor.precanvas.clientHeight / (editor.precanvas.clientHeight * editor.zoom)));

      switch (name) {
        case 'inputs':
          editor.registerNode('name', Inputs, {name:'输如--'}, {});
          editor.addNode('inputs', 0,  1, pos_x, pos_y, 'Inputs', {}, 'name', 'vue')
          break;
        case 'outputs':
          editor.registerNode('name', Outputs, {}, {});
          editor.addNode('outputs', 1,  0, pos_x, pos_y, 'Outputs', {}, 'name', 'vue')
          break;
        case 'handles':
          editor.registerNode('name', Handles, {}, {});
          editor.addNode('handles', 1,  1, pos_x, pos_y, 'Handles', {}, 'name', 'vue')
      }

    }
  }
}
