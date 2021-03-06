import axios from "axios";

export const fetchApi = async (input, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${input}&page=${page}&key=22578440-e1e5ecfa8eecbfc5a41a583d6&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data.hits;
};
