(async () => {

  /**
   * Resolves successfully in 50% of cases
   * In other cases it rejects with an error
   * @param {string} url 
   * @returns {Promise}
   */
  const request = (url) => {
    return new Promise((resolve, reject) => {
      const data = Math.random()
      if (Math.round(data) === 0) {
        resolve({success: true, data})
      }
      reject(new Error('Something was wrong...'))
    })
  }
  
  const paths = [
    '?foo=111&bar=222',
    '?foo=222&bar=111',
    '?foo=111&bar=222', // look at this! 0 and 2 items are equal
  ]
  
  /**
   * Tasks:
   * 1. Receive responses
   * 2. Do the same as (1), but cache requests.
   *    Don't send separate requests for the same paths
   */
  const responses

  console.log(responses)

})()

/**
 * Answer #1:
 */
// const responses = await Promise.allSettled(paths.map(path => request(path)))

/**
 * Answer #2:
 */
// const hash = {}
// const responses = await Promise.allSettled(paths.map(path => {
//   if (!hash[path]) {
//     hash[path] = request(path)
//   }
//   return hash[path]
// }))