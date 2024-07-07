import star from "../assets/star.svg";
export default function Rating({ value }) {
      const stars = Array(value).fill(star);
      return (
            <>
                  {
                        stars.map((star, index) => (
                              <img
                                    key={index}
                                    src={star}
                                    width="20"
                                    height="20"
                                    alt="star"
                              />
                        ))
                  }
            </>
      )
}