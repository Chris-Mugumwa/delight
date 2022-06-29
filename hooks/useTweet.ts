import { useQuery } from 'react-query'
import axios from 'axios'

const useTweets = () => {
	const {
		isLoading,
		isFetching,
		isError,
		error,
		data: tweets,
	} = useQuery('twitter', () => {
		return axios.get(`https://delight-be.herokuapp.com/`)
	})

	return { isLoading, isFetching, error, tweets, isError }
}

export default useTweets
