import { PropsWithChildren } from 'react'
import Masonry from 'react-masonry-css'

type BreakpointProps = {
	default: number
	1100: number
	700: number
	500: number
}

const breakpointObj: BreakpointProps = {
	default: 4,
	1100: 3,
	700: 2,
	500: 1,
}

const MasonryGrid = ({ children }: PropsWithChildren) => {
	return (
		<Masonry breakpointCols={breakpointObj} className='flex gap-2 mt-12'>
			{children}
		</Masonry>
	)
}

export default MasonryGrid
