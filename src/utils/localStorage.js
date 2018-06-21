let LocalStorage = {}

LocalStorage.set = function (name, attr) {
  localStorage.setItem(name, attr)
}

LocalStorage.get = function (name) {
  localStorage.getItem(name)
}

LocalStorage.remove = function (name) {
  localStorage.removeItem(name)
}

export default LocalStorage
