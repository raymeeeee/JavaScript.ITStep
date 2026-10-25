//TASK 1
document.addEventListener('DOMContentLoaded', function() {
    const aboutBtn = document.getElementById('aboutBtn');
    const modal = document.getElementById('aboutModal');
    const closeBtn = modal.querySelector('.close');
    const modalBody = modal.querySelector('.modal-body');
    
    aboutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        modal.classList.remove('fade');
        modal.style.display = 'block';
        document.body.classList.add('modal-open');

        fetch('download/about.txt')
            .then(response => {
                if (!response.ok) throw new Error('Network error');
                return response.text();
            })
            .then(html => {
                modalBody.innerHTML = html;
                
                const images = modalBody.querySelectorAll('img');
                images.forEach(img => {
                    if (img.src.includes('img/') && !img.src.includes(window.location.origin)) {
                        img.src = img.src.replace('img/', 'img/about/');
                    }
                });
            })
    });
    
    closeBtn.addEventListener('click', function() {
        modal.classList.add('fade');
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        modalBody.innerHTML = '';
    });
});


//TASK 2
document.addEventListener('DOMContentLoaded', function() {
    const serviceLinks = document.querySelectorAll('#service-tab .nav-link');
    const tabPanes = document.querySelectorAll('#service-type .tab-pane');
    const addToCartBtns = document.querySelectorAll('#service-type .btn-danger');
    
    serviceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            serviceLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const targetId = this.getAttribute('href');
            
            tabPanes.forEach(pane => {
                pane.classList.remove('show', 'active');
            });
            
            const targetPane = document.querySelector(targetId);
            if (targetPane) {
                targetPane.classList.add('show', 'active');
            }
            
            updateAddToCartButton(this, targetId);
        });
    });
    
    function updateAddToCartButton(link, targetId) {
        const priceSpan = link.querySelector('.badge-danger');
        const titleSpan = link.querySelector('span:not(.badge-danger)');
        
        const price = priceSpan ? priceSpan.textContent.replace('$', '') : '';
        const title = titleSpan ? titleSpan.textContent.trim() : '';
        
        const targetPane = document.querySelector(targetId);
        if (targetPane) {
            const addToCartBtn = targetPane.querySelector('.btn-danger');
            if (addToCartBtn) {
                addToCartBtn.setAttribute('data-price', price);
                addToCartBtn.setAttribute('data-title', title);
            }
        }
    }

    serviceLinks.forEach(link => {
        const targetId = link.getAttribute('href');
        updateAddToCartButton(link, targetId);
    });
});


//TASK 3
document.addEventListener('DOMContentLoaded', function() {

    let cartItems = [];
    const cartNumElement = document.getElementById('cartNum');
    const cartElement = document.getElementById('cart');
    const cartLink = document.getElementById('cartLink');
    const cartList = cartElement.querySelector('.list-group');
    
    cartLink.addEventListener('click', function(e) {
        e.preventDefault();
        cartElement.classList.toggle('show');
    });
    
    document.addEventListener('click', function(e) {
        if (!cartLink.contains(e.target) && !cartElement.contains(e.target)) {
            cartElement.classList.remove('show');
        }
    });
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-danger') && e.target.closest('.tab-pane')) {
            e.preventDefault();
            
            const price = parseFloat(e.target.getAttribute('data-price'));
            const title = e.target.getAttribute('data-title');
            
            cartItems.push({ title, price });
            
            updateCartCounter();
            updateCartContent();
            
            cartElement.classList.add('show');
        }
    });
    
    function updateCartCounter() {
        cartNumElement.textContent = cartItems.length;
    }
    
    function updateCartContent() {
        cartList.innerHTML = '';
        
        let total = 0;
        
        cartItems.forEach((item, index) => {
            total += item.price;
            
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `
                ${item.title}
                <span class="badge badge-danger badge-pill">$${item.price}</span>
            `;
            cartList.appendChild(li);
        });
        
        const totalLi = document.createElement('li');
        totalLi.className = 'bg-danger text-white list-group-item d-flex justify-content-between align-items-center';
        totalLi.innerHTML = `
            Final Price
            <span class="badge badge-pill">$${total.toFixed(2)}</span>
        `;
        cartList.appendChild(totalLi);
    }
    
    updateCartCounter();
    updateCartContent();
});