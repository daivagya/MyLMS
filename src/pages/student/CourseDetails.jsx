import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";
import Footer from "../../components/student/Footer";
import Youtube from "react-youtube";

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
  const [playerData, setPlayerData] = useState(null);

  const stripHTML = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  };

  const toggleSection = (index) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const para = stripHTML(courseData?.courseDescription);

  const {
    allCourses,
    calculateRating,
    calculateTotalNoOfLectures,
    calculateCourseDuration,
    calculateChapterTime,
    currency,
  } = useContext(AppContext);

  const fetchCourseData = async () => {
    const findCourse = allCourses.find((course) => course._id === id);
    setCourseData(findCourse);
  };

  // console.log("courseData", courseData);

  useEffect(() => {
    fetchCourseData();
  }, [allCourses]);

  return courseData ? (
    <>
      <div className="course-details-page-section flex flex-col gap-5 items-start justify-between md:px-20 lg:px-30 px-5 md:pt-30 py-10 text-left relative">
        <div className="absolute top-0 left-0 w-full h-[500px] z-1 bg-gradient-to-b from-cyan-100/70 to-white "></div>
        <div className="z-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
            {courseData.courseTitle}
          </h1>
          <p className="text-gray-500 text-justify text-lg sm:text-xl pt-5">
            {para}
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 z-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={
                  courseData?.courseRatings?.length > 0 &&
                  i < Math.floor(calculateRating(courseData))
                    ? assets.star
                    : assets.star_blank
                }
                alt="star-img"
              ></img>
            ))}
          </div>
          {courseData?.courseRatings?.length > 0 && (
            <p className="text-blue-600 flex gap-1">
              <span>
                {courseData?.courseRatings?.length > 1 ? "Ratings" : "Rating"}
              </span>
              (<span>{calculateRating(courseData)}</span>)
            </p>
          )}
          <p className="text-gray-500">
            {courseData?.enrolledStudents?.length}
            {courseData?.enrolledStudents?.length > 1
              ? " Students"
              : " Student"}
          </p>
        </div>
        <p className="text-sm z-2">
          Course by &nbsp;
          <span className="text-blue-600 underline">GreatStack</span>
        </p>
        <div className="flex flex-col lg:flex-row align-start lg:justify-between sm:gap-5 lg:gap-10">
          <div className="z-2 text-gray-800">
            <h2 className="text-xl font-semibold">Course Structure</h2>
            <div className="pt-5">
              {courseData?.courseContent?.map((chapter, index) => {
                return (
                  <div
                    key={index}
                    className="border border-gray-300 bg-white rounded mb-2"
                  >
                    <div
                      onClick={() => {
                        toggleSection(index);
                      }}
                      className="flex items-center justify-between px-4 gap-8 cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-2 p-2">
                        <img
                          className={`transform transition-transform ${
                            openSections[index] ? "rotate-180" : ""
                          }`}
                          src={assets.down_arrow_icon}
                          alt="down-arrow-icon"
                        />
                        <p className="font-medium text-sm md:text-lg">
                          {chapter.chapterTitle}
                        </p>
                      </div>
                      <p className="text-sm md:text-lg text-gray-500">
                        {chapter?.chapterContent?.length} lectures -{" "}
                        {calculateChapterTime(chapter)}
                      </p>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openSections[index] ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 md:py-4 text-gray-600 border-t border-gray-300">
                        {chapter?.chapterContent?.map((lecture, i) => {
                          return (
                            <li className="flex items-start gap-2 py-1" key={i}>
                              <img
                                className="w-4 h-4 mt-1"
                                src={assets.play_icon}
                                alt="play-icon"
                              />
                              <div className="flex items-center justify-between w-full text-gray-800 text-sm md:text-lg">
                                <p>{lecture.lectureTitle}</p>
                                <div className="flex gap-2">
                                  {lecture?.isPreviewFree && (
                                    <p
                                      onClick={() =>
                                        setPlayerData({
                                          videoId: lecture?.lectureUrl
                                            ?.split("/")
                                            .pop(),
                                        })
                                      }
                                      className="text-blue-500 cursor-pointer"
                                    >
                                      Preview
                                    </p>
                                  )}
                                  <p>
                                    {humanizeDuration(
                                      lecture.lectureDuration * 60 * 1000,
                                      { units: ["h", "m"] }
                                    )}
                                  </p>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 flex flex-col gap-3">
              <p className="font-semibold text-xl">What's in the course:</p>
              <ul className="flex flex-col gap-2 list-disc pl-5">
                <li>Lifetime access with free updates</li>
                <li>Step-by-step, hands-on project guidance</li>
                <li>Download resources and sourcecode</li>
                <li>Quizzes to test your knowledge</li>
                <li>Certificate of completion</li>
              </ul>
            </div>
          </div>

          {/* Right column */}
          <div className="xl:max-w-1/2 rounded-t shadow-sm z-100 md:rounded-none overflow-hidden min-w-[300px] p-2">
            {playerData ? (
              <Youtube
                videoId={playerData.videoId}
                opts={{ playerVars: { autoplay: 1 } }}
                iframeClassName="w-full aspect-video"
              />
            ) : (
              <img src={courseData.courseThumbnail} alt="thumbnail" />
            )}

            <div className="flex mt-1 gap-2 justify-between px-3">
              <div className="flex flex-col items-start mt-2 gap-2">
                <p className="px-3 py-1 md:px-4 md:py-2 bg-gray-200 font-semibold border-2 border-gray-200 shadow-sm text-center text-lg">
                  {currency}
                  {courseData.coursePrice -
                    (
                      courseData.discount *
                      (courseData.coursePrice / 100)
                    ).toFixed(2)}
                </p>
                {/*  */}
              </div>

              <p className="flex flex-col">
                <p>
                  <span className="md:text-lg">Regular price: </span>
                  <span className="text-green-600 font-light md:font-semibold">
                    {currency}
                    {courseData.coursePrice}
                  </span>
                </p>
                <span className="sm:font-semibold self-end">
                  {courseData.discount}% off
                </span>
              </p>
            </div>

            <div className="py-1 px-3 mt-3 flex gap-2">
              <img
                className="w-3.5"
                src={assets.time_left_clock_icon}
                alt="left-clock-icon"
              />
              <p className="text-red-500 text-sm sm:text-lg">
                <span className="font-medium">5 days left</span> at this price
              </p>
            </div>

            <div className="flex items-center gap-2 px-3 mt-3 text-sm xs:gap-4 sm:text-lg">
              <div className="flex items-center gap-1">
                <img className="" src={assets.star} alt="star-icon" />
                <p>{calculateRating(courseData)}</p>
              </div>

              <div className="h-4 w-px bg-gray-500/40"></div>

              <div className="flex items-center gap-1">
                <img src={assets.time_clock_icon} alt="time-clock-icon" />
                <p className="">{calculateCourseDuration(courseData)}</p>
              </div>

              <div className="h-4 w-px bg-gray-500/40"></div>

              <div className="flex items-center gap-1">
                <img src={assets.lesson_icon} alt="time-clock-icon" />
                <p className="">
                  {calculateTotalNoOfLectures(courseData)}
                  <span> lessons</span>
                </p>
              </div>
            </div>

            <button className="block md:mt-6 mt-4 mx-auto px-10 py-2 md:px-12 md:py-3 rounded bg-blue-600 text-white font-medium">
              {isAlreadyEnrolled ? "Already Enrolled" : "Enroll now"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
