export default (state = [], action) => {
  let newState = [...state]
  let quote
  let vote
  switch(action.type){
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      quote = newState.find((quote) => quote.id === action.quoteId)
      let idx = state.indexOf(quote)
      return[...state.slice(0, idx), ...state.slice(idx+1)]
    case "UPVOTE_QUOTE":
      quote = newState.find((quote) => quote.id === action.quoteId)
      vote = quote.votes + 1
      quote.votes = vote
      return newState
    case "DOWNVOTE_QUOTE":
      quote = newState.find((quote) => quote.id === action.quoteId)
      quote.votes > 0 ? vote = quote.votes - 1 : vote = quote.votes
      quote.votes = vote
      return newState
    default:
      return state;
  }
}
