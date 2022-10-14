import { formatDate } from '../../utils/formatDate';
import { useState, useEffect } from 'react';
import { animated, useSpring, config } from 'react-spring';

const AnimatedComment = ({ comment, idx }) => {
    const { text, rating, author, date } = comment;
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle
            ? `translateY(0px) scale(1,1)`
            : `translateY(${idx * -80}px) scale(1,0)`,
        config: config.wobbly
    });

    useEffect(() => {
        if (!toggle) {
            setToggle(true);
        }
    }, [toggle]);

    return (
        <animated.p style={animatedStyle}>
            {text}
            <br />
            {rating}/5 stars -- {author}, {formatDate(date)}
        </animated.p>
    );
};

export default AnimatedComment;
