import {SERVER_DOMAIN, JSONP_OPTIONS, LOCAL_STORAGE_USER, SUCCESS_CODE} from 'common/config'
import jsonp from 'utils/jsonp'
import storage from 'utils/localStorage'

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
    code: authCode,
    t: timestamp,
    nickName: nickName,
    email: email,
    password: password
  }
  const url = SERVER_DOMAIN + '/user/register'
  let promise = jsonp(url, data, JSONP_OPTIONS)
  promise.then((res) => {
    if (res.code === SUCCESS_CODE) {
      saveUserInStorage(res.result)
    }
  })
  return promise
}

export function login (authCode, timestamp, email, password) {
  const data = {
    authCode: authCode,
    t: timestamp,
    email: email,
    password: password
  }
  const url = SERVER_DOMAIN + '/user/login'
  let promise = jsonp(url, data, JSONP_OPTIONS)
  promise.then((res) => {
    if (res.code === SUCCESS_CODE) {
      saveUserInStorage(res.result)
    }
  })
  return promise
}

export function getUserFromStorage () {
  return storage.get(LOCAL_STORAGE_USER)
}

export function saveUserInStorage (userInfo) {
  storage.save(LOCAL_STORAGE_USER, userInfo)
}

export function clearUserFromStorage () {
  storage.remove(LOCAL_STORAGE_USER)
}
