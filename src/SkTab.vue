<template>
  <div>
      <el-table
        class="bueatyScroll"
        v-loading="loading"
        :data="tableData"
        style="width: 100%"
        :height="height"
        :max-height="maxHeight"
        :stripe="stripe"
        :border="border"
        :size="size"
        :fit="fit"
        :show-header="showHeader"
        :show-summary="showSummary"
        :sum-text="sumText"
        @selection-change="emitSelect"
      >
        <!-- 是否多选 -->
        <el-table-column v-if="selection" type="selection" width="55" align="center" />
        <!-- 列 -->
        <el-table-column v-for="(item,index) in tableHeader" :key="index"
          :label="item.label"
          :align="item.align || 'center'"
          :width="item.width"
          :fixed="item.fixed"
          :show-overflow-tooltip="item.showtooltip"
        >
          <template slot-scope="{row}">
            <!-- operation -->
            <el-switch v-if="item.type === 'switch'" v-model="row[item.prop]" @click="handleSwitch(row)" />
            <el-dropdown v-else-if="item.type === 'operation'" size="small" @command="handleCommand">
              <el-button type="primary" size="small">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item,index) in item.operationBtn" :key="index" v-show="typeof item.showRules === 'function' ? item.showRules(row) : true" :command="{operation: item.key || index, params: row}">{{item.label}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <!-- img -->
            <el-image v-else-if="item.type === 'image'" style="width: 50px; height: 50px;cursor: pointer;" flt="cover" :src="row[item.prop]" :preview-src-list="srcList" @click="preview(row[item.prop])" />
            <!-- tag标签 -->
            <el-tag effect="dark" v-else-if="item.type === 'tag'" :color="row.tagColor"> {{ row[item.prop] }} </el-tag>
            <!-- 可点击事件 -->
            <span v-else-if="item.type === 'link'" style="color: #8BD029; cursor: pointer;" @click="handleLink(row)">{{ row[item.prop] }}</span>
            <!-- 默认，文本 -->
            <span v-else>{{ row[item.prop] }}</span>
          </template>
        </el-table-column>
      </el-table>

  </div>
</template>

<script>
export default {
  name: 'sk-table',
  props: {
    loading: { type: Boolean, default: false },
    stripe: { type: Boolean, default: false },
    border: { type: Boolean, default: true },
    showHeader: { type: Boolean, default: true },
    showSummary: { type: Boolean, default: false }, // 是否在表尾显示合计行
    sumText: { type: String, default: '' }, // 合计行第一列的文本
    fit: { type: Boolean, default: true },
    selection: { type: Boolean, default: false },
    size: { validator: (value) => { return ['medium', 'small', 'mini'].indexOf(value) !== -1 } },
    height: {},
    maxHeight: {},
    tableData: { type: Array, required: true, default: () => { return [] } },
    tableHeader: { type: Array, required: true, default: () => { return [] } }

  },
  data () {
    return {
      srcList: []
    }
  },
  methods: {
    preview (url) {
      this.srcList = [url]
    },
    handleCommand (e) {
      this.$emit('hangleOperation', e)
    },
    handleLink (e) {
      this.$emit('handleLink', e)
    },
    emitSelect (e) {
      console.log(e)
      this.$emit('selection-change', e)
    }
  }
}
</script>

<style scoped>
.el-tag{
  border-color: transparent!important;
}
</style>
