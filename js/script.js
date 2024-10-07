//////////////// Array of Status Codes ///////////////
const statusCodes = [
    100, 101, 102, 103,200, 201, 202, 203, 204,205, 
    206, 207, 208, 218, 226,300, 301, 302, 303,304,
    305, 306, 307, 308,400, 401, 402, 403, 404,405,
    406, 407, 408, 409, 410, 411,412, 413, 414,415,
    416, 417, 418, 419, 420, 421, 422, 423, 424,425,
    426, 428, 429, 430, 440, 444, 449, 431, 451,460,
    463, 464, 494, 495, 496, 497, 498, 499,500, 501,
    502, 503, 504, 505, 506, 507, 508, 510, 511, 520,
    521, 522, 523, 524, 525, 526, 527,529, 530, 561, 
    598, 599, 999
];
////////////////////////////////////////////////////

///////////// Declaring the variables /////////////////
const search_btn = document.querySelector(".search_btn");
const search_bar = document.querySelector(".input");

const pop_up = document.querySelector(".pop_up");
const body = document.querySelector(".body");
const close_icon = document.querySelector(".close_icon");

const pop_title = document.querySelector(".pop_title");

///////////////// Welcome msg display when window load /////////////////
window.addEventListener("load", () => {
    pop_title.textContent = `Enter Http status code to understand better😎`
    pop_title.classList.add("fs-4");
    pop_up.classList.remove("d-none");
    body.classList.add("pop_up_bg");
    search_bar.setAttribute('disabled', 'disabled');
})
////////////////////////////////////////////////////////////////////////


/////////////////// Event to close the pop up msg /////////////////////
close_icon.addEventListener("click", () => {
    pop_up.classList.add("d-none");
    body.classList.remove("pop_up_bg");
    search_bar.removeAttribute('disabled');
})
////////////////////////////////////////////////////////////////////////

/////////////// Event to get user input ////////////////////////////////
search_btn.addEventListener("click", () => {

    const img = document.querySelector(".img img");
    const search_bar_value = Number(search_bar.value.trim());

    if (isThere(statusCodes, search_bar_value)) {
        img.setAttribute("src", `https://http.dog/[${search_bar_value}].jpg`);
        search_bar.value = "";
    }
    else { //// Display pop up
        pop_title.textContent = `Please Give Valid Search🙄`
        pop_up.classList.remove("d-none");
        body.classList.add("pop_up_bg");
        search_bar.setAttribute('disabled', 'disabled');
        search_bar.value = "";
    }

});
/////////////////////////////////////////////////////////////////

////////////// Function to find num in array ///////////////////
function isThere(array, input) {
    for (let num of array) {
        if (num == input) {
            return true;
        }
    }
    return false;
}
//////////////////////////////////////////////////////////////