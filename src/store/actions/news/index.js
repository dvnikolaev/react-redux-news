import { ACCEPT_NEWS, DECLINE_NEWS } from "./types"

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