<template>
  <incidents-list v-if="incidents.length > 0" :incidents="incidents" :title="listTitle" />
</template>

<script>
import IncidentsList from '~/components/IncidentsList/IncidentsList.vue'
import useIncidents from '~/use/incidents'
import getSeoMetaData from '~/helpers/seo'

// temp fix while we're not using https://kazupon.github.io/vue-i18n/
const pluralize = (n, singular, plural) => {
  return `${n === 1 ? singular : plural}`
}

export default {
  setup() {
    const { getFilteredList } = useIncidents()
    return { getFilteredList }
  },
  components: {
    IncidentsList,
  },

  computed: {
    listTitle() {
      return `Showing
      ${this.incidents.length}
      ${pluralize(this.incidents.length, 'incident', 'incidents')}
      in all cities`
    },
    incidents() {
      return this.getFilteredList('')
    },
  },
  head() {
    return getSeoMetaData({
      title: 'A video archive of Police Abuses',
      text: '203 videos of Police Abuses',
      path: '',
    })
  },
}
</script>
