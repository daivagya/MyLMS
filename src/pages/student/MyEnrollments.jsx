import React from "react";

const MyEnrollments = () => {
  return (
    <section>
      <div className="container mx-auto px-8 md:px-30 pt-10">
        <h1 className="font-semibold text-2xl">My Enrollments</h1>
        <table className="md:table-auto table-fixed w-full overflow-hidden border mt-10">
          <thead className="text-gray-900 border border-gray-500/20 text-sm text-left max-sm:hidden">
            <tr className="">
              <th className="px-4 py-3 font-semibold truncate text-lg">
                Course
              </th>
              <th className="px-4 py-3 font-semibold truncate text-lg">
                Duration
              </th>
              <th className="px-4 py-3 font-semibold truncate text-lg">
                Completed
              </th>
              <th className="px-4 py-3 font-semibold truncate text-lg">
                Course
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </section>
  );
};

export default MyEnrollments;
