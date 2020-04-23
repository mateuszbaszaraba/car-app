<template>
    <header>
        <div class="logo">

        </div>
        <div class="menu">
            <ul>
                <router-link tag="li" to="/">Home</router-link>
                <router-link tag="li" to="/car">Cars</router-link>
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
  background-color: red;
}

.menu {
  width: 70vw;
  height: 8vh;
  background-color: green;
}

.menu > ul {
  width: 50vw;
  height: 8vh;
  background-color: indigo;
  margin: 0;
}

ul > li {
  display: inline-block;
  background-color: lightcoral;
  padding: 2vh 2vw 2vh 2vw;
  margin: 0;

}

</style>