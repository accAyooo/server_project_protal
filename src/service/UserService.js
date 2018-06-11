import {SERVER_DOMAIN, JSONP_OPTIONS} from 'common/config'
import jsonp from 'utils/jsonp'

/**
 * 获取登录用户信息
 */
export function getUserInfo () {
  const url = SERVER_DOMAIN + '/user/userinfo'
  return jsonp(url, {}, JSONP_OPTIONS)
}

/**
 * 注册用户
 * @param authCode 验证码
 * @param timestamp 发送验证码时的时间戳
 * @param nickName 昵称
 * @param email 账户
 * @param password 密码
 */
export function register (authCode, timestamp, nickName, email, password) {
  const data = {
    authCode: authCode,
    timestamp: timestamp,
    nickName: nickName,
    email: email,
    password: password
  }
  const url = SERVER_DOMAIN + '/user/register'
  return jsonp(url, data, JSONP_OPTIONS)
}

export function getAuthCode (timestamp) {
  const url = SERVER_DOMAIN + '/auth/code'
  const data = {
    t: timestamp
  }
  return jsonp(url, data)
}
