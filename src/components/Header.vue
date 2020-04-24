<template>
    <header>
        <div class="logo">

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

.menu {
  width: 70vw;
  height: 8vh;
}

.menu > ul {
  width: 20vw;
  height: 8vh;
  margin: 0;
  float: right;
  display: flex;
  justify-content: space-around
}

ul > li {
  display: inline-block;
  padding: 2vh 2vw 2vh 2vw;
  margin: 0;
  color: white;
  text-decoration: none;
  font-size: 25px;
  cursor: pointer;
}


</style>