import { Delight } from '../icons'
import { Subheading } from '../utils'
import { IoCallOutline, IoMail, IoMailOutline } from 'react-icons/io5'

type Contact = {
	name: string
	icon: JSX.Element
}[]

const contactData = [
	{
		name: 'ngoni.mugumwa@gmail.com',
		icon: <IoMailOutline />,
	},
	{
		name: '+27 67 025 6956',
		icon: <IoCallOutline />,
	},
]

const Footer = () => {
	const navigateTop = () => window.scroll(0, 0)

	return (
		<footer className='flex flex-col items-center justify-center w-full gap-2 px-6 py-12 bg-white lg:px-12 lg:py-24 dark:bg-blue-darker'>
			<Subheading>See you soon</Subheading>

			<div className='flex items-center justify-between w-full mt-8'>
				<Delight onClick={navigateTop} className='cursor-pointer' />

				<ul className='flex flex-col gap-2'>
					{contactData.map(contact => (
						<li
							key={contact.name}
							className='flex items-center gap-2 font-catamaran dark:text-orange-dark text-blue-dark'>
							<span>{contact.icon}</span>
							<span>{contact.name}</span>
						</li>
					))}
				</ul>
			</div>
		</footer>
	)
}

export default Footer
