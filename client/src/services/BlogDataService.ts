import http from "../http-common";

class BlogdataService {
  getAll() {
    return http.get("/blogs");
  }

  get(id: string) {
    return http.get(`/blogs/${id}`);
  }

  create(data: any) {
    return http.post("/blogs", data);
  }

  update(id: string, data: any) {
    return http.put(`/blogs/${id}`, data);
  }

  delete(id: string) {
    return http.delete(`/blogs/${id}`);
  }

  deleteAll() {
    return http.delete(`/blogs`);
  }

  findByTitle(title: string) {
    return http.get(`/blogs?title=${title}`);
  }
}

export default new BlogdataService();
