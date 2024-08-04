import reviews from "./data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const App = () => {
  const [index, setindex] = useState(0);
  const { id, name, job, image, text } = reviews[index];

  const nextpersoon = () => {
    setindex((currentindex) => (currentindex + 1) % reviews.length);
  };

  const prevpersoon = () => {
    setindex(
      (currentindex) => (currentindex - 1 + reviews.length) % reviews.length
    );
  };

  const random = () => {
    setindex((currentindex) => {
      let randomindex;

      // Generate a new random index until it's different from the current index
      do {
        randomindex = Math.floor(Math.random() * reviews.length);
      } while (randomindex === currentindex);

      return randomindex;
    });
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name} </h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div>
          <button className="prev-btn" onClick={prevpersoon}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextpersoon}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn" onClick={random}>
          Surprise me{" "}
        </button>
      </article>
    </main>
  );
};
export default App;
