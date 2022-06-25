import { useState } from 'react'
import Image from 'next/image'
import { Chevron } from '../../utils'
import { motion } from 'framer-motion'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

type Custard = {
	id: number
	name: string
	description: string
	url: string
	color: string
}[]

const custardData = [
	{
		id: 1,
		name: 'Chocolate',
		description: 'Chocolate flavoured frozen custard',
		url: '/images/Chocolate.png',
		color: '#FB8500',
	},
	{
		id: 2,
		name: 'Raspberry',
		description: 'Raspberry flavoured frozen custard',
		url: '/images/Raspberry.png',
		color: '#219EBC',
	},
	{
		id: 3,
		name: 'Caramel',
		description: 'Caramel Flavoured frozen custard',
		url: '/images/Caramel.png',
		color: '#FFB703',
	},
]

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
				{custardData.map((custard, index) => (
					<motion.div
						key={custard.id}
						className={
							activeItem === index + 1
								? 'flex transition-all duration-500'
								: 'hidden transition-all duration-500'
						}>
						<Image src={`${custard.url}`} width='360' height='412' />
						<div />
					</motion.div>
				))}
				<Chevron moveSlide={nextSlide}>
					<IoChevronForwardOutline className='w-6 h-6' />
				</Chevron>
			</div>
			<div>
				{Array.from({ length: 3 }).map((item: unknown, index: number) => (
					<div
						onClick={() => moveDot(index + 1)}
						className={
							activeItem === index + 1
								? 'flex gap-2 ring-2 ring-blue-normal w-3 h-3 rounded-full'
								: 'flex gap-2 w-3 h-3 rounded-full bg-yellow-dark'
						}
					/>
				))}
			</div>
		</main>
	)
}

export default Carousel
