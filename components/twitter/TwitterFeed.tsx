import { useFetchTweets } from '../../hooks'
import { Subheading, Grid } from '../utils'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import { MoonLoader } from 'react-spinners'
import toast, { Toaster } from 'react-hot-toast'

type Tweet = {
	id: string
	text: string
}

const TwitterFeed = () => {
	const { isLoading, tweets, isFetching, isError } = useFetchTweets()
	const twitter = tweets?.data?.data?.data

	if (isError) toast.error('Oops, something went wrong!')

	return (
		<>
			<Toaster />
			<section
				id='social'
				className='flex flex-col items-center justify-center w-full min-h-screen gap-2 px-3 py-12 lg:py-24'>
				<Subheading>People Love Frozen Custard</Subheading>

				<Grid>
					{isLoading ||
						(isFetching && <MoonLoader size='40px' color='#FB8500' />)}
					{twitter?.map((tweet: Tweet) => (
						<TwitterTweetEmbed
							key={tweet.id}
							tweetId={tweet?.id}
							options={{ height: 400 }}
						/>
					))}
				</Grid>
			</section>
		</>
	)
}

export default TwitterFeed
