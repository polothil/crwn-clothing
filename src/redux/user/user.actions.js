// export const setCurrentUser = (user) => {
//   return { type: 'SET_CURRENT_USER', payload: user };
// };

import { UserActionTypes } from './user.types';

// same as above but without using return keyword
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
