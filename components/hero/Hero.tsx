import { Banner, Carousel } from './'

const Hero = () => {
	return (
		<section className='flex flex-wrap py-36 min-h-[calc(100vh-7rem)] px-4 lg:px-12 items-center'>
			<Banner />
			<Carousel />
		</section>
	)
}

export default Hero
