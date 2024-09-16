// The provided course information. Skeleton code from given codesandbox instructions.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    // const result = [
    //   {
    //     id: 125,
    //     avg: 0.985, // (47 + 150) / (50 + 150)
    //     1: 0.94, // 47 / 50
    //     2: 1.0 // 150 / 150
    //   },
    //   {
    //     id: 132,
    //     avg: 0.82, // (39 + 125) / (50 + 150)
    //     1: 0.78, // 39 / 50
    //     2: 0.833 // late: (140 - 15) / 150
    //   }
    // ];

    // declare empty result array to append objects
    const result = [];

    // declare empty student object to collect data
    let student = {};
    student['id'] = 125;

    // declare student objects to collect data
    const student_a = {
      id: 125
    };

    const student_b = {
      id: 132
    };

    let score_a = 0;
    let score_b = 0;

    let sub_a_count = 0;
    let sub_b_count = 0;

    let avg_a = 0;
    let avg_b = 0;

    
    // const d = new Date("3156-11-15");
    // const date = new Date("3156-11-15");

    // console.log(d.getTime() === date.getTime());

    // iterate through the parameter submissions (LearnSubmissions)
    for(let i = 0; i < submissions.length; i++){  // total of 5 submissions 

      // let due_date = ag.assignments[i]
      // if(submissions[i].submission.submitted_at.getTime() <= )

      // if the detected learner has an id number of 125
      if(submissions[i].learner_id === student_a.id){
        // add his score to his previous record
        score_a += submissions[i].submission.score;
        //console.log(score_a);
        // increment by 1 to count numbers of submission by student 125
        sub_a_count++;

      }

      // if the detected learner has an id number of 132
      else if(submissions[i].learner_id === student_b.id){
        // add his score to his previous record
        score_b += submissions[i].submission.score;
        console.log(submissions[i].submission.score);
        // increment by 1 to counter numbers of submission by student 132
        sub_b_count++;
      }
      
      // student['id'] = 125;
      // console.log(student);
    }
    student_a['score'] = score_a;
    student_b['score'] = score_b;
    console.log(student_b);


    // console.log(score_a, score_b);
    
    //return student;
    // return result; <-- un-note this later
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);