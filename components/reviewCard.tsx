import React from 'react';

interface ReviewCardProps {
  name: string;
  internetProvider: string;
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, internetProvider, review }) => {
  return (
    <div className="w-full p-6 mb-8 bg-white rounded-xl shadow">
      <div className="flex items-center mb-6">
        <div className="w-14 h-14 bg-neutral-200 rounded-full mr-4">
          {/* Placeholder for avatar */}
        </div>
        <div className="flex flex-col">
          <div className="text-black text-lg font-semibold">{name}</div>
          <div className="text-stone-500 text-sm font-normal">{internetProvider}</div>
        </div>
      </div>
      <div className="text-stone-500 text-sm font-medium">{review}</div>
    </div>
  );
};

export default ReviewCard;