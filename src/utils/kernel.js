
export const getRefs = () => (this.$refs)

export const messageAlert = (self, msg) => {
  self.$root.$children[0].messageAlerter(msg)
}

// dom
// export const getComponentsByClass = (self, clazz) => {
//   let items = getAllComponents(self)
//   for (let i = 0; i < items.length; i++) {
//     if (items[i].$el != null && items[i].$el.className === clazz) {
//       return items[i]
//     }
//   }
//   return null
// }
//
// export const getAllComponents = (self) => {
//   if (self === undefined) {
//     throw new Error('getAllComponents: illegal argument')
//   }
//   return getAllChildComponentsByEle(self.$root)
// }
//
// export const getAllChildComponentsByEle = (vueEle) => {
//   if (vueEle == null || vueEle.$children == null) {
//     return []
//   }
//   let result = []
//   vueEle.$children.map(function (currentEle) {
//     if (currentEle.$children && currentEle.$children.length) {
//       let items = getAllChildComponentsByEle(currentEle)
//       result.push(...items)
//     }
//     result.push(currentEle)
//   })
//   return result
// }
