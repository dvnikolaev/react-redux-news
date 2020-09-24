import { store } from '../../index';
import { ACCEPT_NEWS } from "./types"

export const onAcceptNews = (newsId) => {
  const foundedIndex = store.getState().news.news.findIndex(item => item.id === newsId);


  return {
    type: ACCEPT_NEWS,
    id: foundedIndex
  }
}