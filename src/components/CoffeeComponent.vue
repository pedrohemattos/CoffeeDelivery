<script setup>
import { PhShoppingCart, PhPlus, PhMinus } from 'phosphor-vue';




</script>

<template>
    <div class="container">
        <img src="../assets/coffee1.svg"/>
        <div class="coffeeType-container">
            <span>Tradicional</span>
        </div>
        <h1>Expresso Tradicional</h1>
        <p>O tradicional café feito com água quente e grãos moídos</p>
        <div class="actions-container">
            <div class="price-container">
                <span class="money-sign">R$</span>
                <span class="price">9,90</span>
            </div>
            <div class="qtd-cart-container">
                <div class="qtd-container">
                    <ph-minus size="14" color="var(--purple-dark)" weight="bold" class="icon"/>
                    <span>1</span>
                    <ph-plus size="14" color="var(--purple-dark)" weight="bold" class="icon"/>
                </div>

                <div class="cart-container">
                    <ph-shopping-cart size="20" color="var(--white)" weight="fill"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        width: 16rem;
        background-color: var(--base-card);
        border-radius: 6px 36px;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        margin-top: -1.25rem;
        margin-bottom: .75rem;
    }

    .coffeeType-container {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: .875rem;
        line-height: 130%;
        color: var(--yellow-dark);
        background-color: var(--yellow-light);
        padding: .5rem .875rem;
        border-radius: 100px;
        margin-bottom: 1rem;
    }

    h1 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.25rem;
        line-height: 130%;
        color: var(--base-subtitle);
        text-align: center;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        line-height: 130%;
        color: var(--base-label);
        text-align: center;
        padding: .5rem 1.125rem 2rem;
    }

    .actions-container {
        display: flex;
        align-items: center;
        padding-bottom: 1.125rem;
        gap: 1.5rem;
    }
    
    .money-sign {
        font-family: 'Roboto', sans-serif;
        font-size: .875rem;
        line-height: 130%;
        color: var(--base-text);
        margin-right: .25rem;
    }

    .price {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.5rem;
        font-weight: 800;
        line-height: 130%;
        color: var(--base-text);
    }
    .qtd-cart-container {
        display: flex;
        align-items: center;
        gap: .75rem;
    }
    .qtd-container {
        display: flex;
        align-items: center;
        gap: .35rem;

        background-color: var(--base-button);
        padding: .5rem;
        border-radius: 6px;
    }

    .icon {
        cursor: pointer;
    }
    .qtd-container span {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        line-height: 130%;
        color: var(--base-title);
    }

    .cart-container {
        padding: .5rem;
        border-radius: 6px;
        background-color: var(--purple-dark);
        display: flex;
        cursor: pointer;
    }


</style>