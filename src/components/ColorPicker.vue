<template>
  <div class="color-picker">
    <ul class="swatches">
        <li
            :key="index"
            v-for="(swatch, index) in swatches"
            :style="{ background: `#${swatch}` }"
            class="swatch"
            :class="{ active: index === activeSwatch }"
            @click="activeSwatch = index"
        ></li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        swatches: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data(){
        return {
            activeSwatch: 0
        }
    }

}
</script>

<style>
</style>