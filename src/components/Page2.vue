<template>
    <div class="page-container">
        <div class="page-content">
            <h2>Page 2</h2>
            <img src="../assets/warlus.svg" alt="Tusly dusky">
            <p>This is the content for Page 2</p>
            <button class="back-btn" @click="$router.push('/main')">Back to Main</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '../styling/global.css';

export default defineComponent({
    name: 'Page2'
});
</script>