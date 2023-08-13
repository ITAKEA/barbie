import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/posts'; 

export const fetchPosts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}

export const fetchTranslatedPost = async (postId) => {
    try {
        const response = await axios.get(`${BASE_URL}/${postId}/translated`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching translated post ${postId}:`, error);
        return null;
    }
}
