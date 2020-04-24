<template>
    <header>
        <div class="logo">
          <div class="logoimg">
            <router-link tag="div" to="/"><h1><span style="color: red">Car</span><span style="color: white">Shop</span></h1></router-link>
            <!-- <h1><span style="color: red">Car</span><span style="color: white">Shop</span></h1> -->
          </div>
        </div>
        <div class="menu">
            <ul>
                <router-link tag="li" to="/" active-class="active" exact>Home</router-link>
                <router-link tag="li" to="/car" active-class="active">Cars</router-link>
            </ul>
        </div>
    </header>
</template>

<style lang="scss" scoped>

$colors: (
  blackColor: #1D1D1D,
  goldColor: #E4C68B,
  bgColor: #FCFCFC
);

@function color($color-name) {
  @return map-get($colors, $color-name)
}

.active {
  color: red
}

header {
  background-color: color(blackColor);
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: space-around;
}

.logo {
  width: 30vw;
  height: 8vh;
}

.logoimg {
  width: 13.8vw;
  height: 8vh;
  margin: 0;
  padding-top: 0;
  cursor: pointer;
}

.logoimg h1 {
  margin: 0;
  padding: 1vh 0 1.2vh 2vw;
}

.menu {
  width: 70vw;
  height: 8vh;
}

.menu > ul {
  width: 18vw;
  height: 8vh;
  margin: 0;
  float: right;
  display: flex;
  justify-content: space-between;
  margin-right: 3vw;
}

ul > li {
  display: inline-block;
  padding: 2vh 2vw 2vh 2vw;
  margin: 0;
  color: white;
  transition: 0.2s;
  text-decoration: none;
  font-size: 23px;
  cursor: pointer;
}


</style>