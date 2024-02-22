// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
});

// Scroll To Top

const scroll = document.querySelector('.scroll-top');
scroll.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});

// Match select option

optionarr1 = ['Margarita Pizza','Veg Loaded','Cheese Lover','Veggie Paneer','Forest Fresh','Capsicum Loaded','Corn Cheese','Heaven Cheese','Joe\'s Pizza','Garlic Twist','Farm House','Spicy Tongue'];

optionarr2 = ['Chicken Loaded','BBQ Chicken','Peri Peri Chicken','Chilli Chicken','Chicken Cheese','Loaded Chicken Jeca','Spicy Chicken','Garlic Chicken','Buffalo Chicken','Chicken Pesto','Tandoori Chicken','Cajun Chicken'];

update = () => {
    var select1 = document.querySelector('#select1').value;
    var select2 = document.querySelector('#select2');
    select2.innerHTML = '';

    switch (select1) {
        case 'selectcategory':
            addoption(select2,'Choose Category First');
            break;
        case 'veg':
            optionarr1.forEach(function(optiontext,index) {
                addoption(select2,optiontext,'suboption'+(index+1));
            });
            break;
        case 'nonveg':
            optionarr2.forEach(function(optiontext,index) {
                addoption(select2,optiontext,'suboption'+(index+1));
            });
            break;
        default:
         break;
    }       
}

addoption = (selectelement,text,value) => {
    var option = document.createElement('option');
    option.text = text;
    option.value = value;
    selectelement.add(option);
}