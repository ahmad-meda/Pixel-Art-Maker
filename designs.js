// Select color input
// Select size input
let block_color = $("#colorPicker");

let table_height = $("#input_height");

let table_width = $("#input_width");

let canvas = document.getElementById('pixel_canvas');

//------------------------------------------------------------
// When size is submitted by the user, call makeGrid()
function make_Grid() {

    canvas.innerHTML = "";
    let width_value = table_width.val();
    let height_value = table_height.val();
//replaces the color or adds a new color when clicked..
    let addEvent = function(unit) {

        unit.addEventListener('click', function() {
            unit.style.backgroundColor = block_color.val();
        });
    }
//---------------------------------------------------------------
//for loop to get the number of coloums..
    for (let x = 0; x < height_value; x++) {
        let my_line = canvas.insertRow(x);
//nested loop to count the number of rows in each coloumn..
        for (let y = 0; y < width_value; y++) {
            let unit = my_line.insertCell(y);
            unit.addEventListener('click', addEvent(unit));
        }
    }
}
//------------------------------------------------------------
// Your code goes here!
//activation of submit button..
$('#input_submit').click(function(click) {
    click.preventDefault();
    make_Grid();
});
