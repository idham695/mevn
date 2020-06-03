<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="blog.title"
          required
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="blog.description"
          name="description"
        />
      </div>

      <button @click="saveBlog" class="btn btn-primary">Submit</button>
    </div>

    <div v-else>
      <h4>You submited successfully</h4>
      <button class="btn btn-success" @click="newBlog">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BlogDataService from "../services/BlogDataService";

@Component
export default class AddBlog extends Vue {
  private blog: any = {
    id: null,
    title: "",
    description: "",
    published: false
  };

  private submitted: boolean = false;

  saveBlog() {
    var data = {
      title: this.blog.title,
      description: this.blog.description
    };

    BlogDataService.create(data)
      .then(res => {
        this.blog.id = res.data.id;
        console.log(res.data);
        this.submitted = true;
      })
      .catch(e => {
        console.log(e);
      });
  }

  newBlog() {
    this.submitted = false;
    this.blog = {};
  }
}
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
