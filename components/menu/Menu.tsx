import { Dispatch, SetStateAction } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import DarkModeToggle from 'react-dark-mode-toggle'

type MenuProps = {
	menuOpen: boolean
	toggleMenu: () => void
	navigationData: {
		id: number
		name: string
		path: string
		icon: JSX.Element
	}[]
	darkMode: boolean | undefined
	toggleDarkMode: () => void
	activeId: number
	setActiveId: Dispatch<SetStateAction<number>>
}

const Menu = ({
	menuOpen,
	toggleMenu,
	navigationData,
	darkMode,
	toggleDarkMode,
	activeId,
	setActiveId,
}: MenuProps) => {
	const linkClicked = (menuId: number) => {
		setActiveId(menuId)
		toggleMenu()
	}

	return (
		<nav
			className={menuOpen ? 'menu translate-x-0' : 'menu -translate-x-full'}>
			<div className='flex items-center justify-between'>
				<DarkModeToggle
					onChange={toggleDarkMode}
					checked={darkMode}
					size={80}
				/>

				<div
					onClick={toggleMenu}
					className='flex items-center justify-center p-3 transition-all duration-500 rounded-md cursor-pointer lg:hidden text-blue-dark dark:text-gray-light hover:bg-blue-normal hover:text-gray-light dark:hover:text-blue-dark md:hidden'>
					<IoCloseOutline className='w-8 h-8 ' />
				</div>
			</div>

			<ul className='flex flex-col items-center justify-center w-full gap-4 mt-36'>
				{navigationData.map(menu => (
					<a
						href={`${menu.path}`}
						key={menu.id}
						onClick={() => linkClicked(menu.id)}
						className={
							activeId === menu.id
								? 'menu-link ring-orange-dark text-orange-dark dark:ring-orange-dark dark:text-orange-dark'
								: 'menu-link text-blue-dark ring-blue-dark dark:text-gray-light dark:ring-gray-light hover:ring-blue-normal hover:text-blue-normal focus:text-blue-normal focus:ring-blue-normal dark:hover:ring-blue-normal dark:hover:text-blue-normal dark:focus:text-blue-normal dark:focus:ring-blue-normal '
						}>
						<span>{menu.icon}</span>
						<span>{menu.name}</span>
					</a>
				))}
			</ul>
		</nav>
	)
}

export default Menu
