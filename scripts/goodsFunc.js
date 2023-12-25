const goodsFunc = () => {
    const container = document.getElementById('products-container')

    const goodsArray = [
        {
            id: 0,
            title: 'Ролл угорь стандарт',
            description: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            price: 250,
            image: 'good-1.jpg'
        },
        {
            id: 1,
            title: 'Калифорния лосось стандарт',
            description: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            price: 350,
            image: 'good-2.jpg'
        },
        {
            id: 2,
            title: 'Окинава стандарт',
            description: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            price: 450,
            image: 'good-3.jpg'
        },
        {
            id: 3,
            title: 'Цезарь маки хl',
            description: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            price: 250,
            image: 'good-4.jpg'
        },
        {
            id: 4,
            title: 'Ясай маки стандарт 185 г',
            description: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            price: 250,
            image: 'good-5.jpg'
        },
        {
            id: 5,
            title: 'Ролл с креветкой стандарт',
            description: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            price: 550,
            image: 'good-6.jpg'
        }
    ]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center">Loading...</p>'
    }

    const renderGoods = (array) => {
        container.innerHTML = ''

        array.forEach(card => {
            container.insertAdjacentHTML('beforeend', `
                <div class="products-card">
                    <div class="products-card__image">
                        <img src="./img/${card.image}" alt="product-image">
                    </div>
                    <div class="products-card__description">
                        <div class="products-card__description-row">
                            <h5 class="products-card__description--name">
                                ${card.title}
                            </h5>
                        </div>
                        <div class="products-card__description-row">
                            <p class="products-card__description--text">
                                ${card.description}
                            </p>
                        </div>
                        <div class="products-card__description-row">
                            <div class="products-card__description-controls">
                                <button class="btn btn-primary">
                                    <span>В корзину</span>
                                    <img src="./img/icons/cart-white.svg" alt="cart">                                            
                                </button>
                                <span class="products-card__description-controls--price">${card.price} грн.</span>
                            </div>
                        </div>
                    </div>
                </div>
            `)
        });
    }

    if (container) {
        loading()
        
        setTimeout(() => {
            renderGoods(goodsArray)
        }, 1000)
    }
}

goodsFunc ()