<template>
    <div class="container">
        <img src="../assets/logo.svg"/>
        <div class="info-container">
            <div class="city-container">
                <ph-map-pin size="22" color="var(--purple)" weight="fill" />
                <span>Florianópolis, SC</span>           
            </div>
            <div class="cart-container">
                <ph-shopping-cart size="22" color="var(--yellow-dark)" weight="fill" />
            </div>
        </div>
    </div>
</template> 

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 10rem
}

.info-container {
    display: flex;
    gap: 0.75rem;
}
.city-container {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: .5rem;
    border-radius: 6px;
    background-color: var(--purple-light);
}

.city-container span {
    font-family: 'Roboto', sans-serif;
    color: var(--purple-dark);
    font-size: 0.875rem;
}

.cart-container {
    background-color: var(--yellow-light);
    padding: .5rem;
    border-radius: 6px;
    display: flex;
}

</style>

<script>
import { PhMapPin, PhShoppingCart } from 'phosphor-vue'
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        PhMapPin, PhShoppingCart
    }
})
</script>
