import React, { Component } from "react";
import Connect from './Connect';
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
              <p style={{ fontSize: "20px" }}>Calendar for students</p>
            </center>
          </div>
          <div>
            <Connect/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="conatiner">
          <div className="greetingsProfileCard">
            <center className="greetingsProfileInfo">
              <p style={{ fontSize: "20px" }}>Calendar for students</p>
            </center>
          </div>
          <div>
            <Connect/>
          </div>
        </div>
      );
    }
    if (this.state.mentor === null) {
      return (
        <div className="conatiner">
          <div className="greetingsProfileCard">
            <center className="greetingsProfileInfo">
              <p style={{ fontSize: "20px" }}>Calendar for students</p>
            </center>
          </div>
          <div>
            <Connect/>
          </div>
        </div>
      );
    }
  }
}
