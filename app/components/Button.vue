<template>
    <div
        class="p-2 rounded-lg w-32 text-center cursor-pointer"
        :class="active
            ? 'bg-purple-500 text-purple-100'
            : 'bg-green-500 text-green-100'"
    >
        {{ message }}
    </div>
</template>

<script setup>
const props = defineProps({
    active: Boolean,
    message: String
});
</script>
