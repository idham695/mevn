<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search By Title"
          v-model="title"
        />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" @click="searchTitle">
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Blogs List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(blog, index) in blogs"
          :key="index"
          @click="setActiveBlog(blog, index)"
        >
          {{ blog.title }}
        </li>
      </ul>

      <button
        class="mt-3 btn btn-sm btn btn-danger"
        @click="removeAllBlogs"
        type="button"
      >
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentBlog">
        <h4>Blog</h4>
        <div>
          <label>
            <strong>Title :</strong>
          </label>
          {{ currentBlog.title }}
        </div>
        <div>
          <label>
            <strong>Description :</strong>
          </label>
          {{ currentBlog.description }}
        </div>
        <div>
          <label>
            <strong>Status :</strong>
          </label>
          {{ currentBlog.published ? "Published" : "Pending" }}
        </div>

        <a :href="'/blogs' + currentBlog.id" class="badge badge-warning"
          >Edit</a
        >
      </div>
      <div v-else>
        <br />
        <p>Please click a blog.....</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BlogDataService from "../services/BlogDataService";

@Component
export default class BlogsList extends Vue {
  private blogs: any[] = [];
  private currentBlog: any = null;
  private currentIndex: number = -1;
  private title: string = "";

  retrieveBlogs() {
    BlogDataService.getAll()
      .then(res => {
        this.blogs = res.data;
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveBlogs();
    this.currentBlog = null;
    this.currentIndex = -1;
  }

  setActiveBlog(blog: any, index: number) {
    this.currentBlog = blog;
    this.currentIndex = index;
  }

  removeAllBlogs() {
    BlogDataService.deleteAll()
      .then(res => {
        console.log(res.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    BlogDataService.findByTitle(this.title)
      .then(res => {
        this.blogs = res.data;
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  mounted() {
    this.retrieveBlogs();
  }
}
</script>

<style scoped>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
