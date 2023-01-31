<script lang="ts" setup>
import testimonials from '../../data/testimonials'
import Testimonial from '~/components/landing/Testimonial.vue'
</script>

<template>
  <div class="TestimonialsGrid lg:grid">
    <div>
      <Testimonial
          :testimonial="testimonials[0]"
      />
      <Testimonial
          :testimonial="testimonials[3]"
      />
      <Testimonial
          :testimonial="testimonials[6]"
      />
      <Testimonial
          :testimonial="testimonials[9]"
      />
    </div>
    <div>
      <Testimonial
          :testimonial="testimonials[1]"
      />
      <Testimonial
          :testimonial="testimonials[4]"
      />
      <Testimonial
          :testimonial="testimonials[7]"
      />
      <Testimonial
          :testimonial="testimonials[10]"
      />
    </div>
    <div>
      <Testimonial
          :testimonial="testimonials[2]"
      />
      <Testimonial
          :testimonial="testimonials[5]"
      />
      <Testimonial
          :testimonial="testimonials[8]"
      />
      <Testimonial
          :testimonial="testimonials[11]"
      />
    </div>
  </div>
</template>

<style scoped>
.TestimonialsGrid {
  gap: 2rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.GradientText {
  text-align: center;

  background: linear-gradient(to right, #81F6D4 20%, #12a87b 40%, #0FCF97 60%, #81F6D4 80%);
  background-size: 200% auto;

  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 1s linear infinite;

@keyframes shine {
  to {
    background-position: 200% center;
  }
}

}
</style>
