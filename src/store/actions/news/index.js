import { store } from '../../index';
import { ACCEPT_NEWS, ADD_NEWS, DECLINE_NEWS } from "./types"

export const onAcceptNews = (newsId) => {
  return {
    type: ACCEPT_NEWS,
    id: newsId
  }
}

export const onDeclineNews = (newsId) => {
  return {
    type: DECLINE_NEWS,
    id: newsId
  }
}

export const addNews = (title, description) => {
  const date = new Date().toISOString().substr(0,10);

  const news = {
    id: store.getState().news.news[store.getState().news.news.length - 1].id + 1,
    author_id: store.getState().auth.user.id,
    title,
    description,
    date,
    isAccept: false
  }

  return {
    type: ADD_NEWS,
    news
  }
}