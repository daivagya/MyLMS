import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";
const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);
  return (
    <section className="course-section py-5">
      <div className="container mx-auto px-5 md:px-20">
        <h2 className="text-3xl font-medium md:font-semibold text-gray-800">
          Learn from the best
        </h2>
        <p className="sm:text-xl text-gray-500 mt-4">
          Discover our top-rated courses across various categories. From coding
          and design to business and wellness, our courses are designed to
          deliver results and add some value to your life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center content-center gap-5 mt-4">
          {allCourses.slice(0, 3).map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
        <Link
          to={"/course-list"}
          onClick={() => scrollTo(0, 0)}
          className="block py-3 px-5 shadow-lg border border-gray-200 w-fit text-2xl text-center scroll-smooth mt-5 mx-auto text-gray-500"
        >
          Show all courses
        </Link>
      </div>
    </section>
  );
};

export default CoursesSection;
