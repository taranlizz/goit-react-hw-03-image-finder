import toast from 'react-hot-toast';
import { PER_PAGE } from 'galleryApi';

export const success = totalHits => {
  toast.success(`Hooray! We found ${totalHits} images.`);
};

export const error = () => {
  toast.error('Ooops... Something went wrong. Try reload page!');
};

export const info = (totalHits, page) => {
  const totalPages = totalHits / PER_PAGE;
  let message = null;
  if (!totalPages) {
    message =
      'Sorry, there are no images matching your search query. Please try again.';
  }
  if (totalPages <= 1 || page > totalPages) {
    message = "We're sorry, but you've reached the end of search results.";
  }
  if (message) {
    toast(message, {
      icon: '☹',
    });
  }
};
