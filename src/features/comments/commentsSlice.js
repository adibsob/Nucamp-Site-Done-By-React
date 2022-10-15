import { COMMENTS } from '../../app/shared/COMMENTS';

<<<<<<< HEAD
const initialState = {
    commentsArray: COMMENTS
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            const newComment = {
                id: state.commentsArray.length + 1,
                ...action.payload
            };
            state.commentsArray.push(newComment);
        }
    }
});

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
=======
export const selectCommentsByCampsiteId = (campsiteId) => {
    return COMMENTS.filter(
>>>>>>> 5093073d9fee2a7193f885ed3db1f32a2902f4fd
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};
