import { handleEvent, handleProp } from '../../components/pasterContainer/index.js'
Page({
  data: {
    logs: [],
    ...handleProp
  },
  onLoad: function () {
    
  },
  ...handleEvent
})
