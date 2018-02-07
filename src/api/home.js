import request from '@/utils/request'

// banner图片
export function getBannerPic() {
  return request({
    url: '/api/banner',
    method: 'get'
  })
}

// 关于云从科技
export function getAboutUs() {
  return request({
    url: '/api/aboutUs',
    method: 'get'
  })
}

// 能力引擎产品
export function getOurProducts() {
  return request({
    url: '/api/ourProducts',
    method: 'get'
  })
}

// 能力引擎产品
export function getAdvantages() {
  return request({
    url: '/api/ourAdvantages',
    method: 'get'
  })
}
// 合作案例
export function getCases() {
  return request({
    url: '/api/ourCases',
    method: 'get'
  })
}

// 合作案例
export function getContact() {
  return request({
    url: '/api/contactUs',
    method: 'get'
  })
}
