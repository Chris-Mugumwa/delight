import { Heading, Subheading, Button } from '../../utils'

const Banner = () => {
	return (
		<section className='flex flex-col w-full gap-2 py-8 lg:w-1/2 font-catamaran text-blue-dark dark:text-gray-light'>
			<p className='text-base text-orange-dark lg:text-xl'>Introducing</p>
			<Heading>Delight</Heading>
			<Subheading>
				Fresh, Organic, Healthy Frozen Custard Straight Out Of Mzanzi!
			</Subheading>

			<Button>View</Button>
		</section>
	)
}

export default Banner
