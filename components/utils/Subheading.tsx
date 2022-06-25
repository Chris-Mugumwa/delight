import { PropsWithChildren } from 'react'

const Subheading = ({ children }: PropsWithChildren) => {
	return (
		<div className='flex '>
			<span className=' content-["*"] h-full  w-1 rounded-full bg-orange-dark' />
			<p className='mt-3 text-lg font-merriweather-sans w-[85%] md:w-[75%] lg:text-3xl text-gray-800 ml-3 dark:text-gray-300'>
				{children}
			</p>
		</div>
	)
}

export default Subheading
