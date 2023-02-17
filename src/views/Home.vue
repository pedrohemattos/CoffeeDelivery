<script setup>
import { PhShoppingCart, PhPackage, PhTimer, PhCoffee } from 'phosphor-vue';
import CoffeeComponent from '../components/CoffeeComponent.vue';

</script>

<template>
    <div class="container">
        <div class="intro-container">
            <div>
                <div class="slogan-container">
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café quentinho onde estiver, a qualquer hora</p>
                </div>
                <ul>
                    <li> 
                        <div class="shopping-cart icon-container">
                            <ph-shopping-cart size="16" weight="fill" color="var(--white)"/>
                        </div>
                        Corrida simples e segura
                    </li>
                    <li>
                        <div class="package icon-container">
                            <ph-package size="16" weight="fill" color="var(--white)" /> 
                        </div>
                        Embalagem mantém o café intacto
                    </li>
                    <li>
                        <div class="timer icon-container">
                            <ph-timer size="16" weight="fill" color="var(--white)" />
                        </div>
                        Entrega rápida e rastreada
                    </li>
                    <li>
                        <div class="coffee icon-container">
                            <ph-coffee size="16" weight="fill" color="var(--white)" />
                        </div>
                        Café chega fresquinho até você
                    </li>
                </ul>
            </div>
            <div>
                <img src="../assets/couple-drinking-coffee.svg" class="couple-image" />
            </div>
        </div>
        <div class="menu-container">
            <h1>Nossos cafés</h1>
            <div>
                <div>
                    <CoffeeComponent />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.intro-container {
    padding: 5.75rem 10rem;
    display: flex;
    justify-content: space-between;
    background-image: url('../assets/background.svg');
}

.slogan-container {
    width: 588px;
    margin-bottom: 4.125rem;
}
.slogan-container h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: var(--base-title);
    margin-bottom: 1rem;
}

.slogan-container p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    line-height: 130%;
    color: var(--base-subtitle)
}

ul {
    list-style-type: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 130%;
    color: var(--base-text);
    display: flex;
    flex-wrap: wrap;
}

li {
    display: flex;
    align-items: center;
    gap: .75rem;
}

li:nth-child(odd) {
    margin-right: 2.5rem;
    width: 231px;
}

li:nth-child(-n + 2) {
    margin-bottom: 1.25rem;
}

.icon-container {
    padding: 8px;
    border-radius: 100%;
    display: flex;
}
.shopping-cart{
    background-color: var(--yellow-dark);
}

.package {
    background-color: var(--base-text);
}

.timer {
    background-color: var(--yellow);
}

.coffee {
    background-color: var(--purple)
}

.couple-image {
    width: 476px;
}

.menu-container {
    padding: 2rem 10rem;
}

.menu-container h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    color: var(--base-subtitle);
    margin-bottom: 3.375rem;
}

</style>