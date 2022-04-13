<template>
    <tr>
        <th v-for="(header, index) in header"
            :key="index"
            :header="header">
            {{header.identifier}}
        </th>
    </tr>
</template>
<script>
export default {
  props: ['header']
}
</script>
