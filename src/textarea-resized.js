export default {
  template: `
    <span class="component-textarea-resized">
      <div class="textarea-container">
        <div :class="field_class" v-html="textContent + '<br>'"></div>
        <textarea
          ref="textarea"
          :id="field_id"
          :class="field_class"
          :name="field_name"
          :rows="rows"
          :disabled="disabled"
          :readonly="readonly"
          :placeholder="placeholder"
          v-model="textContent"></textarea>
      </div>
    </span>
  `,
  props: {
    field_id: {
      type: String,
      default: 'textarea-resized'
    },
    field_class: {
      type: String,
      default: ''
    },
    field_name: {
      type: String,
      default: ''
    },
    rows: {
      type: Number,
      default: 3
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  components: {},
  data() {
    const context = this;
    return {
      textContent: context.$props.value
    }
  },
  mounted() {
    const context = this
  },
  methods: {}
}

const componentStyle = `
<style type="text/css">
  .component-textarea-resized .textarea-container {
    display: grid;
  }
  .component-textarea-resized .textarea-container > div {
    white-space: pre-line;
    visibility: hidden;
  }
  .component-textarea-resized .textarea-container > textarea {
    resize: none;
    overflow: hidden;
  }
  .component-textarea-resized .textarea-container > textarea,
  .component-textarea-resized .textarea-container > div {
    font: inherit;
    grid-area: 1 / 1 / 2 / 2;
  }
</style>`
document.head.innerHTML += componentStyle;