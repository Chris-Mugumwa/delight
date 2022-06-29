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
	return (
		<footer className='flex flex-col items-center justify-center w-full gap-2 px-6 py-12 bg-white lg:px-12 lg:py-24 dark:bg-blue-darker'>
			<Subheading>We'll see you soon</Subheading>

			<div className='flex items-center justify-between w-full mt-8'>
				<Delight />

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

			<h5 className='mt-4 font-merriweather-sans text-blue-darker dark:text-gray-light'>
				Copyright <span>&#169;</span> Reserved{' '}
			</h5>
		</footer>
	)
}

export default Footer
