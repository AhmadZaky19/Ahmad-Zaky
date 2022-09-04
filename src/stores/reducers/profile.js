const initialState = {
  isLoading: false,
  isError: false,
  data: {},
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "PROFILE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data,
      };
    }
    case "PROFILE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default profile;