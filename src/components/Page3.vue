<template>
    <div class="page-container">
        <div class="page-content">
            <h2>Page 3</h2>
            <img src="../assets/wolf.svg" alt="Wolfy wolfy">
            <p>This is the content for Page 3</p>
            <button class="back-btn" @click="$router.push('/main')">Back to Main</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '../styling/global.css';

export default defineComponent({
    name: 'Page3'
});
</script>