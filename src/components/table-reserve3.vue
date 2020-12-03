<template>
  <div>
    <navbar />
    <div id="maindiv">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 d-none d-lg-block left-div">
            <img src="../assets/table.jpg" />
          </div>
          <div class="col-lg-8 right-div">
            <div class="outer-login">
              <div class="row px-3">
                <div
                  class="col-sm-9 col-md-9 col-lg-10 card flex-row mx-auto px-0 form"
                >
                  <div class="card-body" id="tableres">
                    <h3 class="title text-center mt-4">
                      Welcome to {{restaurant.restaurantName}}
                    </h3>
                    <b-form class="form-box px-3">
                      <h6 class="ques">
                        Do You want to pre-order food as well?
                      </h6>
                      <label
                        >&nbsp;&nbsp;<input
                          type="radio"
                          name="optradio"
                          v-model="x"
                          value="yes"
                        />&nbsp;&nbsp;Yes</label
                      >&nbsp;&nbsp;&nbsp;&nbsp;
                      <label
                        >&nbsp;&nbsp;<input
                          type="radio"
                          name="optradio"
                          v-model="x"
                          value="no"
                        />&nbsp;&nbsp;No</label
                      >&nbsp;&nbsp;&nbsp;&nbsp;
                      <br />
                      <a
                        href="#popup2"
                        class="btn btn-secondary"
                        @click="Menu"
                        v-if="x == 'yes'"
                        >Select Food items</a
                      >
                      <p v-if="error">{{ error }}</p>
                      <div class="mb-3" v-if="!error && x == 'no'">
                        <b-button
                          type="submit"
                          class="btn btn-block text-uppercase"
                          @click.prevent="Book"
                        >
                          Reserve Table
                        </b-button>
                      </div>
                    </b-form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="popup" id="popup2">
        <div class="popup__content food-order">
          <div class="food-order-heading">
            <h1>ORDER FOOD</h1>
          </div>
          <a href="#tableres" class="popup__close">&times;</a>
          <div class="container food-order-container">
            <div class="row food-order-pane">
              <div class="col-lg-6 col-md-12 u-add-height u-made-scroll">
                <h3 class="food-order-pane-heading">FOOD ITEMS</h3>
                <ul class="food-order-items" v-if="menu">
                  <li class="custom" v-for="item in menu" :key="item._id">
                    {{ item.name }}&nbsp;{{ item.price }}<br />
                    {{ item.category.cuisine }}&nbsp;{{
                      item.category.FoodPreferences
                    }}
                    <div class="hover-text">
                      Allergens :
                      <span
                        v-for="allergy in item.category.possibleAllergics"
                        :key="allergy"
                        >{{ allergy }}&nbsp;</span
                      >
                    </div>
                    <b-form-spinbutton
                      class="my-spin-button"
                      min="0"
                      @change="Insert($event, item)"
                    >
                    </b-form-spinbutton>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6 col-md-12 u-add-height u-made-scroll">
                <h3 class="food-order-pane-heading">CART</h3>
                <ul class="food-order-items" v-if="order">
                  <li class="custom" v-for="item in order" :key="item._id">
                    {{ item.name }}&nbsp;<br />
                    {{ item.quantity }}&nbsp;
                  </li>
                </ul>
                <a
                  class="btn btn--blue order-now-btn"
                  @click="order1()"
                  href="#tableres"
                >
                  Order Food and Book Table&rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./navbar.vue";
import axios from "axios";
import { mapGetters } from "vuex";
import { mapState } from "vuex";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      x: "no",
      error: "",
      menu: "",
      order: [],
      val: "",
    };
  },
  methods: {
    Book() {
      const helper = this;
      try {
        axios.post(
          "/tablereserve",
          {
            uid: helper.user.uid,
            restaurant_name: helper.restaurant.restaurantName,
            Adults: helper.restaurant.people,
            Time: helper.restaurant.time,
            Duration: helper.restaurant.duration,
          },
          {
            headers: {
              authorization: this.user.ya,
            },
          }
        );
        helper.error = "Request Submitted Successfully";
        helper.restaurant.restaurantName = null;
        helper.restaurant = null;
      } catch (error) {
        this.error = error.message;
      }
    },
    Menu() {
      const helper = this;
      axios
        .get("/menu", {
          headers: {
            authorization: this.user.ya,
          },
          params: {
            name: this.restaurant.restaurantName,
          },
        })
        .then(function (response) {
          console.log(response);
          helper.menu = response.data.menu;
          console.log("helper.menu");
        });
    },
    order1() {
      const helper = this;
      console.log(this.Orderfinal);
      if (this.Orderfinal[0] !== undefined) {
        try {
          axios.post(
            "/selfservice",
            {
              uid: helper.user.uid,
              items: helper.Orderfinal,
              restaurant_name: helper.restaurant.restaurantName,
              preorder: true,
              date: helper.restaurant.time,
            },
            {
              headers: {
                authorization: this.user.ya,
              },
            }
          );
        } catch (error) {
          helper.error = error.message;
        }
        helper.Book();
        this.error = "Your booking is done successfully";
      } else {
        this.error = "No items were selected";
      }
    },
    Insert(event, item) {
      this.val = event;
      for (var i = 0; i < this.order.length; i++) {
        if (this.order[i].id == item._id) {
          this.order[i].quantity = this.val;
          this.val = 0;
          break;
        }
      }
      if (this.val != 0) {
        this.order.push({ quantity: this.val, id: item._id, name: item.name }); //How to add object to an existing array
      }
      console.log(this.order);
    },
  },
  computed: {
    ...mapGetters(["user"]),
    ...mapState(["restaurant"]),
    Orderfinal() {
      var Orderfinal = this.order.map((product) => {
        if (product.quantity != 0) {
          return {
            name: product.name,
            count: product.quantity,
          };
        }
      });
      return Orderfinal;
    },
  },
};
</script>

<style lang="scss" scoped>
.ques {
  margin-top: 1.5rem;
}
.btn-secondary {
  background-color: #006a71;
  border-radius: 1.75rem;
  margin-top: 1rem;
}
.card-body {
  max-height: 40rem;
  max-width: 30rem;
  padding-top: 6rem;
}

.title {
  margin-bottom: 3rem;
}

.form-input {
  position: relative;
}

.form-input input {
  width: 100%;
  height: 2.8rem;
  padding-left: 3rem;
  margin-bottom: 1.4rem;
  box-sizing: border-box;
  box-shadow: none;
  border: 1px solid #00000020;
  outline: none;
  background: transparent;
}

.form-input span {
  position: absolute;
  top: 0.7rem;
  padding-left: 1.1rem;
  color: #00828b;
}

.form-input input::placeholder {
  color: black;
  padding-left: 0px;
}

.form-input input:focus,
.form-input input:valid {
  border: 2px solid #00828b;
}

.form-input input:focus::placeholder {
  color: #454b69;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #00828b !important;
  border: 0px;
}

.form-box button[type="submit"] {
  margin-top: 0.7rem;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  background: #006a71;
  color: #fff !important;
  font-size: 90%;
  font-weight: bold;
  letter-spacing: 0.1rem;
  transition: 0.5s;
  padding: 12px;
  margin-top: 4rem;
}
router-link a {
  text-decoration: none;
}

.form-box button[type="submit"]:hover {
  background: #0069d9;
}

.forget-link,
.register-link {
  color: #006a71;
  font-weight: bold;
}

.forget-link:hover,
.register-link:hover {
  color: #0069d9;
  text-decoration: none;
}

.form-box .btn-social {
  color: white !important;
  border: 0;
  font-weight: bold;
}

#maindiv {
  display: flex;
  background: #cbeaed;
  position: fixed;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 3.3rem;
}
.container {
  background: #00828b;
}
.carousel {
  max-height: 38rem;
}

img {
  max-height: 38rem;
}
.container {
  background: white;
  box-shadow: 0.5rem 0.5rem 1.2rem #002225;
}
.card {
  overflow: hidden;
  border: 0 !important;
  background: transparent;
}
.left-div {
  padding: 0rem;
}
.right-div {
  background-color: #ffffdd;
}
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
}

.popup {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba($color-black, 0.8);
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  overflow-y: auto;

  &__content {
    @include absCenter;
    width: 80%;
    height: 40rem;
    background-color: $color-white;
    box-shadow: 0 2rem 4rem rgba($color-black, 0.2);
    border-radius: 3px;
    display: table;
    overflow: hidden;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.25);
    transition: all 0.5s 0.2s;
    overflow-y: auto;
  }

  &__text {
    font-size: 0.9rem;
    margin-bottom: 1rem;

    -moz-column-count: 2;
    -moz-column-gap: 1rem; //1em = 14px;
    -moz-column-rule: 1px solid $color-grey-light-2;

    column-count: 2;
    column-gap: 1rem; //1em = 14px;
    column-rule: 1px solid $color-grey-light-2;

    -moz-hyphens: auto;
    -ms-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
  }

  //Open states
  &:target {
    opacity: 1;
    visibility: visible;
  }

  &:target &__content {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  &__close {
    &:link,
    &:visited {
      color: $color-grey-dark;
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 3rem;
      text-decoration: none;
      display: inline-block;
      transition: all 0.2s;
      line-height: 1;
    }

    &:hover {
      color: $color-primary;
    }
  }
}
.my-container {
  height: 90vh;
  margin: 2rem auto;
  border-radius: 5px;
  overflow: hidden;
  padding-left: 1.1rem;
  background-image: linear-gradient(to right bottom, #ddd6f3, #faaca8);
}
.my-row {
  width: 100%;
  height: 100%;
}
.left-popup {
  background-image: url(../assets/resort1.jpg);
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  box-shadow: 0 1rem 2rem rgba($color-black, 0.2);
}
.menu-card {
  height: 95%;
  opacity: 0.7;
  background-color: white;
  margin: 1rem 0.75rem;
  margin-left: 1.2rem;
  border-radius: 5px;
  box-shadow: 1rem 1rem 4rem #002225;
  overflow-y: auto;
}
.my-col {
  padding: 0.2rem;
  height: 100%;
}
.menu-heading {
  margin-left: 8rem;
}
.menu-card-content {
  margin-left: 1rem;
}
.menu-popup {
  background-image: linear-gradient(to right bottom, #cc2b5e, #753a88);
  padding: 0.5rem;
}

.food-order {
  background-image: url(../assets/resort2.jpg);
  background-size: cover;
  filter: blur(0.1px);
  &-heading {
    color: white;
    text-shadow: 1px 1px #fe4902, 2px 2px #fe4902, 3px 3px #fe4902;
    width: 28%;
    margin: 1rem auto;
    &:hover {
      position: relative;
      top: -3px;
      left: -3px;
      text-shadow: 1px 1px #fe4902, 2px 2px #fe4902, 3px 3px #fe4902,
        4px 4px #fe4902, 5px 5px #fe4902, 6px 6px #fe4902;
    }
  }
  &-pane {
    &-heading {
      color: #2a2a2a;
      text-shadow: 1px 1px #fe4902, 2px 2px #fe4902, 3px 3px #fe4902;
      font-size: 2.2rem;
    }
  }
  &-container {
    opacity: 0.85;
    border-radius: 5px;
  }
  &-items {
    text-transform: uppercase;
    list-style: square outside none;
  }
  &-types {
    font-family: "Ubuntu", sans-serif;
    font-weight: bold;
    text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
      0px -4px 10px rgba(255, 255, 255, 0.3);
  }
}
.u-add-height {
  height: 30rem;
}
.u-made-scroll {
  overflow-y: auto;
}
.u-made-scroll::-webkit-scrollbar {
  width: 12px;
}

.u-made-scroll::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.u-made-scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
.custom {
  font-weight: bold;
  font-style: italic;
  line-height: 2;
  &:hover > .hover-text {
    display: block;
    position: absolute;
    left: 10rem;
  }
}
.my-spin-button {
  width: 20%;
  font-weight: bold;
  background-color: lightgrey;
  height: 2rem;
}
.hover-text {
  display: none;
  font-size: 0.8rem;
  width: 50%;
}

.btn {
  &,
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1rem 3.5rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;

    border: none;
    cursor: pointer;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba($color-black, 0.2);
    color: white;

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba($color-black, 0.2);
  }

  &--white {
    background-color: $color-white;
    color: $color-grey-dark;

    &::after {
      background-color: $color-white;
    }
  }

  &--blue {
    background-color: #ff9900;
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: black;
    &::after {
      background-color: #ff9900;
    }
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  &--animated {
    animation: moveInBottom 0.5s ease-out 0.75s;
    animation-fill-mode: backwards;
  }
}
.order-now-btn {
  position: absolute;
  bottom: 1rem;
  left: 10rem;
}
</style>