import React from "react";
import { dummyTestimonial } from "../../assets/assets";
import { assets } from "../../assets/assets";
const TestimonialsSection = () => {
  return (
    <section className="testimonials-section py-10">
      <div className="container mx-auto px-5 md:px-30 text-gray-500 text-center">
        <h2 className="text-3xl text-gray-800">Testimonials</h2>
        <p className="mt-4 text-lg md:text-xl text-center">
          Here from our learners as they share their experiences of
          transformation, growth and success through our courses. Their stories
          are a testament to the impact of quality education and the power of
          lifelong learning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 ">
          {dummyTestimonial.map((testimonial, index) => (
            <div className="shadow-lg border border-gray-100" key={index}>
              <div className="flex gap-4 p-2 bg-gray-100">
                <div className="aspect-ratio w-16 h-16">
                  <img
                    className="object-cover w-full h-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex flex-col pt-4 gap-2 p-3">
                <p>{testimonial.feedback}</p>
                <div className="flex self-end">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src={
                        i < Math.floor(testimonial.rating)
                          ? assets.star
                          : assets.star_blank
                      }
                      alt="star"
                    />
                  ))}
                </div>
                <a className="text-blue-500 underline px-5" href="#">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
