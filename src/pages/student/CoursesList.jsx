import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import SearchBar from "../../components/student/SearchBar";
import { useParams } from "react-router-dom";
import CourseCard from "../../components/student/CourseCard";
import { assets } from "../../assets/assets";
import Footer from "../../components/student/Footer";
const CoursesList = () => {
  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();
  const [filteredCourse, setFilteredCourse] = useState([]);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice();
      input
        ? setFilteredCourse(
            tempCourses.filter((course) =>
              course.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : setFilteredCourse(tempCourses);
    }
  }, [input, allCourses]);

  return (
    <section className="course-list-section pt-5">
      <div className="container mx-auto px-10 md:px-20 lg:px-20">
        <div>
          <h1 className="text-3xl font-bold">Courses List</h1>
          <p
            className="text-gray-500 text-lg sm:text-xl pt-5 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <span className="text-blue-500 hover:text-blue-700 transition-all duration-300">
              Home
            </span>
            <span> / </span>
            Course-list
          </p>
        </div>
        <div className="pt-2">
          <SearchBar data={input} />
        </div>

        {input && (
          <div className="inline-flex gap-2 items-center justify-between bg-gray-100 p-3 rounded-md mt-5">
            <p>{input}</p>
            <img
              onClick={() => navigate("/course-list")}
              className="cursor-pointer"
              src={assets.cross_icon}
              alt="cross-icon"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-10">
          {filteredCourse.map((course, index) => {
            return <CourseCard key={index} course={course} />;
          })}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CoursesList;
