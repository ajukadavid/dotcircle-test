import { useState } from "react";
import title from './assets/serviceTitle.png';
import cardImage from './assets/cardImg.svg';

function Services() {
  const cardData = [
    {
      id: 1,
      title: "UI UX DESIGN",
      subtitle: "Sequence: Task Manager",
      description:
        "We take an innovative approach to problem-solving, this allows us to develop solutions that meet the specific needs of the client and deliver the best possible outcome in the most efficient manner.",
    },
    {
        id: 2,
        title: "UI UX DESIGN",
        subtitle: "Sequence: Task Manager",
        description:
          "We take an innovative approach to problem-solving, this allows us to develop solutions that meet the specific needs of the client and deliver the best possible outcome in the most efficient manner.",
      },
      {
        id: 3,
        title: "UI UX DESIGN",
        subtitle: "Sequence: Task Manager",
        description:
          "We take an innovative approach to problem-solving, this allows us to develop solutions that meet the specific needs of the client and deliver the best possible outcome in the most efficient manner.",
      },
      {
        id: 4,
        title: "UI UX DESIGN",
        subtitle: "Sequence: Task Manager",
        description:
          "We take an innovative approach to problem-solving, this allows us to develop solutions that meet the specific needs of the client and deliver the best possible outcome in the most efficient manner.",
      },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div className="bg-black px-10 mt-20">
      <div className="text-white">
        <img src={title} alt="Service Title" />
      </div>
      <div className="grid font-basic grid-cols-2 px-20 gap-4 mt-8">
        {cardData.map((card, index) => (
          <div
          key={card.id}
          className={`border card border-transparent rounded-lg ${index === 0 || index === 2 ? 'mt-20' : ''}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(-1)}
            
          >
            <div>
              <img className={` ${
              hoveredIndex === index
                ? 'transform scale-95 transition-transform duration-300'
                : ''
            }`} src={cardImage} alt="Card Image" />
            </div>
            <div
              className={`hover:bg-right-bottom flex transition-colors duration-4000 cursor-pointer text-white flex-col p-4 gap-8 ${
                hoveredIndex === index
                  ? 'bg-gradient-to-r from-[#202020] via-[#062625] to-[#126b64] transition-colors duration-4000 cursor-pointer text-white flex-col p-4 gap-8'
                  : 'bg-[#202020] transition-colors duration-4000 cursor-pointer text-white flex-col p-4 gap-8'
              }`}
            >
              <span className='text-sm'>{card.title}</span>
              <span className='text-2xl font-bold'>{card.subtitle}</span>
              <p className='text-xs'>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
