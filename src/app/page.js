import Hero from "@/components/Hero";
import TopCities from "./components/Navigation/TopCities";
import CollegeExamPicker from "./components/Navigation/CollegeExamPicker";
import CollegeExplorer from "./components/Colleges/CollegeExplorer";
import ExamExplorer from "./components/Exams/ExamExplorer";
import CourseExplorer from "./components/Courses/CourseExplorer";

export default function Home() {
  return (
    <div>
      <Hero />
      <TopCities />
      <CollegeExamPicker />
      <CollegeExplorer />
      <ExamExplorer />
      <CourseExplorer />
    </div>
  );
}
