import Youtube from 'react-youtube'

const Media = () => {
	return (
		<section className='w-full lg:w-1/2 '>
			<Youtube
				videoId='3iUIipWlt14'
				opts={{
					width: '100%',
					height: '400px',
					borderRadius: '12px',
					overflow: 'hidden',

					playerVars: {
						autoplay: 0,
					},
				}}
				className='overflow-hidden rounded-md'
			/>
		</section>
	)
}

export default Media
