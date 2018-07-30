export function shareCardF(specialCode, specialChannel) {
  return axios.get(config.shareCardF, {
    params: {
      specialCode: specialCode,
      specialChannel: specialChannel
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}





export default{

	// 1
	shareCardF(a,b){
		let urls = config.shareCardF
		return axios.get(urls,{
			a:a,
			b:b,
		}).then(function(res){
			return Promise.resole(res)
		})
	}

	// 2
   ……
   ……
   ……



}