const menuLocation = location.href;
const menuItem = document.querySelectorAll( '.nav-item a' );
const mbMenuItem = document.querySelectorAll( '.wt-nav-item a' );
const menuLength = menuItem.length;
const mbMenuLength = mbMenuItem.length;

// Loop for desktop navigation
for( let i = 0; i<menuLength; i++ ){
    if( menuItem[i].href === menuLocation ){
        menuItem[i].classList.add( 'active-page' );
    }
}

// loop for mobile navigation
for( let i = 0; i<mbMenuLength; i++ ){
    if( mbMenuItem[i].href === menuLocation ){
        mbMenuItem[i].classList.add( 'active-page' );
    }
}

// Select Option Dropdown
// Select Dropdown
const selector = document.querySelector( '.wt-select-box' );
// selector.addEventListener('change', e => {
//     console.log('changed', e.target.value);
//   });
selector.addEventListener( 'mousedown', e =>{
    if( window.innerWidth >= 420 ){
        e.preventDefault();

        const select = selector.children[0];
        const deropdown = document.createElement( 'ul' );
        deropdown.className = 'selector-option';

        [...select.children].forEach(option =>{
            const deropdownOption = document.createElement( 'li' );
            deropdownOption.textContent = option.textContent;
            deropdownOption.addEventListener( 'mousedown', e=>{
                e.stopPropagation();
                select.value = option.value;
                selector.value = option.value;
                select.dispatchEvent( new Event( 'change' ) );
                selector.dispatchEvent( new Event( 'change' ) );
                deropdown.remove();
            } );
            deropdown.appendChild( deropdownOption );
        });
        selector.appendChild( deropdown );

        //handel click out
        document.addEventListener( 'click', e => {
            if( ! selector.contains(e.target) ){
                deropdown.remove();
            }
        } );
    }
} );

// Select box
const selected = document.querySelector( '.selected' );
const optionContainer = document.querySelector( '.option-container' );
const option = document.querySelectorAll( '.option' );
const selectVal = document.querySelector( '.select-val' );

selected.addEventListener( 'click', () => {
    optionContainer.classList.toggle( 'select-active' );
} );

option.forEach( o => {
    o.addEventListener( 'click', () => {
        selected.innerHTML = o.textContent;
        optionContainer.classList.remove( 'select-active' );
        selectVal.value = o.textContent;
    } );
} );
