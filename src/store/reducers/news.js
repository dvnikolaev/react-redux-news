import { ADD_NEWS } from "../actions/news/types";

const INITIAL_STATE = {
  news: [
    {
      id: 1,
      author_id: "1",
      title: "Lorem, ipsum.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aliquid.",
      date: "2020-09-23",
      isAccept: true,
    },
    {
      id: 1,
      author_id: "1",
      title: "Expedita provident eligendi.",
      description:
        "Expedita provident eligendi repellendus corrupti culpa soluta laboriosam sint?",
      date: "2020-09-23",
      isAccept: true,
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return { ...state, news: [...state.news, action.news] };
    default:
      return { ...state };
  }
};
