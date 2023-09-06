export const CourseCard = () => {
	return (
		<div className="course-card">
			<img src="src/assets/course-image.png" alt="Course Image"></img>
			<h3 className="course-title">Data Analysis Intermediate</h3>
			<p className="instructor">Yasser Alaa</p>
			<div className="rating">
				<span className="rating-count">4.3</span>
				<span className="stars">★★★★★</span>
			</div>
			<p className="price">199.99 EGP</p>
			<a href="#" className="btn">
				Go to Course
			</a>
			{/* <button>Start Learning</button> */}
		</div>
	);
};

{
	/* <div class="course-card">
  <img src="course-image.jpg" alt="Course Image">
  <h3 class="course-title">Course Title</h3>
  <p class="instructor">Instructor: John Doe</p>
  <div class="rating">
    <span class="stars">★★★★★</span>
    <span class="rating-count">(4.9)</span>
  </div>
  <p class="price">$99.99</p>
  <a href="#" class="btn">Go to Course</a>
</div>
 */
}
