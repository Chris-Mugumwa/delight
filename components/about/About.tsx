import { Subheading } from '../utils'
import { Description, Media } from './'

const About = () => {
	return (
		<section className='flex flex-col w-full px-6 lg:px-12'>
			<Subheading>Who Are We?</Subheading>
			<div className='flex flex-wrap items-center justify-center w-full py-24'>
				<Media />
				<Description />
			</div>
		</section>
	)
}

export default About
