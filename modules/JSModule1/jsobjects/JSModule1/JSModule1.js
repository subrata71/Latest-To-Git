export default {
	myVar1: [],
	myVar2: {},
	myFun1 (limit = 7) {
		//	write code here
		//	this.myVar1 = [1,2,3]
		return GetUsersByLimit.run({ limit: limit })
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}