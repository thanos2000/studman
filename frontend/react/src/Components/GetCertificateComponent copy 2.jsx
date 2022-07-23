import React, { Component } from "react";
import certtemp from "../Images/certificate-template.png";
import CourseService from "../Services/CourseService";
import MentorService from "../Services/MentorService";
import StudentService from "../Services/StudentService";

export default class GetCertificateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: JSON.parse(localStorage.getItem("userData")),
      student: "",
      mentor: "",
      course: "",
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
    };
  }
  componentDidMount() {
    StudentService.getStudentByStudentId(this.state.userData.studentId).then(
      (response) => {
        this.setState({ student: response.data });
      }
    );
    CourseService.getCourseDetailByStudentId(
      this.state.userData.studentId
    ).then((response) => {
      this.setState({ course: response.data });
    });
    StudentService.getAssignedMentorByStudentId(this.state.userData.studentId)
      .then((response) => {
        this.setState({ mentor: response.data });
      })
      .catch((error) => {
        this.setState({ mentor: error.response.data.message });
      });
  }

  render() {
    if (this.state.mentor === "" || this.state.student.studentMarks < 40) {
      return (
        <div className="conatiner">
          <div className="greetingsProfileCard">
            <center className="greetingsProfileInfo">
              <p style={{ fontSize: "20px" }}>Refer below materials</p>
            </center>
          </div>
          <div className="card text-white bg-dark mb-3 getCertificateErrorCard">
            <div className="card-body">
              <div className="container">
              <b>   
        JAVA NOTES <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank">click here!</a>
        <br /> PYTHON NOTES <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank">click here!</a>
        <br />SPRING NOTES <a href="https://en.wikipedia.org/wiki/Spring" target="_blank">click here!</a>
        <br />ARTIFICIAL INTELLIGENCE <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank">click here!</a>
        </b>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="conatiner">
          <div className="greetingsProfileCard">
            <center className="greetingsProfileInfo">
              <p style={{ fontSize: "20px" }}>Refer below materials</p>
            </center>
          </div>
          <div className="card text-white bg-dark mb-3 getCertificateErrorCard">
            <div className="card-body">
              <div className="container">
              <b>   
        JAVA NOTES <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank">click here!</a>
        <br /> PYTHON NOTES <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank">click here!</a>
        <br />SPRING NOTES <a href="https://en.wikipedia.org/wiki/Spring" target="_blank">click here!</a>
        <br />ARTIFICIAL INTELLIGENCE <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank">click here!</a>
        </b>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (this.state.mentor === null) {
      return (
        <div className="conatiner">
          <div className="greetingsProfileCard">
            <center className="greetingsProfileInfo">
              <p style={{ fontSize: "20px" }}>Refer below materials</p>
            </center>
          </div>
          <div className="card text-white bg-dark mb-3 getCertificateErrorCard">
            <div className="card-body">
              <div className="container">
              <b>   
        JAVA NOTES <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank">click here!</a>
        <br /> PYTHON NOTES <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank">click here!</a>
        <br />SPRING NOTES <a href="https://en.wikipedia.org/wiki/Spring" target="_blank">click here!</a>
        <br />ARTIFICIAL INTELLIGENCE <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank">click here!</a>
        </b>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
