const restsFunc = () => {
    const container = document.getElementById('rests-container')

    const restArray = [
        {
            id: 0,
            title: 'Пицца плюс',
            time: 50,
            rating: 4.5,
            price: 250,
            type: 'Пицца',
            image: 'rest-1.jpg'
        },
        {
            id: 1,
            title: 'Тануки',
            time: 50,
            rating: 4.5,
            price: 100,
            type: 'Пицца',
            image: 'rest-2.jpg'
        },
        {
            id: 2,
            title: 'FoodBand',
            time: 50,
            rating: 4.5,
            price: 500,
            type: 'Пицца',
            image: 'rest-3.jpg'
        },
        {
            id: 3,
            title: 'Жадина-пицца',
            time: 50,
            rating: 4.5,
            price: 100,
            type: 'Пицца',
            image: 'rest-4.jpg'
        },
        {
            id: 4,
            title: 'Точка еды',
            time: 50,
            rating: 4.5,
            price: 90,
            type: 'Пицца',
            image: 'rest-5.jpg'
        },
        {
            id: 5,
            title: 'PizzaBurger',
            time: 50,
            rating: 4.5,
            price: 300,
            type: 'Пицца',
            image: 'rest-6.jpg'
        }
    ]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center">Loading...</p>'
    }

    const renderRests = (array) => {
        container.innerHTML = ''

        array.forEach(card => {
            container.insertAdjacentHTML('beforeend', `
                <a href="./goods.html?id=${card.id}" class="products-card">
                    <div class="products-card__image">
                        <img src="./img/${card.image}" alt="rest-1">
                    </div>
                    <div class="products-card__description">
                        <div class="products-card__description-row">
                            <h4 class="products-card__description--title">${card.title}</h4>
                            <div class="products-card__description--badge">${card.time} мин</div>
                        </div>
                        <div class="products-card__description-info">
                            <div class="products-card__description-info--raiting">
                                <img src="./img/icons/star.svg" alt="star">
                                ${card.rating}
                            </div>
                            <div class="products-card__description-info--price">
                                От ${card.price} грн.
                            </div>
                            <div class="products-card__description-info--group">
                                ${card.type}
                            </div>
                        </div>
                    </div>
                </a>
            `)
        });
    }

    if (container) {
        loading()
        
        setTimeout(() => {
            renderRests(restArray)
        }, 1000)
    }
}

restsFunc ()