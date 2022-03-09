let factoryMenus = [
  {
    name:'输入输出',
    children:[
      {name:'输入', type:'inputs'},
      {name:'输出', type:'outputs'},
    ]
  },
  {
    name:'数据处理',
    children:[
      {name:'连接处理', type:'handles', component:'HandleConnection'},
      {name:'合并处理', type:'handles', component:'HandleMerge'},
      {name:'合并汇总', type:'handles', component:'HandleMergeGather'},
      {name:'筛选处理', type:'handles', component:'HandleFilter'},
      {name:'字段处理', type:'handles', component:'HandleField'}
    ]
  }
]

export default factoryMenus;
