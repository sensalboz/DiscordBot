// const timer = '$maker is  downt   '
// const storage = []
// let args = timer.slice(1).trim().split(' ')
// args.filter(arg => {
// 	if (arg) {
// 		storage.push(arg)
// 	}
// })

// console.log(storage)

let original = new Map([ [ 1, 'salih' ], [ 2, 'james' ], [ 3, 'google' ] ])

let clone = new Map(original)

log = console.log

log(clone.get(2.3))
