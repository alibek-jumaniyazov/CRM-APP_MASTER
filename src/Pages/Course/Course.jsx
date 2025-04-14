import { useEffect, useState } from "react";
import "./Course.css";
import CourseCard from "../../components/CourseComponents/CourseCard";
import { Icons } from "../../Assets/icons/icons";
import { Link } from "react-router-dom";
import NewCourse from "../../components/NewCourse/NewCourse";
import axios from "axios";
import LoadingUser from "../LoadingUser";

export default function Course() {
  const [isOpenNew, setIsOpenNew] = useState(false);
  const [name, setName] = useState("");
  const [courseCardInfo, setCourseCardInfo] = useState([]);
  const [loading, setLoading] = useState(false)
  const toggleNewCourse = () => setIsOpenNew(prev => !prev);
  const storedToken = localStorage.getItem('token');
  const getCourse = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get("http://192.168.192.254:8000/api/v1/course/", {
        headers: {
          'Authorization': `Bearer ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });
      setCourseCardInfo(data.results);
      setLoading(false)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCourse();
  }, []);

  function word(e) {
    const mini = e.toLowerCase(); // Convert the input to lowercase
    return mini;
  }

  return (
    <div className="CoursePage">
      {isOpenNew && <NewCourse onClose={toggleNewCourse} name={name} setName={setName} setCourseCardInfo={setCourseCardInfo} />}
      <div className="CoursesHeader">
        <h1>All courses available in the system</h1>
        <button onClick={toggleNewCourse}>
          <Icons.pilus /> New course
        </button>
      </div>
      <div className="CourseCards">
        {loading ? (<LoadingUser />) : (courseCardInfo.map(item => (
          <Link key={item.id} to={`/course-page/${word(item.name)}/${item.id}`} style={{ textDecoration: "none" }}>
            <CourseCard item={item} />
          </Link>
        )))}
      </div>
    </div>
  );
}
