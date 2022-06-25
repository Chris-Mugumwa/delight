import { PropsWithChildren } from 'react'

const Heading = ({ children }: PropsWithChildren) => {
	return <h1 className='font-bold text-7xl lg:text-8xl'>{children}</h1>
}

export default Heading
