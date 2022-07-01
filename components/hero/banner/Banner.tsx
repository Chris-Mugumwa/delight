import { Heading, Button } from '../../utils'

const Banner = () => {
	return (
		<section className='flex flex-col w-full gap-2 py-8 lg:w-1/2 font-catamaran text-blue-dark dark:text-gray-light'>
			<p className='text-base text-orange-dark lg:text-xl'>Introducing</p>
			<Heading>Delight</Heading>
			<div className='flex '>
				<span className=' content-["*"] w-1 rounded-full bg-orange-dark' />
				<p className='mt-3 text-lg font-catamaran w-[85%] md:w-[75%] lg:text-3xl text-gray-800 ml-3 dark:text-gray-300'>
					Fresh, Organic, Healthy Frozen Custard Straight Out Of Mzanzi!
				</p>
			</div>

			<Button>Coming Soon</Button>
		</section>
	)
}

export default Banner
