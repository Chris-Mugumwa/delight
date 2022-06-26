import { PropsWithChildren, ReactNode } from 'react'

type ChevronProps = { children?: ReactNode; moveSlide: () => void }

const Chevron = ({ children, moveSlide }: ChevronProps) => {
	return (
		<div
			onClick={moveSlide}
			className='flex items-center justify-center w-12 h-12 transition duration-300 rounded-full cursor-pointer hover:bg-blue-dark hover:text-gray-light dark:hover:bg-gray-light dark:hover:text-blue-dark dark:text-gray-light'>
			{children}
		</div>
	)
}

export default Chevron
