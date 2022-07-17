// Challenge #2
// Recreate forEach,filter,map using reduce method and make them type safe

const numbers = [1, 2, 3, 4, 5]
const strings = ['a', 'b', 'c', 'd']
const people = [
	{
		name: 'Susana',
		age: 23,
	},
	{
		name: 'Mimo',
		age: 20,
	},
]

type ForEachCallback<T> = (p: T) => void

function foreach<T>(arr: T[], fn: ForEachCallback<T>): void {
	arr.reduce((acc, curr: T) => {
		fn(curr)
		return undefined
	}, undefined)
}

foreach(numbers, (n) => console.log(n * 2))

type FilterCallback<T> = (p: T) => boolean

function filter<T>(arr: T[], fn: FilterCallback<T>): T[] {
	return arr.reduce((acc: T[], curr: T): T[] => {
		return fn(curr) ? [...acc, curr] : acc
	}, [])
}

console.log(filter(numbers, (n) => n < 5))
console.log(filter(strings, (s) => s.toUpperCase() === 'A' || s === 'd'))
console.log(filter(people, (p) => p.age === 20))

type MapCallback<T, K> = (a: T) => K
function map<T, K>(arr: T[], fn: MapCallback<T, K>) {
	return arr.reduce((curr: K[], acc: T) => {
		curr.push(fn(acc))
		return curr
	}, [])
}

console.log(map(numbers, (n) => [n]))
console.log(map(strings, (s) => s.toUpperCase()))
