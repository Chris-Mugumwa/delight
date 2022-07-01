import { PropsWithChildren } from 'react'

const Subheading = ({ children }: PropsWithChildren) => {
	return (
		<h2 className='mt-3 text-2xl text-center text-gray-800 font-catamaran lg:text-5xl dark:text-gray-300'>
			{children}
		</h2>
	)
}

export default Subheading
