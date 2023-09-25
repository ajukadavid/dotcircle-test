import imgOne from './assets/choose_1.svg';
import imgTwo from './assets/choose_2.svg';
import imgThree from './assets/choose_3.svg';
import imgFour from './assets/choose_4.svg';
import title from './assets/choose_title.svg';
import Slider from './components/Slider'

function Choose() {
  const cardData = [
    {
      id: 1,
      title: "Great Communication",
      image: imgOne,
      description:
        "We work closely with our clients to make sure that they are completely satisfied with the end result and that they understand what we have done for them.",
      border: 'hover:border-r-green-300 hover:border border-transparent',

      topClass: 'absolute top-0 right-0 bg-green-300 w-1/2 h-[1px] hidden',
      bottomClass: 'absolute bottom-0 right-0 bg-green-300 w-1/2 h-[1px] hidden'
    },
    {
      id: 2,
      title: "Timely Delivery",
      image: imgTwo,
      description:
        "It is our priority at DotCircle to always provide our clients with timely and accurate deliveries. We understand that time is valuable which is why we take great care in making sure our deliveries are completed as quickly & efficiently as possible.",
      border: 'hover:border-l-orange-800 hover:border border-transparent',

      topClass: 'absolute top-0 left-0 bg-orange-800 w-1/2 h-[1px] hidden',
      bottomClass: 'absolute bottom-0 left-0 bg-orange-800 w-1/2 h-[1px] hidden'
    },
    {
      id: 3,
      title: "Highly Experienced Team",
      image: imgThree,
      description:
        "Our team is comprised of experts in their field, so you can be rest assured knowing that we have the experts to deliver top-notch results every time.",
            border: 'hover:border-r-red-400 hover:border border-transparent',

      topClass: 'absolute top-0 right-0 bg-red-400 w-1/2 h-[1px] hidden',
      bottomClass: 'absolute bottom-0 right-0 bg-red-400 w-1/2 h-[1px] hidden'
    },
    {
      id: 4,
      title: "Commitment",
      image: imgFour,
      description:
        "At DotCircle, we care about our clients and go above and beyond to make sure they are happy with the final products. This is what makes us stand out from the rest.",
      border: 'hover:border-l-blue-400 hover:border border-transparent',
      topClass: 'absolute top-0 left-0 bg-blue-400 w-1/2 h-[1px] hidden',
      bottomClass: 'absolute bottom-0 left-0 bg-blue-400 w-1/2 h-[1px] hidden'
    },
  ];

  return (
    <>
      <div className='bg-black text-white mt-20 px-20'>
        <div>
          <img src={title} alt="Title" />
        </div>
        <div className="grid gap-5 grid-cols-2 mt-20">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`flex ${card.border} relative cursor-pointer bg-[#131313] gap-5 rounded-lg px-4 py-8 flex-col`}
              onMouseEnter={() => {
                document.getElementById(`top-${card.id}`)!.classList.remove('hidden');
                document.getElementById(`bottom-${card.id}`)!.classList.remove('hidden');
              }}
              onMouseLeave={() => {
                document.getElementById(`top-${card.id}`)!.classList.add('hidden');
                document.getElementById(`bottom-${card.id}`)!.classList.add('hidden');
              }}
            >
              <div id={`top-${card.id}`} className={`${card.topClass}`}></div>
              <div>
                <img src={card.image} alt={card.title} />
              </div>
              <span className='text-2xl font-semibold'>{card.title}</span>
              <p className='text-sm font-light'>{card.description}</p>
              <div id={`bottom-${card.id}`} className={`${card.bottomClass}`}></div>
            </div>
          ))}
        </div>
        <div className='mt-20'>
          <img src={title} alt="Title" />
        </div>
              <div>
                <Slider />
              </div>
      </div>
    </>
  );
}

export default Choose;
