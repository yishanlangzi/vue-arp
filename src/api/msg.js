import { MessagingCenterClient } from '../modules/chat/ws/mcClient'
const service = {}

function init () {
  service.client = new MessagingCenterClient('ws://new.arp.cn/seed/mc')
  service.client.connect('bC8L3gBqWGwb')
}

export default {
  service,
  init
}
