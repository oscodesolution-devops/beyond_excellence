import axios from 'axios';

class CourseService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:4000/admin',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  async uploadCourse(courseData) {
    try {
      const response = await this.api.post('/courseUpload', courseData);
      return response.data;
    } catch (error) {
      console.error('Error uploading course:', error);
      throw error;
    }
  }
}

const courseService = new CourseService();

export default courseService;