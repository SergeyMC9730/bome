module.exports = {
	convert: (nmb) => {
		var a = (parseInt(nmb)).toString(16)
		if(a.length == 1) a = `0${a}`
		return a
	},
	reverse: (nmb) => parseInt(nmb, 16)
}
