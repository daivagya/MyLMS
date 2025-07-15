import React from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);
  const { navigate } = useContext(AppContext);
  return (
    <div
      onClick={() => {
        navigate("/course-details/" + course._id);
      }}
      className="card flex flex-col gap-3 shadow-sm border border-gray-100"
    >
      <div className="aspect-ratio-16/9">
        <img
          className="object-cover h-full w-full"
          src={course.courseThumbnail}
        />
      </div>

      <div className="flex flex-col justify-between grow-1 gap-2 p-2">
        <h2 className="text-lg xl:text-xl font-medium text-gray-800">
          {course.courseTitle}
        </h2>

        <div className="flex justify-between">
          <div className="flex flex-col">
            <p>GreatStack</p>
            <p className="text-gray-800 font-semibold">
              Price: &nbsp;
              {currency}
              {(
                (course.coursePrice - course.discount) *
                (course.coursePrice / 100)
              ).toFixed(2)}
            </p>
            <p className="text-gray-500">
              <span>Review:</span>
              {course.courseRatings.length}
            </p>
          </div>

          <div className="flex items-baseline-last justify-center gap-1">
            <div className="flex items-center justify-end">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={
                    i < Math.floor(calculateRating(course))
                      ? assets.star
                      : assets.star_blank
                  }
                  alt="star-img"
                ></img>
              ))}
            </div>
            <p className="text-gray-500">{calculateRating(course)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
