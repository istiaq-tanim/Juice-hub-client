import Rating from "../../components/Ratings";
import { timeConvert } from "../../utils/TimeConver";

const ReviewCard = ({ item }) => {
      return (
            <div className="pt-5 pb-8 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
                  <div className="flex items-center gap-2 mb-4">
                        <Rating value={item?.rating}></Rating>
                  </div>
                  <h3 className="font-manrope font-semibold text-xl sm:text-2xl leading-9 text-black mb-4">{item?.title}
                  </h3>
                  <div className="flex sm:items-center flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
                        <div className="flex items-center gap-3">
                              <img src="https://pagedone.io/asset/uploads/1704349572.png" alt="John image" className="w-8 h-8" />
                              <h6 className="font-semibold text-lg leading-8 text-indigo-600 ">{item?.name}</h6>
                        </div>
                        <p className="font-normal text-lg leading-8 text-gray-400">{timeConvert(item?.date)}</p>
                  </div>
                  <p className="font-normal  text-lg leading-8 text-gray-400 text-justify">{item?.description}</p>
            </div>
      );
};

export default ReviewCard;