import {
	IoHomeOutline,
	IoInformationOutline,
	IoChatbubblesOutline,
} from 'react-icons/io5'
import { TbBrandTwitter } from 'react-icons/tb'

type Navigation = {
	id: number
	name: string
	path: string
	icon: JSX.Element
}[]

const navigationData: Navigation = [
	{
		id: 1,
		name: 'Home',
		path: '#home',
		icon: <IoHomeOutline />,
	},
	{
		id: 2,
		name: 'About',
		path: '#about',
		icon: <IoInformationOutline />,
	},
	{
		id: 3,
		name: 'Values',
		path: '#values',
		icon: <IoChatbubblesOutline />,
	},
	{
		id: 4,
		name: 'Tweets',
		path: '#social',
		icon: <TbBrandTwitter />,
	},
]

export default navigationData
