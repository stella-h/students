var QueryStudentResults = function () {

}

QueryStudentResults.prototype.getTopper = function(studentResults) {
  //Returns the name of student with highest marks and his percentage  
  // highest sum total
  // can be done better with for loop
  // recognize number closest to 300 ?

  var aMath = studentResults[0]["marks"]["Maths"];
  var aCS = studentResults[0]["marks"]["ComputerScience"];
  var aEng = studentResults[0]["marks"]["English"];
  var aTotal = aMath + aCS + aEng

  var mMath = studentResults[1]["marks"]["Maths"];
  var mCS = studentResults[1]["marks"]["ComputerScience"];
  var mEng = studentResults[1]["marks"]["English"];
  var mTotal = mMath + mCS + mEng

  var vMath = studentResults[2]["marks"]["Maths"];
  var vCS = studentResults[2]["marks"]["ComputerScience"];
  var vEng = studentResults[2]["marks"]["English"];
  var vTotal = vMath + vCS + vEng

  if (aTotal > mTotal && vTotal ) {
    return "Anand";

  } else if (mTotal > aTotal && vTotal) {
    return "Michael"

  } else (vTotal > aTotal && mTotal)
  return "Vishal";

}

QueryStudentResults.prototype.getResultSheet = function (studentResults) {
  //returns the name of each student with their % 
  // for each student calculate total marks
  // display each student with total marks
  // can be done better with a for loop

  var aMath = studentResults[0]["marks"]["Maths"];
  var aCS = studentResults[0]["marks"]["ComputerScience"];
  var aEng = studentResults[0]["marks"]["English"];
  var aTotal = aMath + aCS + aEng

  var mMath = studentResults[1]["marks"]["Maths"];
  var mCS = studentResults[1]["marks"]["ComputerScience"];
  var mEng = studentResults[1]["marks"]["English"];
  var mTotal = mMath + mCS + mEng

  var vMath = studentResults[2]["marks"]["Maths"];
  var vCS = studentResults[2]["marks"]["ComputerScience"];
  var vEng = studentResults[2]["marks"]["English"];
  var vTotal = vMath + vCS + vEng

//array with an object
  var sumOfScore = [{anand: aTotal}, {michael: mTotal}, {vishal: vTotal}];
  return sumOfScore;

}


QueryStudentResults.prototype.getSubjectTopper = function (subjectName, studentResults) {

  // name of student with highest mark for subject (input)
  // for each subject, evaluate who has the higest mark and log out the name of student
  // too much nested if statements, sorry. 

  var aMath = studentResults[0]["marks"]["Maths"];
  var aCS = studentResults[0]["marks"]["ComputerScience"];
  var aEng = studentResults[0]["marks"]["English"];
  var aTotal = aMath + aCS + aEng

  var mMath = studentResults[1]["marks"]["Maths"];
  var mCS = studentResults[1]["marks"]["ComputerScience"];
  var mEng = studentResults[1]["marks"]["English"];
  var mTotal = mMath + mCS + mEng

  var vMath = studentResults[2]["marks"]["Maths"];
  var vCS = studentResults[2]["marks"]["ComputerScience"];
  var vEng = studentResults[2]["marks"]["English"];
  var vTotal = vMath + vCS + vEng
  
  
  if (subjectName === "Maths") {
      //evaluate who has the higest mark in math
      if (aMath > mMath && vMath) {
          return "Ananad";
      } else if (mMath > vMath && aMath) {
          return "Michael";
      } else if (vMath > mMath && aMath) {
          return "Vishal";
      }
  };

  if (subjectName === "Computer Science") {
          if (aCS > mCS && vCS) {
          return "Ananad";
      } else if (mCS > vCS && aCS) {
          return "Michael";
      } else if (vCS > mCS && aCS) {
          return "Vishal";
  };

  
}
module.exports = QueryStudentResults;
