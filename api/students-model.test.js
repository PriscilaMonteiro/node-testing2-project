/* eslint-disable no-undef */
const Students = require('./students-model');
const db = require('../data/dbConfig');


test('it is the correct environment for the tests', () => {
    expect(process.env.NODE_ENV).toBe('testing');
});

beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
});
beforeEach(async () => {
    await db.seed.run();
});

afterAll(async () => {
    await db.destroy();
});

describe('Student model', () => {
  describe('getAll', () => {
    it('returns all students in the table', async () => {
      const students = await Students.getAll();
      expect(students).toHaveLength(4);
    });
    it('returns the correct student shape', async () => {
      const students = await Students.getAll();
      expect(students[0]).toHaveProperty('student_name', 'Priscila');
      expect(students[1]).toMatchObject({ student_id: 2, student_name: 'Bob' });
    });
  });

  describe('getById', () => {
    it('resolves a student with given student_id, student_name', async () => {
      const result = await Students.getById(2)
      expect(result).toMatchObject({ student_id: 2, student_name: 'Bob' })
    })
  })

  describe('create', () => {
    it('creates a new student in db', async () => {
      await Students.create({ student_name: 'Clara' })
      const [Clara] = await db('students').where('student_id', 5)
      expect(Clara).toMatchObject({ student_id: 5, student_name: 'Clara' })
    })
    it('resolves the new student with student_id, student_name', async () => {
      const result = await Students.create({ student_name: 'Clara' })
      expect(result).toMatchObject({ student_id: 5, student_name: 'Clara' })
    })
  })

  describe('Students.remove', () => {
    it('removes a student from the table', async () => {
      await Students.remove(1);
      const currentStudents = await db('students');
      expect(currentStudents).toHaveLength(3);
    });
    it('returns the deleted student', async () => {
      const removed = await Students.remove(1);
      expect(removed).toMatchObject({ student_id: 1, student_name: 'Priscila'});
    });
  });
});
