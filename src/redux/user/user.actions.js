import { UserActionTypes } from './user.types';

// export const setCurrentUser = (user) => {
//   return { type: 'SET_CURRENT_USER', payload: user };
// };

// same as above but without using return keyword
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
