import request from '@/utils/request'

// 底部信息
/* eslint-disable */
export function getFooterInfor() {
  return request({
    url: '/api/copyInfor',
    method: 'get'
  })
}
