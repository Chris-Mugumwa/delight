import { valueData } from './'
import { Subheading } from '../utils'

const Values = () => {
	return (
		<section
			id='values'
			className='flex flex-col items-center justify-center w-full min-h-screen gap-2 px-6 py-12 bg-white lg:px-12 lg:py-24 dark:bg-blue-darker'>
			<Subheading>What We Value Most</Subheading>

			<div className='flex flex-wrap items-center justify-center w-full gap-2 px-6 py-12 bg-white lg:px-12 lg:py-24 dark:bg-blue-darker'>
				{valueData.map(value => (
					<div
						key={value.name}
						className='flex flex-col items-center justify-center w-full gap-3 text-center shadow-md md:w-1/2 lg:w-[30%] h-[28rem] rounded-md p-4 bg-gray-light dark:bg-blue-dark'>
						<span className='mb-3'>{value.icon}</span>
						<h2 className='text-xl font-semibold font-catamaran lg:text-3xl text-orange-dark'>
							{value.name}
						</h2>
						<p className='font-catamaran text-blue-dark dark:text-gray-light'>
							{value.description}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default Values
