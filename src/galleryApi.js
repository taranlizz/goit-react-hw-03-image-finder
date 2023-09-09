import axios from 'axios';

const API_KEY = '38537046-1dad650a5645b155ff397a43e';
export const PER_PAGE = 12;

const params = new URLSearchParams({
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: PER_PAGE,
});

export const getGalleryItems = async (query, page) => {
  query = query.split('/')[1];
  const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}`,
    { params }
  );
  return response.data;
};
