import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [student, setStudents] = useState([]); 
  const [data, setData] = useState({
    name: "",
    email: "",
    website: "",
    imgUrl: "",
    gender: "",
    skills: [],
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setStudents((prevStudents) => [...prevStudents, data]);
    setData({ 
      name: "",
      email: "",
      website: "",
      imgUrl: "",
      gender: "",
      skills: [],
    });


    console.log(data);
  };

  const valueHandler = (e) => {  
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setData((prev) => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter((skill) => skill !== value),
      }));
    } else {
      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };


  const clearData = ()=>{
    setData({  
      name: "",
      email: "",
      website: "",
      imgUrl: "",
      gender: "",
      skills: [],
    });
  }
  return (
    <div className="home">
      <div className="form">
        <form onSubmit={submitHandler}>
          <label>
            <p>Name</p>
            <input
              type="text"
              onChange={valueHandler}
              name="name"
              value={data.name}
              placeholder="Enter the Name"
            />
          </label>
          <label>
            <p>Email</p>
            <input
              type="email"
              onChange={valueHandler}
              name="email"
              value={data.email}
              placeholder="Enter the Email"
            />
          </label>

          <label>
            <p>Website</p>
            <input
              type="text"
              onChange={valueHandler}
              name="website"
              value={data.website}
              placeholder="Enter the webiste"
            />
          </label>

          <label>
            <p>Image Link</p>
            <input
              type="text"
              onChange={valueHandler}
              name="imgUrl"
              value={data.imgUrl}
              placeholder="Enter the image Link"
            />
          </label>

          <label>
            <p>Gender</p>
            <div className="rdbtn">
              <input
                type="radio"
                name="gender"
                id="male"
                value={"male"}
                onChange={valueHandler}
                checked={data.gender === "male"}
              />
               <label htmlFor="male">Male</label>
              <input
                type="radio"
                name="gender"
                id="female"
                value={"female"}
                onChange={valueHandler}
                checked={data.gender === "female"}
              />
               <label htmlFor="female">Female</label>
            </div>
          </label>

          <label>
            <p>Skills</p>
            <div className="rdbtn">
              <input type="checkbox" id="java" name="java" value="java"  onChange={valueHandler}
                checked={data.skills.includes("java")}/>
              <label htmlFor="java">Java</label>
              <input type="checkbox" id="html" name="html" value="html"  onChange={valueHandler}
                checked={data.skills.includes("html")}/>
              <label htmlFor="html">HTML</label>
              <input type="checkbox" id="css" name="css" value="css"  onChange={valueHandler}
                checked={data.skills.includes("css")}/>
              <label htmlFor="css">CSS</label>
            </div>
          </label>

          <div className="btn">
            <button type="submit">Enroll Student</button>
            <button type="button" onClick={clearData}>Clear</button>
          </div>
        </form>
      </div>

      <div className="line"></div>
      <div className="students">
        {student.map((s) => (
          <StudentCard
          key={s.email}
            name={s.name}
            gender={s.gender}
            email={s.email}
            skill={s.skills}
            website={s.website}
            imgUrl = {s.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

const StudentCard = ({ name, gender, email, skill, website,imgUrl }) => (
  <div className="student">
    <div className="student_left">
      <div className="left_head">
        <p>Description</p>
      </div>
      <div className="left_main">
        <p>{name}</p>
        <p>{gender}</p>
        <p className="link">{email}</p>
        <p>{skill.map((skill, index) => <span key={index}>{skill}, </span>)}</p>
        <p className="link">{website}</p>
      </div>
    </div>

    <div className="student_right">
      <div className="right_head">
        <p>Image</p>
      </div>
      <div className="right_main">
        <img src={imgUrl} alt="" />
      </div>
    </div>
  </div>
);
