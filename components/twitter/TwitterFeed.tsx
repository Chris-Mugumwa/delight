import { Subheading, Grid } from '../utils'
import { TwitterTweetEmbed } from 'react-twitter-embed'

type DataProps = {
	data: {
		data: {
			data: {
				id: string
				title: string
			}[]
		}
	}
}

const TwitterFeed = ({ data }: DataProps) => {
	const twitter = data?.data?.data

	return (
		<>
			<section
				id='social'
				className='flex flex-col items-center justify-center w-full min-h-screen gap-2 px-3 py-12 lg:py-24'>
				<Subheading>People Love Frozen Custard</Subheading>

				<Grid>
					{twitter?.map(tweet => (
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
