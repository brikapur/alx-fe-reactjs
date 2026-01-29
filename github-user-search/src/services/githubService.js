const API_URL = "https://api.github.com";
const headers = {
    Authorization: 'token $ {import.meta.env.VITE_APP_GITHUB_API_KEY}',
};
export const searchUsers = async (username) => {
    const response = await fetch('${API_URL}/search/users?q=${username}',{
        headers,
    });
    return response.json();
};
