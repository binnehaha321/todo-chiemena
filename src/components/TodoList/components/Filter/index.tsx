import { CalendarOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps, Typography } from 'antd'
import { useTodo } from '../../../../context/TodoContext'
import { useCallback, useMemo } from 'react'
import { FILTER } from './constant'
import { convertFilterMode } from './service'

const Filter = () => {
	const { setFilterMode } = useTodo()

	const filterItems: MenuProps['items'] = useMemo(
		() => [
			{
				key: FILTER.ALL,
				label: 'All Tasks'
			},
			{
				key: FILTER.COMPLETED,
				label: 'Completed Tasks'
			},
			{
				key: FILTER.INCOMPLETED,
				label: 'Incompleted Tasks'
			}
		],
		[]
	)

	const handleButtonClick = useCallback(() => {
		setFilterMode('today')
	}, [setFilterMode])

	const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
		const filterMode = convertFilterMode(key)
		setFilterMode(filterMode)
	}

	return (
		<Dropdown.Button
			menu={{ items: filterItems, onClick: handleMenuClick }}
			placement='bottom'
			className='mt-2'
			type='dashed'
			onClick={handleButtonClick}
		>
			<Typography.Text>
				<CalendarOutlined /> Show <span className='font-semibold'>today</span>{' '}
				tasks
			</Typography.Text>
		</Dropdown.Button>
	)
}

export default Filter
