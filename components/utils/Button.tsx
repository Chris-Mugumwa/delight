import { PropsWithChildren } from 'react'

const Button = ({ children }: PropsWithChildren) => {
	return (
		<button className='w-1/2 md:w-[40%] px-6 py-4 mt-6 font-semibold rounded-md bg-orange-dark text-gray-light text-lg hover:ring-2 hover:ring-orange-dark hover:bg-transparent transition duration-500 hover:text-orange-dark'>
			{children}
		</button>
	)
}

export default Button
