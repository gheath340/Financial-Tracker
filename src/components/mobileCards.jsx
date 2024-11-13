import { useState } from "react";


export const MobileCards = ({ cards }) => {

    const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

    return(

        <div className="relative h-[210px] w-full sm:hidden overflow-hidden">
            {cards.map((card, index) => (
              <button
                key={index}
                onClick={handleNext}
                className={`absolute inset-x-0 mx-auto bg-white shadow-md w-11/12 p-6 rounded-lg border border-gray-200 ${
                  index === activeIndex ? 'z-10 opacity-100' : 'z-0 opacity-50'
                }`}
                style={{
                  transform: index >= activeIndex
                    ? `translateY(${(index - activeIndex) * 42}px)` // Normal stacking below
                    : `translateY(${(cards.length + index - activeIndex) * 42}px)`,
                  
                  transition: 'transform 0.3s ease-in-out, opacity 0.3s ease',
                }}
                >
                <p className={`font-bold text-gray-700 mb-2 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>{card.title}</p>
                <p className={`text-xl font-semibold text-green-500 mb-4 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>{card.balance}</p>
              </button>
            ))}
        </div>
    )
}