import { Col } from 'reactstrap';
<<<<<<< HEAD
import Comment from './Comment';
=======
// import Comment from './Comment';
import AnimatedComment from './AnimatedComment';
>>>>>>> 5093073d9fee2a7193f885ed3db1f32a2902f4fd
import CommentForm from './CommentForm';
import { selectCommentsByCampsiteId } from './commentsSlice';

const CommentsList = ({ campsiteId }) => {
    const comments = selectCommentsByCampsiteId(campsiteId);

    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment, idx) => {
                    return (
                        <AnimatedComment
                            key={comment.id}
                            comment={comment}
                            idx={idx}
                        />
                    );
                })}
                <CommentForm campsiteId={campsiteId} />
            </Col>
        );
    }
    return (
        <Col md='5' className='m-1'>
            There are no comments for this campsite yet.
        </Col>
    );
};

export default CommentsList;
