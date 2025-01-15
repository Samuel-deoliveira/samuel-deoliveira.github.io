<template>
  <button
      @click="navigate"
      style="padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px;">
    <slot>Aller</slot>
  </button>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  props: {
    suiteUrl: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();

    function navigate() {
      router.push(`/${props.suiteUrl}`);
    }

    return { navigate };
  },
};
</script>