export default function () {
  const getQueryParam = (param) => {
    const query = window.location.search.substring(1)
    const vars = query.split("&")
    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split("=")
      if (pair[0] == param) {
        return pair[1]
      }
    }
    return false
  }
  return {
    getQueryParam
  }
}
