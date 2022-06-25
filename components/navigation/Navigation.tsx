import { useState } from 'react'
import { useMenu, useDarkMode } from '../../hooks/'
import { Delight } from '../icons/'
import { Menu } from '../'
import {
	IoMenuOutline,
	IoCloseOutline,
	IoHomeOutline,
	IoInformationOutline,
	IoChatbubblesOutline,
	IoSunnyOutline,
	IoMoonOutline,
} from 'react-icons/io5'
import { TbBrandTwitter } from 'react-icons/tb'

type Nav = {
	id: number
	name: string
	path: string
	icon: JSX.Element
}[]

const navigationData: Nav = [
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

const Navigation = () => {
	const [activeId, setActiveId] = useState(1)
	const { menuOpen, toggleMenu } = useMenu()
	const { darkMode, toggleDarkMode } = useDarkMode()

	return (
		<>
			<nav className='fixed top-0 flex items-center justify-between w-full px-12 py-3 min-h-[5rem] bg-gray-light dark:bg-blue-dark z-40'>
				<Delight className='' />

				<div
					onClick={toggleMenu}
					className='flex items-center justify-center p-3 transition-all duration-500 rounded-md cursor-pointer lg:hidden text-blue-dark dark:text-gray-light hover:bg-blue-normal hover:text-gray-light dark:hover:text-blue-dark'>
					{menuOpen && <IoCloseOutline className='w-8 h-8 ' />}
					{!menuOpen && <IoMenuOutline className='w-8 h-8 ' />}
				</div>

				<ul className='items-center hidden h-full gap-6 text-xl font-medium lg:flex font-catamaran text-blue-dark'>
					{navigationData.map(navigation => (
						<a
							href={`${navigation.path}`}
							key={navigation.id}
							onClick={() => setActiveId(navigation.id)}
							className={
								activeId === navigation.id
									? 'nav-link text-orange-dark border-b-orange-dark'
									: 'nav-link border-b-transparent hover:border-b-blue-dark focus:border-b-blue-dark dark:text-gray-light dark:hover:border-b-gray-light'
							}>
							{navigation.name}
						</a>
					))}

					<div
						onClick={toggleDarkMode}
						className='p-3 transition duration-500 rounded-md cursor-pointer hover:bg-blue-dark hover:text-yellow-dark dark:hover:bg-blue-normal dark:hover:text-blue-dark'>
						{darkMode && (
							<IoMoonOutline className='w-6 h-6 dark:text-gray-light' />
						)}
						{!darkMode && (
							<IoSunnyOutline className='w-6 h-6 dark:text-gray-light' />
						)}
					</div>
				</ul>
			</nav>
			<Menu
				menuOpen={menuOpen}
				toggleMenu={toggleMenu}
				navigationData={navigationData}
				darkMode={darkMode}
				toggleDarkMode={toggleDarkMode}
				activeId={activeId}
				setActiveId={setActiveId}
			/>
		</>
	)
}

export default Navigation
