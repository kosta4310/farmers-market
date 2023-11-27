import { FC, useState } from 'react';

interface starsProps {
  star: number;
  active: boolean;
}

const Rating: FC<starsProps> = ({ star, active }) => {
  const [rating, setRating] = useState<number>(star);
  const [hover, setHover] = useState<number>(0);

  const arr: number[] = [0, 1, 2, 3, 4];

  return (
    <div>
      <ul className="flex gap-1">
        {arr.map(star => {
          star += 1;
          return (
            <li key={star}>
              <button
                disabled={active}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(rating)}
              >
                <span
                  className={
                    star <= (hover || rating)
                      ? 'text-orange text-2xl'
                      : 'text-disabled text-2xl'
                  }
                >
                  &#9733;
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Rating;
