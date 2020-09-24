import { ACCEPT_NEWS, ADD_NEWS } from "../actions/news/types";

const INITIAL_STATE = {
  news: [
    {
      id: 1,
      author_id: 1,
      title: "Lorem, ipsum.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aliquid.",
      date: "2020-09-23",
      isAccept: true,
    },
    {
      id: 2,
      author_id: 1,
      title: "Expedita provident eligendi.",
      description:
        "Expedita provident eligendi repellendus corrupti culpa soluta laboriosam sint?",
      date: "2020-09-23",
      isAccept: true,
    },
    {
      id: 3,
      author_id: 1,
      title: "de Finibus Bonorum et Malorum.",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      date: "2020-09-23",
      isAccept: false,
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return { ...state, news: [...state.news, action.news] };
    case ACCEPT_NEWS: {
      return {
        ...state,
        news: state.news.map((item, index) => {
          if (index === action.id) {
            return {
              ...item,
              isAccept: true,
            };
          }
          return item;
        }),
      };
    }
    default:
      return { ...state };
  }
};
