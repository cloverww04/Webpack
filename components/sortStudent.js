import { students, houses } from '../utils/houses';
import createId from './createID';
import studentsOnDom from '../utils/studentsOnDom';

const sortStudent = (e) => {
  e.preventDefault();
  const sortingHat = houses[Math.floor(Math.random() * houses.length)];

  if (e.target.id === 'sorting') {
    const student = document.querySelector('#student-name');
    students.push({
      id: createId(students),
      name: student.value,
      house: sortingHat.house,
      crest: sortingHat.crest,
    });

    student.value = '';
    studentsOnDom('#students', students);
  }
};
export default sortStudent;
