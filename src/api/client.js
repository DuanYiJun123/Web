import request from '@/utils/request'
// 安防
/* eslint-disable */
export function getSecBannerPic() {
  return request({
    url: '/api/secCaseBanner',
    method: 'get'
  })
}

export function getSecCaseTypical() {
  return request({
    url: '/api/secCaseTypical',
    method: 'get'
  })
}

export function getSecCaseMore() {
  return request({
    url: '/api/secCaseMore',
    method: 'get'
  })
}

// 金融
export function getFinBannerPic() {
  return request({
    url: '/api/finCaseBanner',
    method: 'get'
  })
}

export function getFinTypical() {
  return request({
    url: '/api/finCaseTypical',
    method: 'get'
  })
}

export function getFinCaseMore() {
  return request({
    url: '/api/finCaseMore',
    method: 'get'
  })
}

// 其他


export function getOthBannerPic() {
  return request({
    url: '/api/othCaseBanner',
    method: 'get'
  })
}

export function getOthTypical() {
  return request({
    url: '/api/othCaseTypical',
    method: 'get'
  })
}

export function getOthCaseMore() {
  return request({
    url: '/api/othCaseMore',
    method: 'get'
  })
}
