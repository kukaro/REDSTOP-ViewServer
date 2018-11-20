<template>
  <div class="rs-tb-aside-gblock-table">
    <table>
      <rs-tb-aside-gblock-table-header
        :initTableHeaderList="Object.keys(tableValue[0])"></rs-tb-aside-gblock-table-header>
      <rs-tb-aside-gblock-table-body :initTableValue="tableValue"></rs-tb-aside-gblock-table-body>
    </table>
  </div>
</template>

<script>
/*eslint-disable */
  import RsTbAsideGblockTableHeader from './RsTbAsideGblockTable/RsTbAsideGblockTableHeader'
  import RsTbAsideGblockTableBody from './RsTbAsideGblockTable/RsTbAsideGblockTableBody'

  export default {
    props: ['initValue'],
    name: 'rs-tb-aside-gblock-table',
    created: function () {
      // console.log('create aside gblock table')
      let treeDataSerial = this.$store.state.app.treeDataSerial
      this.value = this.initValue
      // console.log(this.value)
      let tmpTableValue = []

      if (this.value.type === 'case') {
        for (let atom of treeDataSerial) {
          if (atom.parentBlockId === this.value.id) {
            let successCount = '0(0%)'
            let failCount = '0(0%)'
            if (Math.ceil(atom.status / 100) === 2 || Math.ceil(atom.status / 100) === 3) {
              successCount = '1(100%)'
              failCount = '0(0%)'
            } else if (Math.ceil(atom.status / 100) === 4 || Math.ceil(atom.status / 100) === 5) {
              successCount = '0(0%)'
              failCount = '100(100%)'
            }

            let tmp = {
              'Name': atom.url,
              'URLCount': 1,
              'SuccessCount': successCount,
              'FailCount': failCount
            }
            tmpTableValue.push(tmp)
          }
        }
      } else if (this.value.type === 'group') {
        for (let atom of this.value.children) {
          // console.log('watch group')
          // console.log(this.value.children)
          // console.log(atom)
          let successCount = atom.urlCount+'(100%)'
          let failCount = '0(0%)'
          let tmp = {
            'Name': atom.name,
            'URLCount': atom.urlCount,
            'SuccessCount': successCount,
            'FailCount': failCount
          }
          tmpTableValue.push(tmp)
        }
      }
      this.tableValue = tmpTableValue
    },
    watch: {
      initValue: function () {
        console.log('watch aside gblock table')
        let treeDataSerial = this.$store.state.app.treeDataSerial
        this.value = this.initValue
        console.log(this.value)
        let tmpTableValue = []

        if (this.value.type === 'case') {
          for (let atom of treeDataSerial) {
            if (atom.parentBlockId === this.value.id) {
              let successCount = '0(0%)'
              let failCount = '0(0%)'
              if (Math.ceil(atom.status / 100) === 2 || Math.ceil(atom.status / 100) === 3) {
                successCount = '1(100%)'
                failCount = '0(0%)'
              } else if (Math.ceil(atom.status / 100) === 4 || Math.ceil(atom.status / 100) === 5) {
                successCount = '0(0%)'
                failCount = '100(100%)'
              }

              let tmp = {
                'Name': atom.url,
                'URLCount': 1,
                'SuccessCount': successCount,
                'FailCount': failCount
              }
              tmpTableValue.push(tmp)
            }
          }
        } else if (this.value.type === 'group') {
          for (let atom of this.value.children) {
            console.log('watch group')
            console.log(this.value.children)
            console.log(atom)
            let successCount = atom.urlCount+'(100%)'
            let failCount = '0(0%)'
            let tmp = {
              'Name': atom.name,
              'URLCount': atom.urlCount,
              'SuccessCount': successCount,
              'FailCount': failCount
            }
            tmpTableValue.push(tmp)
          }
        }
        this.tableValue = tmpTableValue
      }
    },
    components: {RsTbAsideGblockTableBody, RsTbAsideGblockTableHeader},
    data: function () {
      return {
        value: this.initValue,
        tableValue: [
          {
            'Name': 'Sign Up',
            'URLCount': '10',
            'SuccessCount': '10(100%)',
            'FailCount': '0(0%)'
          },
          {
            'Name': 'Verify Email',
            'URLCount': '6',
            'SuccessCount': '5(83%)',
            'FailCount': '1(17%)'
          },
          {
            'Name': 'Sign in',
            'URLCount': '22',
            'SuccessCount': '11(50%)',
            'FailCount': '11(50%)'
          },
          {
            'Name': 'Sign Out',
            'URLCount': '100',
            'SuccessCount': '99(99%)',
            'FailCount': '1(1%)'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  table {
    width: 100%;
    font-size: 5px;
  }
</style>
