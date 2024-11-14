import Reveal from 'reveal.js'
import Highlight from 'reveal.js/plugin/highlight/highlight'
import Markdown from 'reveal.js/plugin/markdown/markdown'
import Notes from 'reveal.js/plugin/notes/notes'

export function presentable(data) {
	const deck = new Reveal({
		plugins: [Markdown, Highlight, Notes, ...data.plugins],
		autoAnimateEasing: data.animation ?? 'ease',
		autoAnimateDuration: 1,
		hash: true
		// controls: false,
		// progress: true
	})

	deck.initialize()

	return {
		destroy() {
			deck.destroy()
		}
	}
}
