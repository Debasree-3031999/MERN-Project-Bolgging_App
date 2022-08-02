import axios from 'axios'
import Story from '../components/Story/Story';

const url="http://localhost:5001/stories";

 export const fetchStories =async () => axios.get(url);

 export const createStory =async (story) => axios.post(url,story);

// export default fetchStories