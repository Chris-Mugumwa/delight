import { useState } from 'react'
import Image from 'next/image'
import { custardData } from '.'
import { Chevron } from '../../utils'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

const Carousel = () => {
	const [activeItem, setActiveItem] = useState(1)

	const nextSlide = (): void => {
		activeItem !== custardData.length
			? setActiveItem(prev => prev + 1)
			: setActiveItem(1)
	}

	const prevSlide = (): void => {
		activeItem !== 1
			? setActiveItem(prev => prev - 1)
			: setActiveItem(custardData.length)
	}

	const moveDot = (index: number): void => setActiveItem(index)

	return (
		<main className='flex flex-col items-center justify-center w-full lg:w-1/2'>
			<div className='flex items-center justify-center w-full'>
				<Chevron moveSlide={prevSlide}>
					<IoChevronBackOutline className='w-6 h-6' />
				</Chevron>
				<div className='flex items-center justify-center w-full'>
					{custardData.map((custard, index) => (
						<div
							key={custard.id}
							className={
								activeItem === index + 1 ? 'card' : 'card-hidden'
							}>
							<Image
								src={`${custard.url}`}
								alt={`${custard.alt}`}
								width='460'
								height='512'
								className='relative z-40 lg:scale-150'
							/>
							<div
								style={{ backgroundColor: `${custard.color}` }}
								className={
									activeItem === index + 1 ? 'circle' : 'circle'
								}
							/>

							<div />
						</div>
					))}
				</div>
				<Chevron moveSlide={nextSlide}>
					<IoChevronForwardOutline className='w-6 h-6' />
				</Chevron>
			</div>
			<div className='flex gap-3 '>
				{Array.from({ length: 3 }).map((item: unknown, index: number) => (
					<div
						key={index}
						onClick={() => moveDot(index + 1)}
						className={
							activeItem === index + 1
								? 'pointer ring-blue-normal '
								: 'pointer bg-yellow-dark ring-transparent'
						}
					/>
				))}
			</div>
		</main>
	)
}

export default Carousel
