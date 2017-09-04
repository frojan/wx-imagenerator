const DataKey = '_pdata'  // 模板传入的值

// 组件内用到的data，只支持数据，不支持方法
const handleProp = {}
handleProp[DataKey] = {
  msg: '111',
  mmm: '233'
}

// 组件内用到的method，目前只能拓展page中的方法，模板内没有定义方法的地方
const handleEvent = {
  addPaster () {

  },
  deletePaster () {

  },
  handleClick () {
    let newData = {
      msg: 222,
      mmm: 444
    }
    _setData.apply(this, [newData])
  }
}

function _setData (newData) {
  let _data = {}
  for(let key in newData){
    let nkey = `${DataKey}.${key}`
    _data[nkey] = newData[key]
  }
  this.setData(_data)
}

module.exports = {
  handleEvent,
  handleProp
};