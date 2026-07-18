/* ============================================================
   COURSE DATA — University of Calicut / BSc Computer Science
   Source: CUFYUGP Regulations 2024, BSc_2024.pdf.
   Minor-discipline courses ("Minor Course 1", etc.) are skipped
   since they depend on each student's chosen minor and aren't
   fixed CS subjects.

   To edit this course's subjects: just edit the arrays below.
   Nothing in resources.html needs to change.
   ============================================================ */

window.COURSE_DATA = {
  meta: {
    universityLabel: "University of Calicut",
    courseLabel: "B.Sc. Computer Science",
    syllabusUrl: "", // no syllabus link sourced yet — syllabus button will show the fallback note
    // See calicut-bca.js for how this list is used and how to attach
    // real URLs to a subject's buttons via a `links` object.
    paperYears: [2026, 2025, 2024, 2023, 2022],
  },
  semesters: {
    1: [
      { code: 'CSC1CJ101', name: 'Fundamentals of Computers & Computational Thinking' },
      { code: 'ENG1FA101', name: 'English' },
    ],
    2: [
      { code: 'CSC2CJ101', name: 'Fundamentals of Programming (C Language)' },
      { code: 'ENG2FA103', name: 'English' },
    ],
    3: [
      { code: 'CSC3CJ201', name: 'Software Project Management' },
      { code: 'CSC3CJ202', name: 'Data Structures and Algorithm' },
      { code: 'XXX3FM107', name: 'Kerala Knowledge System' },
      { code: 'ENG3FV108', name: 'Value-Added Course 1' },
    ],
    4: [
      { code: 'CSC4CJ203', name: 'Database Management System' },
      { code: 'CSC4CJ204', name: 'Python Programming' },
      { code: 'CSC4CJ205', name: 'Computer Networks' },
      { code: 'ENG4FV109', name: 'Value-Added Course 2' },
      { code: 'XXX4FV110', name: 'Value-Added Course 3' },
      { code: 'ENG4FS111', name: 'Skill Enhancement Course 1 (P)' },
    ],
    5: [
      { code: 'CSC5CJ301', name: 'Data Mining' },
      { code: 'CSC5CJ302', name: 'Object Oriented Programming (Java)' },
      { code: 'CSC5CJ303', name: 'Full Stack Web Development' },
      { code: 'CSC5EJ305', name: 'Elective Course 1 in Major' },
      { code: 'CSC5EJ306', name: 'Elective Course 2 in Major' },
      { code: 'CSC5FS112', name: 'Introduction to Digital Marketing' },
    ],
    6: [
      { code: 'CSC6CJ304', name: 'Digital Electronics and Computer Architecture' },
      { code: 'CSC6CJ305', name: 'Principles of Operating Systems' },
      { code: 'CSC6CJ306', name: 'Introduction to Artificial Intelligence & Machine Learning' },
      { code: 'CSC6CJ311', name: 'Elective Course 3 in Major' },
      { code: 'CSC6CJ312', name: 'Elective Course 4 in Major' },
      { code: 'CSC6FS113', name: 'Project Implementation' },
      { code: 'CSC6CJ349', name: 'Internship in Major' },
    ],
    7: [
      { code: 'CSC7CJ401', name: 'Theory of Computation' },
      { code: 'CSC7CJ402', name: 'System Security' },
      { code: 'CSC7CJ403', name: 'Advanced Data Structures and Algorithms' },
      { code: 'CSC7CJ404', name: 'Block Chain Technology' },
      { code: 'CSC7CJ405', name: 'Internet of Things' },
    ],
    8: [
      { code: 'CSC8CJ406', name: 'Compiler Design' },
      { code: 'CSC8CJ407', name: 'Client-Server Architecture' },
      { code: 'CSC8CJ408', name: 'Parallel Computing' },
      { code: 'CSC8EJXXX-5', name: 'Elective Course 5 in Major' },
      { code: 'CSC8EJXXX-6', name: 'Elective Course 6 in Major' },
      { code: 'CSC8EJXXX-7', name: 'Elective Course 7 in Major' },
    ],
  },
};
