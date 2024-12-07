import { FilterMode } from '../../../../context/TodoContext'

export const convertFilterMode = (value: string): FilterMode | '' => {
	switch (value) {
		case 'completed':
			return 'done'
		case 'incompleted':
			return 'unfinished'
		case 'today':
			return 'today'
		default:
			return ''
	}
}
