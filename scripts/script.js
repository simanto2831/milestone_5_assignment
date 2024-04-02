const buttons = document.getElementsByClassName("seat_btn");
let seat_left = 40;
let seat_count = 0;
// step-1 : selecting all seat buttons by loop
for (const button of buttons) {
  // step-2 : counting seat-remaining
  button.addEventListener("click", function (e) {
    seat_left -= 1;
    setInnerText("seat_left", seat_left);
    button.setAttribute("disabled", "disabled");
    button.classList.add("bg_green");

    //   step-3 : counting total seat booked
    seat_count += 1;
    setInnerText("seat_count", seat_count);

    // step-7 : get tracking of booking seat and disable of booking seat
    if (seat_count > 3) {
      alert("You cannot book more than 4 seats");

      // disabled all seat buttons
      for (const button of buttons) {
        button.setAttribute("disabled", "disabled");
      }
    }

    //   step-4 : get the selected seat and its details
    const seat_name = e.target.innerText;
    const all_booked_seat_container_div = document.getElementById(
      "all_booked_seat_container_div"
    );
    const div = document.createElement("div");

    div.classList.add("booked_seat_container");
    const seat_name_btn = document.createElement("p");
    seat_name_btn.innerText = seat_name;
    const economy = document.createElement("p");
    economy.innerText = "Economy";
    const price = document.createElement("p");
    price.innerText = "550";

    div.appendChild(seat_name_btn);
    div.appendChild(economy);
    div.appendChild(price);

    all_booked_seat_container_div.appendChild(div);

    // step-5 : calculate the total price
    const seatPrice = parseInt(price.innerText);

    const total_price = document.getElementById("total_price").innerText;
    const sum = parseInt(total_price) + seatPrice;
    document.getElementById("total_price").innerText = sum;

    // step-6 : calculate the grand total
    applyCoupon(seatPrice);
  });
}

// function for setInnerText
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

// function for apply coupon-text
document.getElementById("grand_total").innerText = "000";

function applyCoupon(value) {
  const coupon_input = document.getElementById("coupon_input");
  let grand_total = parseInt(document.getElementById("total_price").innerText);

  if (coupon_input.value == "NEW15") {
    grand_total *= 0.85;
  } else if (coupon_input.value == "COUPLE20") {
    grand_total *= 0.8;
  }

  document.getElementById("grand_total").innerText = grand_total;
}

// last step : enabling success section
function handleFormSubmit() {
  const nameInp = document.querySelector('input[name = "name"]');
  const phoneInp = document.querySelector('input[name="phone"]');
  const emailInp = document.querySelector('input[name="email"]');

  if (
    nameInp.value.trim() === "" ||
    phoneInp.value.trim() === "" ||
    emailInp.value.trim() === ""
  ) {
    alert("Please fill in all the required fields");
    return;
  }

  document.getElementById("success_section").classList.remove("hidden");
  document.getElementById("header_section").classList.add("hidden");
  document.getElementById("offer_section").classList.add("hidden");
  document.getElementById("ticket").classList.add("hidden");
  document.getElementById("footer_section").classList.add("hidden");
}

const next_btn = document.getElementById("next_btn");
next_btn.addEventListener("click", handleFormSubmit);
