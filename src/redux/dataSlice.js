import { createSlice } from '@reduxjs/toolkit';
import { movies } from '../data/movies';


const dataSlice = createSlice({
     name: 'data',
     initialState: movies,
     reducers: {
          // action removeData
          removeData: (state, action) => {
               const removeDataId = action.payload;
               return state.filter(item => item.id !== removeDataId);
          },
          changeLikeDislike: (state, action) => {
               const newData = action.payload;
               const dataIndex = state.findIndex(item => item.id === newData.id);
               if (dataIndex >= 0) {
                 state[dataIndex] = newData;
               }
          }
     }
});

const { actions, reducer } = dataSlice;
export const { removeData, changeLikeDislike } = actions;
export default reducer;