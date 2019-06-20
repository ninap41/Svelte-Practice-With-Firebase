import { writable } from 'svelte/store';
import { push, pop, splice } from 'svelte-array-helper';
import ArrayHelper from 'svelte-array-helper';
// https://www.npmjs.com/package/svelte-array-helper
// That's because the array is mutated and not actually replaced. And svelte keeps track of the identity of top-level objects. (Since I wasn't perfectly certain, here's a rough repl to illustrate without svelte-extras)

function format(text, str) {
    push(text, str)
    return text
}

function speak() {
    const { subscribe, set, update } = writable([]);
	return {
		subscribe,
        add: (val) => update(text =>  text = format(text, val)),
        remove: (index) => update(text =>
        text = splice(text, index, 1)
        ),
		reset: () => set([])
	};
}

function notifiy() {
    const { subscribe, set, update} = writable("")
}

export const text = speak();