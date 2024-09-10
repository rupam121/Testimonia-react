import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d) => (
          <div className="bg-white h-[450px] text-black rounded-xl">

            <div className="h-56 rounded-t-xl bg-green-500 flex justify-center items-center">
              <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.name}</p>
              <p>{d.review}</p>
              <button className="bg-green-500 text-white text-lg px-6 py-1 rounded-xl">Read More</button>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: `Raj Kumar`,
    img: `../public/students/student3.png`,
    review: `lorem ipsome is there we all are here to study by the way we are engineer.`
  },
  {
    name: `Raj Kumar`,
    img: `/students/student3.png`,
    review: `lorem ipsome is there we all are here to study by the way we are engineer.`
  }, {
    name: `Raj Kumar`,
    img: `/students/student3.png`,
    review: `lorem ipsome is there we all are here to study by the way we are engineer.`
  }, {
    name: `Raj Kumar`,
    img: `/students/student3.png`,
    review: `lorem ipsome is there we all are here to study by the way we are engineer.`
  }, {
    name: `Raj Kumar`,
    img: `/students/student3.png`,
    review: `lorem ipsome is there we all are here to study by the way we are engineer.`
  }, {
    name: `Raj Kumar`,
    img: `/students/student3.png`,
    review: `lorem ipsome is there we all are here to study by the way we are engineer.`
  }, {
    name: `Raj Kumar`,
    img: `/students/student3.png`,
    review: `lorem ipsome is there we all are here to study by the way we are engineer.`
  }

]

export default App;