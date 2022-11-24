<template>
  <div class="modules">
    <NuxtLink href="/nuxt-auth">
      <div class="card">
        <div class="box">
          <div class="content">
            <h2>🔐</h2>
            <h3>nuxt-auth</h3>
            <p>Nuxt user authentication and sessions via NextAuth.js.</p>
          </div>
        </div>
      </div>
    </NuxtLink>

    <NuxtLink href="/nuxt-session">
      <div class="card">
        <div class="box">
          <div class="content">
            <h2>📝</h2>
            <h3>nuxt-session</h3>
            <p>Nuxt session middleware to get a persistent session per app user, e.g., to store data across multiple requests.</p>
          </div>
        </div>
      </div>
    </NuxtLink>

    <NuxtLink href="/nuxt-parse">
      <div class="card">
        <div class="box">
          <div class="content">
            <h2>💻</h2>
            <h3>nuxt-parse</h3>
            <p>A nuxt focused package to make data validation and parsing easy.</p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.modules {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

.modules .card {
  position: relative;
  min-width: 366px;
  height: 320px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
  inset -5px -5px 15px rgba(255, 255, 255, 0.1),
  5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin-right: 50px;
  transition: 0.5s;
  cursor: pointer;

  @apply my-5 min-w-[310px] lg:min-w-[366px] lg:my-0;
}

.modules .card:hover {
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
  inset -5px -5px 15px rgba(255, 255, 255, 0.3),
  5px 5px 15px rgba(0, 0, 0, 0.8), -5px -5px 15px rgba(255, 255, 255, 0.4);
}

.modules .card .box {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;
}

.modules .card .box .content {
  padding: 20px;
  text-align: center;
}

.modules .card .box .content h2 {
  position: absolute;
  top: -10px;
  right: 30px;
  font-size: 8rem;
  color: rgba(255, 255, 255, 0.1);
}

.modules .card .box .content h3 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  z-index: 1;
  transition: 0.5s;
  margin-bottom: 15px;
}

.modules .card .box .content p {
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  transition: 0.5s;
}

.modules .card .box .content a {
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  background: black;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  margin-top: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
.modules .card .box .content a:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  background: #fff;
  color: #000;
}
</style>
