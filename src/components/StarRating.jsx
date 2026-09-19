import { FaStar, FaRegStar } from 'react-icons/fa'
import { useState } from 'react'

const StarRating = ({ initialRating }) => {
    const [rating, setRating] = useState(initialRating || 0)

    



    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                key={star}
                onClick={() => setRating(star)}
                style={{ cursor: 'pointer' }}
                role="button"
                aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                >
                {star <= rating ? (
                    <FaStar color="#f5b301" size={20} />
                ) : (
                    <FaRegStar color="#ccc" size={20} />
                )}
                </span>
            ))}
        </div>
    )
}


export default StarRating