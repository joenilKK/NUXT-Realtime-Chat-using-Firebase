<template>
  <header>
    <div class="logo-wrapper">
      <span>LOGO</span>
    </div>
    <div class="navigation-wrapper">
      <nav>
        <ul>
          <li>
            <NuxtLink href="/">Homes</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/about">Abouts</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    
  </header>
</template>

<style scoped>
header{
  background: red;
  border-radius: 10px;
  background: rgba(160, 255, 240, 0.23);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.1px);
  -webkit-backdrop-filter: blur(2.1px);
  max-width: 1200px;
  margin: 20px auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.navigation-wrapper ul{
  list-style: none;
  display: flex;
  gap: 15px;
}
.navigation-wrapper ul li a{
  color: #FFFFFF;
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  font-family: monospace;
  transition: all 300ms ease-in-out;
}
.navigation-wrapper ul li a:hover{
  color: #FFFFFF;
  text-shadow: 3px 5px 2px #474747;
  
  }
</style>