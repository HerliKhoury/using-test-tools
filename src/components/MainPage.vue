<template>
    <div class="main-container">
        <div class="main-content">
            <h1>Main Page</h1>
            <div class="button-group">
                <button class="nav-btn" @click="$router.push('/page1')">Go to Page 1</button>
                <button class="nav-btn" @click="$router.push('/page2')">Go to Page 2</button>
                <button class="nav-btn" @click="$router.push('/page3')">Go to Page 3</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MainPage'
});
</script>

<style scoped>
.main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
}

.main-content {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
}

h1 {
    margin: 0 0 20px 0;
    font-size: 2rem;
    color: #333;
}

.button-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.nav-btn {
    padding: 0.8rem;
    background-color: #6e8efb;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

.nav-btn:hover {
    background-color: #5a78e0;
}
</style>